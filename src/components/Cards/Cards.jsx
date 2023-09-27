import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
    const {id, category, title, picture, category_bg_color, card_bg_color, text_button_bg_color } = card;
    // console.log(title)
    return (
        <div>
            <Link to={`/details/${id}`}>
                <div style={{backgroundColor: card_bg_color}} className="card card-compact shadow-xl">
                    <figure><img className='w-80 h-72' src={picture} /></figure>
                    <div className="card-body">
                        <div className="card-actions">
                            <button style={{color:text_button_bg_color, border:"2px solid", backgroundColor:category_bg_color}} className="btn">{category}</button>
                        </div>
                        <h2 style={{color: text_button_bg_color}} className="card-title">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};
Cards.propTypes = {
    card: PropTypes.object
}
export default Cards;