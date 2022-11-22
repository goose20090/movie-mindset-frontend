
import {StyledTest} from "./styled-components/Test.style"
import {AppContainer} from './styled-components/Container.style'
import {GlobalStyles} from "./GlobalStyles"
function App() {
  return (
    <AppContainer>
      <GlobalStyles/>
      <StyledTest backgroundColor = "white"/>
    </AppContainer>
  );
}

export default App;
