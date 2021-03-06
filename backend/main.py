from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from settings.db_config import engine, Base

# import models
from routes import user, mtype, member

app = FastAPI(
    title='GainIT API',
    version='0.0.1',
    description='endpoints for GainIT',
    redoc_url='/',
)

origins = [
   "http://localhost","http://localhost:3000","http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    user.router,
    prefix='/users',
    tags=['User Operations'],
    responses={
        200:{'description':'Ok'}, 
        201:{'description':'Created'}, 
        400:{'description':'Bad Request'},
        401:{'description':'Unauthorized'}}
)

app.include_router(mtype.router)
app.include_router(member.router)





