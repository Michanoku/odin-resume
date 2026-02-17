import '../styles/Picture.css';
import { useState } from 'react';

function Picture() {
    const [image, setImage] = useState(null);

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
            setImage({
                url: imageUrl,
                width: img.width,
                height: img.height,
            });
        };
        img.src = imageUrl;
    }
    let imageData;
    if (image !== null) {
        imageData = <img src={image.url} width={image.width} height={image.height}></img>;
    }
    return (
        <label className="imageUpload">
            <div className="imageContainer">
                {imageData}
            </div>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
            />
        </label>
    )
}

export { Picture }