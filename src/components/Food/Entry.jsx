import React from 'react';

import './Entry.css';

export default function Entry( {onClick, food, calories } ) {

    return (
        <>
            <form onClick={onClick}>
                <div className="food-entry">
                    <p className="food-entry-name">
                        Food: {food}
                    </p>
                    <p className="food-entry-calories">
                        Calories: {calories} 
                    </p>
                </div>
            </form>
        </>
    )
}
