import { useEffect, useState } from "react";
import styles from "../styles/barsearch.module.css"

const Barsearch = (props : any) => {

    const [nameSearch, setNameSearch] = useState<string>()

    useEffect(() => {
        if(props.status === true){
            setNameSearch('')
            props.barSearch(nameSearch)
        }else{
            props.barSearch(nameSearch)
        }
    },[nameSearch,props])

    const handleOnChange = async (event : React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setNameSearch(value)
    }

    return (
        <div>
            <input type="text" className={ `${styles.search} ${styles.icon}`} placeholder={"Nom du restaurant"} onChange={handleOnChange} name="nameSearch" value={nameSearch || ""}/>
        </div>
    )
}

export default Barsearch
