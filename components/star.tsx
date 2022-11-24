import { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { liker } from '../Firebase/storage/database'

export default function Star(props: any) {
  const [rating, setRating] = useState<number>(0)
  const [status, setStatus] = useState<boolean>(false)
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    setRating(props.star)
    if (props.isLiker === true) {
      setStatus(true)
    }
  }, [rating, props])
  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    setStatus(true)
    console.log(props.name)
    liker(props.name, rate)
    setMessage('Votre note est bien été prise en compte')
  }

  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)

  const starNoMove = (page: any) => {

    return (
      <div>
        {page === "home"
          ?
          <Rating initialValue={rating} readonly={true} allowFraction={true} size={25} />
          :
          <Rating initialValue={rating} readonly={true} allowFraction={true} />
        }
      </div>
    )
  }

  const addRating = () => {

    return (
      <div className='App'>
        <Rating
          onClick={handleRating}
          readonly={status}
          initialValue={props.isLiker === true ? props.rate : 0}
        />
        {message?.length && <div style={{color : 'green'}}>{message}</div>}
      </div>
    )
  }

  return (
    <div>
      {props.page !== "add"
        ?
        starNoMove(props.page)
        :
        addRating()
      }
    </div>
  )
}