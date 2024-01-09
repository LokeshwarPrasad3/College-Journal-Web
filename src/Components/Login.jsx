import { Link } from "react-router-dom";
import "../CSS/Login.css";

const Login = () => {
  return (
    <>
      <div className="login_form_container">
        <div className="login-container">
          <form className="login-form">
            <h1>Welcome Back</h1>
            <p>Please login to your account</p>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Login</button>
            <div className="bottom-text">
              <p>
                Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
              </p>
              <p>
                <Link to="#">Forgot password?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
