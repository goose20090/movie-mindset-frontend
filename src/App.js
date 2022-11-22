
import {AppContainer} from './styled-components/Container.style'
import {GlobalStyles} from "./GlobalStyles"
import { Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./styled-components/NavBar.style";
function App() {
  return (
    <AppContainer>
      <GlobalStyles/>
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
