import React from 'react';

const Faqs = () => {
  return (
    <>
    <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mb-16 mt-28'>
        <div className="accordion">
          <h2 className='banergradienttext mb-2 text-center'>HAVE ANY DOUBTS?</h2>
          <h1 className='text-[40px] font-bold mb-8'>Frequently Asked Questions</h1>
          {accordionData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <input type="checkbox" id={`accordion${index + 1}`} />
              <label htmlFor={`accordion${index + 1}`} className="accordion-item-title">
                <span className="icon"></span>
                {item.title}
              </label>
              <div className="accordion-item-desc">
                <ul>
                  <li className=' list-disc text-lg'>
                     {item.content}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  );
};

const accordionData = [
  {
    title: ' What is the duration of the UGC NET Preparation Courses?',
    content: ' Paper 1 Course: 3 months , Paper 2 Course: 6 months , Mock Test Series: Ongoing until the UGC NET exam date',
  },
  {
    title: 'Are the lectures live or recorded?',
    content: ' Our courses feature live lectures from top educators, which are also recorded and made available for review at any time.',
  },
  {
    title: 'How does the 24/7 doubt-solving support work?',
    content: 'You can get your queries resolved anytime through our chat and email support, as well as dedicated doubt-solving forums monitored by subject experts.',
  },
  {
    title: 'What subjects are available for UGC NET Paper 2?',
    content: 'We offer preparation for a wide range of subjects including Economics, Political Science, Philosophy, Psychology, Sociology, History, Anthropology, Commerce, Management, Education, Social Work, Public Administration, Hindi, English, and many more.',
  },
  {
    title: 'How does the personalized attention in small batch sizes benefit me?',
    content: ' Smaller batch sizes ensure individualized guidance, better interaction with educators, and enhanced peer learning, allowing for a more tailored and effective learning experience.',
  },
  {
    title: 'What types of practice questions and quizzes are included?',
    content: 'Our courses include a comprehensive question bank with extensive practice questions, regular quizzes, detailed solutions, and mock tests designed to simulate real exam conditions.',
  },
  {
    title: 'How is my performance analyzed during the course?',
    content: 'We provide detailed feedback on your performance through progress tracking and performance reports, helping you identify strengths and areas for improvement. Personalized improvement plans are also offered based on your performance.',
  },

  {
    title: " What happens if I miss a live lecture?",
    content: 'If you miss a live lecture, you can access the recorded session at your convenience. All live sessions are recorded and made available for review.',
  }
];

export default Faqs;
