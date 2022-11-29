import { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { liker } from '../Firebase/storage/database'

export default function Star(props: any) {
  const [rating, setRating] = useState<number>(0)
  const [statusLiker, setStatusLiker] = useState<boolean>(false)
  const [notification, setNotification] = useState<string>()

  useEffect(() => {
    setRating(props.star);
    if (props.isLiker === true) {
      setStatusLiker(true);
    }
  }, [rating, props])


  const handleRating = (rate: number) => {
    setRating(rate);
    setStatusLiker(true);
    liker(props.restaurantName, rate);
    props.reloadStar(true , props.restaurantName)
    setNotification('Votre note est bien été prise en compte');
  }

  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) => console.log(value, index);

  const starHome = () => {

    return (
      <div>
          <Rating initialValue={rating} readonly={true} allowFraction={true} size={25} />
      </div>
    )
  }

  const starRestaurant = () => {

    return (
      <div>
          <Rating initialValue={rating} readonly={true} allowFraction={true}/>
      </div>
    )
  }

  const starCommenter = () => {

    return (
      <div>
          <Rating initialValue={props.myRate} readonly={true} allowFraction={true} size={25} />
      </div>
    )
  }

  const addStarRating = () => {

    return (
      <div>
        <Rating
          onClick={handleRating}
          readonly={statusLiker}
          initialValue={props.isLiker === true ? props.rate : 0}
        />
        {notification?.length && <div style={{color : 'green'}}>{notification}</div>}
      </div>
    )
  }

  return (
    <div>
      {props.page === "home" ? starHome() : ""}
      {props.page === "restaurant" ? starRestaurant() : ""}
      {props.page == "add" ? addStarRating() : ""}
      {props.page == "comment" ? starCommenter() : ""}
    </div>
  )
}