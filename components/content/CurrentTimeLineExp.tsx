'use client';
import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Vasu_Sehgal_Resume.pdf'; // Ensure your resume is in the public folder
    link.download = 'Vasu_Sehgal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Timeline>
        <TimelineEvent active>
          <TimelineEvent.Title>
            <a
              href="https://www.ia.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              Upstox
            </a>{' '}
            | Working here - {calculateDuration('2022-07-04', true)}
          </TimelineEvent.Title>

          <TimelineEvent.Description>
            Led frontend development with end-to-end ownership across key
            projects like Mutual Funds, NCD, and Health/Motor Insurance,
            ensuring seamless delivery from concept to deployment. Built
            scalable web and mobile applications using React, React Native,
            Next.js, Tailwind CSS, and TypeScript, focusing on clean
            architecture and pixel-perfect design. Developed reusable UI
            components, leveraging Storybook for consistency. Collaborated
            remotely with agile teams, utilizing Git, Bitbucket, and Jira to
            drive project success.{' '}
          </TimelineEvent.Description>
        </TimelineEvent>

        <TimelineEvent>
          <TimelineEvent.Title>
            Upstox Internship | March. 2022 - June. 2022
          </TimelineEvent.Title>

          <TimelineEvent.Description>
            Developed and refined frontend features for **Pro-Web3**, Upstox's
            trading platform, focusing on **new screens, theme revamp, and chart
            issue fixes**. Took ownership of **UI components** using **React,
            Next.js, and SCSS** to improve performance and design. Worked
            closely with senior engineers to deliver a seamless, responsive user
            experience and smooth feature rollouts.
          </TimelineEvent.Description>
        </TimelineEvent>

        <TimelineEvent last>
          <TimelineEvent.Title>
            Paytm Internship | Jan. 2022 - March. 2022
          </TimelineEvent.Title>

          <TimelineEvent.Description>
            Developed a CRUD API to optimize data operations and system
            performance. Implemented test cases to reduce bugs and improve
            reliability. Gained in-depth knowledge of project architecture and
            coding standards during onboarding.
          </TimelineEvent.Description>
        </TimelineEvent>
      </Timeline>
      <div className="text-center">
        <button
          onClick={downloadResume}
          className="hidden lg:inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold px-[16px] py-2 rounded-md transition-transform transform hover:scale-105"
        >
          Download Resume
        </button>
      </div>
    </>
  );
};

export default CurrentTimeLineExp;
