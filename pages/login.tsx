import { useState } from "react";
import { useRouter } from 'next/router'
import { useAuth } from "../Auth/Auth";
import styles from "../styles/LoginAndSign.module.css"
import Image from 'next/image'
import logo from "../public/assets/logo.png"
import logoGoogle from "../public/assets/logoGoogle.png"
import Link from "next/link";
import ButtonSignLoginLogout from "../components/buttonSignLoginLogout";

const LoginIn = () => {

    const [data, setData] = useState<{ [x: string]: string }>();
    const [message, setMessage] = useState<string>();
    const { user, login, googleSignup } = useAuth()
    const router = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await login(data!.username, data!.password)
                router.push('/home')
        } catch (err) {
            switch (JSON?.parse(JSON.stringify(err)).code) {
                case "auth/weak-password":
                    setMessage("6 characteres minimaux")
                    break;

                case "auth/missing-email":
                    setMessage("L'email est incorrect")
                    break;

                case "auth/invalid-email":
                    setMessage("le email ou le mot de passe est incorrect")
                    break;

                case undefined:
                    setMessage("le email ou le mot de passe est incorrect")
                    break;

                case "auth/internal-error":
                    setMessage("Mot de passe est incorrect")
                    break;
                case "auth/email-already-in-use":
                    setMessage("L'email existe déja")
                    break;
                case "auth/wrong-password":
                    setMessage("Mot de passe est incorrect")
                    break;
                case "auth/user-not-found":
                    setMessage("L'email n'a pas été trouvé")
                default:
                    break;
            }
        }
    }

    const googleClick = async () => {
        try {
            await googleSignup()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageCenter}>
                <Image src={logo} alt={"logo"} height={100} />
            </div>
            <div className={styles.textCenter}>Connexion</div>
            {<div className={styles.ErrorMessage}>{message?.length && message}</div>}
            <form onSubmit={handleSubmit}>
                <label className={styles.textFontAndSize}>Email :
                    <div className={styles.centerElement}>
                        <input
                            className={styles.textInput}
                            type="text"
                            name="username"
                            value={data?.username || ""}
                            onChange={handleChange}
                        />
                    </div>
                </label>
                <label className={styles.textFontAndSize}>Mot de passe :
                    <div className={styles.centerElement}>
                        <input
                            className={styles.textInput}
                            type="password"
                            name="password"
                            value={data?.password || ""}
                            onChange={handleChange}
                        />
                    </div>
                </label>
                <div className={styles.centerElement}>
                    <ButtonSignLoginLogout title="Valider" type={"login"} handleSubmit={handleSubmit} />
                </div>
            </form>
            <div className={styles.line}>
                <div>{"Vous n'avez pas de compte ?"}</div>
                <Link className={styles.link} href="/sign">
                    <div>Inscrivez-vous</div>
                </Link>
            </div>
            <Image onClick={googleClick} className={styles.buttonGoogle} src={logoGoogle} alt={"logoGoogle"} height={35} />
        </div>
    )
}

export default LoginIn

