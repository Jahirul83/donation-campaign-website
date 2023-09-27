/* eslint-disable react/prop-types */


const DonationCard = ({ donation }) => {
    const { picture, title,category,category_bg_color,text_button_bg_color,card_bg_color,price} = donation;
    return (
        <div>
            <div style={{backgroundColor:card_bg_color}} className="hero  rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-80 h-80' src={picture} />
                    <div>
                        <p style={{backgroundColor:category_bg_color, color: text_button_bg_color}} className="w-fit p-3 rounded">{category}</p>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p style={{color:text_button_bg_color}} className="py-6 font-bold">${price}</p>
                        <button style={{backgroundColor:text_button_bg_color}}
                        className="btn ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;