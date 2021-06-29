from sqlalchemy import String, Integer, Column, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import Session
from sqlalchemy.sql.expression import null
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import Float
from settings.db_config import Base
from sqlalchemy import func

class Payments(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True, index=True)
    payment_mode = Column(String, nullable=False)
    reference_number = Column(String, nullable=False)
    amount = Column(Float, nullable=False)
    invoice_id = Column(Integer, ForeignKey('invoices.id'))

    invoice = relationship("Invoice", back_populates="payments")

    def save(self, db: Session):
        db.add(self)
        db.commit()
        return s
