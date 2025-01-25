import AnimationContainer from '../utils/AnimationContainer';

const ContactMe = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-center">
        <hr className="w-[80%] border border-gray-600 mb-8" />
      </div>

      <AnimationContainer customClassName="w-[80%] flex justify-center">
        <div className="flex flex-col items-center justify-between sm:flex-row w-full">
          <div
            className="relative p-1 rounded"
            style={{
              backgroundImage:
                'linear-gradient(rgba(52, 211, 153, 0.8), rgba(52, 211, 153, 0.3))'
            }}
          >
            <div className="p-4 bg-gray-800">
              <div className="flex items-center">
                <svg className="w-10 h-10" viewBox="0 0 168 168">
                  <title>listening to on spotify</title>
                  <path
                    fill="#1ED760"
                    d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                  ></path>
                </svg>
                <div
                  className="flex flex-col ml-4"
                  style={{ maxWidth: '200px' }}
                >
                  <span className="text-white">Not playing anything rn.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 sm:mt-0 ml-2 gap-2 md:gap-4 md:ml-4">
            <a
              href="https://www.linkedin.com/in/vasu-sehgal-a28085144/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex p-2 text-gray-600 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="https://github.com/The-Geek-Monk"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex p-2 text-gray-600 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default ContactMe;
