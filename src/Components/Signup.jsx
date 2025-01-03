import { Link } from 'react-router-dom';
import '../CSS/Signup.css';

const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
            <br />
            <span>
              Already have an account? <Link to="/login">Sign In</Link>
            </span>
          </div>
          <div className="form">
            <form action="/register" method="post">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input type="email" name="email" placeholder="Email" id="email" />
              <input
                type="text"
                name="college"
                id="college"
                placeholder="College Name"
              />
              <input
                type="text"
                name="field"
                id="field"
                placeholder="Your Field"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              <div className="submit_buttons">
                <button onClick={(e) => e.preventDefault()}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
