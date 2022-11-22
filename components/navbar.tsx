import Image from 'next/image'
import logo from "../public/assets/logo.png"
import ButtonLogout from "./buttonSignLoginLogout"
import styles from "../styles/navbar.module.css"
import { useRouter } from 'next/router'
import Barsearch from './barSearch'

const Navbar = () => {

    const route = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt={""} height={55} onClick={() => route.push("/home")} />
            </div>
            <div>
                <Barsearch />
            </div>
           <div>
                <ButtonLogout title="déconnexion" type={"logout"} />
           </div>
        </div>
    )
}

export default Navbar
