import Image from "next/image";
import LinkedinIcon from "../ui/LinkedinIcon";
import GithubIcon from "../ui/GithubIcon";
import DarkModeSwitch from "../ui/DarkModeSwitch";

const Hero = () => {
  return (
    <div className="h-screen items-center flex ">
      <div className="ml-4">
        <h1 className="font-medium text-4xl">
          Hello, I&apos;m <span className="font-bold">Elmo Nickol</span>
        </h1>
        <h3 className="text-2xl">An Aspiring Full Stack Web Developer</h3>
          <GithubIcon/>
          <LinkedinIcon/>
          <DarkModeSwitch/>        
      </div>
      <div className="flex flex-1 justify-end">
        <Image src="/hero.png" width={500} height={500} alt="your-image-alt-text" />
      </div>
    </div>
  );
};

export default Hero;
