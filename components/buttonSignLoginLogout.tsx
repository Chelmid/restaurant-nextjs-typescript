import { useState } from "react";
import { useAuth } from "../Auth/Auth";
import styles from "../styles/buttonLogout.module.css"

const ButtonLogout = (props : any) => {

    const {logout} = useAuth()

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
        
            default:
                break;
        }
    }

    return (
        <div>
            <button className={styles.button} onClick={handleClick}>{props.title}</button>
        </div>
    )
}

export default ButtonLogout
