// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAd-e0qsR7XhQZM1D1I2BN-kOOTd2Hfnpo',
	authDomain: 'nyhetapp.firebaseapp.com',
	projectId: 'nyhetapp',
	storageBucket: 'nyhetapp.appspot.com',
	messagingSenderId: '326631280660',
	appId: '1:326631280660:web:54a11b957bc024c0155701',
	measurementId: 'G-TNMSQNXHVZ',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
