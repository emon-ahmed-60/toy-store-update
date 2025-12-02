import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";

const LoginPage = () => {
  const { loginUser,setLoading, googleSignIn } = use(AuthContext);
  const [userEmail, setUserEmail] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        navigate(location.state)
        toast.success("login successfull");
      })
      .catch((err) => {
        toast.error(err.code)
        setLoading(false)
      });
      e.target.reset()
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleSignIn().then(()=>{
      toast.success("login successfull");
      navigate(location.state);
      setLoading(false)
    }).catch(err => {
      toast.error(err.code)
      setLoading(false)
    })
  }

  const navigateToForgotPage = (e) => {
    e.preventDefault();

    if (!userEmail) {
      toast.info("Please enter your email first.");
      return;
    }

    navigate("/reset-password", { state: { email: userEmail } });
  };


  return (
    <>
    <title>Toy Store - Login page</title>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <div>
              <Link onClick={navigateToForgotPage} className="link link-hover">Forgot password?</Link>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
          <p>Dont have an account ? please <Link to="/register" className="text-blue-400">Register</Link> </p>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default LoginPage;
