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
    const [contactnum, setContactNum] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'contactnum') {
            setContactNum(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "contact"), { name, email, contactnum, message });
            console.log("Document written with ID: ", docRef.id);
            setName('');
            setEmail('');
            setContactNum('');
            setMessage('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' name='name' value={name} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' name='email' value={email} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Contact</FormLabel>
                <Input type='text' name='contactnum' value={contactnum} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Message</FormLabel>
                <Input type='textarea' name='message' value={message} onChange={handleChange} />
            </FormControl>
            <Button type='submit'>Submit</Button>
        </form>
    );
}

export default Contact;
