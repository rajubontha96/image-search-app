import {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import ImageGrid from './components/ImageGrid'
import Pagination from './components/Pagination'
import Loader from './components/Loader'
import Modal from './components/Modal'
import './App.css'

const App = () => {
  const [query, setQuery] = useState('animals')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const fetchImages = async () => {
    setLoading(true)
    const res = await fetch(
      `https://image-search-app-8doj.onrender.com/search?query=${query}&page=${page}`
    )
    const data = await res.json()

    setImages(data.results)
    setTotalPages(data.total_pages)
    setLoading(false)
  }

  useEffect(() => {
    fetchImages()
  }, [query, page])

  return (
    <div className="app">
      {/* 🔥 LOGO ICON */}
      <img src="/logo.png" alt="RiseUpp Logo" className="logo-img" />

      {/* 🔥 TITLE */}
      <h1 className="logo-text">RiseUpp</h1>

      <SearchBar onSearch={setQuery} />
      <Categories onSelect={setQuery} />

      {loading ? (
        <Loader />
      ) : (
        <>
          <ImageGrid images={images} onImageClick={setSelectedImage} />

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}

      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  )
}

export default App