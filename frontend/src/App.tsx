"use client"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import BlogPage from './Pages/BlogPage'
//import { Toaster } from "@/components/ui/toaster";


function App() {

  return (
    <>
      {/* <Toaster /> */}
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='/BlogPage' element={<BlogPage />} />

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
