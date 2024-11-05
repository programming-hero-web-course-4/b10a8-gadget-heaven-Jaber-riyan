import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routerr.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true} />
  </StrictMode>,
)
