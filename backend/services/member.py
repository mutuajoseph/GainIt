import uuid
from fastapi import HTTPException
from sqlalchemy.orm import Session
from typing import List, Union

# import session
from settings.db_config import dbsession

# models
from models.member import Member as MemberModel

# schemas
from schemas.member import CreateMember, Member

class MemberService:
    
    def all_members(self, db:Session):
        records: List(MemberModel) = MemberModel.fetch_all(db)
        return records

    def member_by_id(self, id:int, db:Session):
        if not MemberModel.check_id_exist(id, db):
            raise HTTPException(status_code=404, detail="id does not exist")
        else:
            return MemberModel.get_member_by_id(id, db)

    def create_member(self, payload: CreateMember, db:Session):
        # check member exists
        if MemberModel.check_member_exists(id_no=payload.id_number, db=db):
            raise HTTPException(status_code=400, detail="id number already exists")
        else:
            try:
                with dbsession.begin():
                    record = MemberModel(
                        id_number=payload.id_number,
                        first_name= payload.first_name,
                        last_name = payload.last_name,
                        phone_number = payload.phone_number,
                    )
                    # save
                    r = record.save(db)
                return r
            except Exception:
                dbsession.rollback()
                raise HTTPException(status_code=500, detail="error while attempting to save record, try again later")




member_service = MemberService()