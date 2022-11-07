import { RouterProvider } from "react-router-dom";
import rootRoute from "./routes/rootRoute";
function App() {
  return (
    <div>
      <RouterProvider router={rootRoute} />
    </div>
  );
}

export default App;
