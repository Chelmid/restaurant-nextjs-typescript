import Image from 'next/image'
import logo from "../public/assets/logo.png"
import styles from "../styles/navbar.module.css"
import { useRouter } from 'next/router'
import Barsearch from './barSearch'
import ButtonSignLoginLogout from './buttonSignLoginLogout'
import { useState } from 'react'

const Navbar = (props: any) => {

    const route = useRouter();
    const [status, setStatus] = useState<boolean>(false)
    const [reloadHome, setReloadHome] = useState<boolean>(false)

    const barSearch = (name: string) => {
        if (status && name?.length > 0) {
            props.search()
            setStatus(false)
        } else {
            props.search(name)
            setStatus(false)
        }
    }

    const handlerClick = () => {
        setStatus(true)
        route.push("/home")
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt={""} height={55} onClick={handlerClick} />
            </div>
            <div>
                {route.pathname === "/home" ? <Barsearch barSearch={barSearch} status={status}/> : ""}
            </div>
            <div className={styles.line}>
                <ButtonSignLoginLogout title="updateData" type={"updateData"} />
                <ButtonSignLoginLogout title="déconnexion" type={"logout"} />
            </div>
        </div>
    )
}

export default Navbar
