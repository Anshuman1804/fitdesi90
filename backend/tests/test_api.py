"""Backend API tests for fit funnel app: leads + admin."""
import os
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://transform-body-45.preview.emergentagent.com').rstrip('/')
ADMIN_PASSWORD = "admin123"

# ---------- Health ----------
def test_root():
    r = requests.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "message" in r.json()

# ---------- Leads ----------
def test_create_lead_success():
    payload = {"name": "TEST_User", "age": 28, "goal": "Fat Loss", "weight": 75.5, "whatsapp": "919876543210"}
    r = requests.post(f"{BASE_URL}/api/leads", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == "TEST_User"
    assert data["age"] == 28
    assert data["goal"] == "Fat Loss"
    assert data["weight"] == 75.5
    assert data["whatsapp"] == "919876543210"
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data

def test_create_lead_validation_missing_field():
    r = requests.post(f"{BASE_URL}/api/leads", json={"name": "X"})
    assert r.status_code == 422

def test_create_lead_invalid_age_type():
    r = requests.post(f"{BASE_URL}/api/leads", json={
        "name": "TEST_X", "age": "abc", "goal": "Fat Loss", "weight": 70, "whatsapp": "9198"
    })
    assert r.status_code == 422

# ---------- Admin Login ----------
def test_admin_login_success():
    r = requests.post(f"{BASE_URL}/api/admin/login", json={"password": ADMIN_PASSWORD})
    assert r.status_code == 200
    data = r.json()
    assert data.get("success") is True
    assert "token" in data

def test_admin_login_wrong_password():
    r = requests.post(f"{BASE_URL}/api/admin/login", json={"password": "wrong"})
    assert r.status_code == 401

# ---------- Admin Leads ----------
def test_admin_leads_unauthorized():
    r = requests.get(f"{BASE_URL}/api/admin/leads")
    assert r.status_code == 401

def test_admin_leads_wrong_password():
    r = requests.get(f"{BASE_URL}/api/admin/leads", headers={"x-admin-password": "wrong"})
    assert r.status_code == 401

def test_admin_leads_success_and_persistence():
    # Create a lead
    payload = {"name": "TEST_Persist", "age": 30, "goal": "Muscle Gain", "weight": 80, "whatsapp": "919999999999"}
    cr = requests.post(f"{BASE_URL}/api/leads", json=payload)
    assert cr.status_code == 200
    created_id = cr.json()["id"]

    # Fetch from admin
    r = requests.get(f"{BASE_URL}/api/admin/leads", headers={"x-admin-password": ADMIN_PASSWORD})
    assert r.status_code == 200
    leads = r.json()
    assert isinstance(leads, list)
    assert any(l["id"] == created_id and l["name"] == "TEST_Persist" for l in leads)
    # Validate no _id leak
    for l in leads:
        assert "_id" not in l
