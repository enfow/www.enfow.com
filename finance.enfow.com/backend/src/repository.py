# https://github.com/FinanceData/FinanceDataReader
from typing import List

import FinanceDataReader as fdr
from sqlalchemy.ext.asyncio import AsyncSession

from model import AssetPriceModel


class FdrRepository:

    def store_asset_data(
        self,
        tikker: str,
        start: str = None,
        end: str = None
    ) -> List[AssetPriceModel]:

        raw_df = fdr.DataReader(tikker, start, end)

        data = raw_df.to_dict("index")

        return [
            AssetPriceModel(
                tikker=tikker,
                date=date,
                open_price=price["Open"],
                close_price=price["Close"],
                high_price=price["High"],
                low_price=price["Low"],
                volume=price["Volume"],
            )
            for date, price in data.items()
        ]
