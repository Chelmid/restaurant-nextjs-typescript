import Image from 'next/image'
import logo from "../public/assets/logo.png"
import ButtonLogout from "./ButtonLogout"
import styles from "../styles/navbar.module.css"
import { useAuth } from '../Auth/Auth'
import { useRouter } from 'next/router'

const Navbar = () => {

    const { user } = useAuth();
    const route = useRouter();

    return (
        <div className={styles.container}>
            <div>
                {/* {user.email} */}
            </div>
            <div className={styles.logo}>
                <Image src={logo} alt={""} height={55} onClick={() => route.push("/home")} />
            </div>
           <div>
                <ButtonLogout />
           </div>
        </div>
    )
}

export default Navbar
