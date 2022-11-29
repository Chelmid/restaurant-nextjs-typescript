import { useEffect, useState } from "react";
import styles from "../styles/barsearch.module.css"

const Barsearch = (props : any) => {

    const [nameValueSearch, setNameValueSearch] = useState<string>();

    useEffect(() => {
        if(props.statusClickLogo === true ){
            setNameValueSearch('')
            props.barSearch(nameValueSearch);
        }else{
            props.barSearch(nameValueSearch);
        }
    },[props, nameValueSearch])

    const handleOnChange = async (event : React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setNameValueSearch(value);
    }

    return (
        <div>
            <input 
                type="text" 
                className={ `${styles.search} ${styles.icon}`} 
                placeholder={"Nom du restaurant"} 
                onChange={handleOnChange} 
                name="nameSearch" 
                value={nameValueSearch || ""}/>
        </div>
    )
}

export default Barsearch
