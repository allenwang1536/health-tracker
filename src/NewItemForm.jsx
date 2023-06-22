import { useState } from 'react';
import PropTypes from 'prop-types';
import DialogBox from './DialogBox';


NewItemForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

function NewItemForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("");
   

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newItem === "") return

        onSubmit(newItem);
        setNewItem("");
    };

    const handleInputClick = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="item"> New Food </label>
                <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id="item" />
            </div>
            <button onClick={handleInputClick}>Add New Food</button>
            <DialogBox/>
        </form>
    );
}

export default NewItemForm;