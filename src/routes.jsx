import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"
import Projects from "./views/Projects"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/Projects",
    element: <Projects/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  }
]

export default routes