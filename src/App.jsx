import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Principal from "./pages/Principal";


const router = createBrowserRouter ([
  {
    path: "/",
    element : <Principal/>
  }
])



function App() {
  return (
    <RouterProvider router={{router}}/>
   
  )
}

export default App;
