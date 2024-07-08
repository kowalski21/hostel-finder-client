import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "react-query";

const LoginForm = () => {
  const router = useRouter();
  const { showError, showMsg } = useNotify();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (keyName) => (e) => {
    setValues({ ...values, [keyName]: e.target.value });
  };

  const mutation = useMutation({
    mutationFn: async () => {
      return await directus.auth.login(values);
    },
    onError: (e) => {
      showError(e.message);
    },
    onSuccess: (data) => {
      showMsg(`User Login Success`);
      router.push(`/dashboard`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <div className="py-20">
      <form className="form w-100" novalidate="novalidate">
        <div className="card-body">
          <div className="text-start mb-10">
            <h1 className="text-gray-900 mb-3 fs-3x">Hostel Finder App</h1>

            <div className="text-gray-500 fw-semibold fs-6" data-kt-translate="general-desc">
              Book A Hostel with simplicity and ease
            </div>
            <div className="text-gray-800 mt-2 fw-bolder fs-6" data-kt-translate="general-desc">
              Sign In to get started
            </div>
          </div>

          <div className="fv-row mb-8">
            <input
              type="text"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="Email"
              name="email"
              autocomplete="off"
              className="form-control form-control-lg"
            />
          </div>

          <div className="fv-row mb-7">
            <input
              value={values.password}
              onChange={handleChange("password")}
              type="password"
              placeholder="Password"
              name="password"
              autocomplete="off"
              className="form-control form-control-lg"
            />
          </div>

          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
            <div></div>

            {/* <a className="link-primary" data-kt-translate="sign-in-forgot-password">
              Forgot Password ?
            </a> */}
          </div>

          <div className="d-flex flex-stack">
            <button className="btn btn-primary text-white me-2 flex-shrink-0" onClick={handleSubmit}>
              <span className="text-white">Sign In</span>
            </button>

            {/* <div className="d-flex align-items-center">
              <div className="text-gray-500 fw-semibold fs-6 me-3 me-md-6">Or</div>

              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                <img alt="Logo" src="/media/svg/brand-logos/google-icon.svg" className="p-4" />
              </a>

              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                <img alt="Logo" src="/media/svg/brand-logos/facebook-3.svg" className="p-4" />
              </a>

              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light">
                <img alt="Logo" src="/media/svg/brand-logos/apple-black.svg" className="theme-light-show p-4" />
              </a>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
