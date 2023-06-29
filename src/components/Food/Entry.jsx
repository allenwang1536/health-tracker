import React from 'react';

import './Entry.css';

export default function Entry( {onClick, foodEntry } ) {

    return (
        <>
            <form onClick={onClick}>
                <div className="food-entry">
                    <p className="food-entry-name">
                        Food: {foodEntry.name}
                    </p>
                    <p className="food-entry-calories">
                        Calories: {foodEntry.calories} 
                    </p>
                </div>
            </form>
        </>
    )
}
