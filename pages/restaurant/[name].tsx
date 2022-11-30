import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { showOneRestaurant } from '../../Firebase/storage/database'
import styles from '../../styles/Restaurant.module.css'
import Image from 'next/image'
import Star from "../../components/star";
import map from "../../public/assets/map.jpg"
import Comment from "../../components/comment";
import { useAuth } from "../../Auth/Auth";

const Restaurant = () => {
  const router = useRouter();
  const { name } = router.query;
  const [restaurant, setRestaurant] = useState<object[]>([])
  const {user} = useAuth()
  // const [reloadStar, setReloadStar] = useState<boolean>(false)

  const loadingRestaurant = (name: any | string[] | undefined) => {
    showOneRestaurant(name).then(res => setRestaurant(res))
  }

  const loadingComment = (bool: boolean, name : string) => {
    if(bool) showOneRestaurant(name).then(res => setRestaurant(res))
  }

  useEffect(() => {
    loadingRestaurant(name)
  })

  return (
    <div className={styles.container}>
      {restaurant.map((detail: any, i: number) =>
        <div key={i}>
          <div className={styles.title}>{detail.name}</div>
          <div className={styles.star}> <Star page="restaurant" star={detail.note} /></div>
          <div className={styles.flexible}>
            <div>
              <Image loader={() => "http://via.placeholder.com/400x400"} src={"http://via.placeholder.com/400x400"} alt={""} width={400} height={400} className={styles.image} />
            </div>
            <div className={styles.size}>
              <div> Cuisine : {detail.cuisine}</div>
              <div className={styles.address}>
                <div>adresse : </div>
                <div>
                  <div>{detail.adresse}</div>
                  <div>{detail.ville}</div>
                  <div>{detail.code_postale}</div>
                </div>
              </div>
              <div> Téléphone : {detail.téléphone}</div>
              <div className={styles.address}> Décription : <div>{detail.description}</div></div>
            </div>
          </div>
          <div className={styles.flexible}>
            <div className={styles.size}>
              <div> {"Horaire d'ouverture : "}{detail.cuisine}</div>
              <div> Téléphone : {detail.téléphone}</div>
              <div> Payement accepté : <div>{detail.modePaiement}</div>
              </div>
              <div>
                <div> Donnez une note pour votre restaurant préferez : <Star page="add" restaurantName={detail.name} isLiker={detail.liker} rate={detail.myRate} reloadStar={loadingComment}/></div>
              </div>
            </div>
            <div>
              <Image src={map} alt={""} width={400} height={400} className={styles.image} />
            </div>
          </div>
          <div>
            <div>
            <Comment restaurantName={detail.name} user={user.email} commentaires={detail.commentaires} myRate={detail.myRate} liker={detail.liker} reload={loadingRestaurant} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;