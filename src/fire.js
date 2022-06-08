import { firebase } from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDSSY5RCuFPsSl8LKLd__07zuvrvi4qWJ0',
  authDomain: 'booking-66311.firebaseapp.com',
  projectId: 'booking-66311',
  storageBucket: 'booking-66311.appspot.com',
  messagingSenderId: '314409313971',
  appId: '1:314409313971:web:d551a0cf75348245dbf2c6',
  measurementId: 'G-H642ZFE0FL',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
