import Form from './components/form/Form';
import { StyledTitle } from './components/title/title.styled';
import { GlobalStyles, StyledContainer } from './styles/GlobalStyles';

const App = () => {
  return (
    <StyledContainer>
      <GlobalStyles />
      <StyledTitle>Contact us</StyledTitle>
      <Form />
    </StyledContainer>
  );
};

export default App;
