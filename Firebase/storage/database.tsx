import { db } from "../config"
import { collection, setDoc, doc, updateDoc, arrayUnion, increment, getDocs, getDoc, query, where } from "firebase/firestore";
import restaurants from "../../data/restaurant.json"

export const addAllRestaurant = async () => {

    restaurants.map(async restaurant => {
        await setDoc(doc(db, "restaurants", restaurant.name), restaurant);
    })
    return true
}

export const showALLrestaurants = async () => {
    let listRestaurants: object[] = [];
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    querySnapshot.forEach((doc) => {
        listRestaurants.push(doc.data());
    });
    return listRestaurants;
}

export const showOneRestaurant = async (name: string) => {
    let restaurant: object[] = [];
    const docRef = doc(db, "restaurants", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        restaurant.push(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");

    }
    return restaurant;
}

export const liker = async (restaurant: string, rating: number) => {
    const likerRef = doc(db, "restaurants" , restaurant);
    await updateDoc(likerRef, {
        myRate: rating,
        liker: true
    });
    return true;
}

export const commenter = async (restaurant: string, userEmail : string , message : string | undefined, rating : number | boolean) => {
    const commenterRef = doc(db, "restaurants" , restaurant);
    let data = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    await updateDoc(commenterRef, {
        avis : increment(1),
        commentaires : arrayUnion({
            "email": userEmail,
            "message": message,
            "date": data,
            "rate": rating
        })
    });
    return true;
}

export const showFindRestaurant = async ( request: string) => {
    let restaurant: object[] = [];
    const q = query(collection(db, "restaurants"), where("name", "==", request));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
     // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    restaurant.push(doc.data());
});
    return restaurant;
}