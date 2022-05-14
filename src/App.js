import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewCourses from './views/ViewCourses';
import AdminLogin from './views/AdminLogin';
import AdminDashboard from './views/AdminDashboard';
// import your route components too

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Login />
        }>
        </Route>
        <Route path="/viewcourses" element={
          <ViewCourses />
        }>
        </Route>
        <Route path="/adminlogin" element={
          <AdminLogin />
        }>
        </Route>
        <Route path="/admindashboard" element={
          <AdminDashboard />
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
