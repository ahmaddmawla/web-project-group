import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle.jsx"

const link = "px-3 py-2 rounded-md text-sm font-medium"
const active = "bg-neutral-200 dark:bg-neutral-800"

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <NavLink to="/" end className="font-semibold">Evently</NavLink>
          <div className="hidden sm:flex items-center gap-1">
            <NavLink
              to="/events"
              end
              className={({isActive}) => `${link} ${isActive ? active : ""}`}
            >
              Events
            </NavLink>
            <NavLink
              to="/me/attending"
              className={({isActive}) => `${link} ${isActive ? active : ""}`}
            >
              My Attending
            </NavLink>
            <NavLink
              to="/me"
              end
              className={({isActive}) => `${link} ${isActive ? active : ""}`}
            >
              Profile
            </NavLink>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            end
            className={({isActive}) => `${link} ${isActive ? active : ""}`}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            end
            className={({isActive}) => `${link} ${isActive ? active : ""}`}
          >
            Register
          </NavLink>
          <ThemeToggle/>
        </div>
      </nav>
    </header>
  )
}
