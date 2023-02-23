import LinkedinIcon from "../ui/LinkedinIcon";
import GithubIcon from "../ui/GithubIcon";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="h-screen items-center flex">
      <div className="ml-6">
        <GithubIcon />
        <LinkedinIcon />        
        <h1 className="font-medium text-4xl">
          Hello, I&apos;m <span className="font-bold">Elmo Nickol</span>
        </h1>
        <TypeAnimation
          sequence ={[
            'An Aspiring Full Stack Web Developer',
            1000,
            'An Aspiring Software Engineer',
            1000,
            'An Aspiring Front-end Developer',
            1000,
            'An Aspiring Back-end Developer',
            1000,
          ]}
          speed={30}
          style={{ fontSize: '2em' }}
          wrapper="span"
          repeat={Infinity}
        />
        
      </div>
      <div className="flex flex-1 justify-end">
        <img src="/hero.png" width={500} height={500} alt="landing image" />
      </div>
    </div>
  );
};

export default Hero;
