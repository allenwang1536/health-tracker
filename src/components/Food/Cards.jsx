import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { db } from '../../config/firebase';
import { getDocs, collection, onSnapshot } from 'firebase/firestore';

import './Cards.css';

export default function Cards() {

    const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

    const [foodList, setFoodList] = useState(mealTypes.map(() => []));
    const foodsCollectionRef = collection(db, "food-entries");
git 
    useEffect(() => {
        const unsubscribe = onSnapshot(foodsCollectionRef, (snapshot) => {
            const newFoodEntries = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setFoodList(
                mealTypes.map((mealType) => {
                    return (
                        newFoodEntries.filter((food) => food.mealType === mealType)
                    )
                }))
        });

        return () => unsubscribe();
    }, []);


    return (
        <>
            <section className='foods-container'>
                {mealTypes.map((mealType, index) => {
                    return (<Card mealType={mealType} foodEntries={foodList[index]} />)
                })}
            </section>
        </>
    )
}
