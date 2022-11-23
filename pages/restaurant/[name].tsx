import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { showOneRestaurant } from '../../Firebase/storage/database'
import styles from '../../styles/restaurant.module.css'

const Restaurant = () => {
  const router = useRouter();
  const { name } = router.query;
  const [restaurant, setRestaurant] = useState<object[]>([])
  
  const loadingRestaurant = ( name : string  | string[] | undefined) => {
    showOneRestaurant(name).then(res => setRestaurant(res))
  }

  useEffect(() => {
    loadingRestaurant(name)
  },[])

  return (
    <div>
      {restaurant.map((detail : any , i : number) => 
        <div key={i}>
          <div>{detail.name}</div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;