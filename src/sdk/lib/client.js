import axios from "axios";
import defu from "defu";
import qs from "qs";
import Cookies from "js-cookie";
import { cleanDoubleSlashes, joinURL } from "ufo";
import { isBrowser } from "./utils";

const defaults = {
  url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8008",
  prefix: "/api",
  store: {
    key: "app_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
};

export class AppSdk {
  constructor(options = {}) {
    const _options = defu(options || {}, defaults);

    // clean url & prefix
    this.options = {
      ..._options,
      url: cleanDoubleSlashes(_options?.url),
      prefix: cleanDoubleSlashes(_options?.prefix),
    };
    this.axios = axios.create({
      baseURL: joinURL(this.options.url, this.options.prefix),
      paramsSerializer: (params) => {
        return qs.stringify(params, {
          encode: false,
          arrayFormat: "indices", // You can change this to 'indices', 'repeat', or 'comma'
          skipNulls: true, // Skip null values in the query string
          strictNullHandling: true, // Handle null values strictly
        });
      },
      ...this.options.axiosOptions,
    });

    this.axios.interceptors.request.use((config) => {
      const token = this.getToken();
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    });
  }
  async request(method, url, axiosConfig = {}) {
    try {
      const response = await this.axios.request({ method, url, ...axiosConfig });
      //   console.log(response);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new Error(error.message);
      } else {
        throw new Error(error.response.data.errors[0].message);
      }
    }
  }

  async authenticateUser(credentials) {
    const { access_token, id } = await this.request("post", "/auth/login", { data: credentials });
    this.setToken(access_token);
    return { userId: id, access_token };
  }

  async authUser() {
    return await this.request("get", "/auth/me");
  }
  // async listUsers(pa)

  getToken() {
    const { useLocalStorage, key } = this.options.store;
    if (isBrowser()) {
      const token = useLocalStorage ? window.localStorage.getItem(key) : Cookies.get(key);

      if (typeof token === "undefined") return null;

      return token;
    }

    return null;
  }

  setToken(token) {
    const { useLocalStorage, key, cookieOptions } = this.options.store;
    if (isBrowser()) {
      useLocalStorage ? window.localStorage.setItem(key, token) : Cookies.set(key, token, cookieOptions);
    }
  }

  removeToken() {
    const { useLocalStorage, key } = this.options.store;
    if (isBrowser()) {
      useLocalStorage ? window.localStorage.removeItem(key) : Cookies.remove(key);
    }
  }
}
