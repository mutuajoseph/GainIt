from pydantic import BaseModel
from datetime import datetime
from typing import List, Any, Optional

"""
id = Column(Integer, primary_key=True, index=True)
id_number = Column(Integer, unique=True)
first_name = Column(String, nullable=False)
last_name = Column(String, nullable=False)
email = Column(String, nullable=True)
phone_number = Column(String, nullable=False)
gender = Column(String, nullable=True)
created_at = Column(DateTime(timezone=True), server_default=func.now())
update_at = Column(DateTime(timezone=True), onupdate=func.now())

subscriptions = relationship("MemberMemberType", back_populates="member", cascade="all, delete, delete-orphan")
invoices = relationship("Invoices",back_populates="member",cascade="all, delete, delete-orphan")
attendances = relationship("Attendance", back_populates="member", cascade="all, delete, delete-orphan")
"""

class BaseMember(BaseModel):
    id_number: int
    first_name: str
    last_name: str
    phone_number: str

class CreateMember(BaseMember):
    pass

class Member(BaseMember):
    id: int
    created_at: Optional[datetime]
    update_at: Optional[datetime]

    class Config:
        orm_mode = True