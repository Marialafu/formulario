import { useForm } from "react-hook-form"
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {

  const {register, handleSubmit, formState: {errors}} = useForm()
  //const onSumbit = (data) => console.log(data);
  console.log(errors);
  

  return (
    
    <div>
      <GlobalStyles />
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>

          <div>
            <label htmlFor="firstName">First Name *</label>
            <input 
            type="text" 
            id="firstName" 
            {...register("firstName", {required: 'This field is required'})}/>
            <p>{errors.firstName?.message}</p>
          </div>

          <div>
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" {...register("LastName", {required: 'This field is required'})}/>
            <p>{errors.lastName?.message}</p>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email Adress *</label>
          <input type="text" id="email"/>
        </div>
        <div>
          <label>Query Type *</label>
          <div>
            <input type="checkbox" id="generalEnquiry"/>
            <label htmlFor="generalEnquiry">General Enquiry</label>
          </div>
          <div>
            <input type="checkbox" id="supportRequest"/>
            <label htmlFor="supportRequest">Support Request</label>
          </div>
        </div>

          <div>
            <label htmlFor="message">Message *</label>
            <input type="input" id="message"/>
          </div>
          <div>
            <input type="checkbox" id="contacted"/>
            <label htmlFor="contacted">I consent to being contacted by the team *</label>
          </div>
        <input type="submit" />
        
      </form>
    </div>
  )
}