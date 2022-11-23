import { useEffect, useState } from "react";
import styles from "../styles/barsearch.module.css"

const Barsearch = (props : any) => {

    const [nameSearch, setNameSearch] = useState<{ [x: string]: string }>()

    useEffect(() => {
        props.barSearch(nameSearch)
    })

    const handleOnChange = async (event : React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setNameSearch(values => ({ ...values, [name]: value }))
    }

    return (
        <div>
            <input type="text" className={ `${styles.search} ${styles.icon}`} placeholder={"Nom du restaurant"} onChange={handleOnChange} name="nameSearch"/>
        </div>
    )
}

export default Barsearch
