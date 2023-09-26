import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";


const Home = () => {

    const loadCards = useLoaderData();
    // console.log(loadCards);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
                {
                    loadCards.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;