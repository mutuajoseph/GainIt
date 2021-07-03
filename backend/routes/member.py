from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Optional

# config
from settings.db_config import get_db

# schema
from schemas.member import CreateMember, Member, SubscribeMember
from schemas.message import Message


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


@router.post("/{member_id}/subscribe/{member_type_id}",
summary="subscribe member to a subscription type",
response_model=Message,
response_description="member",
status_code=200
)
def subscribe_member(member_id:int, member_type_id:int,db:Session=Depends(get_db)):
    return member_service.subscribe_member(member_id=member_id, member_type_id=member_type_id, db=db)