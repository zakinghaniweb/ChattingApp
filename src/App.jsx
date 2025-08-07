import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'
import Chat from './Pages/Chat/Chat'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LayoutOne />}>
        <Route index element={<Chat />}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
