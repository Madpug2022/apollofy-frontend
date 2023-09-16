import './genreButton.css';
import { GenreType } from '../../../types/genre';
import { useListDetailContext } from '../../../utils/hooks/useListDetailContext';
// import { ListType } from '../../../types/enums';
import { useNavigate } from 'react-router-dom';

enum ListType {
    ALBUM = "album",
    ARTIST = "artist",
    PLAYLIST = "playlist",
    USER = "user",
    GENRE = "genre"
}

export const GenreButton = (props: GenreType) => {
    const { name, imageUrl, id, color } = props
    const { setNewListDetail } = useListDetailContext();
    const navigate = useNavigate();

    const genreBtnClicked = () => {
        const genre: GenreType = {
            name: name,
            imageUrl: imageUrl,
            id: id,
            color: color,
            type: ListType.GENRE
        }
        setNewListDetail(genre);
        navigate("/detail-page");
    }

    return (

        <button key={id} className='genre-button' style={{ background: color }} onClick={genreBtnClicked}>
            <div className='genre-button-container'>
                <p className='genre-tittle'> {name} </p>
                <img className='genre-img' src={imageUrl} alt={`Cover de ${name}`} />
            </div>
        </button>

    )
}
