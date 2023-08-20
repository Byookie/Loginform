import { RouterProvider } from "react-router-dom";
import { Mainroute } from "./router/Mainroute";



const App = () => {
  return (
    <div>
      <RouterProvider router={Mainroute} />
    </div>
  );
};

export default App
