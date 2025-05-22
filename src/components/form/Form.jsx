import { useForm } from 'react-hook-form';
import { FORM_VALIDATION } from '../../constants/validations';
import {
  StyledFormContainer,
  StyledLabel,
  StyledAsterisk,
  StyledErrorMessage,
  StyledInputContainer,
  StyledQueryContainer,
  StyledInput
} from './form.styled';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log(errors);

  return (
    <StyledFormContainer onSubmit={handleSubmit()}>
      <StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor='firstName'>
            First Name <StyledAsterisk>*</StyledAsterisk>
          </StyledLabel>
          <StyledInput
            type='text'
            {...register('firstName', FORM_VALIDATION.NAME)}
          />
          <StyledErrorMessage>{errors.firstName?.message}</StyledErrorMessage>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledLabel htmlFor='lastName'>
            Last Name <StyledAsterisk>*</StyledAsterisk>
          </StyledLabel>
          <StyledInput
            type='text'
            {...register('lastName', FORM_VALIDATION.LASTNAME)}
          />
          <StyledErrorMessage>{errors.lastName?.message}</StyledErrorMessage>
        </StyledInputContainer>
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel htmlFor='email'>Email Adress *</StyledLabel>
        <StyledInput
          type='text'
          {...register('email', FORM_VALIDATION.EMAIL)}
        />
        <StyledErrorMessage>{errors?.email?.message}</StyledErrorMessage>
      </StyledInputContainer>

      <StyledQueryContainer>
        <StyledLabel>
          Query Type <StyledAsterisk>*</StyledAsterisk>
        </StyledLabel>
        <div>
          <StyledInput
            type='radio'
            id='generalEnquiry'
            value={'generalEnquiry'}
            name='queryType'
          />
          <StyledLabel htmlFor='generalEnquiry'>General Enquiry</StyledLabel>
        </div>
        <div>
          <StyledInput
            type='radio'
            defaultChecked
            id='supportRequest'
            value={'supportRequest'}
            name='queryType'
          />
          <StyledLabel htmlFor='supportRequest'>Support Request</StyledLabel>
        </div>
        <StyledErrorMessage>{errors?.queryType?.message}</StyledErrorMessage>
      </StyledQueryContainer>

      <StyledInputContainer>
        <StyledLabel htmlFor='message'>
          Message <StyledAsterisk>*</StyledAsterisk>
        </StyledLabel>
        <textarea
          type='input'
          id='message'
          {...register('message', FORM_VALIDATION.MESSAGE)}
        />
        <StyledErrorMessage>{errors?.message?.message}</StyledErrorMessage>
      </StyledInputContainer>
      <div>
        <StyledInput
          type='checkbox'
          id='contacted'
          {...register('contacted', FORM_VALIDATION.CONTACTED)}
        />
        <StyledLabel htmlFor='contacted'>
          I consent to being contacted by the team{' '}
          <StyledAsterisk>*</StyledAsterisk>
        </StyledLabel>
        <StyledErrorMessage>{errors?.contacted?.message}</StyledErrorMessage>
      </div>
      <StyledInput type='submit' />
    </StyledFormContainer>
  );
};

export default Form;
