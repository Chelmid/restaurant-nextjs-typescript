import { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Star(props : any) {
    const [rating, setRating] = useState(0)
    
    useEffect(() => {
        if(props.page === "home"){
            setRating(props.star)
        }
    },[])
    // Catch Rating value
    const handleRating = (rate: number) => {
      setRating(rate)
  
      // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)
    
    const starNoMove = () => {
        
        return (
            <Rating initialValue={rating} readonly={true} allowFraction={true} size={25}/>
          )
    }

    const addRating = () => {

        return (
            <div className='App'>
              <Rating onClick={handleRating}
              readonly={true}
              />
            </div>
          )

    }

    return (
      <div>
        {props.page === "home"
        ?
            starNoMove()
        :
            addRating()
        }
      </div>
    )
  }