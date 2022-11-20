import { useState } from "react";
import { useRouter } from 'next/router'
import { useAuth } from "../Auth/Auth";

export const SignIn = () => {

    const [data, setData] = useState<{ [x: string]: string }>();
    const [message, setMessage] = useState<string>();
    const router = useRouter()

    const { user, signup } = useAuth()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const test = await signup(data!.username, data!.password)
            console.log(test)
        } catch (err) {
            console.log(err)
        }
    }

    // const CreateUserWithEmail = (email: string, password: string) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             // ...
    //             if(Object.keys(user).length > 0){
    //                 setMessage('Vous etes bien inscrit')
    //                 router.push("/home", {query: { name: 'Someone' }})
    //             }
    //         }).catch((error) => {
    //             const errorMessage = error.message;
    //             setMessage(error.message)
    //             switch (errorMessage) {
    //                 case "Firebase: Password should be at least 6 characters (auth/weak-password).":
    //                     setMessage("6 characteres minimaux")
    //                     break;

    //                 case "Firebase: Error (auth/missing-email).":
    //                     setMessage("il manque le email")
    //                     break;

    //                 case "Firebase: Error (auth/invalid-email).":
    //                     setMessage("le email ou le mot de passe est incorrect")
    //                     break;

    //                 case "Firebase: Error (auth/internal-error).":
    //                     setMessage("il manque un mot de passe")
    //                     break;

    //                 default:
    //                     break;
    //             }
    //         });
    // }

    return (
        <div>
            <div>Sign in</div>
            {message?.length && <div>{message}</div>}
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={data?.username || ""}
                        onChange={handleChange}
                    />

                </label>
                <label>Enter your password:
                    <input
                        type="password"
                        name="password"
                        value={data?.password || ""}
                        onChange={handleChange}
                    />

                </label>
                <input type="submit" />
            </form>
            <button type="button" onClick={() => router.push('/')}>
                Click me
            </button>
        </div>
    )
}

export default SignIn