from fastapi import APIRouter, Depends

from service import Service
from schema import AssetPrice


router = APIRouter()


@router.get("/tikker/{tikker}")
async def get_stock_price(
    tikker: str,
    start: str = None,
    end: str = None,
    service: Service = Depends(),
) -> AssetPrice:

    data = service.get_asset_from_fdr(tikker=tikker)

    return data
