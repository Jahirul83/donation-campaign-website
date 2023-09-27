import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";


const Banner = () => {
    const loadCards = useLoaderData();
    return (
        <div>
            <div className="h-[70vh] bg-green-500">
                <input type="text" />
                <button>Submit</button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
                {
                    loadCards.map(card => <Cards
                        key={card.id}
                        card={card}
                    ></Cards>)
                }
            </div>
        </div>

    );
};

export default Banner;