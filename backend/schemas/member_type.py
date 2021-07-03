from pydantic import BaseModel
from datetime import datetime
from typing import List, Any, Optional

from .member import Member, SimpleMember

class BaseMemberType(BaseModel):
    name: str
    description: str
    fee: float

class CreateMemberType(BaseMemberType):
    pass


class Type(BaseModel):
    """Document member type model"""
    id: int
    name: str
    description: str

    class Config:
        orm_mode = True

class MemberDetail(BaseModel):
    member: SimpleMember
    member_type: Type

    class Config:
        orm_mode = True

class MemberType(BaseMemberType):
    id: int
    created_at: Optional[datetime]
    update_at: Optional[datetime]
    members: List[MemberDetail]

    class Config:
        orm_mode = True