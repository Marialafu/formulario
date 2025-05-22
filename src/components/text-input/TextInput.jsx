const TextInput = ({ name, id, validation, register }) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type='text' {...register({ id, validation })} />
    </>
  );
};

export default TextInput;
