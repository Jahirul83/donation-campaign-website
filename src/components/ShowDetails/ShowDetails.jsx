import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ShowDetails = () => {


    const [cardDetails, setCardDetails] = useState({});


    const params = useParams();
    const { id } = params;


    const categoryData = useLoaderData();

    useEffect(() => {
        const findCardDetails = categoryData.find(category => category.id === id);
        setCardDetails(findCardDetails);
    }, [id, categoryData]);


    const handleAddToDonation = () => {
        console.log(cardDetails);

       
    }



    return (
        <div className="mb-20">
            <div className="relative min-h-screen my-14">
                <img className="w-screen h-screen" src={cardDetails.picture} alt="" />
                <div className="absolute bottom-2 -mt-10 bg-opacity-50 bg-slate-900 p-6 w-full">
                    <button
                        onClick={handleAddToDonation}
                        style={{ backgroundColor: cardDetails.text_button_bg_color }} className="btn text-white">Donate {cardDetails.price}</button>
                </div>
            </div>
            <div className="my-12">
                <h2 className="text-5xl">{cardDetails.title}</h2>
                <p>{cardDetails.description}</p>
            </div>
        </div>

    );
};

export default ShowDetails;