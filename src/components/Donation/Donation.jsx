import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";



const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDataFound, setNoDataFound] = useState("");
    const [isSeeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const donatedCategory = JSON.parse(localStorage.getItem('donations'));

        if (donatedCategory) {

            setDonations(donatedCategory);
        }
        else {
            setNoDataFound('No Data Found');
        }
    }, [])

    // console.log(donations);
    console.log(isSeeAll);


    return (
        <div>
            {
                noDataFound ?
                    <p className="h-screen flex justify-center items-center">
                        {noDataFound}
                    </p> :
                    <div >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4">
                            {
                                isSeeAll ?
                                    donations.map(donation => <DonationCard
                                        key={donation.id}
                                        donation={donation}
                                    ></DonationCard>)
                                    : donations.slice(0, 4).map(donation => <DonationCard
                                        key={donation.id}
                                        donation={donation}
                                    ></DonationCard>)

                            }
                        </div>
                        {
                            donations.length > 4 && <div className="flex justify-center my-2">
                                <button onClick={() => setSeeAll(!isSeeAll)} className="btn bg-green-700 text-white">
                                    {
                                        isSeeAll === false ? "See All" : "Show Less"
                                    }
                                </button>
                            </div>
                        }
                    </div>
            }
        </div>
    );
};

export default Donation;