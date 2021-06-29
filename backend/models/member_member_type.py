from sqlalchemy import String, Integer, Column, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import Session
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import Boolean
from settings.db_config import Base
from sqlalchemy import func

class MemberMemberType(Base):
    __tablename__ = "member_member_type"
    id =Column(Integer, primary_key=True, index=True)
    member_id = Column(Integer, ForeignKey('members.id'), nullable=False)
    member_type_id = Column(Integer, ForeignKey('member_types.id'), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    update_at = Column(DateTime(timezone=True), onupdate=func.now())

    member = relationship("Member", back_populates="subscriptions")

    def save(self, db:Session):
        db.add(self)
        db.commit()
        return self