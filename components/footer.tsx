import footerStyles from "../styles/Footer.module.css"

const Footer = () => {

    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.col}>
                <div className={footerStyles.containerElement}>
                    <div className={footerStyles.title}>Pour mieux nous connaître</div>
                    <div className={footerStyles.item}>
                        À propos
                    </div>
                    <div className={footerStyles.item}>
                        Carrières
                    </div>
                </div>
                <div className={footerStyles.containerElement}>
                    <div className={footerStyles.title}>Informations</div>
                    <div className={footerStyles.item}>
                        Les restaurants
                    </div>
                    <div className={footerStyles.item}>
                        Les recherches
                    </div>
                    <div className={footerStyles.item}>
                        votre compte
                    </div>
                </div>
                <div className={footerStyles.containerElement}>
                    <div className={footerStyles.title}>{"Besoin d'aide ?"}</div>
                    <div className={footerStyles.item}>
                        Voir ou suivre vos restaurants
                    </div>
                    <div className={footerStyles.item}>
                        Service Client
                    </div>
                    <div className={footerStyles.item}>
                        Accessibilité
                    </div>
                </div>
                <div className={footerStyles.containerElement}>
                    <div className={footerStyles.title}>Classement</div>
                    <div className={footerStyles.item}>
                        Certifier
                    </div>
                    <div className={footerStyles.item}>
                        droits
                    </div>
                </div>
            </div>
            <div className={footerStyles.copyRight}>
                Copyright©
            </div>
        </footer>
    )
}

export default Footer
