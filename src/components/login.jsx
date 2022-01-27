import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("profile", JSON.stringify(response));
    history.push("/meetings");
  };

  return (
    <div className="login container">
      <h1>Login</h1>
      <GoogleLogin
        clientId="1027832777085-5jl36p71f54onrrm2hcn2mb2bkdv6ivs.apps.googleusercontent.com"
        buttonText="SignIn from Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
