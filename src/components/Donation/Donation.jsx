import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const[noDataFound,setNoDataFound] =useState("");

    useEffect(() => {
        const donatedCategory = JSON.parse(localStorage.getItem('donations'));

        if (donatedCategory) {

            setDonations(donatedCategory);
        }
        else
        {
            setNoDataFound('No Data Found');
        }
    }, [])

    console.log(donations);


    return (
        <div>
           {
            noDataFound? 
            <p className="h-screen flex justify-center items-center">
                {noDataFound}
            </p>: 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4">
                {
                    donations.map(donation=> <DonationCard 
                        key={donation.id}
                        donation={donation}
                        ></DonationCard>)
                }
            </div>
           }

        </div>
    );
};

export default Donation;