from sqlalchemy import String, Integer, Column, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import Session
from settings.db_config import Base
from sqlalchemy import func

class Member(Base):
    __tablename__ = "members"
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

    def save(self, db: Session):
        db.add(self)
        db.commit()
        return self
