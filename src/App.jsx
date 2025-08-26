import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'
import AuthLayout from './Layouts/AuthLayout'
import Chat from './Pages/Chat/Chat'

import Register from './Pages/Register/Register'
import OtpVerification from './Pages/OtpVerification/OtpVerification'
import { ToastContainer } from 'react-toastify'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<Chat />}/>
        </Route>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/register' element={<Register />}/>
          <Route path='/otpVerify' element={<OtpVerification />}/>
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={myRoute}/>
      <ToastContainer />
    </>
  )
}

export default App
