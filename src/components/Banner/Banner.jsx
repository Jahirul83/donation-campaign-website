import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";


const Banner = () => {
    const loadCards = useLoaderData();
    const [categoryInput,setCategoryInput] = useState("");
    const [displaySearchCards, setDisplaySearchCards] = useState(loadCards);



    const handleSearch = e =>{
        e.preventDefault();

        // console.log("Submitted");
        setCategoryInput(e.target.name.value);
    }
    // console.log(categoryInput.toLocaleLowerCase());


    useEffect(()=>{
        if(categoryInput.length>0)
        {
            const searchValue = loadCards.filter(card => card.category.toLowerCase() === categoryInput.toLocaleLowerCase() );
            setDisplaySearchCards(searchValue);
        }
    },[categoryInput,loadCards]);
    
    console.log(displaySearchCards);


    return (
        <div>
            <div className="h-[70vh] bg-green-500 flex justify-center items-center">
                <form onSubmit={handleSearch} className="form-control">
                    <label className="input-group">
                        <input type="text" placeholder="search category" name="name" className="input input-bordered" />
                        <button className="btn btn-primary">Search</button>
                    </label>
                </form>

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