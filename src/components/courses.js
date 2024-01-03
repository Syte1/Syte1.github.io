import React, { useState } from "react";
import { Section, Animation } from "gatsby-theme-portfolio-minimal";
import "./CoursesSection.css";

const CoursesSection = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleClick = (term) => {
    if (selectedTerm === term) {
      setSelectedTerm(null);
    } else {
      setSelectedTerm(term);
    }
  };

  const renderCourses = (term) => {
    if (selectedTerm !== term.term) return null;

    return (
      <div className="courses-grid">
        {term.courses.map((course, index) => (
          <div key={index} className="course">
            <h2>{course.courseId}</h2>
            <h4>{course.title}</h4>
            <p>{course.technology}</p>
          </div>
        ))}
      </div>
    );
  };
  const courses = [
    {
      term: "Term 1",
      courses: [
        {
          courseId: "COMM 1116",
          title: "Business Communications 1",
          technology: "Communication Skills",
        },
        {
          courseId: "COMP 1100",
          title: "CST Program Fundamentals",
          technology: "Programming Basics",
        },
        {
          courseId: "COMP 1113",
          title: "Applied Mathematics",
          technology: "Mathematics for Computing",
        },
        {
          courseId: "COMP 1510",
          title: "Programming Methods",
          technology: "Python, Problem Solving",
        },
        {
          courseId: "COMP 1537",
          title: "Web Development 1",
          technology: "HTML, CSS, JavaScript",
        },
        {
          courseId: "COMP 1712",
          title: "Business Analysis and System Design",
          technology: "Business Analysis, UML",
        },
        {
          courseId: "COMP 1800",
          title: "Projects 1",
          technology: "Software Development Projects",
        },
      ],
    },
    {
      term: "Term 2",
      courses: [
        {
          courseId: "COMM 2216",
          title: "Business Communications 2",
          technology: "Communication Skills",
        },
        {
          courseId: "COMP 2121",
          title: "Discrete Mathematics",
          technology: "Discrete Mathematics",
        },
        {
          courseId: "COMP 2510",
          title: "Procedural Programming",
          technology: "C Programming",
        },
        {
          courseId: "COMP 2522",
          title: "Object Oriented Programming 1",
          technology: "Java, OOP",
        },
        {
          courseId: "COMP 2714",
          title: "Relational Database Systems",
          technology: "SQL, Database Design",
        },
        {
          courseId: "COMP 2721",
          title: "Computer Organization/Architecture",
          technology: "Computer Hardware, Assembly Language",
        },
        {
          courseId: "COMP 2990",
          title: "Cooperative Education Workterm 1",
          technology: "Cooperative Education",
        },
      ],
    },
    {
      term: "Term 3",
      courses: [
        {
          courseId: "COMP 3522",
          title: "Object Oriented Programming 2",
          technology: "Python, Design Patterns, OOP",
        },
        {
          courseId: "COMP 3717",
          title: "Mobile Development with Android Technologies*",
          technology: "Kotlin, Android, Mobile App Development",
        },
        {
          courseId: "COMP 3721",
          title: "Introduction to Data Communications",
          technology: "Networking, TCP/IP",
        },
        {
          courseId: "COMP 3760",
          title: "Algorithm Analysis and Design",
          technology: "Algorithms, Data Structures",
        },
        {
          courseId: "MATH 3042",
          title: "Applied Probability and Statistics",
          technology: "Probability, Statistics",
        },
        {
          courseId: "COMP 3800",
          title: "Projects Practicum 1**",
          technology: "Software Development Projects",
        },
        {
          courseId: "COMP 3990",
          title: "Cooperative Education Workterm 2",
          technology: "Cooperative Education",
        },
      ],
    },
    {
      term: "Term 4",
      courses: [
        {
          courseId: "COMP 3962",
          title: "Cloud Computing Platforms",
          technology: "AWS, Google Cloud, Azure",
        },
        {
          courseId: "COMP 4537",
          title: "Internet Software Architecture*",
          technology: "Internet Software, Architecture",
        },
        {
          courseId: "COMP 4736",
          title: "Introduction to Operating Systems",
          technology: "Operating Systems",
        },
        {
          courseId: "LIBS 7102",
          title: "Ethics for Computing Professionals*",
          technology: "Ethics, IT Professionalism",
        },
        {
          courseId: "COMP 4964",
          title: "DevOps Engineering",
          technology: "DevOps",
        },
        {
          courseId: "COMP 4968",
          title: "Serverless Computing and Microservices",
          technology: "Serverless, Microservices",
        },
      ],
    },
  ];

  return (
    <Animation type="fadeUp">
      <Section anchor="courses" heading="Courses">
        <div className="terms-grid">
          {courses.map((term, index) => (
            <React.Fragment key={index}>
              <div className="term" onClick={() => handleClick(term.term)}>
                <h3>
                  &emsp;{term.term} {selectedTerm === term.term ? "➖" : "➕"}
                </h3>
              </div>
              {selectedTerm === term.term && renderCourses(term)}
            </React.Fragment>
          ))}
        </div>
      </Section>
    </Animation>
  );
};

export default CoursesSection;
