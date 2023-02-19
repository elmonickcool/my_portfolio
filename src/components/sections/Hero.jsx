import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="ml-4">
        <h1 className="font-medium text-4xl">
          Hello, I'm <span className="text-blue-900">Elmo Nickol</span>
        </h1>
        <h3 className="text-2xl">An Aspiring Full Stack Web Developer</h3>
        <FontAwesomeIcon icon={faGithub} className="text-3xl text-black" />
        <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-black" />
      </div>
      <div className="flex justify-end flex-1">
        <Image src="/hero.png" width={500} height={500} alt="your-image-alt-text" />
      </div>
    </div>
  );
};

export default Hero;
