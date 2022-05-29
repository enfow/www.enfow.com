from typing import List

from pydantic import BaseModel


class AssetPrice(BaseModel):
    tikker: str
    date: str
    open: float
    close: float
    high: float
    low: float
    volume: int


class AssetPriceSet(BaseModel):

    dataset: List[AssetPrice]
