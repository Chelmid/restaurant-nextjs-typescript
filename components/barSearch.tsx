import { useEffect, useState } from "react";
import styles from "../styles/BarStyle.module.css"

const BarSearch = (props : any) => {

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

export default BarSearch
