import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
    const {id, category, title, picture, category_bg_color, card_bg_color, text_button_bg_color } = card;
    console.log(title)
    return (
        <div>
            <Link to={`/details/${id}`}>
                <div className={`card card-compact shadow-xl ${card_bg_color}`}>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions">
                            <button className={`btn btn-primary`}>{category}</button>
                        </div>
                        <h2 className={`card-title ${text_button_bg_color}`}>{title}</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
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