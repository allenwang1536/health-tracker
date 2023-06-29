import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import './Header.css';

export default function Header() {

    const [goalCalories, setGoalCalories] = useState(2000);
    const [caloriesEaten, setCaloriesEaten] = useState(0);
    const [editingGoal, setEditingGoal] = useState(false);

    const foodsCollectionRef = collection(db, "food-entries");

    useEffect(() => {
        let sumCalories;
        
        const unsubscribe = onSnapshot(foodsCollectionRef, (snapshot) => {
            sumCalories = 0;
            snapshot.docs.forEach((doc) => {
                sumCalories += doc.data().calories;
            });

            setCaloriesEaten(sumCalories);
        });

        return () => unsubscribe();
    }, []);

    const handleBlur = (newGoal) => {
        setEditingGoal(false);
        setGoalCalories(newGoal);
    }

    return (
        <>
            <div className="header-container">
                <h1>
                    Food Tracker
                </h1>
                <div className="dashboard">
                    <div className="tools">

                        <i className="tools-edit fa-regular fa-pen-to-square"></i>
                        <p> &lt; Today &gt; </p>
                        <i className="tools-diary fa-solid fa-book"></i>

                    </div>
                    <div className="calories-remaining">
                        <h4>Calories Remaining</h4>
                        <div className="calories-remaining-expression">
                            <div className="calories-remaining-expression-term">

                                {editingGoal ?
                                    <input
                                        className='goal-input'
                                        type='number'
                                        defaultValue={goalCalories}
                                        onBlur={(e) => handleBlur(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') { e.target.blur(); }
                                        }}
                                    />
                                    :
                                    <p onDoubleClick={() => setEditingGoal(true)}>{goalCalories}</p>
                                }

                                <p>Goal</p>
                            </div>
                            <p className="calories-remaining-expression-term">-</p>
                            <div className="calories-remaining-expression-term calories-remaining-expression-center">
                                <p>{caloriesEaten}</p>
                                <p>Food</p>
                            </div>
                            <p className="calories-remaining-expression-term">=</p>
                            <div className="calories-remaining-expression-term">
                                <p>
                                    {Math.max(0, goalCalories - caloriesEaten)}
                                </p>
                                <p>Remaining</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
