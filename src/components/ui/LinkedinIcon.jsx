import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@chakra-ui/react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const LinkedinIcon =()=>{
    return(
        <Link as={NextLink} href="https://www.linkedin.com/in/elmonickcool">
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-black mx-2" />
        </Link>
    )
}
export default LinkedinIcon