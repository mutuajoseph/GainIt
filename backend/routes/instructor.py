from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from settings.db_config import get_db
from utils.oauth2 import get_current_user
from typing import List

from schemas import instructor, user
from services.instructor import InstructorService

router = APIRouter()

@router.get('',
    summary="Get all instructors",
    response_model = List[instructor.Instructor],
    response_description = 'a list of instructors',
    status_code = 200
)
async def fetch_all_instructors(db: Session() = Depends(get_db), get_current_user: user.User = Depends(get_current_user)):
    return InstructorService.get_all_instructors(db=db)

@router.get('/{instructor_id}',
    summary="Get an instructor by id",
    response_model = instructor.Instructor,
    response_description = 'an instructor',
    status_code = 200
)
async def fetch_a_single_instructor(instructor_id: int, db: Session() = Depends(get_db), get_current_user: user.User = Depends(get_current_user)):
    return InstructorService.get_a_single_instructor(instructor_id=instructor_id, db=db)

@router.post('',
    summary="Create an instructor",
    response_model = instructor.Instructor,
    response_description = 'an instructor',
    status_code = 201
)
async def create_a_new_instructor(instructorPayload: instructor.InstructorPost, db: Session() = Depends(get_db), get_current_user: user.User = Depends(get_current_user)):
    return InstructorService.add_a_new_instructor(instructor=instructorPayload, db=db)

@router.put('/{instructor_id}',
    summary="Updates an instructor that mateches the given ID",
    response_description = 'an instructor',
    status_code = 200
)
async def fetch_a_single_instructor(instructor_id: int, instructorPayload: instructor.InstructorPost, db: Session() = Depends(get_db), get_current_user: user.User = Depends(get_current_user)):
    return InstructorService.edit_instructor_details(instructor_id=instructor_id, instructor=instructorPayload, db=db)

