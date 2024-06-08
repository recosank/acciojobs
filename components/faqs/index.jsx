import React from 'react';

const Faqs = () => {
  return (
    <>
    <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mb-16 mt-10'>
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
                {item.content}
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
    title: 'What is SEO, and why is it important for online businesses?',
    content: 'SEO, or Search Engine Optimization, is the practice of optimizing a website to improve its visibility on search engines like Google. It involves various techniques to enhance a site\'s ranking in search results. SEO is crucial for online businesses as it helps drive organic traffic, increases visibility, and ultimately leads to higher conversions.',
  },
  {
    title: 'How long does it take to see results from SEO efforts?',
    content: 'The timeline for seeing results from SEO can vary based on several factors, such as the competitiveness of keywords, the current state of the website, and the effectiveness of the SEO strategy. Generally, it may take several weeks to months before noticeable improvements occur. However, long-term commitment to SEO is essential for sustained success.',
  },
  {
    title: 'What are the key components of a successful SEO strategy?',
    content: 'A successful SEO strategy involves various components, including keyword research, on-page optimization, quality content creation, link building, technical SEO, and user experience optimization. These elements work together to improve a website\'s relevance and authority in the eyes of search engines.',
  },
  {
    title: 'How does mobile optimization impact SEO?',
    content: 'Mobile optimization is crucial for SEO because search engines prioritize mobile-friendly websites. With the increasing use of smartphones, search engines like Google consider mobile responsiveness as a ranking factor. Websites that provide a seamless experience on mobile devices are more likely to rank higher in search results.',
  },
  {
    title: 'What is the role of backlinks in SEO, and how can they be acquired?',
    content: 'Backlinks, or inbound links from other websites to yours, play a significant role in SEO. They are considered a vote of confidence and can improve a site\'s authority. Quality over quantity is crucial when acquiring backlinks. Strategies for obtaining backlinks include creating high-quality content, guest posting, reaching out to industry influencers, and participating in community activities. It\'s important to focus on natural and ethical link-building practices.',
  },
  {
    title: 'What is the role of backlinks in SEO, and how can they be acquired?',
    content: 'Backlinks, websites to yours, play a significant role in SEO. They are considered a vote of confidence and can improve a site\'s authority. Quality over quantity is crucial when acquiring backlinks. Strategies for obtaining backlinks include creating high-quality content, guest posting, reaching out to industry influencers, and participating in community activities. It\'s important to focus on natural and ethical link-building practices.',
  },
  {
    title: 'What is the role of backlinks in SEO, and how can they be acquired?',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate unde ut aperiam consequuntur sed impedit quia voluptates enim non optio exercitationem veritatis, natus necessitatibus assumenda labore voluptatum nihil quibusdam!',
  },
];

export default Faqs;
