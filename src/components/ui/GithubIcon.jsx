import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubIcon=()=>{
    return(
         <Link as={NextLink} href="https://github.com/elmonickcool">
          <FontAwesomeIcon icon={faGithub} className="text-3xl text-black mx-2" />
        </Link>
    )
}

export default GithubIcon