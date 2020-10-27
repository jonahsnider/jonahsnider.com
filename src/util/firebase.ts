import firebase from 'firebase/app';
import 'firebase/performance';
import 'firebase/analytics';

export const firebaseConfig = {
	apiKey: 'AIzaSyB2K96MTyheJHICyc_b4A2H_xqwJAaThRI',
	authDomain: 'jonah-pw.firebaseapp.com',
	databaseURL: 'https://jonah-pw.firebaseio.com',
	projectId: 'jonah-pw',
	storageBucket: 'jonah-pw.appspot.com',
	messagingSenderId: '656209637531',
	appId: '1:656209637531:web:d509789dbeed1bc5a4563e',
	measurementId: 'G-H1RLH0YRTE'
};

// Only keep a single app initialized
// This helps when the page rerenders
export const firebaseApp = firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const performance = firebase.performance();

firebase.analytics
	.isSupported()
	.then(supported => {
		if (supported) {
			firebase.analytics();
		}
	})
	.catch(error => console.error("Firebase Analytics couldn't initialize", error));

export default firebaseApp;
