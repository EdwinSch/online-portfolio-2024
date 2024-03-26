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
import iconApi from "./assets/icon-api.png";

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
import cryptoScr from "./assets/screenshots/cryptodashboard.jpg";
import scootScr from "./assets/screenshots/scoot.jpg";
import restaurantFinderScr from "./assets/screenshots/restaurant-finder.jpg";
import canicasScr from "./assets/screenshots/canicas.jpg";

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
  {
    id: nanoid(),
    title: "Crypto Dashboard",
    screenshot: cryptoScr,
    description:
      "This dashboard shows active crypto currency values. Data is fetched from the coincap.io API and the user can choose between light or dark theme. Showcasing: API handling, data/state handling and dynamic styling.",
    stack: [iconReact, iconCss, iconApi],
    deploy: "https://super-frangollo-a76201.netlify.app/",
    repo: "https://github.com/EdwinSch/react-crypto-dashboard",
  },
  {
    id: nanoid(),
    title: "Scoot",
    screenshot: scootScr,
    description:
      "This multi-page web app is the landing for a (mocked) scooter sharing company. Users can get information, read FAQ, see locations and job opportunities. The design is fully responsive. Showcasing: dynamic component re-use, page routing, state management and dynamic styling.",
    stack: [iconReact, iconCss],
    deploy: "https://super-empanada-37af05.netlify.app/",
    repo: "https://github.com/EdwinSch/react-scoot-sharing-service",
  },
  {
    id: nanoid(),
    title: "Restaurant Finder",
    screenshot: restaurantFinderScr,
    description:
      "This React project shows (mocked) close by restaurants in a mobile-first/native style. Users can click on a result to toggle drawer style showing call options, search a restaurant by name or sort by either distance or rating of the shown restaurants. Showcasing: data mapping, components, filtering, sorting, dynamic and animated styling.",
    stack: [iconReact, iconCss],
    deploy: "https://bright-macaron-7fa43e.netlify.app/",
    repo: "https://github.com/EdwinSch/react-restaurant-finder",
  },
  {
    id: nanoid(),
    title: "Canicas Flavours",
    screenshot: canicasScr,
    description:
      "Assortment overview for the Canicas Flavours Cava selecion 2023. Dynamic featueres are: toggle product description and filter by brand.",
    stack: [iconReact, iconCss],
    deploy: "https://canicasflavours.com/",
    repo: "https://github.com/EdwinSch/canicas-flavours-2023",
  },
];
