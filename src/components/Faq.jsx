import IconStar from '/images/icon-star.svg';
import IconPlus from '/images/icon-plus.svg';
import IconMinus from '/images/icon-minus.svg';
import { useState } from 'react';

const Faq = () => {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 2,
      question: 'Is Frontend Mentor free?',
      answer:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    {
      id: 3,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ]);

  const toggle = (i) => {
    if ()
  }

  return (
    <div className='background'>
      <div className='container'>
        <div className='title'>
          <img src={IconStar} alt='Icon star' />
          <h1>FAQs</h1>
        </div>
        <ul className='list'>
          {accordions.map((acc) => (
            <div key={acc.id} className='list-item'>
              <div className='question-item'>
                <h2>{acc.question}</h2>
                <img src={IconPlus} alt='Icon Plus' />
              </div>
              <div className='line'></div>
              <div className='answer-item'>
                <p>{acc.answer}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
