from sqlalchemy import String, Integer, Column, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import Session
from sqlalchemy.sql.sqltypes import Boolean
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

    # subscriptions = relationship("MemberMemberType", back_populates="member", cascade="all, delete, delete-orphan")
    # invoices = relationship("Invoices",back_populates="member",cascade="all, delete, delete-orphan")
    # attendances = relationship("Attendance", back_populates="member", cascade="all, delete, delete-orphan")

    def save(self, db: Session):
        db.add(self)
        db.commit()
        return self

    @classmethod
    def fetch_all(cls, db:Session):
        return db.query(cls).all()

    @classmethod
    def check_member_exists(cls, id_no:int, db:Session):
        record = db.query(cls).filter(cls.id_number == id_no).first()
        if record:
            return True
        else:
            return False

    @classmethod
    def check_id_exist(cls, id:int, db:Session):
        record = db.query(cls).filter(cls.id == id).first()
        if record:
            return True
        else:
            return False

    @classmethod
    def get_member_by_id(cls, id:int, db:Session):
        return db.query(cls).filter(cls.id == id).first()
