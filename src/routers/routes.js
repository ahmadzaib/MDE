import Home from "../views/home";
import Archive from "../views/archive";
import Directory from "../views/directory";
import Meet from "../views/meet";
import Proceed from "../views/proceed";
import MeetDExperts from "../views/meetDExperts";
import About from "../views/about";
import Faqs from "../views/faqs";
import ContactUs from "../views/contactUs";
import OurPlan from "../views/ourPlan";
import OurHelp from "../views/ourHelp";
import OurValue from "../views/ourValue";
import CalenderWeek from "../views/calenderWeek";



import {
    homePage,
    archivePage,
    directoryPage,
    meetPage,
    proceedPage,
    meetDExpertsPage,
    aboutPage,
    faqsPage,
    contactusPage,
    ourplanPage,
    ourvaluePage,
    ourhelpPage,
    calenderweekPage
} from './routePath'

const AuthRouter = [
    { path: homePage, component: Home },
    { path: archivePage, component: Archive },
    { path: directoryPage, component: Directory },
    { path: meetPage, component: Meet },
    { path: proceedPage, component: Proceed },
    { path: meetDExpertsPage, component: MeetDExperts },
    { path: aboutPage, component: About },
    { path: faqsPage, component: Faqs },
    { path: contactusPage, component: ContactUs },
    { path: ourplanPage, component: OurPlan },
    { path: ourvaluePage, component: OurValue },
    { path: ourhelpPage, component: OurHelp },
    { path: calenderweekPage, component: CalenderWeek },
]

export default AuthRouter;