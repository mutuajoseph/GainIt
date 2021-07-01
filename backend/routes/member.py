import re
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Optional

# config
from settings.db_config import get_db

# schema
from schemas.member import CreateMember, Member

# model
from models.member import Member as MemberModel

# services
from services.member import member_service

router = APIRouter(
    prefix="/members",
    tags=["Members"],
    responses={200:{'description':'Ok'},201:{'description':'created'},400: {"description": "Bad Request"},404: {"description": "Not found"}}
)

@router.get("",
summary="return a list of members",
response_model=List[Member],
response_description="members list",
status_code=200
)
def all_members(db:Session=Depends(get_db)):
    return member_service.all_members(db)

@router.get("/{id}",
summary="return member by id",
response_model=Member,
response_description="member",
status_code=200
)
def member_by_id(id:int, db:Session=Depends(get_db)):
    return member_service.member_by_id(id, db)


@router.post("",
summary="create a member",
response_model=Member,
response_description="member",
status_code=200
)
def create_member(payload: CreateMember, db:Session=Depends(get_db)):
    return member_service.create_member(payload, db)