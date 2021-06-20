from pydantic import BaseModel
from typing import List, Optional, Any
from datetime import datetime

class InstructorBase(BaseModel):
    instructor_name: str
    phone_number: str
    address: str
    email: str

class InstructorPost(InstructorBase):
    pass

class Instructor(InstructorBase):
    id: int
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
