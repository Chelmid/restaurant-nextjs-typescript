import { useState } from "react";
import styles from "../styles/barsearch.module.css"

const Barsearch = () => {


    const handleOnChange = async () => {

    }

    return (
        <div>
            <input type="text" className={ `${styles.search} ${styles.icon}`} placeholder={"Nom du restaurant"} onChange={handleOnChange}/>
        </div>
    )
}

export default Barsearch
