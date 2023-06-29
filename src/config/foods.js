import { db } from './firebase';
import { addDoc, getDocs, collection, doc, deleteDoc } from 'firebase/firestore';

const foodsCollectionRef = collection(db, "food-entries");

export async function onSubmit(foodType, foodName, calories, notes) {
    try {
        await addDoc(foodsCollectionRef,
            {
                name: foodName,
                mealType: foodType,
                calories: calories,
                notes: notes,
            }
        )
    } catch(err) {
        console.error(err);
    }
}

export async function removeFood(id) {
    try {
        const foodDoc = doc(db, "food-entries", id)
        await deleteDoc(foodDoc)
    } catch(err) {
        console.error(err);
    }
}
