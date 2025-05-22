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
  border: 1px solid ${({$hasError}) => $hasError ? 'red': '#86a2a5'};
`;

const StyledQueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledQueryOption = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #86a2a5;
`
const StyledQueryLabel = styled.label`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  &::before{
    content: '';
   border: 0.125rem solid #86a2a5;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%; 
  }
`

const StyledQueryCheck = styled.input`
  display: none;

  &:checked + ${StyledQueryLabel}::before{
    scale: -80%;
    border: 0.125rem solid white;
    background-color: #0C7D69;
    box-shadow: 0 0 0 2px #0C7D69;
  }
`

const StyledLabel = styled.label`
  font-size: 1.25rem;
  color: #2a4144;
`;

const StyledTextarea = styled.textarea`
  resize: vertical;
  border: 1px solid ${({$hasError}) => $hasError ? 'red': '#86a2a5'};
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
`

const StyledFontSize = styled.span`
  font-size: 1rem;
`;

const StyledAsterisk = styled(StyledFontSize)`
  color: #0c7d69;
`;

const StyledErrorMessage = styled(StyledFontSize)`
  color: #d73c3c;
`;

const StyledConsentLabel = styled.label`
  display: flex;
  gap: 1.1875rem;
  align-items: center;
  
  &::before{
    content: '';
    border: 1px solid #86A2A5;
    border-radius: 0.125rem;
    width: 18px;
    height: 18px;
  }
`

const StyledConsentCheck = styled.input`
  display: none;

  &:checked + ${StyledConsentLabel}::before{
    background-color: #0C7D69;
  }
`

const StyledSubmitButton = styled.input`
  background-color: #0C7D69;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 2.5rem;
  color: white;
`

export {
  StyledFormContainer,
  StyledLabel,
  StyledAsterisk,
  StyledErrorMessage,
  StyledInputContainer,
  StyledInput,
  StyledQueryContainer,
  StyledQueryOption as StyledQueryOptions,
  StyledQueryLabel,
  StyledQueryCheck,
  StyledTextarea,
  StyledConsentLabel,
  StyledConsentCheck,
  StyledSubmitButton
};
