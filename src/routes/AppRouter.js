import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../redux";
import DashboardSlider from "../components/Layout/DashboardSlider";
import Index from "../views/Bussines/Index";
import Detail from "../views/Bussines/Detail";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardSlider />}>
            <Route path="business" element={<Index />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
