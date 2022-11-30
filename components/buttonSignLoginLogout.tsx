import { use, useEffect, useState } from "react";
import { useAuth } from "../Auth/Auth";
import { addAllRestaurant } from "../Firebase/storage/database";
import styles from "../styles/ButtonSignLoginLogout.module.css"
import { useRouter } from "next/navigation";

const ButtonSignLoginLogout = (props: any) => {

    const { logout, user } = useAuth();
    const router = useRouter()
    const [notification, setNotification] = useState<string>();
    const [count, setCount] = useState(0);

    const handleClick = async () => {

        switch (props.type) {
            case "login":
                props.handleSubmit;
                break;
            case "sign":
                props.handleSubmit;
                break;
            case "logout":
                try {
                    await logout();
                } catch (error) {

                }
                break;
            case "updateData":
                addAllRestaurant()
                setNotification("le update est en cours, Veuillez patintez ...");
                setTimeout(() => {
                    router.refresh()
                }, 3000);

            default:
                break;
        }
    }

    return (
        <div>
            {user ? notification : ""}
            <button className={styles.button} onClick={handleClick}>{props.title}</button>
        </div>
    )
}

export default ButtonSignLoginLogout
