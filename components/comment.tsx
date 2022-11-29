import React, { use, useState } from "react"
import { commenter } from "../Firebase/storage/database"
import styles from "../styles/commenter.module.css"
import Image from 'next/image'
import userIcon from "../public/assets/userIcon.png"
import { useAuth } from "../Auth/Auth"
import Star from "./star"

const Comment = (props: any) => {

    const [newComment, setNewComment] = useState<string>();
    const [notification, setNotification] = useState<string>();
    const {user} = useAuth()

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(event.target.value);
    }

    const hanlderSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (newComment !== undefined && newComment.length > 0) {
            const checkingRateUser = props.liker === false ? false : props.myRate;
            commenter(props.restaurantName, props.user, newComment, checkingRateUser);
            props.reload(props.restaurantName);
            setNewComment('');
            setNotification("les commentaire est bien enrengistré");
        } else {
            console.log("error");
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
                                    value={newComment || ""}
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
                                {commentaire.rate === false
                                ?
                                    ""
                                :
                                    <Star page="comment" myRate={user.email === commentaire.email ? props.myRate : commentaire.rate}/>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Comment