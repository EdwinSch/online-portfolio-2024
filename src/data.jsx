import { nanoid } from "nanoid";
import iconHtml from "./assets/icon-html.png";
import iconCss from "./assets/icon-css.png";
import iconJs from "./assets/icon-javascript.png";
import iconReact from "./assets/icon-react.png";
import iconSvelte from "./assets/icon-svelte.png";
import iconSass from "./assets/icon-sass.png";
import iconTailwind from "./assets/icon-tailwind.png";
import iconBoot from "./assets/icon-bootstrap.png";
import iconA11y from "./assets/icon-accessibility.png";
import iconGit from "./assets/icon-git.png";

export const stack = [
  {
    icon: iconHtml,
    title: "HTML 5",
  },
  {
    icon: iconCss,
    title: "CSS 3",
  },
  {
    icon: iconJs,
    title: "JavaScript",
  },
  {
    icon: iconReact,
    title: "React",
  },
  {
    icon: iconSvelte,
    title: "Svelte",
  },
  {
    icon: iconSass,
    title: "SASS",
  },
  {
    icon: iconTailwind,
    title: "Tailwind",
  },
  {
    icon: iconBoot,
    title: "Bootstrap",
  },
  {
    icon: iconA11y,
    title: "Accessibility",
  },
  {
    icon: iconGit,
    title: "GIT",
  },
];

import coffeeroastersScr from "./assets/screenshots/coffeeroasters.jpg";
import devjobsScr from "./assets/screenshots/devjobs.jpg";

export const projects = [
  {
    id: nanoid(),
    title: "Coffeeroasters",
    screenshot: coffeeroastersScr,
    description:
      "This web app is a (mocked) coffee subscription app. Users can create and order a custom subscription plan with roast types, weight, delivery interval and so on. Showcasing: form handling/validation, dynamic routing/pages, state management, JSON data rendering/mapping, custom inputs and dynamic styling.",
    stack: [iconReact, iconCss],
    deploy: "https://main--sunny-clafoutis-ffd604.netlify.app/",
    repo: "https://github.com/EdwinSch/react-coffeeroasters",
  },
  {
    id: nanoid(),
    title: "Dev Jobs",
    screenshot: devjobsScr,
    description:
      "This web app is a (mocked) developer jobs listing site. Users can search for jobs by title, company, location or contract type and switch UI themes. Job details are rendered on dynamically created sub-pages. Showcasing: JSON data rendering/mapping, dynamic routing/pages, filters, state management and dynamic styling.",
    stack: [iconReact, iconCss],
    deploy: "https://adorable-alpaca-19fac1.netlify.app/",
    repo: "https://github.com/EdwinSch/react-devjobs-finder",
  },
];
