export interface MainImage {
    url_570xN: string;
}

export interface ListingItem {
    listing_id: number;
    title: string;
    price: string;
    currency_code: string;
    quantity: number;
    MainImage: MainImage;
    url: string;
}

