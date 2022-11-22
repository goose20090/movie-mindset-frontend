import { createGlobalStyle } from "styled-components";
import RobotslabWoff from "./robotslab.woff"
import RobotslabWoff2 from "./robotslab.woff2"

export default createGlobalStyle`

@font-face {
    font-family: Robotslab;
    src:local('Robotslab'), loclat('Robotslab')
    url(${RobotslabWoff2}) format('woff2'),
    url(${RobotslabWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
}

`