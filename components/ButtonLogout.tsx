import { useState } from "react";
import { useAuth } from "../Auth/Auth";
import styles from "../styles/buttonLogout.module.css"

const ButtonLogout = () => {

    const {logout} = useAuth()

    const handleClick = async () => {
        try {
            await logout()
        } catch (error) {
            
        }
    }

    return (
        <div>
            <button className={styles.buttonLogout} onClick={handleClick}>Déconnexion</button>
        </div>
    )
}

export default ButtonLogout
