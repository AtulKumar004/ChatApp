import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center" // Toasts position on the screen
        autoClose={5000} // Auto close delay in ms
        hideProgressBar={false} // Option to show/hide the progress bar
        newestOnTop={false} // Display newest toast on top
        closeOnClick // Close the toast on click
        rtl={false} // Right to left content support
        pauseOnFocusLoss // Pause the timer when the window loses focus
        draggable // Allow to drag the toast to dismiss
        pauseOnHover // Pause the auto-close timer on hover
      />
    </>
  );
}

export default App;
