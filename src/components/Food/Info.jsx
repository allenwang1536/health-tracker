import React from 'react';

import './Info.css';

export default function Info( { foodEntry } ) {
    return (
        <>
            <p><strong>Food: </strong>{foodEntry.name}</p>
            <p><strong>Calories: </strong>{foodEntry.calories}</p>
            <p><strong>Notes: </strong>{foodEntry.notes}</p>
        </>
    )
}
