import React from 'react'

export default function Item(props) {
    return (
        <div className="item">
            <span>{props.item}</span>
        </div>
    )
}