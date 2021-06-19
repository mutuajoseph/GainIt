from fastapi import HTTPException
from sqlalchemy.orm import Session
from utils import token

from utils.hashing import Hash
from schemas import user
from models.user import User

class UserService:

    @staticmethod
    def register_user(user: user.UserPost, db: Session):
        """ register a new user """
       

        # check if the email exists
        the_user = db.query(User).filter(User.email == user.email).first()

        if the_user:
            raise HTTPException(status_code=400, detail="Email already exists")

        # commit the user

        new_user = User(
            firstname = user.firstname,
            lastname = user.lastname,
            email = user.email,
            password = Hash().bcrypt(user.password)
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user

    @staticmethod
    def authenticate_user(user: user.UserLogin, db: Session):
        """ Authenticate a user """

        # check if email exists
        the_user = db.query(User).filter(User.email == user.username).first()

        if not the_user:
            raise HTTPException(status_code=404, detail="Invalid Credentials")
        
        # check if the password match
        if not Hash.verify(the_user.password, user.password):
            raise HTTPException(status_code=400, detail="Incorrect Password")
        
        # generate token for the user
        access_token = token.create_access_token(data={"sub": the_user.email})
        return {"access_token": access_token, "token_type": "bearer", "user": the_user}

