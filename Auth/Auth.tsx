import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/config"

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

//provider Auth
export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                })
            } else {
                setUser(null);
            }
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    //inscription
    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //connexion
    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //déconnection
    const logout = async () => {
        setUser(null);
        await signOut(auth);
    }

    const googleSignup = () => {
        return signInWithPopup(auth, provider);
    }

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, googleSignup }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}