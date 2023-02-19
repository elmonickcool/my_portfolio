
const Hero = () => {

  return (
    <div className="h-screen flex items-center">
      <div className="mr-8">
        <h1 className="font-medium text-4xl">Hello, I'm <span className="text-blue-900">Elmo Nickol</span></h1>
        <h3 className="text-2xl">An Aspiring Full Stack Web Developer</h3>
      </div>
      <div className="flex justify-end flex-1">
        <img src="hero.png" alt="your-image-alt-text" />
      </div>
    </div>
  );
};

export default Hero;
