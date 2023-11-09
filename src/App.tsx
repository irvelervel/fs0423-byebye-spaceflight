import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ArticleDetail from './components/ArticleDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:articleId" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
