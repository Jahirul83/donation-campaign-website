import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";


const Banner = () => {
    const loadCards = useLoaderData();
    const [categoryInput, setCategoryInput] = useState("");
    const [displaySearchCards, setDisplaySearchCards] = useState(loadCards);



    const handleSearch = e => {
        e.preventDefault();

        // console.log("Submitted");
        setCategoryInput(e.target.name.value);
    }
    // console.log(categoryInput.toLocaleLowerCase());


    useEffect(() => {
        if (categoryInput.length > 0) {
            const searchValue = loadCards.filter(card => card.category.toLowerCase() === categoryInput.toLocaleLowerCase());
            setDisplaySearchCards(searchValue);
        }
    }, [categoryInput, loadCards]);

    console.log(displaySearchCards);


    return (
        <div>
            <div >
                <div style={{ backgroundImage: 'url(https://i.ibb.co/yWRRDMY/Banner-image.jpg)' }} className="h-[70vh] flex justify-center items-center bg-cover bg-center">
                    <form onSubmit={handleSearch} className="form-control">
                        <div>
                            <h2 className="md:text-4xl  p-4 ">We Grow By Helping People In Need</h2>
                        </div>
                        <div className="">
                            <label className="input-group flex items-center justify-center mt-6">
                                <input type="text" placeholder="search category" name="name" className="input input-bordered" />
                                <button className="btn bg-red-600 text-white">Search</button>
                            </label>
                        </div>
                    </form>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
                {
                    displaySearchCards.map(card => <Cards
                        key={card.id}
                        card={card}
                    ></Cards>)
                }
            </div>
        </div>

    );
};

export default Banner;