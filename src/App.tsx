import "./App.css";
import styled from "styled-components";
import { FlexBoxCol, Card } from "./components/styled/styled";
import "@twa-dev/sdk";
import OuterIframe from "./components/OuterIframe";

const StyledApp = styled.div`
  background-color: var(--tg-theme-bg-color);
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 10px;
`;

const AppContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <Card>
            <OuterIframe />
          </Card>
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
