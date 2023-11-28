import firebase_app from "../config";
import { createUserWithEmailAndPassword, Auth, getAuth } from "firebase/auth";

const auth: Auth = getAuth(firebase_app);

interface SignUpResult {
  result: any;
  error: any;
}

export default async function signUp(email: string, password: string): Promise<SignUpResult> {
  let result: any = null,
      error: any = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}