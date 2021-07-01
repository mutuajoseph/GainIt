from pydantic import BaseModel
from datetime import datetime
from typing import List, Any, Optional

from .member import Member

class BaseMemberType(BaseModel):
    name: str
    description: str
    fee: float

class CreateMemberType(BaseMemberType):
    pass

class MemberType(BaseMemberType):
    id: int
    created_at: Optional[datetime]
    update_at: Optional[datetime]
    members: List[Member]

    class Config:
        orm_mode = True