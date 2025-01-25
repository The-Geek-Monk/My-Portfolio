import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/jeandv';

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer
          title="Projects"
          color="linear-gradient(135deg, var(--colors-yellow) 0%, var(--colors-pink) 100%)"
        />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-400">
            Here are some of the personal projects I’ve worked on during my
            programming journey. Each project reflects my passion for learning,
            experimenting, and building solutions while improving my skills with
            different technologies.
          </p>
        </AnimationContainer>

        <SearchAllProjects />
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
