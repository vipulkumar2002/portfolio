import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";

// Componets
import Loader from './components/common/loading/Loading'

// Lazy-loaded components
const Home = lazy(() => import("./components/pages/home/Home.tsx"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default App
