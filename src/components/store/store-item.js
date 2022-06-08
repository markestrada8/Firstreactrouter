import React from 'react'
import '../../style/store-item';


export default function StoreItem(props) {
    return (
        <div className="item-container">
            <img src={props.imgURL} />
            <div className="name">{props.name}</div>
            <div className="price">{props.price}</div>
        </div>
    )
}
