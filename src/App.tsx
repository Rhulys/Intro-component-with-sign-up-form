import { FormEvent, useState } from "react";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstnameerror, setFirstNameError] = useState(false);
  const [lastnameerror, setLastNameError] = useState(false);
  const [emaileerror, setemailError] = useState(false);
  const [passworderror, setPasswordError] = useState(false);

  function HandleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (firstname === "") {
      setFirstNameError(true);
    }else{
      setFirstNameError(false);
    }

    if (lastname === "") {
      setLastNameError(true);
    }else{
      setLastNameError(false);
    }

    if (email === "") {
      setemailError(true);
    }else{
      setemailError(false);
    }

    if (password === "") {
      setPasswordError(true);
    }else{
      setPasswordError(false);
    }
  }

  return (
    <div className="bg-desktop h-lvh bg-redf flex flex-col xl:flex-row py-10 xl:px-40 gap-5 items-center text-center">
      <div className="flex-1 mx-4 xl:w-1/2 flex flex-col gap-5 xl:gap-10">
        <h1 className="text-white text-3xl lg:text-7xl font-semibold">
          Learn to code by watching others
        </h1>
        <p className="text-white">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is grate, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="flex-1 xl:w-1/2 flex flex-col gap-5 mx-4">
        <div className="bg-bluef p-5 rounded-xl text-center">
          <p className="text-white">
            <span className="font-bold">Try it free 7 days</span> then S20/mo.
            thereafter
          </p>
        </div>
        <form
          onSubmit={HandleForm}
          className="bg-white flex flex-col gap-5 p-10 rounded-xl"
        >
          {firstnameerror ? (
            <div className="flex-col flex relative">
              <input
                type="text"
                placeholder="First Name"
                className="input_form_error"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <img src="./icon-error.svg" alt="error" className="h-8 w-8 absolute right-3 top-3"/>
              <span className="text-red-500 text-right text-xs">
                First Name cannot be empty
              </span>
            </div>
          ) : (
            <input
              type="text"
              placeholder="First Name"
              className="input_form"
              onChange={(e) => setFirstName(e.target.value)}
            />
          )}

          {lastnameerror ? (
            <div className="flex-col flex relative">
              <input
                type="text"
                placeholder="Last Name"
                className="input_form_error"
                onChange={(e) => setLastName(e.target.value)}
              />
              <img src="./icon-error.svg" alt="error" className="h-8 w-8 absolute right-3 top-3"/>
              <span className="text-red-500 text-right text-xs">
                Last Name cannot be empty
              </span>
            </div>
          ) : (
            <input
              type="text"
              placeholder="Last Name"
              className="input_form"
              onChange={(e) => setLastName(e.target.value)}
            />
          )}

          {emaileerror ? (
            <div className="flex-col flex relative">
              <input
                type="email"
                placeholder="Email Address"
                className="input_form_error"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src="./icon-error.svg" alt="error" className="h-8 w-8 absolute right-3 top-3"/>
              <span className="text-red-500 text-right text-xs">
                Email cannot be empty
              </span>
            </div>
          ) : (
            <input
              type="email"
              placeholder="Email Address"
              className="input_form"
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          {passworderror ? (
            <div className="flex-col flex relative">
              <input
                type="password"
                placeholder="Password"
                className="input_form_error"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src="./icon-error.svg" alt="error" className="h-8 w-8 absolute right-3 top-3"/>
              <span className="text-red-500 text-right text-xs">
                Password cannot be empty
              </span>
            </div>
          ) : (
            <input
              type="password"
              placeholder="Password"
              className="input_form"
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          <button className="bg-greenf text-white text-center p-5 rounded-xl hover:bg-green-500">
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="text-gray-200 text-xs text-center">
            By clicking the button, you are agreeing to our{" "}
            <a href="#" className="text-red-400">
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;

