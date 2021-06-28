from sqlalchemy import String, Integer, Column, DateTime
from settings.db_config import Base
from sqlalchemy import func

class User(Base):

    __tablename__ = "users"
    id = Column(Integer, primary_key=True, nullable=False)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    email = Column(String, unique=True,nullable=False)
    password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), default=func.now(), nullable=False)