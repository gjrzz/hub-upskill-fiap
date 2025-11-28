import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Profile from "./pages/Profile"

<h1 style={{
  fontSize: "42px",
  color: "#FF0043",
  textShadow: "0 0 12px rgba(255,0,67,0.5)",
  fontWeight: "bold"
}}>
  Hub UpSkill
</h1>


function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  )
}

export default App
