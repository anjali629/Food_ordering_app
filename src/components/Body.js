
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

  const [listOfRestaurant,setlistOfRestaurant] = useState ([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState ("");


  useEffect(() => {
    fetchData()
  }, []);

   const fetchData = async () => {
    const data = await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1963&lng=72.9675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json= await data.json();
    
    
    setlistOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant (json?.data?.cards[4]?.card?.card.gridElements.infoWithStyle.restaurants);
   };

   //conditional rendering
   if (listOfRestaurant.length===0){
    return ;
   }

  
   return listOfRestaurant.length ===0 ? <Shimmer></Shimmer>:(
    <div className = "body">
      <div className='Search'>
        <input type="text" className="search-box" 
        value = {searchText} onChange ={(e) =>{setSearchText
          (e.target.value);

        }}></input>
        
        <button onClick ={() =>{
          const filteredRestaurant = listOfRestaurant.filter
          ((res) => res.info.name.includes (searchText));
          setlistOfRestaurant(filteredRestaurant);
        }}>
          Search
          </button>
        <button className="filter-btn" 
        onClick={() => { 
          const filteredList = listOfRestaurant.filter
          ((res)=> res.info.avgRating > 4);
          setlistOfRestaurant(filteredList);
         
          }} >
          Top Rated Restaurant</button>
          
      </div>
      <div className='res-container'>
     {
       filteredRestaurant.map( (restaurant) => 
        (<RestaurantCard key ={restaurant.info.id} resData={restaurant}/>))
     }

      
      </div>
    </div>
  )
}
export default Body;