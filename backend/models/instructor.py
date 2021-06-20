from sqlalchemy import String, Integer, Column, DateTime
from settings.db_config import Base
from sqlalchemy import func

class Instructor(Base):

    __tablename__ = "instructors"
    id = Column(Integer, primary_key=True, nullable=False)
    instructor_name = Column(String, nullable=False)
    phone_number = Column(String, nullable=False, unique=True)
    address = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    created_at = Column(DateTime(timezone=True), default=func.now(), nullable=False)