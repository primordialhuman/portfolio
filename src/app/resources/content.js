import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Saisunil",
  lastName: "Akula",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "DevOps Engineer/AWS DevOps / Kubernetes Administrator",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about  technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/primordialhuman",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saisunil-akula-8259731a0/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:saisunilakula444@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>DevOps Engineer / AWS DevOps / Kubernetes Administrator</>,
  subline: (
    <>
      I'm Saisunil Akula, a techie and DevOps engineer at <InlineCode>Capgemini</InlineCode>, where I build intuitive
      <br /> robust and optmised workflows for the cloud. After hours, I build my own projects and play games (now playing sekiro).
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://docs.google.com/document/d/18LgIY2wImiLs123qd8cDrAqBb0gM_mAj/edit?usp=sharing&ouid=108389283344961509237&rtpof=true&sd=true",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Highly skilled and proactive DevOps Engineer with hands-on experience in building 
        and automating microservices-based applications. Developed a self-learning 
        project involving a voting management system with OTP functionality, using Spring 
        Boot, Docker, Kubernetes, and Jenkins to implement seamless CI/CD pipelines.  
        Passionate about optimizing DevOps workflows through automation and 
        continuously expanding knowledge of cutting-edge technologies in cloud and 
        DevOps ecosystems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Capgemini",
        timeframe: "Oct 2023 - Present",
        role: "Analyst/AWS DevOps Engineer",
        achievements: [
          <>
            Developed and maintained application using Spring Boot for backend and 
            React for frontend, achieving seamless integration through CI/CD pipelines with 
            Jenkins.
        </>,
          <>
            Deployed containerized applications on AWS ECS and EC2, enhancing system 
            reliability and scalability.
          </>,
          <>
            Designed and implemented a microservices architecture, reducing 
            deployment time by 30% through containerization with Docker and 
            orchestration with Kubernetes.
          </>,
          <>
            Implemented Docker image management and pushed images to a private 
            Docker registry with CI/CD pipelines .
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: " Virtually Testing Foundation",
        timeframe: "Mar 2022 - May 2022",
        role: "CyberSecurity Intern",
        achievements: [
          <>
             Conducted security analysis using various tools and OSINT techniques to 
             identify real-world threats and recommended mitigation strategies for 
             cybersecurity attacks.
          </>,
          <>
            Conducting Evaluation of applications and networks , scanning ports , 
            permissions of API's ...
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Jawaharlal Nehru Technological University JNTUH",
        description: <>Studied Computer Science - Bachelor Of Technology.</>,
      },
      {
        name: "Government Institute of Electronics",
        description: <>Specialised Diploma in Computer Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Kubernetes",
        description: <>Certified Kubernetes Administrator.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cka.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Amazon Web Services - AWS",
        description: <>Building robust CI/CD pipelines and deploy apps to cloud. IaC using AWS CDK.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/ccp.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
