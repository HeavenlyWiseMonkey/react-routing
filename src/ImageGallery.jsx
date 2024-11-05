import { Link } from 'react-router-dom';

const ImageGallery = () => {
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Popeye_the_Sailor.png/120px-Popeye_the_Sailor.png" alt="popeye" />
                <img src="https://f4.bcbits.com/img/a2725548328_16.jpg" alt="spinach" />
                <img src="https://upload.wikimedia.org/wikipedia/en/7/7d/Bluto_color.png" alt="bluto" />
            </div>
            <Link to="/">Click here to go back</Link>
        </div>
    )
}

export default ImageGallery;