
import React from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from './firebaseConfig'; 
function GoogleSignIn() {
    const auth = getAuth();

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User signed in:", user);
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    return (
        <button onClick={handleSignIn}>Sign in with Google</button>
    );
}

export default GoogleSignIn;
