from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from settings.db_config import get_db
from services.user import UserService
from schemas import user
from utils.oauth2 import get_current_user

router = APIRouter()

@router.post('/register',
    summary='Add a new user',
    response_model = user.User,
    response_description = 'a new user',
    status_code = 201
)
async def create_new_user(userPayload: user.UserPost, db: Session() = Depends(get_db)):
    return UserService.register_user(user=userPayload, db=db)

@router.post('/login',
    summary='Login to get access token',
    response_model = user.Token,
    response_description = 'a new user',
    status_code = 200
)
async def login(userPayload: OAuth2PasswordRequestForm = Depends(), db: Session() = Depends(get_db)):
    return UserService.authenticate_user(user=userPayload, db=db)

@router.get('/current_user',
    summary='Currently logged in user',
    response_model = user.Token,
    response_description = 'a new user',
    status_code = 200
)
async def get_current_logged_user(get_current_user: user.User = Depends(get_current_user)):
    pass