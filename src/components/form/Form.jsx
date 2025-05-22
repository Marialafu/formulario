import { useForm } from 'react-hook-form';
import { FORM_VALIDATION } from '../../constants/validations';
import {
  StyledFormContainer,
  StyledLabel,
  StyledAsterisk,
  StyledErrorMessage,
  StyledInputContainer,
  StyledQueryContainer,
  StyledInput,
  StyledQueryOptions,
  StyledQueryLabel,
  StyledQueryCheck,
  StyledTextarea,
  StyledConsentCheck,
  StyledConsentLabel,
  StyledSubmitButton
} from './form.styled';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log(errors);

  let hasError=null

  console.log(hasError);
  

  return (
    <StyledFormContainer onSubmit={handleSubmit()}>
      <StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor='firstName'>
            First Name <StyledAsterisk>*</StyledAsterisk>
          </StyledLabel>
          <StyledInput
            $hasError={errors?.firstName}
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
            $hasError={errors?.lastName}
            {...register('lastName', FORM_VALIDATION.LASTNAME)}
          />
          <StyledErrorMessage>{errors.lastName?.message}</StyledErrorMessage>
        </StyledInputContainer>
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel htmlFor='email'>Email Adress <StyledAsterisk>*</StyledAsterisk></StyledLabel>
        <StyledInput
          type='text'
          $hasError={errors?.email}
          {...register('email', FORM_VALIDATION.EMAIL)}
        />
        <StyledErrorMessage>{errors?.email?.message}</StyledErrorMessage>
      </StyledInputContainer>

      <StyledQueryContainer>
        <StyledLabel>
          Query Type <StyledAsterisk>*</StyledAsterisk>
        </StyledLabel>

        <StyledQueryOptions>
          <StyledQueryCheck
            type='radio'
            id='generalEnquiry'
            value={'generalEnquiry'}
            name='queryType'
          />
          <StyledQueryLabel htmlFor='generalEnquiry'>General Enquiry</StyledQueryLabel>
      </StyledQueryOptions>
      
      <StyledQueryOptions>
          <StyledQueryCheck
            type='radio'
            defaultChecked
            id='supportRequest'
            value={'supportRequest'}
            name='queryType'
          />
          <StyledQueryLabel htmlFor='supportRequest'>Support Request</StyledQueryLabel>
        </StyledQueryOptions>
        

        <StyledErrorMessage>{errors?.queryType?.message}</StyledErrorMessage>
      </StyledQueryContainer>

      <StyledInputContainer>
        <StyledLabel htmlFor='message'>
          Message <StyledAsterisk>*</StyledAsterisk>
        </StyledLabel>
        <StyledTextarea
          type='input'
          id='message'
          $hasError={errors?.message}
          {...register('message', FORM_VALIDATION.MESSAGE)}
        />
        <StyledErrorMessage>{errors?.message?.message}</StyledErrorMessage>
      </StyledInputContainer>

      <div>
        <StyledConsentCheck
          type='checkbox'
          id='contacted'
          {...register('contacted', FORM_VALIDATION.CONTACTED)}
        />
        <StyledConsentLabel htmlFor='contacted'>
          I consent to being contacted by the team{' '}
          <StyledAsterisk>*</StyledAsterisk>
        </StyledConsentLabel>
        <StyledErrorMessage>{errors?.contacted?.message}</StyledErrorMessage>
      </div>
      <StyledSubmitButton type='submit' />
    </StyledFormContainer>
  );
};

export default Form;
