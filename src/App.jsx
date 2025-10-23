import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"

import HomePage from "./pages/HomePage.jsx"
import AllEvents from "./pages/AllEvents.jsx"
import EventDetails from "./pages/EventDetails.jsx"
import VenueDetails from "./pages/VenueDetails.jsx"
import EventForm from "./pages/EventForm.jsx"
import MyAttending from "./pages/MyAttending.jsx"
import Profile from "./pages/Profile.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

export default function App(){
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar/>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/events" element={<AllEvents/>}/>
          <Route path="/events/new" element={<EventForm/>}/>
          <Route path="/events/:id" element={<EventDetails/>}/>
          <Route path="/events/:id/edit" element={<EventForm/>}/>
          <Route path="/venues/:id" element={<VenueDetails/>}/>
          <Route path="/me/attending" element={<MyAttending/>}/>
          <Route path="/me" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
    </div>
  )
}
