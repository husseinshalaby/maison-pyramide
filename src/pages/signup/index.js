'use client'
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation';
import {
  onAuthStateChanged,
  getAuth
} from 'firebase/auth';
import { doc, setDoc,addDoc,collection,firestore } from "firebase/firestore"; 
import firebase_app from '@/firebase/config';

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  const router = useRouter()
  const auth = getAuth(firebase_app);
  const handleAuthChange = async (user) => {
    console.log('user', user)
    try {
      const data = {
        email: user.email
      }
      // await setDoc(doc(db, "users", "LA"), {
      //   name: user.email,
      //   email: user.email
      // });
      const docRef = await addDoc(collection("Users"), data);
      res.status(200).json({ id: docRef.id, ...data });
      console.log('docRef', docRef)
    } catch (error) {
      console.log('error', error)
    }
   
  }
    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // setUser(user);
            handleAuthChange(user)
            
          } else {
              // setUser(null);
          }
          // setLoading(false);
      });

      return () => unsubscribe();
  }, []);
  
  
    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }
        
        // else successful
        console.log(result)
        return router.push("/homepage")
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            <h1 className="mt-60 mb-30">Sign up</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>);
}

export default Page;