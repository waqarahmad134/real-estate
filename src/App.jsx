import { Routes, Route, BrowserRouter } from "react-router-dom"
import React, { Suspense, lazy } from "react"
import Home from "./pages/Home"
import ErrorPage from "./errors/error-page"
import { ToastContainer } from "react-toastify"
import { ChakraProvider } from "@chakra-ui/react"
import { HelmetProvider } from "react-helmet-async"
import { DataProvider } from "./context/DataContext"
import Loader from "./components/Loader"
import Iframe from "./pages/Iframe"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

// Lazy load the other components
const About = lazy(() => import("./pages/About"))
const Genre = lazy(() => import("./pages/Genre"))
const Genre1 = lazy(() => import("./pages/Genre1"))
const Year = lazy(() => import("./pages/Year"))
const Search = lazy(() => import("./pages/Search"))
const RequestMovie = lazy(() => import("./pages/RequestMovie"))

function App() {
  return (
    <div>
      <ToastContainer />
      <HelmetProvider>
        <ChakraProvider>
          <BrowserRouter>
            <DataProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/about"
                  element={
                    <Suspense
                      fallback={
                        <div className="loader-container">
                          <Loader />
                        </div>
                      }
                    >
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <Suspense
                      fallback={
                        <div className="loader-container">
                          <Loader />
                        </div>
                      }
                    >
                      <Search />
                    </Suspense>
                  }
                />

            
                <Route
                  path="/:categories/:Id"
                  element={
                    <Suspense
                      fallback={
                        <div className="loader-container">
                          <Loader />
                        </div>
                      }
                    >
                      <Genre />
                    </Suspense>
                  }
                />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </DataProvider>
          </BrowserRouter>
        </ChakraProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
