from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from settings.base_config import settings

# create an engine 
engine = create_engine(settings.SQLALCHEMY_DATABASE_URI, connect_args={"options": "-c timezone=utc"})

"""
To start talking to our database, the ORM's handle to the database is the Session
"""

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

dbsession = SessionLocal()
"""
Using the Declarative system, we can create classes that include directives to describe the actual database table they will map to
A class using Declarative at a minimum needs a __tablename__ attribute and atleast one Column
"""

Base = declarative_base()

"""
Our dependency will create a new SQLAlchemy SessionLocal that will be used in a single request, 
and then close it once the request is finished.
"""

def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()
