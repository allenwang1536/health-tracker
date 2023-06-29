import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv';
import axios from "axios";
import moment from 'moment';
import "./App.css";
import FoodCards from "./components/FoodCards";
import Header from "./components/Header";

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

  useEffect(() => {
    console.log(items);
  }, [items]);


  return (
    <>
      <Header />
      <FoodCards />
    </>
  )
}
