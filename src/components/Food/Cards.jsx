import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

import './Cards.css';

export default function Cards() {

    const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

    const [foodList, setFoodList] = useState([]);
    const foodsCollectionRef = collection(db, "food-entries");

    useEffect(() => {
        const getFoodList = async () => {
            try {
                const data = await getDocs(foodsCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setFoodList(filteredData);
            } catch (err) {
                console.error(err);
            }
        }
        getFoodList();
    }, []);

    const foodEntries =
        mealTypes.map((mealType) => {
            return (
                foodList.filter((food) => food.mealType === mealType)
            )
        })

    return (
        <>
            <section className='foods-container'>
                {console.log(foodEntries)}
                {mealTypes.map((mealType, index) => {
                    return (<Card mealType={mealType} foodEntries={foodEntries[index]} />)
                })}
            </section>
        </>
    )
}
