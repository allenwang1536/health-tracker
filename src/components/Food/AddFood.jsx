import "./AddFood.css";
import { useState, useRef } from "react";
import { onSubmit } from '../../config/foods';

function AddFood({ defaultMealType }) {

    const dialogRef = useRef(null);
    const [mealType, setMealType] = useState(defaultMealType);
    const [mealName, setMealName] = useState("");
    const [calories, setCalories] = useState();
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState(
        {
            mealName: "Enter meal name",
            calories: "Enter calories",
        });

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

    const resetFormValues = () => {
        setErrors({
            mealName: "Enter meal name",
            calories: "Enter calories",
        })
        setMealType(defaultMealType);
        setMealName("");
        setCalories("");
        setNotes("");
    }

    const handleExit = () => {
        closeDialog();
        resetFormValues();
    }

    const handleSubmit = () => {
        const validationErrors = {};

        if (!mealName) {
            validationErrors.mealName = "Meal Name is required";
        }

        if (!calories) {
            validationErrors.calories = "Calories are required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        closeDialog();

        onSubmit(mealType, mealName, calories, notes);

        resetFormValues();
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <>
            <div className="dialogue-box">
                <button className="add-new-food-button" onClick={openDialog}>
                    Add New Food
                </button>

                <dialog ref={dialogRef} method="dialog" className="dialogue-box-pop-up" onKeyDown={handleKeyDown}>
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
                        <label> Meal Name: <input placeholder={errors.mealName} value={mealName} onChange={e => setMealName(e.target.value)} /> </label>
                        <label> Calories: <input placeholder={errors.calories} value={calories} onChange={e => setCalories(e.target.value)} /> </label>
                        <label> Additional Notes: <input placeholder="Enter additional notes" value={notes} onChange={e => setNotes(e.target.value)} /> </label>

                    </div>
                    <div className="exit-submit-container">
                        <button onClick={handleExit}>Exit</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default AddFood;
