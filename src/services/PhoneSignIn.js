// src/services/PhoneSignIn.js

import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from './firebaseConfig'; // Adjust the path accordingly

function PhoneSignIn() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);

    const auth = getAuth(app);

    const handleSendCode = async () => {
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        const result = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
        setConfirmationResult(result);
    };

    const handleVerifyCode = async () => {
        try {
            const result = await confirmationResult.confirm(verificationCode);
            console.log("User signed in:", result.user);
        } catch (error) {
            console.error("Error verifying code:", error);
        }
    };

    return (
        <div>
            <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
            <button onClick={handleSendCode}>Send Verification Code</button>

            <input value={verificationCode} onChange={e => setVerificationCode(e.target.value)} placeholder="Verification Code" />
            <button onClick={handleVerifyCode}>Verify Code</button>

            {/* This div is required for the reCAPTCHA */}
            <div id="recaptcha-container"></div>
        </div>
    );
}

export default PhoneSignIn;
