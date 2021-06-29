from sqlalchemy import String, Integer, Column, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import Session
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import Float
from settings.db_config import Base
from sqlalchemy import func

class Invoice(Base):
    __tablename__ = "invoices"
    id = Column(Integer, primary_key=True, index=True)
    invoice_date = Column(DateTime(timezone=True))
    amount = Column(Float, nullable=False)
    member_id = Column(Integer, ForeignKey('members.id'))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    update_at = Column(DateTime(timezone=True), onupdate=func.now())

    member = relationship("Members", back_populates="invoices")
    payments = relationship("Payments", back_populates="invoice", cascade="all, delete, delete-orphan")

    def save(self, db: Session):
        db.add(self)
        db.commit()
        return s