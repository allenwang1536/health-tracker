import PropTypes from 'prop-types';

TodoList.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    items: PropTypes.func.isRequired,
};

function TodoList({ handleCheck, handleDelete, items }) {

    return (
        <>
            <h1 className="header">Caloric List</h1>

            {items.length === 0 && "No Tasks"}

            <ul className="list">
                {items.map((item) =>
                    <li key={item.uid}>
                        <label>
                            <input type="checkbox" checked={item.completed} onChange={e => handleCheck(item.uid, e.target.checked)} />
                            {item.value}
                        </label>
                        <button className="btn btn-danger" onClick={() => handleDelete(item.uid)}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </>
    )

}

export default TodoList;