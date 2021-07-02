from sqlalchemy import String, Integer, Column, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import Session
from sqlalchemy.sql.expression import null
from settings.db_config import Base
from sqlalchemy import func

class Attendance(Base):
    __tablename__  = "attendances"
    id = Column(Integer, primary_key=True, index=True)
    time_in = Column(DateTime(timezone=True), nullable=True)
    time_out = Column(DateTime(timezone=True), nullable=True)
    member_id = Column(Integer, ForeignKey('members.id'))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    update_at = Column(DateTime(timezone=True), onupdate=func.now())

    member = relationship("MemberModel", back_populates="attendances")

    def save(self, db: Session):
        db.add(self)
        db.commit()
        return self