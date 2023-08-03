'use client';
import AuthContext from '@/context/AuthContext';
import { XCircle } from 'lucide-react';
import { useContext } from 'react';
import LoginForm from './components/LoginForm';

function LoginModal() {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error('UserContext is undefined');
  }

  const { actions, setActions, user } = userContext;

  if (!actions?.login || user?.email) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          className={ `inline-block align-bottom rounded-lg text-left overflow-hidden 
                shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative` }
        >
          <LoginForm />
          <button
            type='button'
            onClick={ () => setActions((prev) => ({ ...prev, login: false })) }
            className="absolute top-0 right-0 m-3"
          ><XCircle />
          </button>
        </div>
      </div>
    </div>

  );
}

export default LoginModal;
