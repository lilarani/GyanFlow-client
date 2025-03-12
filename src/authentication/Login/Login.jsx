import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { useNavigate } from "react-router";


export default function Login() {
    let navigate = useNavigate()




    // we can use loading state , when user sing-in 

    // let { loader } = useSelector((state) => state.loader)
    // console.log(loader)


    let handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log('login user ok');
            navigate('/')

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-bl from-blue-950 to-[#3d023f] p-6">
            <div className="w-full text-white my-shadow max-w-md rounded-none  p-6 shadow-md">
                <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>
                <form >
                    <input
                        type="email"
                        placeholder="Email"
                        className="mb-2 w-full rounded-none outline-none border p-2 "
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="mb-4 w-full rounded-none outline-none border p-2 "
                        required
                    />
                    <button
                        type="submit"
                        className="mb-2 w-full cursor-pointer rounded-none btn-1 p-2 text-white "
                    >
                        Sign In
                    </button>
                </form>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full btn-1 cursor-pointer flex items-center justify-center gap-2 rounded-none border p-2 hover:bg-gray-200"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}
