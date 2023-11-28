import React, { useState, useEffect } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/router';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import { addDoc, collection } from "firebase/firestore"; 
import firebase_app, { db } from '@/firebase/config';

interface SignupProps {}

function Signup(props: SignupProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const auth = getAuth(firebase_app);
  
    const handleAuthChange = async (user: User | null) => {
      if (user) {
        const { uid, email } = user;
        try {
          const docRef = await addDoc(collection(db, 'users'), { id: uid, email });
          console.log('doc', docRef);
        } catch (error) {
          console.log('error', error);
        }
      }
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          handleAuthChange(user);
      });

      return () => unsubscribe();
  }, []);
  
    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault();

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error);
        }
        
        // else successful
        console.log(result);
        return router.push("/homepage");
    }

    return (
        <div className="wrapper border border-1 p-4 rounded-lg">
            <div className="form-wrapper">
                <form onSubmit={handleForm} className="form flex flex-col gap-4">
                    <label htmlFor="email">
                        <p className="p-2">Email</p>
                        <input
                            className="border border-1 rounded-lg p-2"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                            autoComplete="on"
                        />
                    </label>
                    <label htmlFor="password">
                        <p className="p-2">Password</p>
                        <input
                            className="border border-1 rounded-lg p-2"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            autoComplete="on"
                        />
                    </label>
                    <button type="submit" className="border border-1 border-black bg-gray-700 text-white rounded-md">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;