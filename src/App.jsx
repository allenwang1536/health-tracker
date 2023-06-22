import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewItemForm from "./NewItemForm"
import TodoList from "./TodoList"

import "./styles.css";

export default function App() {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items))
  }, [items])

  const addItem =
    (val) => {
      setItems(currentItems => {
        return [...currentItems,
        {
          uid: uuidv4(),
          value: val,
          completed: false,
        }];
      })
    }

  const handleCheck = (uid, completed) => {
    setItems(currentItems => currentItems.map((item) => {
      if (uid === item.uid) {
        return { ...item, completed: completed }
      }

      return item
    }))
  }

  const handleDelete = (uid) => {
    setItems(items.filter(
      item => item.uid !== uid
    ))
  }

  return (
    <>

      <NewItemForm onSubmit={addItem} />
      <TodoList handleCheck={handleCheck} handleDelete={handleDelete} items={items} />

    </>
  )
}
