import React, { useState } from "react"
import { commenter } from "../Firebase/storage/database"
import styles from "../styles/commenter.module.css"
import Image from 'next/image'
import userIcon from "../public/assets/userIcon.png"

const Comment = (props: any) => {

    const [message, setMessage] = useState<string>()
    const [notification, setNotification] = useState<string>()

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    const hanlderSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (message !== undefined && message.length > 0) {
            commenter(props.restaurant, props.user, message)
            props.reload(props.restaurant)
            setMessage('')
            setNotification("les commentaire est bien enrengistré")
        } else {
            console.log("error")
        }
    }

    return (
        <div className={styles.container}>
            <h3>Commentaires</h3>
            <div className={styles.containerComment}>
                <div className={styles.containerForm}>
                    <form onSubmit={hanlderSubmit}>
                        <label>
                            <div className={styles.alignElement}>
                                <textarea
                                    className={styles.textInput}
                                    name="message"
                                    value={message || ""}
                                    onChange={handleChange}
                                    placeholder='Mettre un commentaire'
                                    rows={6}
                                    cols={45}
                                />
                            </div>
                        </label>
                        <div className={styles.alignElement}>
                            <input type="submit" value="valider" className={styles.button} />
                        </div>
                    </form>
                </div>
                <div>
                    {props.commentaires.map((commentaire: any, i: number) =>
                        <div key={i} className={styles.containerUserMessage}>
                            <div className={styles.containerUser}>
                                <Image src={userIcon} alt={"logo"} height={30} />
                                <div>{commentaire.email}</div>
                                <div>{commentaire.date}</div>
                            </div>
                            <div className={styles.containerMessage}>
                                <div>{commentaire.message}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Comment