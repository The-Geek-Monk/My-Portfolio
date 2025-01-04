import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <>
      <div className="w-full flex justify-between flex-col-reverse items-center">
        <AnimationContainer
          customClassName="w-[80px] sm:w-[176px] relative mb-6 lg:mb-0"
          children={undefined}
        ></AnimationContainer>
        <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
          <h1
            style={{
              backgroundImage:
                'linear-gradient(135deg, var(--colors-pink) 0%, var(--colors-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            className="font-bold font-montserrat text-2xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0"
          >
            Hey, I'm Vasu Sehgal
          </h1>

          <h1 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0">
            Software Developer and a Designer.
          </h1>
        </AnimationContainer>
      </div>
    </>
  );
};

export default Hero;
