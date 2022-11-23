import { useEffect, useState } from "react";
import { useAuth } from "../Auth/Auth";
import { addAllRestaurant } from "../Firebase/storage/database";
import styles from "../styles/buttonSignLoginLogout.module.css"

const ButtonSignLoginLogout = (props : any) => {

    const { logout, user } = useAuth()
    const [message, setMessage] = useState<string>()

    const handleClick = async () => {

        switch (props.type) {
            case "login":
                props.handleSubmit
                break;
            case "sign":
                props.handleSubmit
                break;
            case "logout":
                try {
                    await logout()
                } catch (error) {
                    
                }
                break;
            case "updateData":
                addAllRestaurant()
                setMessage("bien update")
            default:
                break;
        }
    }

    return (
        <div>
            {user ? message : ""}
            <button className={styles.button} onClick={handleClick}>{props.title}</button>
        </div>
    )
}

export default ButtonSignLoginLogout
