import React from 'react';

import './FoodInfo.css';

export default function FoodInfo( { foodEntry } ) {
    return (
        <>
            <p><strong>Food: </strong>{foodEntry.name}</p>
            <p><strong>Calories: </strong>{foodEntry.calories}</p>
            <p><strong>Notes: </strong>{foodEntry.notes}</p>
        </>
    )
}
