import ImageCard from '../ImageCard'
import './index.css'

const ImageGrid = ({images, onImageClick}) => (
  <div className="grid">
    {images.map(img => (
      <ImageCard key={img.id} image={img} onClick={onImageClick} />
    ))}
  </div>
)

export default ImageGrid