import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import HomeContent from "./components/Home/HomeContent";
import Stats from "./components/Stats/Stats";
import BitaServices from "./components/BitaServices/BitaServices";
import TopItCoures from "./components/TopItCourses/TopItCoures";
import TrendingItCourses from "./components/TrendingItCourses/TrendingItCourses";
import { Testimonial } from "./components/Testimonial/Testimonial";
import EnquiryForm from "./components/EnquiryForm/EnquiryForm";
import NearByLocation from "./components/NearByLocation/NearByLocation";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import ContactUs from "./components/ContactUs/ContactUs";
import { Route, Routes } from "react-router-dom";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Updates from "./components/Updates/Updates";
import BuisnessAnalyst from "./components/Pages/BuisnessAnalyst";
import Docker from "./components/Pages/Docker";
import Servicenow from "./components/Pages/Servicenow";
import UiUx from "./components/Pages/UiUx";
import Playwright from "./components/Pages/Playwright";
import ReactJS from "./components/Pages/ReactJS";
import ScrollUpReact from "./components/ScrollUp/ScrollUpReact";
import AngularJs from "./components/Pages/AngularJs";
import RESTAPI from "./components/Pages/RESTAPI";
import SecurityTesting from "./components/Pages/SecurityTesting";
import Fsd from "./components/Pages/Fsd";
import SAP from "./components/Pages/SAP";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Stats />
              <HomeContent />
              <BitaServices />
              <TopItCoures />
              <TrendingItCourses />
              <Testimonial />
              <EnquiryForm />
              <NearByLocation />
              <ScrollUpReact />
              <ScrollUp />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <ContactUs />
            </>
          }
        />
        <Route
          path="/updates"
          element={
            <>
              <Updates />
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <Courses />
            </>
          }
        />

        <Route
          path="/buisnessanalyst"
          element={
            <>
              <BuisnessAnalyst />
            </>
          }
        />
        <Route
          path="/docker"
          element={
            <>
              <Docker />
            </>
          }
        />
        <Route
          path="/playwright"
          element={
            <>
              <Playwright />
            </>
          }
        />
        <Route
          path="/uiux"
          element={
            <>
              <UiUx />
            </>
          }
        />
        <Route
          path="/angularjs"
          element={
            <>
              <AngularJs />
            </>
          }
        />
        <Route
          path="/fsd"
          element={
            <>
              <Fsd />
            </>
          }
        />

        <Route
          path="/reactjs"
          element={
            <>
              <ReactJS />
            </>
          }
        />
        <Route
          path="/sap"
          element={
            <>
              <SAP />
            </>
          }
        />
        <Route
          path="/servicenow"
          element={
            <>
              <Servicenow />
            </>
          }
        />
        <Route
          path="/restapi"
          element={
            <>
              <RESTAPI />
            </>
          }
        />
        <Route
          path="/securitytesting"
          element={
            <>
              <SecurityTesting />
            </>
          }
        />
      </Routes>

      <ScrollUpReact />
      <Footer />
    </>
  );
};

export default App;
