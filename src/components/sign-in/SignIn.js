import React from "react";
import "../sign-in/Signin.scss";
import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-button/CustomBtn";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I am already have an account.</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomBtn type="submit"> SIGN IN</CustomBtn>
            <CustomBtn type="button" onClick={signInWithGoogle} isGoogleSignIn>
              signInWithGoogle
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
