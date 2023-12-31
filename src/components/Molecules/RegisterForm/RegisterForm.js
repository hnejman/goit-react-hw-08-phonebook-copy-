import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username {' '}
        <input type="text" name="name" style={{  margin: '16px', display: 'block' }} />
      </label>
      <label >
        Email {' '}
        <input type="email" name="email" style={{  margin: '16px', display: 'block' }} />
      </label>
      <label >
        Password {' '}
        <input type="password" name="password" style={{  margin: '16px', display: 'block' }} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterForm;