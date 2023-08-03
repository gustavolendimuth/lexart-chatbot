import AuthContext from '@/context/AuthContext';
import { FormValues } from '@/types/loginTypes';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      keepConnected: true,
    },
  });

  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error('UserContext is undefined');
  }

  const { setLogin } = userContext;

  return (
    <div className="mx-auto bg-zinc-800 p-10 rounded-lg">

      <div className="flex flex-col items-center">
        <form
          onSubmit={ handleSubmit((data) => {
            if (data.email && data.password) setLogin(data);
          }) }
          className="w-full max-w-md"
        >
          <div className="text-center text-zinc-300">
            <h1 className="text-2xl mb-6 text-zinc-300">Faça o login</h1>
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="email"
            >Email
            </label>
            <input
              type="email"
              className="text-zinc-800 form-input block w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              { ...register('email') }
              id="email"
            />
            <div className="relative mb-4" />
            <label
              htmlFor="password"
            >Password
            </label>
            <input
              type="password"
              className="text-zinc-800 form-input block w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              { ...register('password') }
              id="password"
            />
          </div>

          <div className="checkbox mb-3">
            <label htmlFor="keepConnected" className="flex items-center">
              <input
                type="checkbox"
                { ...register('keepConnected') }
                className="form-checkbox text-blue-600 mr-2"
              />
              {' '}
              keep connected
            </label>
          </div>
          <button
            className={ `w-full py-2 px-4 border border-transparent rounded-md 
            shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500` }
            type="submit"
          >Login
          </button>
        </form>
      </div>
    </div>
  );
}
