const Gallery = ({ images }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    );
  };
  
  export default Gallery;