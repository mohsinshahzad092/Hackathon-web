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
      </Routes>
    </>
  );
}

export default App;
