import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouterData} from "../data/routeData.jsx";

const Routers = () => {
  return(
      <>
        <BrowserRouter>
          <Routes >
            {RouterData.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </>
  );
}
export default Routers
