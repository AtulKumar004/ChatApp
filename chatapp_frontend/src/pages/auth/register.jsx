import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { registerRoute } from "../../utils/APIRoutes";

const Register = () => {
  const [userInputs, setUserInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    c_password: "",
  });
  const [isValidateFlag, setIsValidateFlag] = useState(true);

  const isValidate = () => {
    const { firstName, lastName, email, password, c_password } = userInputs;
    let isValid = false;
    isValid = firstName && email && password && c_password;
    setIsValidateFlag(isValid);
    return isValid;
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, c_password } = userInputs;
    if (!isValidate()) {
      toast.warn("Please fill all the fields");

      return;
    }

    let payload = {
      firstName,
      lastName,
      email,
      password,
   
    };

    axios
      .post(registerRoute, payload)
      .then((res) => {
        console.log("user Resister Data ===>" , res);
      })
      .catch((err) => {
        console.log(err);
      });

    
  };
  return (
    <div class="font-mono bg-gray-400">
      <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen px-6">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
              }}
            ></div>

            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
              <form
                onSubmit={handleSubmit}
                class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="firstName"
                      onChange={handelChange}
                      placeholder="First Name"
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="lastName"
                      type="text"
                      onChange={handelChange}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    onChange={handelChange}
                    placeholder="Email"
                  />
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="password"
                      type="password"
                      onChange={handelChange}
                      placeholder="******************"
                    />
                    <p class="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="c_password"
                      onChange={handelChange}
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
