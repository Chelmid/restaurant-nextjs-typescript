import Image from 'next/image'
import logo from "../public/assets/logo.png"
import styles from "../styles/Navbar.module.css"
import { useRouter } from 'next/router'
import BarSearch from './barSearch'
import ButtonSignLoginLogout from './buttonSignLoginLogout'
import { useState } from 'react'

const Navbar = (props: any) => {

    const route = useRouter();
    const [statusClickLogo, setStatusClickLogo] = useState<boolean>(false);

    const barValueSearch = (name: string) => {
        if (statusClickLogo && name?.length > 0) {
            props.search();
        } else {
            setStatusClickLogo(false);
            props.search(name);
        }
    }

    const handlerClick = () => {
        setStatusClickLogo(true);
        route.push("/home");
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt={""} height={55} onClick={handlerClick} />
            </div>
            <div>
                {route.pathname === "/home" ? <BarSearch barSearch={barValueSearch} statusClickLogo={statusClickLogo}/> : ""}
            </div>
            <div className={styles.line}>
                <ButtonSignLoginLogout title="updateData" type={"updateData"} />
                <ButtonSignLoginLogout title="déconnexion" type={"logout"} />
            </div>
        </div>
    )
}

export default Navbar
