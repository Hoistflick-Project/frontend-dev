import React, { useState } from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import H1 from "../Elements/H1";
import PriceInfo from "../Component/PriceInfo";
import CoursesCard from "../Component/CoursesCard";
import { Link } from "react-router-dom";

const Course_details = () => {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const CourseContent = [
    {
      weeks: [
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
      ],
    },

    {
      weeks: [
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
      ],
    },
    {
      weeks: [
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
      ],
    },

    {
      weeks: [
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
        {
          title: "Understanding UI/UX design principles",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos beatae harum esse consequuntur, iste, voluptatum minima incidunt laboriosam quaerat saepe labore quasi temporibus nostrum numquam nobis non velit molestias.",
        },
      ],
    },
  ];

  return (
    <div>
      <Nav />
      <main className="lg:px-20 px-6">
        <section className="flex flex-col justify-center items-center md:pb-[5rem] md:pt-[10rem] pt-[7rem] md:gap-16 gap-4">
          <H1 otherStyle={"md:block hidden"}>Introduction to Ui/Ux Design</H1>
          <div className="relative w-max md:pt-[4rem] flex md:flex-row flex-col gap-8">
            <div>
              <video
                className=" shadow-lg md:w-[48.5rem] md:h-[36.4375rem] h-[10.5rem] md:m-0 m-auto rounded-lg"
                controls
              >
                <source src="..Videos/video1.mp4" type="video/mp4" />
              </video>
              <div className="md:flex hidden flex-col border-[1px] border-[#E9EAF0] gap-4 rounded-2xl mt-11 px-8 pt-3 pb-6">
                <h1 className="md:text-[28px] text-xl font-bold underline">
                  What you’ll learn
                </h1>
                <ul className="list-disc grid md:grid-cols-2 grid-cols-1 font-Poppins md:pl-0 pl-4">
                  <li>Fundamental principles of design</li>
                  <li>Design elements</li>
                  <li>Fundamental principles of design</li>
                  <li>Fundamental principles of design</li>
                  <li>Design elements</li>
                  <li>Fundamental principles of design</li>
                </ul>
              </div>
            </div>
            <PriceInfo />
            <div className="md:hidden flex flex-col border-[1px] border-[#E9EAF0] gap-4 rounded-2xl md:mt-11 px-8 pt-3 pb-6">
                <h1 className="md:text-[28px] text-xl font-bold underline">
                  What you’ll learn
                </h1>
                <ul className="list-disc grid md:grid-cols-2 grid-cols-1 font-Poppins md:pl-0 pl-4">
                  <li>Fundamental principles of design</li>
                  <li>Design elements</li>
                  <li>Fundamental principles of design</li>
                  <li>Fundamental principles of design</li>
                  <li>Design elements</li>
                  <li>Fundamental principles of design</li>
                </ul>
              </div>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="md:shadow-lg rounded-3xl flex flex-col gap-0 md:p-10 md:pb-6 p-3 ">
            <header className="flex flex-col gap-7">
              <h1 className="font-bold md:text-[32px] text-xl underline mb-4">
                Course Content
              </h1>
            </header>
            {CourseContent.map((course, i) => (
              <div key={i} className="Lessons flex flex-col">
                <button
                  onClick={() => (setActive(!active), setIndex(i))}
                  className="md:text-2xl text-[18px] flex justify-start items-center gap-4 py-5  border-b-[1px] border-b-[#E2E8F0]"
                >
                  <i
                    className="fa fa-chevron-down md:text-2xl text-[18px] font-[100]"
                    aria-hidden="true"
                  ></i>
                  Week {i + 1}
                </button>
                <aside
                  className={`pl-10 flex flex-col gap-6  ${
                    active & (i == index)
                      ? "py-6 h-max"
                      : "py-0 h-0 overflow-hidden"
                  } overflow-hidden`}
                >
                  <h1 className="text-[#156060] md:text-3xl text-xl font-bold relative md:-left-10">
                    Module {i + 1}:
                  </h1>
                  {course.weeks.map((week, i) => (
                    <div key={i} className="each flex flex-col gap-5">
                      <div className="text-xl flex md:gap-6 md:flex-row flex-col font-body">
                        <h1 className="text-black">Lesson {i + 1}:</h1>
                        <p className="text-[#156060] md:text-base text-sm">{week.title}</p>
                      </div>
                      <p className="text-[#636262] md:block hidden">{week.desc}</p>
                    </div>
                  ))}
                </aside>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-16 pb-[5rem] md:pt-[10rem] pt-12">
          <header className="font-Poppins flex justify-between items-center">
            <h1 className="font-medium text-3xl">Related courses</h1>
            <Link className="text-xl font-bold text-[#49BBBD]" to="/courses">
              {" "}
              See all
            </Link>
          </header>
          <div className="courses grid md:gap-[6.25rem] gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between w-full ">
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Course_details;
