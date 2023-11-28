import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/router';

interface LoginProps {}

function Login(props: LoginProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error);
        }
        // else successful
        console.log(result);
        return router.push("/homepage");
    };

    return (
        <div className="wrapper border border-1 p-4 rounded-lg">
            <main className="form-wrapper">
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
                        Login
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Login;