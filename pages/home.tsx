import { useEffect, useState } from "react";
import { showALLrestaurants } from "../Firebase/storage/database";
import styles from "../styles/home.module.css"
import Image from 'next/image'
import Link from "next/link";
import Star from "../components/star"


export default function Home(props : any) {

  const [listRestaurants, setListRestaurants] = useState<object[]>()

  useEffect(() => {
    loadingRestaurants()
  },[props.passSearch])

  const loadingRestaurants = async () => {
    showALLrestaurants().then(res => setListRestaurants(res))
  }

  return (
    <div>
      {props.passSearch?.nameSearch !== '' && props.passSearch?.nameSearch !== undefined
      ?
      <div className={styles.container}>
          
      </div>
      :
      listRestaurants?.length
        ?
        <div className={styles.container}>
          {listRestaurants.map((retaurant: any, i: number) =>
            <Link
            href={{
              pathname: "restaurant/[name]",
              query: { name: retaurant.name }
            }}
            key={i}
          >
            <div key={i} className={styles.containerRestaurant}>
                <Image
                  loader={() => "http://via.placeholder.com/245x200"} src={"http://via.placeholder.com/245x200"} alt={""} width={245} height={200}
                />
                <div>{retaurant.name}</div>
                <div>Cuisine : {retaurant.cuisine}</div>
                <div>Ville : {retaurant.ville} </div>
                <div className={styles.inline}> Note : <Star page="home" star={retaurant.note}/></div>
                <div>Avis : {retaurant.avis}</div>
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
