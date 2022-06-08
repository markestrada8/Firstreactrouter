import React from 'react';
import StoreItem from './store-item';
import '../../style/store-container';

function createItem(item) {
    return < StoreItem key={item.id} {...item} />
}

export default function StoreContainer(props) {
    return (
        <div className="store-container">
            {props.items.map(createItem)}
        </div>
    )

}
