import SelectRoles from "@/components/forms/SelectRoles";
import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import { useMutation } from "react-query";
import { Uploader } from "rsuite";
const SignUpForm = () => {
  const router = useRouter();
  const { showError, showMsg } = useNotify();
  const [values, setValues] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "a3b1342a-221d-4c1a-9ade-530f12b01e4c",
  });
  const handleChange = (keyName) => (e) => {
    setValues({ ...values, [keyName]: e.target.value });
  };
  const handleRole = (keyName, val) => {
    setValues({ ...values, [keyName]: val });
  };

  const [file, setFile] = useState("");
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const mutation = useMutation({
    mutationFn: async (payload) => {
      if (!file) {
        throw new Error("Photos is missing from the form");
      }
      const formData = new FormData();
      formData.append("file", file);
      const res = await directus.files.createOne(formData);
      payload.avatar = res.id;
      const userResponse = await directus.users.createOne(payload);
      return userResponse;
    },
    onSuccess: (data) => {
      showMsg(`Redirecting to Login...`);
      router.push(`/auth/login`);
    },
    onError: (e) => {
      showError(e.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(values);
  };

  return (
    <div className="py-20">
      <form className="form w-100" novalidate="novalidate">
        <div className="card-body">
          <div className="text-start mb-10">
            <h1 className="text-gray-900 mb-3 fs-3x">Hostel Finder App</h1>
            {/* <div className="text-dark">{JSON.stringify({ values })}</div> */}

            <div className="text-gray-500 fw-semibold fs-6" data-kt-translate="general-desc">
              Book A Hostel with simplicity and ease, anytime and anywhere
            </div>
            <div className="text-gray-800 mt-2 fw-bolder fs-6" data-kt-translate="general-desc">
              Sign Up to get started
            </div>
          </div>

          <div className="fv-row mb-8">
            <label className="required text-dark fw-bold fs-6 mb-2">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              autocomplete="off"
              value={values.email}
              onChange={handleChange("email")}
              className="form-control form-control-lg"
            />
          </div>

          <div className="fv-row mb-7">
            <label className="required text-dark fw-bold fs-6 mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              autocomplete="off"
              value={values.password}
              onChange={handleChange("password")}
              className="form-control form-control-lg"
            />
          </div>
          <div className="row fv-row">
            <div className="col-6">
              <label className="required text-dark fw-bold fs-6 mb-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={values.first_name}
                onChange={handleChange("first_name")}
                autocomplete="off"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-6">
              <label className="required text-dark fw-bold fs-6 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={values.last_name}
                onChange={handleChange("last_name")}
                autocomplete="off"
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <FormLabel className="required">Role</FormLabel>
              <SelectRoles onChange={handleRole} keyName={"role"} className="text-dark" defaultValue={values.role} />
            </div>
          </div>
          <div className="row fv-row mt-4">
            <div className="col-12">
              <label className="required text-dark fw-bold fs-6 mb-2">Upload Profie Picture</label>
              <input type="file" name="" id="" className="form-control" onChange={handleFile} />
              {/* <Uploader
                onChange={handleFile}
                multiple={false}
                action="http://localhost:8050/files"
                onCh
                autoUpload={false}
                draggable
              >
                <div style={{ height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="text-dark">Click or Drag files to this area to upload</span>
                </div>
              </Uploader> */}
            </div>
          </div>

          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
            <div></div>

            {/* <a className="link-primary" data-kt-translate="sign-in-forgot-password">
              Forgot Password ?
            </a> */}
          </div>

          <div className="d-flex flex-stack">
            <button className="btn btn-dark text-white me-2 flex-shrink-0" onClick={handleSubmit}>
              {mutation.isLoading ? (
                <span className="text-white">Please wait.....</span>
              ) : (
                <span className="text-white">Sign Up</span>
              )}
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

export default SignUpForm;
