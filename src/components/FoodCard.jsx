import React from 'react';
import { useState } from 'react';
import FoodEntry from './FoodEntry';
import DialogBox from './DialogBox';
import FoodInfo from './FoodInfo';

import './FoodCard.css';

export default function FoodCard({ mealType, foodEntries }) {

    const [isTransitioned, setIsTransitioned] = useState(false);
    const [curFoodEntryId, setCurFoodEntryId] = useState(null);

    const handleTransitionOpen = (foodEntryId) => {
        setIsTransitioned(true);
        setCurFoodEntryId(foodEntryId);
    }

    const handleTransitionClose = () => {
        setIsTransitioned(false);
        setCurFoodEntryId(null);
    }

    return (
        <div className="card">
            <div className={`card-content${isTransitioned ? '-transitioned' : ''}`}>

                <div className="card-content-minimized">
                    <h1 className="card-content-minimized-header">
                        {mealType}
                    </h1>

                    {foodEntries.map((foodEntry) => {
                        return (
                            < FoodEntry onClick={() => handleTransitionOpen(foodEntry.id)} food={foodEntry.name} calories={foodEntry.calories} />
                        )
                    })}

                    <DialogBox className="add-new-food-button" />
                </div>

                <div className="card-content-expanded">
                    <form onClick={handleTransitionClose} className="return-button">
                        <p> &lt; </p>
                    </form>
                    {curFoodEntryId === null ? null : <FoodInfo foodEntry={foodEntries.filter((foodEntry) => foodEntry.id === curFoodEntryId)[0]} />}
                </div>

            </div>
        </div>
    )
}
