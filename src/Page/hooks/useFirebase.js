import { useEffect, useState } from "react"
import initializeApplication from "../HomeComponent/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
initializeApplication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()



    //registration
    const registerUser = (email, name, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newData = { email, displayName: name }
                setUser(newData)
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch(() => { })
                setAuthError('')
                history.replace('/')
            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))


    }
    //login
    const logIn = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                setUser(result.user)
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    // user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)

        })
        return () => unsubscribe

    }, [])
    // LogOut
    const LogOut = () => {
        signOut(auth)
            .then(result => {
                setAuthError('')
            })
            .catch((error) => {

                setAuthError(error.message)
            });
    }

    // verify Admin
    useEffect(() => {
        fetch(`https://serene-bayou-12088.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))
    }, [user?.email])

    //saver user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://serene-bayou-12088.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return {
        logIn,
        LogOut,
        registerUser,
        user,
        authError,
        isLoading, admin
    }

}
export default useFirebase