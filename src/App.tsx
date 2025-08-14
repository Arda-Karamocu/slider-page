import { useState } from "react";

const testimonials = [
  {
    text: `“ I’ve been interested in coding for a while but never taken the
    jump, until now. I couldn’t recommend this course enough. I’m now
    in the job of my dreams and so excited about the future. ”`,
    name: "Tanya Sinclair",
    role: "UX Engineer",
    image: "/images/image-tanya.jpg",
  },
  {
    text: `“ If you want to lay the best foundation possible I’d recommend taking
    this course. The depth the instructors go into is incredible. I now feel
    so confident about starting up as a professional developer. ”`,
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    image: "/images/image-john.jpg",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div
      className="
        flex flex-col items-center justify-center min-h-screen font-Inter
        bg-[url('/images/pattern-curve.svg'),_url('/images/pattern-bg.svg'),_url('/images/pattern-quotes.svg')]
        bg-no-repeat
        bg-[position:bottom_left,_top_1rem_right,_bottom_20rem_center]
        lg:bg-[length:auto,_auto,_60px]
        bg-[length:auto,_370px,_60px]
        lg:bg-[position:bottom_left,_top_right,_top_6rem_left_16rem]
      "
    >
      <div className="flex lg:flex-row flex-col-reverse lg:justify-center justify-start items-center relative p-6 lg:p-0">
        <div className="flex flex-col lg:w-[670px] z-10">
          <span className="lg:text-4xl text-lg text-[hsl(240,38%,20%)] font-light tracking-[0.04em] text-center lg:text-left lg:-mr-16">
            {testimonials[index].text}
          </span>
          <div className="flex lg:flex-row flex-col items-center lg:mt-10 mt-5 text-center gap-x-3 justify-center lg:justify-start">
            <span className="text-base lg:text-2xl font-bold">
              {testimonials[index].name}
            </span>
            <span className="text-base lg:text-2xl text-[hsl(240,18%,77%)] font-medium">
              {testimonials[index].role}
            </span>
          </div>
        </div>

        <div className="relative mb-10">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="shadow-2xl lg:w-auto w-72 rounded-lg"
          />
          <div className="flex flex-row lg:gap-x-12 gap-x-8 bg-white w-fit lg:py-5 lg:px-6 py-3 px-4 rounded-full shadow-2xl lg:ml-16 lg:-mt-7.5 absolute -bottom-6 left-1/2 -translate-x-1/2">
            <button onClick={prevSlide}>
              <img
                src="/images/icon-prev.svg"
                alt="prev"
                className="cursor-pointer lg:h-5 h-auto"
              />
            </button>
            <button onClick={nextSlide}>
              <img
                src="/images/icon-next.svg"
                alt="next"
                className="cursor-pointer lg:h-5 h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
