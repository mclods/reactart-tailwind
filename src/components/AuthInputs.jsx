import { useState } from 'react';

function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const labelStyle = `block mb-2 text-sm font-bold tracking-widest uppercase`;
  const inputStyle =
    'w-full py-3 px-4 leading-6 border-solid border-[1px] border-transparent rounded-[0.25rem] shadow-sm';

  return (
    <div className="w-full max-w-[28rem] p-8 mx-auto my-0 mb-8 rounded-lg text-white shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-10 mb-6">
        <p>
          <label
            className={`${labelStyle} ${
              emailNotValid ? 'text-red-400' : 'text-[#6b7280]'
            }`}
          >
            Email
          </label>
          <input
            type="email"
            className={`${inputStyle} ${
              emailNotValid
                ? 'bg-red-100 text-red-500 border-red-300'
                : 'bg-[#d1d5db] text-[#374151]'
            }`}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label
            className={`${labelStyle} ${
              passwordNotValid ? 'text-red-400' : 'text-[#6b7280]'
            }`}
          >
            Password
          </label>
          <input
            type="password"
            className={`${inputStyle} ${
              passwordNotValid
                ? 'bg-red-100 text-red-500 border-red-300'
                : 'bg-[#d1d5db] text-[#374151]'
            }`}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="text-amber-400 hover:text-amber-500 border-none font-mono"
        >
          Create a new account
        </button>
        <button
          className="py-3 px-5 font-mono font-semibold uppercase rounded-lg text-stone-900 border-none bg-amber-400 hover:bg-amber-500"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default AuthInputs;
