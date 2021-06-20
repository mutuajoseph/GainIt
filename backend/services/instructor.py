from os import stat
from fastapi import HTTPException
from sqlalchemy.orm import Session

from models.instructor import Instructor
from schemas import instructor

class InstructorService:

    @staticmethod
    def get_all_instructors(db: Session):
        """Fetch all instructors"""
        return db.query(Instructor).all()

    @staticmethod
    def get_a_single_instructor(instructor_id: int, db: Session):
        """Fetch a single instructor that matches the given id"""
        the_instructor = db.query(Instructor).filter(Instructor.id == instructor_id).first()

        if not the_instructor:
            raise HTTPException(status_code=404, detail="Instructor does not exist")
        
        return the_instructor

    @staticmethod
    def add_a_new_instructor(instructor: instructor.InstructorPost, db: Session):
        """adds a new instructors information to the db"""
        the_instructor = db.query(Instructor).filter(Instructor.email == instructor.email).first()

        if the_instructor:
            raise HTTPException(status_code=400, detail="Instructor already exists")

        new_instructor = Instructor(
            instructor_name = instructor.instructor_name,
            phone_number = instructor.phone_number,
            address = instructor.address,
            email = instructor.email
        )

        db.add(new_instructor)
        db.commit()
        db.refresh(new_instructor)

        return new_instructor

    @staticmethod
    def edit_instructor_details(instructor_id: id, instructor: instructor.InstructorPost, db: Session):
        """Updates informtion of an instructor that matche the given id"""

        the_instructor = db.query(Instructor).filter(Instructor.id == instructor_id).first()

        if the_instructor is None:
            raise HTTPException(status_code=404, detail="Instructor does not exist")
        
        the_instructor.instructor_name = instructor.instructor_name
        the_instructor.phone_number = instructor.phone_number
        the_instructor.address = instructor.address
        the_instructor.email = instructor.email

        db.commit()
        return {"detail": "Details updated successfully"}