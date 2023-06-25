import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Scholarship from "./components/Scholarship";
import CommonApplication from "./components/CommonApplication";
import CollegeInfo from "./components/CollegeInfo";
import CollegePlacement from "./components/CollegePlacement";
import CourseAndFee from "./components/CourseAndFee";
import Admission from "./components/Admission";
import Loan from "./components/Loan";
import Gallery from "./components/Gallery";
import Scholarship2 from "./components/Scholarship2";
import ReadMore from "./components/ReadMore";
import CouncilConnect from "./components/CounsellorConnect";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import BecomeSeller from "./components/BecomeSeller";
import OneStop from "./components/OneStop";
import Profile from "./components/Profile";
import TestPerform from "./components/TestPerform";
import College from "./components/College";
import Career from "./components/Career";
import Feed from "./components/Feed";
import Payment from "./components/Payment";
import Insurance from "./components/Insurance";
import Counsellor from "./components/Counsellor";
import Rewards from "./components/Rewards";
import Setting from "./components/Setting";
import CutOff from "./components/CutOff";
import EligibilityCheck from "./components/EligibilityCheck";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screen2" element={<Screen2 />} />
          <Route path="/delhi" element={<Screen3 />} />
          <Route path="/management" element={<Screen4 />} />
          <Route path="/scholarships" element={<Scholarship />} />
          <Route path="/common-applications" element={<CommonApplication />} />
          <Route path="/college-info" element={<CollegeInfo />} />
          <Route path="/college-placement" element={<CollegePlacement />} />
          <Route path="/course-fee" element={<CourseAndFee />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/scholarship2" element={<Scholarship2 />} />
          <Route path="/read-more" element={<ReadMore />} />
          <Route path="/council-connect" element={<CouncilConnect />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/become-partner" element={<BecomeSeller />} />
          <Route path="/one-stop" element={<OneStop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test-perform" element={<TestPerform />} />
          <Route path="/college" element={<College />} />
          <Route path="/career" element={<Career />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/counsellor" element={<Counsellor />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/cut-off" element={<CutOff />} />
          <Route path="/eligibility-check" element={<EligibilityCheck />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
