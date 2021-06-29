from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from settings.db_config import get_db
from utils.oauth2 import get_current_user
from typing import List


router = APIRouter()

