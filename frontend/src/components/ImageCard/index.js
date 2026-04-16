import './index.css'

const ImageCard = ({ image, onClick }) => {
    return (
        <div className="card" onClick={() => onClick(image)}>
            <img src={image.urls.small} alt={image.alt_description} />

            <div className="overlay">
                <p>📸 {image.user.name}</p>
                <p>❤️ {image.likes}</p>
            </div>
        </div>
    )
}

export default ImageCard