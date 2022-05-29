from sqlalchemy import Column, Date, ForeignKey, Integer, String, Table, Time, Float
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy.schema import (
    ForeignKeyConstraint,
    PrimaryKeyConstraint,
    UniqueConstraint,
)

Base = declarative_base()


class AssetModel(Base):
    __tablename__ = "asset"

    id = Column(Integer, primary_key=True)
    name = Column(String(64))
    tikker = Column(String(64), unique=True)
    type = Column(String(64))


class AssetPriceModel(Base):
    __tablename__ = "asset_price"

    id = Column(Integer, primary_key=True)
    tikker = Column(String(64), ForeignKey("asset.tikker"))
    date = Column(Date)
    open_price = Column(Float)
    close_price = Column(Float)
    high_price = Column(Float)
    low_price = Column(Float)
    volume = Column(Integer)
