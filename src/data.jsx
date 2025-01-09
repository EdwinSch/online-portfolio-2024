import { nanoid } from "nanoid";
import iconHtml from "./assets/icon-html.png";
import iconCss from "./assets/icon-css.png";
import iconJs from "./assets/icon-javascript.png";
import iconReact from "./assets/icon-react.png";
import iconTailwind from "./assets/icon-tailwind.png";
import iconA11y from "./assets/icon-accessibility.png";
import iconGit from "./assets/icon-git.png";
import iconApi from "./assets/icon-api.png";
import iconVite from "./assets/icon-vite.png";
import iconNext from "./assets/icon-nextjs.png";
import iconTs from "./assets/icon-typescript.png";

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
    icon: iconTs,
    title: "TypeScript",
  },
  {
    icon: iconReact,
    title: "React",
  },
  {
    icon: iconNext,
    title: "Next.js",
  },
  {
    icon: iconTailwind,
    title: "Tailwind",
  },
  {
    icon: iconVite,
    title: "Vite",
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
import cryptoScr from "./assets/screenshots/cryptodashboard.jpg";
import scootScr from "./assets/screenshots/scoot.jpg";
import restaurantFinderScr from "./assets/screenshots/restaurant-finder.jpg";
import canicasScr from "./assets/screenshots/canicas.jpg";
import chartScr from "./assets/screenshots/chart.jpg";
import githubfinderScr from "./assets/screenshots/githubfinder.jpg";
import trainScr from "./assets/screenshots/train.jpg";
import passwordScr from "./assets/screenshots/password-generator.jpg";

export const projects = [
  {
    id: nanoid(),
    title: "Coffeeroasters",
    screenshot: coffeeroastersScr,
    description:
      "This web app is a (mocked) coffee subscription app. Users can create and order a custom subscription plan with roast types, weight, delivery interval and so on. Showcasing: form handling/validation, dynamic routing/pages, state management, JSON data rendering/mapping, custom inputs and dynamic styling.",
    stack: [iconReact, iconCss, iconVite],
    deploy: "https://main--sunny-clafoutis-ffd604.netlify.app/",
    repo: "https://github.com/EdwinSch/react-coffeeroasters",
  },
  {
    id: nanoid(),
    title: "Dev Jobs",
    screenshot: devjobsScr,
    description:
      "This web app is a (mocked) developer jobs listing site. Users can search for jobs by title, company, location or contract type and switch UI themes. Job details are rendered on dynamically created sub-pages. Showcasing: JSON data rendering/mapping, dynamic routing/pages, filters, state management and dynamic styling.",
    stack: [iconReact, iconCss, iconVite],
    deploy: "https://adorable-alpaca-19fac1.netlify.app/",
    repo: "https://github.com/EdwinSch/react-devjobs-finder",
  },
  {
    id: nanoid(),
    title: "Crypto Dashboard",
    screenshot: cryptoScr,
    description:
      "This dashboard shows active crypto currency values. Data is fetched from the coincap.io API and the user can choose between light or dark theme. Showcasing: API handling, data/state handling and dynamic styling.",
    stack: [iconReact, iconCss, iconApi, iconVite],
    deploy: "https://super-frangollo-a76201.netlify.app/",
    repo: "https://github.com/EdwinSch/react-crypto-dashboard",
  },
  {
    id: nanoid(),
    title: "Scoot",
    screenshot: scootScr,
    description:
      "This multi-page web app is the landing for a (mocked) scooter sharing company. Users can get information, read FAQ, see locations and job opportunities. The design is fully responsive. Showcasing: dynamic component re-use, page routing, state management and dynamic styling.",
    stack: [iconReact, iconCss, iconVite],
    deploy: "https://super-empanada-37af05.netlify.app/",
    repo: "https://github.com/EdwinSch/react-scoot-sharing-service",
  },
  {
    id: nanoid(),
    title: "Restaurant Finder",
    screenshot: restaurantFinderScr,
    description:
      "This React project shows (mocked) close by restaurants in a mobile-first/native style. Users can click on a result to toggle drawer style showing call options, search a restaurant by name or sort by either distance or rating of the shown restaurants. Showcasing: data mapping, components, filtering, sorting, dynamic and animated styling.",
    stack: [iconReact, iconCss, iconVite],
    deploy: "https://bright-macaron-7fa43e.netlify.app/",
    repo: "https://github.com/EdwinSch/react-restaurant-finder",
  },
  {
    id: nanoid(),
    title: "Canicas Flavours",
    screenshot: canicasScr,
    description:
      "Assortment overview for the Canicas Flavours Cava selecion 2023. Dynamic featueres are: toggle product description and filter by brand.",
    stack: [iconReact, iconCss, iconVite],
    deploy: "https://canicasflavours.com/",
    repo: "https://github.com/EdwinSch/canicas-flavours-2023",
  },
  {
    id: nanoid(),
    title: "Animated Chart",
    screenshot: chartScr,
    description:
      "A little case study on animation and math calculations in vanilla JavaScript.",
    stack: [iconHtml, iconCss, iconJs],
    deploy: "https://edwinsch.github.io/expenses-chart-component/",
    repo: "https://github.com/EdwinSch/expenses-chart-component",
  },
  {
    id: nanoid(),
    title: "GitHub Finder",
    screenshot: githubfinderScr,
    description:
      "This React project interacts with the GitHub API. Users can search GitHub users by name and view detailed info about personal info and repositories. Showcasing: API usage, components, page routing, context, reducer and dynamic styling.",
    stack: [iconReact, iconCss, iconApi, iconVite],
    deploy: "https://sunny-entremet-05c3ac.netlify.app/",
    repo: "https://github.com/EdwinSch/react-github-finder",
  },
  {
    id: nanoid(),
    title: "Train Tickets",
    screenshot: trainScr,
    description:
      "This is a train/metro tickets purchase app for a (mocked) metro line. The user can select departure/destination stations and a date. After purchase the app will show a ticket with the route, price calculated by distance between stations and a QR code to enter the station. Additionally there is a responsive map of the route. Showcasing: form handling and validation, Math functions, state management, context usage, QR codes and dynamic styling with Tailwind CSS.",
    stack: [iconReact, iconTailwind, iconVite],
    deploy: "https://jazzy-heliotrope-9809dc.netlify.app/",
    repo: "https://github.com/EdwinSch/react-train-tickets-app",
  },
  {
    id: nanoid(),
    title: "Password Generator",
    screenshot: passwordScr,
    description:
      "This project is a strong random password generator. Users set the length and opt for lowercase, uppercase, numbers an/or symbol combinations. A clipboard functionality is also added.",
    stack: [iconHtml, iconCss, iconJs],
    deploy: "https://edwinsch.github.io/password-generator/",
    repo: "https://github.com/EdwinSch/password-generator",
  },
];
