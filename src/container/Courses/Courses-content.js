import { images } from "../../constants";

const courses = [
  {
    id: 1,
    title: "Intro to Visual Programming",
    description:
      "Learn the basics of programming through a visual interface using Scratch!",
    image: images.course1,
    details: `
      In this course, your child will learn the basics of programming through a visual interface using Scratch. Scratch is a free, easy-to-use programming language developed by MIT that allows kids to create interactive stories, games, animations, and simulations. With Scratch, your child will learn how to think creatively, reason systematically, and work collaboratively.`,
    content: [
      `Introduction to Scratch programming language and its visual interface`,
      `Basics of programming concepts such as loops, variables, and conditionals`,
      `Designing and coding interactive stories, animations, and games`,
      `Collaboration and sharing projects with other Scratch users`,
      `Building confidence and creativity through coding challenges and projects`,
    ],
    result: `By the end of this course, your child will have a solid foundation in programming and be ready to take on more advanced coding challenges. They will have the skills and knowledge to create their own programs, stories, animations, and games, and share them with others in the Scratch community.`,
  },
  {
    id: 2,
    title: "Robotics and Programming",
    description: "Learn to program and control robots using Spike Prime!",
    image: images.course2,
    details: `This course is designed for kids who are interested in robotics and programming. Students will use the latest Lego Education technology, Spike Prime, to learn how to program and control robots using a visual coding language. `,
    content: [
      `Introduction to Robotics: Students will learn about how robots work, and the various types of robots used today.`,
      `Programming Concepts: Students will learn the basics of programming, including variables, loops, conditionals, and functions, using a visual coding language.`,
      `Sensors and Actuators: Students will learn about the various sensors and actuators used in robotics.`,
      `Robotics Projects: Students will work on a variety of robotics projects throughout the course, including building and programming robots.`,
      `Problem-Solving and Critical Thinking: students will develop their problem-solving and critical thinking skills by tackling challenging robotics projects and learning to think creatively about solutions.`,
    ],
    result: `By the end of the course, students will have gained a solid foundation in robotics and programming and will be well-prepared to tackle more advanced robotics projects in the future.`,
  },
  {
    id: 3,
    title: "Web Development for Kids",
    description:
      "This course is a comprehensive introduction to web development for kids.",
    image: images.course3,
    details: `Are you interested in learning how to build websites? This course is designed for kids who are curious about web development and want to learn how to create their own web pages.`,
    content: [
      `Learn the basics of web development, including HTML, CSS, and JavaScript.`,
      `Discover how to build and design a website that is both user-friendly and visually appealing.`,
      `Explore different web development tools and frameworks used by professionals in the industry.`,
      `Create your own web projects, from simple landing pages to more complex interactive sites.`,
      `Get hands-on experience by working on fun coding challenges and exercises.`,
      `Develop your critical thinking and problem-solving skills through coding and designing your own web pages.`,
      `Have fun while learning to code and build your own websites!`,
    ],
    result: `By the end of the course, you will have built your own website from scratch, complete with a personalized design and interactive features. You will also have a solid foundation in web development that can serve as a stepping stone for future learning and projects.`,
  },
  {
    id: 4,
    title: "WeDo Explorers",
    description:
      "explore the world of robotics and programming through hands-on activities and challenges using the LEGO WeDo kit.",
    image: images.course4,
    details: `In this introductory course, kids will learn the basics of robotics and programming using LEGO WeDo. They will work on fun projects and build robots that can move, sense, and react to their surroundings. With WeDo, they will be able to learn programming concepts and build problem-solving skills in a playful and creative way.`,
    content: [
      `Introduction to LEGO WeDo components and programming interface`,
      `Understanding basic programming concepts like loops, conditions, and variables
        `,
      `Building simple robots and machines that can move, sense, and react
        `,
      `Exploring different sensors like motion, tilt, and distance sensors
        `,
      `Designing and building more complex robots with multiple sensors and motors
        `,
      `Solving challenges and puzzles by programming robots to perform specific tasks
        `,
    ],
    result: ` By the end of the course, kids will have the knowledge and confidence to create and program their own unique robotic creations.`,
  },
];
export default courses;
