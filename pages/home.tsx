import { useEffect, useState } from "react";
import { showALLrestaurants, showFindRestaurant } from "../Firebase/storage/database";
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import Link from "next/link";
import Star from "../components/star"


export default function Home(props: any) {

  const [listRestaurants, setListRestaurants] = useState<object[]>()
  const [restaurant, setRestaurant] = useState<object[]>()

  useEffect(() => {
    loadingRestaurants()
    if(props.passValueSearch !== '' && props.passValueSearch !== undefined){
      showFindRestaurant(props.passValueSearch).then(res => setRestaurant(res))
    }
  }, [props])

  const loadingRestaurants = async () => {
    showALLrestaurants().then(res => setListRestaurants(res))
  }

  return (
    <div>

      {/* <form action="http://localhost:3000/api/restaurants" method="post"><button type="submit">APi</button></form> */}

      {props.passValueSearch !== '' && props.passValueSearch !== undefined
        ?
        <div className={styles.container}>
          {restaurant?.map((restaurant: any, i: number) =>
              <Link
                href={{
                  pathname: "restaurant/[name]",
                  query: { name: restaurant.name }
                }}
                key={i}
              >
                <div key={i} className={styles.containerRestaurant}>
                  <Image
                    loader={() => "http://via.placeholder.com/245x200"} src={"http://via.placeholder.com/245x200"} alt={""} width={245} height={200}
                  />
                  <div>{restaurant.name}</div>
                  <div>Cuisine : {restaurant.cuisine}</div>
                  <div>Ville : {restaurant.ville} </div>
                  <div className={styles.inline}> Note : <Star page="home" star={restaurant.note} /></div>
                  <div>Avis : {restaurant.avis}</div>
                </div>
              </Link>
            )}
        </div>
        :
        listRestaurants?.length
          ?
          <div className={styles.container}>
            {listRestaurants.map((restaurant: any, i: number) =>
              <Link
                href={{
                  pathname: "restaurant/[name]",
                  query: { name: restaurant.name }
                }}
                key={i}
              >
                <div key={i} className={styles.containerRestaurant}>
                  <Image
                    loader={() => "http://via.placeholder.com/245x200"} src={"http://via.placeholder.com/245x200"} alt={""} width={245} height={200}
                  />
                  <div>{restaurant.name}</div>
                  <div>Cuisine : {restaurant.cuisine}</div>
                  <div>Ville : {restaurant.ville} </div>
                  <div className={styles.inline}> Note : <Star page="home" star={restaurant.note} /></div>
                  <div>Avis : {restaurant.avis}</div>
                </div>
              </Link>
            )}
          </div>
          :
          <div className={styles.container}>
            <span className="sr-only">Loading...</span>
          </div>
      }

    </div>
  )
}
