from pydantic import BaseModel,Field
from typing import List, Optional, Any
from datetime import datetime

class UserBase(BaseModel):
    firstname: str
    lastname: str
    email: str

class UserLogin(BaseModel):
    username: str
    password: str

class UserPost(UserBase):
    password: str

class User(UserBase):
    id: int
    created_at: Optional[datetime]

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: User

class TokenData(BaseModel):
    email: Optional[str] = None
