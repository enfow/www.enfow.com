from fastapi import FastAPI
from model import Base
from controller import router

from sqlalchemy import create_engine


POSTGRES_URL: str = "localhost:5432"
DEV = True

if not DEV:
    engine = create_engine(url=POSTGRES_URL)

    Base.metadata.create_all(engine)  # all tables are created.

app = FastAPI()
app.include_router(router, prefix="/asset")
