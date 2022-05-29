from repository import FdrRepository
from schema import AssetPrice, AssetPriceSet


class Service:
    def __init__(self):
        self.fdr_repo = FdrRepository()

    def get_asset_from_fdr(self, tikker: str, start: str = None, end: str = None):

        repo_data = self.fdr_repo.store_asset_data(tikker, start, end)
        data = [AssetPrice(
            tikker = data.tikker,
            date = str(data.date),
            open = data.open_price,
            close = data.close_price,
            high = data.high_price,
            low = data.low_price,
            volume = int(data.volume),
        ) for data in repo_data]
        asset_prices = AssetPriceSet(dataset=data)

        return asset_prices
