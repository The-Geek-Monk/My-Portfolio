import CurrentTimeLineExp, {
  calculateDuration
} from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-3 mb-8 text-center">
          <p className="text-base text-gray-400">
            Hey, I'm Vasu Sehgal – a software engineer who started my journey in
            2020, diving into the world of web and mobile development with React
            and JavaScript. I'm currently a Software Engineer at Upstox. Before
            that, I worked as a backend developer at Paytm.
          </p>

          <p className="text-base text-gray-400">
            I’m based in Delhi, India, where I craft frontend experiences that
            make products more functional and visually engaging. I love
            designing interfaces, building side projects, and sharing tech
            content. When I’m not coding, I create videos for The Geek Monk on
            NIMCET, tech, and software development.
          </p>

          <p className="text-base text-gray-400">
            I’m always down to talk about frontend tools, React Native, or
            design systems – but if it's about movies, acting, or sports, count
            me out!
          </p>
        </AnimationContainer>
        <div className="h-[full] w-[full] overflow-hidden rounded-[8px]">
          <Image
            alt="Vasu Sehgal"
            height={450}
            width={1000}
            src="/study.jpeg"
            priority
            className="object-cover object-bottom h-full w-full "
          />
        </div>

        <div className="mt-12">
          <CurrentTimeLineExp />
        </div>

        {/* <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about +
            {calculateDuration('2020-01-01', false)} ago. I have tried a few
            programming languages and technology stack, both Backend and
            Frontend.
          </p>

          <p className="text-base text-gray-400">
            Event though the scope of web development is wide, I was very
            interested and focused on Frontend development.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer> */}

        {/* <ProcessWork /> */}

        {/* <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with other language like Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-400'>
            For now I'm learning how to make applications with real time communication such as a chat using Socket.IO, I'm also starting to learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming such as 3D design with Blender and video editing with Davinci Resolve (these last two I would take as a hobby).
          </p>

        </AnimationContainer> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
