from pydantic import BaseModel

class Message(BaseModel):
    message: str = "a message description"