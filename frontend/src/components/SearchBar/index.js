import {useState} from 'react'
import './index.css'

const SearchBar = ({onSearch}) => {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim()) {
      onSearch(text)
    }
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search images..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button type="submit">🔍</button>
    </form>
  )
}

export default SearchBar