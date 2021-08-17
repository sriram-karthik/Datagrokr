import React, { Component } from "react";
import { toast } from "react-toastify";
import "./Register.scss";
import { TextField,Button } from "@material-ui/core";

class Register extends Component {
  constructor() {
    super();
   
    this.state = {
      fullName: "",
      username: "",
      email: "",
      designation: "",
      password: "",
      confirmpassword: "",
      storage: "",
      errors: {},
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmpassword = this.changeConfirmpassword.bind(this);
    this.changeDesignation = this.changeDesignation.bind(this);
    this.ChangeStorage = this.ChangeStorage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUserName(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  changeConfirmpassword(event) {
    this.setState({
      confirmpassword: event.target.value,
    });
  }
  changeDesignation(event) {
    this.setState({
      designation: event.target.value,
    });
  }
  ChangeStorage(event) {
    this.setState({
      storage: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      const registered = {
        fullName: this.state.fullName,
        username: this.state.username,
        email: this.state.email,
        designation: this.state.designation,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword,
        storage: this.state.storage,
      };
     if(this.state.storage==="Local Storage"){

        localStorage.setItem("UserDetails", JSON.stringify(registered));
        toast.dark("Storged in Local Storage");
     }
    }
  }
  validateForm() {
    const FULLNAM = this.state.fullName;
    const USRNAM = this.state.username;
    const EMIL = this.state.email;
    const PASS = this.state.password;
    const CONFRM_PASS = this.state.confirmpassword;
    const DESIG = this.state.designation;
    const STOR = this.state.storage;
    let frmvalid = true;
    let errors = {};
    if (!STOR) {
      errors["storage"] = "choose your Storage";
      frmvalid = false;
    }
    if (!DESIG) {
      errors["designation"] = "choose your designation";
      frmvalid = false;
    }
    if (!FULLNAM) {
      errors["fullname"] = "Enter your FullName";
      frmvalid = false;
    }
    if (!USRNAM) {
      errors["username"] = " Enter your Username";
      frmvalid = false;
    }
    if (!EMIL) {
      errors["email"] = "Enter Your Email";
      frmvalid = false;
    }
    if (!PASS) {
      errors["password"] = "Enter Your Password";
      frmvalid = false;
    }
    if (!CONFRM_PASS) {
      errors["confirmpassword"] = "Enter Your Confirm Password";
      frmvalid = false;
    }
    if (PASS !== CONFRM_PASS) {
      frmvalid = false;
      errors["match"] = "Passwords don't match.";
    }
    this.setState({
      errors: errors,
    });
    return frmvalid;
  }

  render() {
    return (
      <div className="datagrov">
        <div className="card" style={{ width: "60%" }}>
          <div>
            <form  className="">
              <h3>Register</h3>
              <div className="row">
                <div className="col-md-4">
                  <TextField
                    type="text"
                    className="text_field"
                    label="FullName"
                    placeholder="Enter FullName"
                    onChange={this.changeFullName}
                    value={this.state.fullName}
                    variant="filled"
                  />
                  <div className="errorMsg">{this.state.errors.fullname}</div>
                </div>

                <div className="col-md-4">
                  <TextField
                  className="text_field"
                    variant="filled"
                    label="UserName"
                    type="text"
                    placeholder="Enter User Name"
                    onChange={this.changeUserName}
                    value={this.state.username}
                  />
                  <div className="errorMsg">{this.state.errors.username}</div>
                </div>
                <div className="col-md-4">
                  <TextField
                  className="text_field"
                    variant="filled"
                    label="Email"
                    type="email"
                    placeholder="Enter Email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                  />
                  <div className="errorMsg">{this.state.errors.email}</div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <TextField
                  className="text_field"
                    variant="filled"
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.changePassword}
                    value={this.state.password}
                  />
                  <div className="errorMsg">{this.state.errors.password}</div>
                </div>
                <div className="col-md-6">
                  <TextField
                    variant="filled"
                    className="text_field"
                    label="Confirm Password"
                    type="password"
                    placeholder="Enter Confirm Password"
                    onChange={this.changeConfirmpassword}
                    value={this.state.confirmpassword}
                  />
                  <div className="errorMsg">
                    {this.state.errors.confirmpassword}
                  </div>
                  <div className="errorMsg">{this.state.errors.match}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Desigination</label>
                  <select
                    name="designation"
                    className="form-control"
                    onChange={this.changeDesignation}
                    value={this.state.designation}
                  >
                    <option selected value="Choose One">
                      Choose One
                    </option>
                    <option value="Intern">Intern</option>
                    <option value="HR">HR</option>
                    <option value="Product Engineer">Product Engineer</option>
                    <option value="Business Analyst">Business Analyst</option>
                  </select>
                  <div className="errorMsg">
                    {this.state.errors.designation}
                  </div>
                </div>

                
                <div className="col-md-6">
                  <label>Storage</label>
                  <select
                    name="storage"
                    className="form-control"
                    onChange={this.ChangeStorage}
                    value={this.state.storage}
                  >
                    <option selected value="Choose One">
                      Choose One
                    </option>
                    <option value="Local Storage">Local Storage</option>
                    <option value="Database">Database</option>
                  </select>
                  <div className="errorMsg">{this.state.errors.storage}</div>
                </div>
              </div>
              <br/>
              <Button variant="contained" color="primary" onClick={this.onSubmit}>
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
