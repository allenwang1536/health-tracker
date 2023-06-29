import React from 'react';
import { useState } from 'react';
import Entry from './Entry';
import DialogBox from '../DialogBox';
import Info from './Info';
import { getDocs, collection, addDoc} from 'firebase/firestore';


import './Card.css';

export default function Card({ mealType, foodEntries }) {

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
                            < Entry onClick={() => handleTransitionOpen(foodEntry.id)} food={foodEntry.name} calories={foodEntry.calories} />
                        )
                    })}

                    <DialogBox className="add-new-food-button" />
                </div>

                <div className="card-content-expanded">
                    <form onClick={handleTransitionClose} className="return-button">
                        <p> &lt; </p>
                    </form>
                    {curFoodEntryId === null ? null : <Info foodEntry={foodEntries.filter((foodEntry) => foodEntry.id === curFoodEntryId)[0]} />}
                </div>

            </div>
        </div>
    )
}