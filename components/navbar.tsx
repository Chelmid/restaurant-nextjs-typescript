import Image from 'next/image'
import logo from "../public/assets/logo.png"
import styles from "../styles/navbar.module.css"
import { useRouter } from 'next/router'
import Barsearch from './barSearch'
import ButtonSignLoginLogout from './buttonSignLoginLogout'

const Navbar = (props : any) => {

    const route = useRouter();

    const test = (name : string) => {
        props.search(name)
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt={""} height={55} onClick={() => route.push("/home")} />
            </div>
            <div>
                <Barsearch barSearch={test} />
            </div>
           <div className={styles.line}>
                <ButtonSignLoginLogout title="updateData" type={"updateData"} />
                <ButtonSignLoginLogout title="déconnexion" type={"logout"} />
           </div>
        </div>
    )
}

export default Navbar
