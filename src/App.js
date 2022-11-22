
import {AppContainer} from './styled-components/Container.style'
import {GlobalStyles} from "./GlobalStyles"
import GlobalFonts from "./fonts/fonts"
import { Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./styled-components/NavBar.style";
function App() {
  return (
    <AppContainer>
      <GlobalStyles/>
      <GlobalFonts/>
      <StyledNavBar/>
      <Switch>
        <Route path = "/movies">
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
