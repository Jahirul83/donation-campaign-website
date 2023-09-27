/* eslint-disable react/prop-types */


const DonationCard = ({ donation }) => {
    const { picture, description, title} = donation;
    return (
        <div>
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-80 h-80' src={picture} />
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;