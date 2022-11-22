import { db } from "../config"
import { collection, addDoc, setDoc, doc, updateDoc, arrayUnion, arrayRemove, increment } from "firebase/firestore";
import restaurants from "../../data/restaurant.json"

const Database = () => {

    const addAllRestaurant = async () => {

        restaurants.map(async restaurant => {
            try {
                await setDoc(doc(db, "restaurants", restaurant.name), {
                    restaurant
                })
            } catch (error) {
                console.log(error)
            }
        })
    }
    const washingtonRef = doc(db, "restaurants", "Zelma Gordon");
    const updateRestaurant = async () => {

        const washingtonRef = doc(db, "cities", "DC");

        // Atomically increment the population of the city by 50.
        await updateDoc(washingtonRef, {
            population: increment(50)
        });
    }

    return (
        <div>
            ok
        </div>
    )
}

export default Database