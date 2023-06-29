import React from 'react';
import { useState, useEffect } from 'react';
import FoodEntry from './FoodEntry';
import DialogBox from './DialogBox';
import FoodInfo from './FoodInfo';
import FoodCard from './FoodCard';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';


import './FoodCards.css';

export default function FoodCards() {

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
    }, [])

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
                    return (<FoodCard mealType={mealType} foodEntries={foodEntries[index]}/>)
                })}
            </section>
        </>
    )
}
