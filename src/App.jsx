import { Route, Routes } from "react-router-dom";
import "../src/assets/base/reset.scss";
import "./app.scss";
import Header from "./layout/header";
import HomePage from "./page/home-page";
import AboutPage from "./page/about-page";
import ContactPage from "./page/contact-page";
import Footer from "./layout/footer";
import ErrorPage from "./page/error-page";
import CustomerPage from "./page/customer-page";
import DetailPage from "./page/detail-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/customer/:id" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
