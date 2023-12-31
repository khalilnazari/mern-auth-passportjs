import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";

const Login = () => {
  const handleSubmit = () => {};

  const facebookLogin = () => {};
  const gitHubLogin = () => {};
  const googleLogin = () => {};

  const loginForm = (
    <section>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <div>
          <label className="font-medium text-gray-800" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              autoComplete="off"
              className="p-2 w-full rounded border border-zinc-300"
            />
          </div>
        </div>

        <div>
          <label className="font-medium text-gray-800" htmlFor="password">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              className="p-2 w-full rounded border border-zinc-300"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="mb-3">
          <button
            type="submit"
            className="w-full bg-gray-700 text-gray-100 p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="text-right">
        <span>
          <Link to="/register" className="font-medium hover:underline">
            if you are new <b>Sign up</b>
          </Link>
        </span>
      </div>
    </section>
  );

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-gray-100 p-5 xs:p-4 sm:p-8 w-full mx-4 sm:mx-auto sm:max-w-[400px]">
        <h2 className="font-bold text-gray-700 text-xl uppercase mb-5">
          User Login
        </h2>
        {loginForm}

        <section className="mt-8">
          <div className="flex justify-between gap-2">
            <button
              onClick={googleLogin}
              type="submit"
              className="w-1/3 bg-red-700 text-gray-100 p-2 rounded flex items-center justify-center gap-2"
            >
              <FaGoogle /> Google
            </button>

            <button
              onClick={gitHubLogin}
              type="submit"
              className="w-1/3 bg-zinc-700 text-gray-100 p-2 rounded flex items-center justify-center gap-2"
            >
              <FaGithub /> Github
            </button>

            <button
              onClick={facebookLogin}
              type="submit"
              className="w-1/3 bg-blue-700 text-gray-100 p-2 rounded flex items-center justify-center gap-2"
            >
              <FaFacebookF /> Facebook
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
