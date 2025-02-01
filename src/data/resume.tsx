import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Varun Deva",
  initials: "VD",
  url: "https://varundeva.com",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description:
    "🚀 Full-Stack Developer crafting scalable apps with Modern Tech Stacks. Solving complex challenges.",
  summary:"**🚀 Full-Stack Web Developer** with **3+ years** of experience building robust applications using **MERN/PERN stacks**. Proficient in **React**, **Next.js**, **Node.js**, **Express**, and databases (**PostgreSQL**, **MongoDB**, **MySQL**). Skilled in crafting dynamic user interfaces, scalable back-end systems, **API design**, and seamless third-party integrations. Passionate about optimizing codebases, solving complex problems, and delivering efficient solutions.\n\n**💻 From idea to impact**: Adept at translating business needs into technical features like performance tracking, compliance tools, and custom integrations. Strong foundation in computer science, with a focus on **innovation** and **continuous learning**. Committed to building solutions that drive lasting value. 🔧✨ ",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Tailwind CSS",
    "ORM",
    "ODM",
    "Git",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@varundeva.com",
    tel: "+919008444205",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/varundeva",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/varundeva/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/intent/follow?screen_name=varundeva",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@varundeva.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Honeywell Technology Solutions Lab Pvt. Ltd",
      href: "https://www.honeywell.com/",
      badges: ["FullTime"],
      location: "Bangalore, India",
      title: "Software Engineer II",
      logoUrl: "/honeywell.jpg",
      start: "Jul 2023",
      end: "Present",
      description:
"Nexus is a digital application for manufacturing shop floors, serving as a Digital TAM board to streamline daily operations. It tracks key metrics like Quality (First Pass Yield), Cost (DLE), Delivery (OPH Attainment), and includes tools like OPH Tracker, A3, Xmatrics, SMESS, Genie AI chatbot, and more."
    },
    {
      company: "Fabzen Technologies Pvt. Ltd.",
      href: "https://fabzentech.com/",
      badges: ["FullTime"],
      location: "Bangalore, India",
      title: "Associate Software Engineer",
      logoUrl: "/fabzen.jpeg",
      start: "Mar 2023",
      end: "Jul 2023",
      description:
        "• Admin Panel for 2 Games - Built the complete admin panel from scratch in React and required REST APIs for the admin panel in NestJS. • TDS implementation - Implementation of TDS calculation and deduction in withdrawal money. • Appsflyer API Integration - Integration of APIs in the backend server to create an event in Appsflyer when payment is successful after some time, which will be notified by using a webhook from the payment gateway.",
    },
    {
      company: "Byju's - Think & Learn Pvt. Ltd.",
      href: "http://byjus.com/",
      badges: ["FullTime"],
      location: "Bangalore, India",
      title: "Associate Software Engineer",
      logoUrl: "/byjus.svg",
      start: "Oct 2021",
      end: "Mar 2023",
      description:
        "Worked as a MERN and PERN stack developer in the Customer Service Orders module, with responsibilities for developing different features and custom solutions for business needs.",
    },
    {
      company: "Ignite X Labs",
      href: "http://ignitexlabs.com/",
      badges: ["Internship"],
      location: "Remote",
      title: "Trainee - Web Development Engineer",
      logoUrl: "/ignitexlabs.jpeg",
      start: "Jul 2020",
      end: "Sep 2020",
      description:
        "Built an Website for Ignite X Labs with html css and JavaScript. Used bootstrap css framework. Used php and MySQL to store the enquiry details and sent the same through e-mail by using php mailer.",
    },
   
  ],
  education: [
    {
      school: "BNM Institute Of Technology",
      href: "https://vpt.vivekanandaedu.org/",
      degree: "Bachelors of Engineering in Computer Science & Engineering",
      logoUrl: "/bnm.jpeg",
      start: "Jul 2018",
      end: "Jan 2021",
    },
    {
      school: "Vivekananda Polytechnic",
      href: "https://vpt.vivekanandaedu.org/",
      degree: "Diploma in Computer Science & Engineering",
      logoUrl: "/vpt.jpg",
      start: "Jan 2015",
      end: "Jun 2018",
    },
  ],
  projects: [
    {
      title: "Ai Project Suggester",
      href: "https://project-suggester.vercel.app/",
      dates: "Jan 2025 - Jan 2025",
      active: true,
      description:
        "AI-powered GitHub profile analyzer providing skill insights, personalized project suggestions, and growth opportunities for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "GitHub",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Demo",
          href: "https://project-suggester.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "GitHub",
          href: "https://github.com/varundeva/project-suggester",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/projects/ai-project-suggester.png",
      video:
        "",
    },
    {
      title: "Save From Frauds",
      href: "https://save-from-frauds.vercel.app/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Save From Frauds is a comprehensive application designed to track and report fraudulent entities (e.g., phone numbers, emails, websites) and their associated impacts. Users can log detailed reports describing the nature of the fraud, its impact (financial, emotional, reputational, etc.), and preventive measures to avoid similar scams",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDb",
        "Mongoose",
        "TailwindCSS",
        "Stack Auth",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Demo",
          href: "https://save-from-frauds.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/varundeva/save-from-frauds",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/save-from-frauds.png",
      video: "",
    },
    {
      title: "Study Material Sharing Platform",
      href: "https://materials.bustudymate.in/",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "This platform is a collaborative learning space where students can freely share and access a wide range of academic resources.  Upload your study notes, past exam papers, and other helpful materials to contribute to the community.  Browse and download resources shared by your peers to enhance your learning and exam preparation.",
      technologies: [
        "Next.js",
        "Typescript",
        "AppWrite",
        "TailwindCSS",
        "Shadcn UI",
        "Coolify"
      ],
      links: [
        {
          type: "Demo",
          href: "https://materials.bustudymate.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/studymate.png",
      video: "",
    },
    {
      title: "React Next Google Tools",
      href: "https://www.npmjs.com/package/react-next-google-tools",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
        "This lightweight npm library simplifies adding Google Analytics to React and Next.js projects. It streamlines tracking user interactions and page views, abstracting away boilerplate code for quick and easy integration.  It's performant and minimal, ensuring no added overhead.",
      technologies: [
        "React.js",
        "Typescript"
      ],
      links: [
        {
          type: "NPM Repository",
          href: "https://www.npmjs.com/package/react-next-google-tools",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/varundeva/react-next-google-tools",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/projects/google-tools.png",
      video:
        "",
    },
  ],
  hackathons: [ ],
} as const;
