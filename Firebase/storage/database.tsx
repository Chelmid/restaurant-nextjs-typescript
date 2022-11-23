import { db } from "../config"
import { collection, addDoc, setDoc, doc, updateDoc, arrayUnion, arrayRemove, increment, getDocs, getDoc } from "firebase/firestore";
import restaurants from "../../data/restaurant.json"

export const addAllRestaurant = async () => {

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

export const showALLrestaurants = async () => {
    let listRestaurants: object[] = []
    try {
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        querySnapshot.forEach((doc) => {
            listRestaurants.push(doc.data().restaurant)
        });
    } catch (error) {
        console.log(error)
    }
    return restaurants
}

export const showOneRestaurant = async ( name : any) => {
    let restaurant: object[] = []
    const docRef = doc(db, "restaurants", name );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        restaurant.push(docSnap.data().restaurant)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");

    }
    return restaurant
}

export const liker = () => {
    
}