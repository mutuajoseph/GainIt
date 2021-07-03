import uuid
from fastapi import HTTPException
from sqlalchemy.orm import Session
from typing import List, Union

# import session
from settings.db_config import dbsession

# models
from models.member import MemberModel
from models.member_type import MemberType
from models.member_member_type import MemberMemberType

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

    def subscribe_member(self, member_id:int, member_type_id:int, db:Session):
        # check member id exists
        if not MemberModel.check_id_exist(id=member_id, db=db):
            raise HTTPException(status_code=404, detail="member id does not exist")

        if not MemberType.check_id_exists(id=member_type_id, db=db):
            raise HTTPException(status_code=404, detail="member type id does not exist")

        try:
            with dbsession.begin():
                record = MemberMemberType(
                    member_id = member_id,
                    member_type_id = member_type_id
                )
                r = record.save(db)
            return {"message": "member successfully subscribed"}
        except Exception:
            dbsession.rollback()



member_service = MemberService()