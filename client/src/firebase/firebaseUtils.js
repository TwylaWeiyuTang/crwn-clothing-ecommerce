// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, query, writeBatch } from "firebase/firestore"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjxpRqN3ixOjwZ7KXfRyoiJXj_hZPHoI4",
  authDomain: "crwn-db-f5260.firebaseapp.com",
  projectId: "crwn-db-f5260",
  storageBucket: "crwn-db-f5260.appspot.com",
  messagingSenderId: "527934674908",
  appId: "1:527934674908:web:54e66f9087dd8cbb33a119",
  measurementId: "G-73LN0WZTYJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
export const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // if there is no userAuth (user is not signed in), return nothing

    const docRef = doc(db, `users/${userAuth.uid}`);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) { // if the user id does not exist in our database, then we create one 
        // document for that relative user
        const {displayName, email} = userAuth
        const createdAt = new Date() // the first time the user logged in

        try {
            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return docRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, `${collectionKey}`)
    // create an collection reference by passing in the key value
    // here it's the name of the collectionsa
    console.log(collectionRef)

    const batch = writeBatch(db) // execute multiple write operations as a single batch
    // so if the write successful, it means all the documents are added, if it fails, then 
    // everything fails together

    // did not use batch write here, because if we want to use batch write, we need the document
    // reference that already exists
    // but below we are initiating our document reference for the first time
    
    objectsToAdd.forEach(async obj => {
        const newDocRef = await addDoc(collection(db, `${collectionKey}`), {obj})
        // create document reference with auto-generated id, by using addDoc() and collection name
        // witout setting any real data 
    })

    

} // create a new collection by passing in an relevant key and objects for the key

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {
        const {title, items} = doc.data()["obj"]
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        // passing in different collection's title into our accumulator object and make its value
        // equals to that relative collection's collection value
        // so here the title of our five collections are the keys
        return accumulator
    }, {}) // the initial value is an empty object
} // fetching the collections data from firestore

const provider = new GoogleAuthProvider();
export const auth = getAuth();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    
    // if user is signed in with Google, then direct them to the shop page
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location = '/shop'
        }
      });
   
};
//  prompt users to sign in with their Google Accounts by opening a pop-up window 