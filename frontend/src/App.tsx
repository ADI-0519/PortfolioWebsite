"use client"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import BlogPage from './Pages/BlogPage'
import ScrollToHash from './Components/ScrollToHash'
import ProjectsPage from './Pages/ProjectsPage'
import BlogPost from './Pages/BlogPost'
import ScrollToTop from './Components/ScrollToTop'; 
//import { Toaster } from "@/components/ui/toaster";




function App() {

  return (
    <>
      
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToHash /> 
        <Routes>
          <Route index element={<Home />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/BlogPage/:slug" element={<BlogPost />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
