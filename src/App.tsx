import React, { useState } from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Memory from './views/Memory'
import SearchView from './views/search'

const App = () => {
  const [memid, setMemid] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchView memid={memid} setMemid={setMemid}/>
    },
    {
      path: "/memory",
      element: <Memory memid={memid}/>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
