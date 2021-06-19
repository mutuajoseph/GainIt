from os import stat
from passlib.context import CryptContext

 # pwd instance
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class Hash():

    @staticmethod
    def bcrypt(password: str):
        # hash the password
        hashed_password = pwd_context.hash(password)
        return hashed_password

    @staticmethod
    def verify(hashed_password, plain_password):
        return pwd_context.verify(plain_password, hashed_password)