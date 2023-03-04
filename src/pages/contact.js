import { initializeApp } from "@firebase/app";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCUcqxTcbOssPiKqg6Weg256KkUlT_0Vxg",
    authDomain: "my-contact-form-5be52.firebaseapp.com",
    projectId: "my-contact-form-5be52",
    storageBucket: "my-contact-form-5be52.appspot.com",
    messagingSenderId: "507303115058",
    appId: "1:507303115058:web:5d9baf3ca19f238e35ff2b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "contacts"), { name, email });
            console.log("Document written with ID: ", docRef.id);
            setName('');
            setEmail('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Button type='submit'>Submit</Button>
        </form>

    );

}

export default Contact