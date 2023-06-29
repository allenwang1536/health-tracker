import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv';
import axios from "axios";
import moment from 'moment';
import "./App.css";
import Cards from "./components/Food/Cards";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Cards />
    </>
  )
}
