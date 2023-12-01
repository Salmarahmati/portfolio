import employee from "../../images/employee.PNG";
import GuessNumber from "../../images/GuessNumber.PNG";
import BitDog from "../../images/BitDog.PNG";
import { FaGithub } from "react-icons/fa6";
export const projects = [
    {
        title: "Employees",
        image: employee,
        description:
            "In HTML Training Course. which was the first site we deployed.",
        thepagelink: (
            <a className="siteLinks" href="https://employees-kappa.vercel.app/"><FaGithub /></a>
        )
    },
    {
        title: "Guess Number game",
        image: GuessNumber,
        description:
            "In JS Training course. as the last project from Java Script course.",
        thepagelink: (
            <a className="siteLinks" href="https://salmarahmati.github.io/guess_game/"><FaGithub /></a>
        )
    },
    {
        title: "Bit Dog",
        image: BitDog,
        description:
            "In React Training course which was a teamwork project with my classmates.",
        thepagelink: (
            <a className="siteLinks" href="https://salmarahmati.github.io/bitdog/"> <FaGithub /></a>
        )
    }
];