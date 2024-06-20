import { ShieldBan } from "lucide-react";
import React from "react";
const imageLink =
  "https://images.unsplash.com/photo-1564574685150-74a84d02d695?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhvdGVsfGVufDB8fDB8fHww";
const LoginWrapper = ({ children }) => {
  return (
    <section class="vh-100" style={{ background: "linear-gradient(112.14deg, black 0%, #3A7BD5 100%)" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem 0 0 1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={imageLink}
                    alt="login form"
                    class="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                    // style="border-radius: 1rem 0 0 1rem;"
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body px-12 text-black">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginWrapper;
