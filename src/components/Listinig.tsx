import React from 'react';
import { ListingItem as ListingItemType } from '../types/types';
import { ListingItem } from '../components/ListinigItem';
import listingsData from '../data/etsy.json';

interface Props {
    items?: ListingItemType[];
}

const listings: ListingItemType[] = JSON.parse(JSON.stringify(listingsData)).map((item: ListingItemType) => ({
    listing_id: item.listing_id,
    title: item.title || '',
    price: item.price || '',
    currency_code: item.currency_code || '',
    quantity: item.quantity || 0,
    MainImage: item.MainImage && item.MainImage.url_570xN ? { url_570xN: item.MainImage.url_570xN } : { url_570xN: '' },
    url: item.url || '',
}));

export const Listing: React.FC<Props> = ({ items = listings }) => {
    return (
        <div className="item-list">
            {items.map(i => (
                <ListingItem key={i.listing_id} item={i} />
            ))}
        </div>
    );
};
