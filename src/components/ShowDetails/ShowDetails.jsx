import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";


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
        // console.log(cardDetails);

        const addTODonation = [];


        const donatedCategory = JSON.parse(localStorage.getItem('donations'));
        if (!donatedCategory) {
            addTODonation.push(cardDetails);
            localStorage.setItem('donations', JSON.stringify(addTODonation));
            swal({
                title: "Good job!",
                text: "Donation successfully done",
                icon: "success",
                button: "ok",
              });

        }
        else {

            const isExists = donatedCategory.find(donation => donation.id === id)
            if (isExists) {
                swal({
                    title: "ERROR",
                    text: "Already Donated",
                    icon: "error",
                    button: "ok",
                  });
            }
            else {

                addTODonation.push(...donatedCategory, cardDetails);
                localStorage.setItem('donations', JSON.stringify(addTODonation));
                swal({
                    title: "Good job!",
                    text: "Donation successfully done",
                    icon: "success",
                    button: "ok",
                  });
            }


        }


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
                <h2 className="text-3xl">{cardDetails.title}</h2>
                <p className="my-3">{cardDetails.description}</p>
            </div>
        </div>

    );
};

export default ShowDetails;