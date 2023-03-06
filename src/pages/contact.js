import { initializeApp } from "@firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "@firebase/firestore";
import { FormControl, FormLabel, Input, Button, Box, Heading, useColorMode, Textarea, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';

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
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { colorMode } = useColorMode();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'contactnum':
                setContactNum(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const getFontAwesomeIcon = (icon) => (
        <FontAwesomeIcon
            icon={icon}
            className={`text-xl mx-2 ${colorMode === "light" ? "text-black" : "text-white"}`}
        />
    );

    const handleSubmit = async (event) => {
        const id = uuidv4();
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "contact"), { id, name, email, contactnum, message, timestamp: serverTimestamp() });
            console.log("Document written with ID: ", docRef.id);
            setName('');
            setEmail('');
            setContactNum('');
            setMessage('');
            setFormSubmitted(true);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <>

            {formSubmitted ? (
                <Box textAlign='center' mt={8}>
                    <Heading size='lg'>Thank you for filling out the form. I will reply to you via email.</Heading>
                </Box>
            ) : (
                <Heading textAlign='center'>Contact Me!</Heading>
            )

            }

            <Flex flexWrap="wrap" justifyContent={["center", "space-between"]}>
                <Box mr={[0, 8]} mb={4} flexBasis={["100%", "auto"]}>
                    <Text mb={5} textAlign="center">Contact Information</Text>
                    <Box me={5} textAlign={["center", "left"]}>
                        <Box mt={5}>
                            {getFontAwesomeIcon(faPhone)} 09123456789
                        </Box>
                        <Box mt={5}>
                            {getFontAwesomeIcon(faEnvelope)} elmonickol@gmail.com
                        </Box>
                        <Box mt={5}>
                            {getFontAwesomeIcon(faLocationDot)} Philippines
                        </Box>
                    </Box>
                </Box>
                <Box flex={1} p={[4, 8]}>
                    <form onSubmit={handleSubmit}>
                        <Box mb={5}>
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
                                <Textarea name='message' value={message} onChange={handleChange} />
                            </FormControl>
                        </Box>
                        <Button type='submit' onClick={handleSubmit}>
                            Submit
                        </Button>
                    </form>
                </Box>

            </Flex>
        </>
    );
}

export default Contact;