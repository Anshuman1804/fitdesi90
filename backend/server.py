from fastapi import FastAPI, APIRouter, HTTPException, Header
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Admin password (for demo). In production use proper auth.
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'admin123')

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class LeadCreate(BaseModel):
    name: str
    age: int
    goal: str  # "Fat Loss" or "Muscle Gain"
    weight: float
    whatsapp: str


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    age: int
    goal: str
    weight: float
    whatsapp: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class AdminLogin(BaseModel):
    password: str


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Fit Funnel API"}


@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.leads.insert_one(doc)
    return lead


@api_router.post("/admin/login")
async def admin_login(payload: AdminLogin):
    if payload.password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid password")
    return {"success": True, "token": ADMIN_PASSWORD}


@api_router.get("/admin/leads", response_model=List[Lead])
async def list_leads(x_admin_password: Optional[str] = Header(default=None)):
    if x_admin_password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")
    leads = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for lead in leads:
        if isinstance(lead.get('created_at'), str):
            lead['created_at'] = datetime.fromisoformat(lead['created_at'])
    return leads


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
