import moment from "moment";
import axios from "axios";
import "dotenv";

export function postEntries(meal, food, calories, notes) {
    const date = moment(new Date()).format("MM-DD-YYYY").replace("-", "/");
    const data = {
        "records": [
            {
                "fields": {
                    "Date": date,
                    "Meal": meal,
                    "Foods": food,
                    "Calories": calories,
                    "Notes": notes,
                }
            }
        ]
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_CALORIES_ID}`;
    const axiosConfig = {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_AUTH_WRITE_TOKEN}`,
            "Content-Type": `application/json`,
        }
    };
    axios.post(url, data, axiosConfig)
        .then(resp => {
            console.log(resp);
        })
        .catch(err => console.log(err.response.data));
};

export function readEntries() {

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_CALORIES_ID}`;

    const axiosConfig = {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_AUTH_READ_TOKEN}`,
        },
    };

    axios.get(url, axiosConfig)
        .then((response) => {
            const records = response.data.records;
            // Process the retrieved records as needed
            console.log(records);
        })
        .catch((error) => {
            console.error(error);
        });
}
