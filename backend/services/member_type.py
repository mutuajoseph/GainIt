import uuid
from fastapi import HTTPException
from sqlalchemy.orm import Session
from typing import List, Union

# session
from settings.db_config import dbsession

# models
from models.member_type import MemberType as MemberTypeModel

# schema
from schemas.member_type import CreateMemberType, MemberType

class MemberTypeService:

    def all_member_types(self, db:Session) -> list:
        records: List[MemberType] = MemberTypeModel.fetch_all(db)
        return records

    def member_type_by_id(self, id:int, db:Session):
        if not MemberTypeModel.check_id_exists(id, db):
            raise HTTPException(status_code=400, detail="no id matches the id")
        else:
            return MemberTypeModel.get_by_id(id, db)

    def create_member_type(self, payload: CreateMemberType, db:Session):
        # check type exists
        if MemberTypeModel.check_member_type_exists(type=payload.name, db=db):
            raise HTTPException(status_code=400, detail="name provided already exists")
        else:

            try:
                with dbsession.begin():
                    record = MemberTypeModel(
                    name=payload.name,
                    description=payload.description,
                    fee=payload.fee
                    )

                    r = record.save(db)

                return r
            except Exception as e:
                # print("e here",e)
                dbsession.rollback()
                raise HTTPException(status_code=500, detail="error while attempting to save record, try again later")


# create an obj
m_type = MemberTypeService()