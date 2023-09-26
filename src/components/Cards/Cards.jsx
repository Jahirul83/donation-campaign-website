import PropTypes from 'prop-types';

const Cards = ({card}) => {
    const {title} = card;
    console.log(title)
    return (
        <div>
            <h2 className="text-2xl text-center">{title}</h2>
        </div>
    );
};
Cards.propTypes = {
    card: PropTypes.object
}
export default Cards;