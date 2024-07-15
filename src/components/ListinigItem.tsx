import React from 'react';
import { ListingItem as ListingItemType } from '../types/types';

interface Props {
    item: ListingItemType;
}

export const ListingItem: React.FC<Props> = ({ item }) => {
    const { url, MainImage ,title, currency_code, price, quantity } = item;
    const shortTitle = title.length > 50 ? `${title.substring(0, 50)}…` : title;
    let priceDisplay = `${price} ${currency_code}`;
    

    switch (currency_code) {
        case 'USD':
            priceDisplay = `$${price}`;
            break;
        case 'EUR':
            priceDisplay = `€${price}`;
            break;
        default:
            priceDisplay = `${price} ${currency_code}`;
            break;
    }
    

    let quantityClass = 'level-high';
    if (quantity <= 10) {
        quantityClass = 'level-low';
    } else if (quantity <= 20) {
        quantityClass = 'level-medium';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={shortTitle} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{shortTitle}</p>
                <p className="item-price">{priceDisplay}</p>
                <p className={`item-quantity ${quantityClass}`}>{quantity} left</p>
            </div>
        </div>
    );
};
