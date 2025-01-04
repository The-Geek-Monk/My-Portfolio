import AnimationContainer from '../utils/AnimationContainer';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <>
      <AnimationContainer customClassName="w-full mb-6 mt-4 flex flex-col items-center">
        <p className=" text-gray-400 w-[80%] max-w-2xl">
          A Delhi native and proud alumnus of Delhi University, graduating with
          a masters degree in Computer Science. I'm a software engineer with an
          insatiable creative appetite. At Upstox, I weave digital magic into
          reality, crafting seamless experiences across web and mobile platforms
          - because I believe great frontend development is where functionality
          meets imagination.
        </p>
        <div className="h-[370px] w-[400px] overflow-hidden rounded-[8px] my-4">
          <Image
            alt="Vasu Sehgal"
            height={300}
            width={400}
            src="/vasu.jpeg"
            priority
            className="object-cover object-bottom h-full w-full "
          />
        </div>

        <p className=" text-gray-400 w-[80%] mt-4">
          When I'm not crafting code or diving into tech, you'll find me scoring
          goals on the soccer field or smashing birdies on the badminton court.
          I play sports like I debug – with precision, strategy, and a love for
          the game. Whether it's a quick match or a full-on tournament, I'm
          always ready to sweat and outsmart the competition, on and off the
          screen.
        </p>

        <div className="w-[80%] mt-3">
          <blockquote className="text-gray-400 border-l-2 italic pl-2 my-2 font-mono">
            Stay Hungry Stay Foolish
          </blockquote>
        </div>
      </AnimationContainer>
    </>
  );
};

export default AboutMe;
