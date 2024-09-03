import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value; // Extract the username
    const password = e.target[1].value; // Extract the password

    axios
      .post("http://localhost:3001/authenticate", { username, password }) // Send both username and password
      .then((r) => props.onAuth({ ...r.data, secret: password })) // Use the password as the secret
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username and password to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />

          <div className="auth-label">Password</div>
          <input className="auth-input" name="password" type="password" />

          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
