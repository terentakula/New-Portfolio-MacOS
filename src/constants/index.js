const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 5, 2026",
    title: "I came across a curious video by one of my favorite developers.",
    image: "/images/blog1.png",
    link: "https://www.youtube.com/watch?v=j9ZD_hlyHOA",
  },
  {
    id: 2,
    date: "Sep 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://www.youtube.com/watch?v=DEeaT6FxEws&list=PL6QREj8te1P7d4j3k8Snfa187o-IjXuJx",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "I've begun fully immersing myself in GSAP.",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },

  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },

  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/terentakula",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://terentakula.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Aperture Studios",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-50", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Aperture Studios.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The well-known Aperture Studios project has a lot of layouts of this design online, and I'm no exception, having created an HTML version.",
            "It's a standard layout, but work is still underway, and a version with GSAP and React will be coming soon.",
          ],
        },
        {
          id: 2,
          name: "Aperture.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://terentakula.github.io/Aperture-Studios/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Aperture.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Aperture.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Weather Wiget mini-project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Weather Wiget.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A mini-project made in React using WeatherAPI to retrieve weather and time data based on your request or location.",
          ],
        },
        {
          id: 2,
          name: "Weather-Wiget.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://terentakula.github.io/Weather-Wiget/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Weather Wiget.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Exchange Calculator mini-project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Exchange Calculator.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Another mini-project built in React using an API to retrieve currency data around the world.",
            "I created this small project at the very beginning of my React learning journey.",
          ],
        },
        {
          id: 2,
          name: "Exchange-Calculator.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://terentakula.github.io/Exchange-Calculator/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Exchange Calculator.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "Task List mini-project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[5vh] left-7",
      children: [
        {
          id: 1,
          name: "Task List.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Another mini-project built in React.",
            "You can use it as a note-taking tool or a to-do list. It has sorting options both by time and by task difficulty.",
            "I created this small project when I was just starting out in React.",
          ],
        },
        {
          id: 2,
          name: "Task List.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://terentakula.github.io/Task-list/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Task List img.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-27",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 9,
      name: "MacbookPro",
      icon: "/images/folder.png",
      kind: "folder",
      position: "bottom-[5vh] left-[22vh]",
      windowPosition: "top-[70vh] left-[12vh]",
      children: [
        {
          id: 1,
          name: "Desc project MacbookPro.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Ooooh, this is a big project using Three.js. I really want to learn it. It's an incredibly interesting, cool language.",
            "There's so much here. I fell in love with this project at first sight. All the code, animations, and everything were provided by JAVASCRIPTMASTERY. But I didn't just follow him. You have to understand and try every step yourself. otherwise, there's no point in doing it at all. ",
            "I'll be doing something similar soon, but a big thank you to the person who does such a good job.",
          ],
        },
        {
          id: 2,
          name: "MacbookPro.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://terentakula.github.io/MacbookPro/",
          position: "top-10 left-20",
        },
        {
          id: 4,
          name: "MacbookPro img.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-12 left-25",
          imageUrl: "/images/project-5.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-52 right-52",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Alexander.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Alexander-2.jpg",
    },
    {
      id: 3,
      name: "I'm in nature.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-8",
      imageUrl: "/images/Alexander-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/gal4.png",
      description: [
        "Hi! I'm a web developer who's passionate about creating stylish and interactive websites.",

        "I specialize in JavaScript and React, and I love making everything smooth, fast, and fun.",

        "I'm a true fan of clean design, great user experience, and writing code that doesn't require search engines for debugging.",

        "In my free time, you can find me tweaking mockups at 2 AM or playing League of Legends.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
    x: 500,
    y: 500,
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
    x: 1000,
    y: 100,
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
    x: 550,
    y: 150,
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
