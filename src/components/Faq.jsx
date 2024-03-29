import IconStar from '/images/icon-star.svg';
import IconPlus from '/images/icon-plus.svg';
import IconMinus from '/images/icon-minus.svg';
import { useState } from 'react';

const Faq = () => {
  const [open, setOpen] = useState(false);
  const data = [
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
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing itemess to a range of projects suitable for all skill levels.',
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
  ];

  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }

    setOpen(i);
  };

  return (
    <div className='background'>
      <div className='container'>
        <div className='title'>
          <img width={35} src={IconStar} alt='Icon star' />
          <h1>FAQs</h1>
        </div>
        <ul className='list'>
          {data.map((item, i) => (
            <div key={item.id} className='list-item'>
              <div onClick={() => toggle(i)} className='question-item'>
                <h2>{item.question}</h2>
                <span>
                  {open === i ? (
                    <img src={IconMinus} alt='Icon Minus' />
                  ) : (
                    <img src={IconPlus} alt='Icon Plus' />
                  )}
                </span>
              </div>
              <div className='answer-item'>
                {open === i ? <p>{item.answer}</p> : null}
              </div>
              <div className='line'></div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
