from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Optional

# config
from settings.db_config import get_db

# schemas
from schemas import member_type as mty

# services
from services.member_type import m_type

router = APIRouter(
    prefix="/member_types",
    tags=["Member Types"],
    responses={200:{'description':'Ok'},201:{'description':'created'},400: {"description": "Bad Request"},404: {"description": "Not found"}}
)

@router.get("",
summary="return a list of member types",
response_model=List[mty.MemberType],
response_description="member type list",
status_code=200
)
def all_mtypes(db:Session=Depends(get_db)):
    return m_type.all_member_types(db=db)


@router.get("/{id}",
summary="a membertype by id",
response_model=mty.MemberType,
response_description="member type",
status_code=200
)
def member_type(id:int, db:Session=Depends(get_db)):
    return m_type.member_type_by_id(id, db)


@router.post("",
summary="create a member type",
response_model=mty.MemberType,
response_description="member type",
status_code=200
)
def create(payload:mty.CreateMemberType, db:Session=Depends(get_db)):
    return m_type.create_member_type(payload, db)