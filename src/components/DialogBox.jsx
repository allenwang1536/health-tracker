import "./DialogBox.css";
import { useState, useRef } from "react";
import { onSubmit } from '../config/foods';

function DialogBox() {

    // const foodsCollectionRef = collection(db, "food-entries");

    const dialogRef = useRef(null);
    const [mealType, setMealType] = useState("Breakfast");
    const [mealName, setMealName] = useState("");
    const [calories, setCalories] = useState();
    const [notes, setNotes] = useState("");

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const handleSubmit = () => {
        closeDialog();

        onSubmit(mealType, mealName, calories, notes);

        // postEntries(mealType, mealName, calories, notes);

        setMealType("Breakfast");
        setMealName("");
        setCalories("");
        setNotes("");
    }

    return (
        <>
            <div className="dialogue-box">
                <button className="add-new-food-button" onClick={openDialog}>
                    Add New Food
                </button>

                <dialog ref={dialogRef} method="dialog" className="dialogue-box-pop-up">
                    <div className="dialogue-box-info">
                        <p> MEAL </p>
                        <label>
                            <select value={mealType} onChange={e => setMealType(e.target.value)}>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snack">Snack</option>
                            </select>
                        </label>
                        <label> Meal Name: <input value={mealName} onChange={e => setMealName(e.target.value)} /> </label>
                        <label> Calories: <input value={calories} onChange={e => setCalories(e.target.value)} /> </label>
                        <label> Additional Notes: <input value={notes} onChange={e => setNotes(e.target.value)} /> </label>

                    </div>
                    <div className="exit-submit-container">
                        <button onClick={closeDialog}>Exit</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default DialogBox;
