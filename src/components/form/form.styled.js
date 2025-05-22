import styled from 'styled-components';

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #86a2a5;
`;

const StyledQueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #2a4144;
`;

const StyledFontSize = styled.span`
  font-size: 1rem;
`;

const StyledAsterisk = styled(StyledFontSize)`
  color: #0c7d69;
`;

const StyledErrorMessage = styled(StyledFontSize)`
  color: #d73c3c;
`;

export {
  StyledFormContainer,
  StyledLabel,
  StyledAsterisk,
  StyledErrorMessage,
  StyledInputContainer,
  StyledInput,
  StyledQueryContainer
};
