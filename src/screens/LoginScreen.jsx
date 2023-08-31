import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/userApiSlice";

import "../assets/css/login/login.css";
import "../assets/css/login/login.responsive.css";

import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({}).unwrap();
      dispatch(
        setCredentials({
          role: "admin",
          token: "<<jwt>>",
        })
      );
    } catch (error) {
      dispatch(
        setCredentials({
          role: "admin",
          token: "<<jwt>>",
        })
      );
      toast.error("login error. Please try again!");
    }
  };

  return (
    <div className="login-container-wrapper">
      <Form onSubmit={submitHandler}>
        <div className="login-main-container">
          <img
            className="login-main-logo"
            src="/black-logo.png"
            alt="ecp logo"
          />

          <p className="login-header mb-4 mt-3">
            Login to Evison Cloud Platform
          </p>

          <div className="col">
            <div asp-validation-summary="All" className="text-danger"></div>
            <div className="my-input-label mb-1">IAM User email address</div>
            <div className="my-input-footer-label mb-2">
              Choose a name for your account. You can change this name in your
              account settings after you sign up.
            </div>
            <input
              className="form-control"
              type="email"
              asp-for="Email"
              placeholder="e.g. example@evision.com"
            />
            <div className="mt-4"></div>
            <div className="my-input-label mb-1">IAM User password</div>
            <div className="my-input-footer-label mb-2">
              Enter your secured password to access features
            </div>
            <input
              className="form-control"
              asp-for="Password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col text-center">
            <button type="submit" className="verify-btn mt-5 mb-3">
              Verify Credentials
            </button>
          </div>

          <div className="row col">
            <div className="col-sm-5">
              <hr />
            </div>
            <div className="col-sm-2 text-center" style={{ color: "gray" }}>
              OR
            </div>
            <div className="col-sm-5">
              <hr />
            </div>
          </div>

          <button className="mt-3 my-btn-lg">Create a new ECP account</button>
        </div>
      </Form>
    </div>
  );
};

export default LoginScreen;
