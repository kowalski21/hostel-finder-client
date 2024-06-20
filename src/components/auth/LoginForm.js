import { useLoginMutation } from "@/actions/auth";
import { useNotify } from "@/hooks/notify";
import { client } from "@/sdk";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
const LoginForm = () => {
  const router = useRouter();
  const { showError, showMsg } = useNotify();
  const { mutate } = useLoginMutation();
  const [values, setValues] = useState({
    username: "logan",
    password: "docker",
  });

  const handleChange = (keyName) => (e) => {
    setValues({ ...values, [keyName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutate(values, {
      onSuccess: (data) => {
        // console.log(data);
        showMsg("User Login Success");
        showMsg("Redirecting to User Dashboard");
        router.push("/");
      },
      onError: (e) => {
        showError(e.message);
      },
    });
  };
  return (
    <div>
      <form>
        <div className="d-flex align-items-center mb-3 pb-1">
          {/* <i className="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> */}
          <span className="h1 fw-bolder mb-0">Hostel Finder App </span>
        </div>

        <h5 className="fw-medium mb-3 pb-3">Sign into your account</h5>

        <div data-mdb-input-init className="form-outline mb-4">
          <input value={values.username} onChange={handleChange("username")} className="form-control form-control-lg" />
          <label className="form-label " for="form2Example17">
            Email address
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            className="form-control form-control-lg"
          />
          <label className="form-label">Password</label>
        </div>

        <div className="pt-1 mb-4">
          <button onClick={handleSubmit} className="btn btn-dark btn-lg btn-block" type="button">
            Login
          </button>
        </div>

        {/* <a className="small text-muted" href="#!">
          Forgot password?
        </a> */}
        <p className="mb-5 pb-lg-2">
          Don't have an account? <Link href={`/register`}>Register here</Link>
        </p>
        <a className="small text-muted">Terms of use.</a>
        <a className="small text-muted">Privacy policy</a>
      </form>
    </div>
  );
};

export default LoginForm;
