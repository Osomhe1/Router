import React, {useState, useEffect} from 'react';


function Shop() {


    useEffect(() =>{
        fecthItems();
    }, []
    );

    const [items, setItems] = useState([]);

    const fecthItems = async () => {
        const data = await fetch(
                `https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`    
                        );
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

  return (
    <div>
      
        <h1>Shop Page</h1>
        
    </div>
  );
}

export default Shop;