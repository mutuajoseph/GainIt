from re import T
from sqlalchemy import String, Integer, Column, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import Session
from sqlalchemy.sql.expression import update
from sqlalchemy.sql.functions import func
from sqlalchemy.sql.sqltypes import Float
from settings.db_config import Base


class MemberType(Base):
    __tablename__ = "member_types"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    fee = Column(Float, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    update_at = Column(DateTime(timezone=True), onupdate=func.now())

    # members = relationship("MemberMemberType", backref="member_type", cascade="all, delete, delete-orphan")

    def save(self, db: Session):
        db.add(self)
        db.commit()
        return self

    @classmethod
    def fetch_all(cls, db:Session):
        return db.query(cls).all()
    

    @classmethod
    def check_id_exists(cls, id:int, db:Session):
        record = db.query(cls).filter(cls.id == id).first()
        if record:
            return True
        else:
            return False

    @classmethod
    def get_by_id(cls, id:int, db:Session):
        return db.query(cls).filter(cls.id == id).first()

    @classmethod
    def check_member_type_exists(cls, type:str, db:Session):
        record = db.query(cls).filter(cls.name == type).first()
        if record:
            return True
        else:
            return False