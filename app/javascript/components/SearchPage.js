import React, { useState, useEffect } from 'react';
import Gif from './Gif';

function Search() {

    const axios = require('axios');
    

    const [data_img, set_data_img] = useState(null);
    const [query, set_query] = useState('');

    function handleChange(event){
        set_query(event.target.value);
    }

    async function doSearch() {
        try {
            set_data_img(null);
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=${query}&limit=12&offset=0&rating=g&lang=en`;
            await axios.get(url)
            .then(res => {
                set_data_img(res.data.data);
            })
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        doSearch();
    }, []);
        
    return (
        <>

            <div className="">
                <input onChange={(event) => {handleChange(event)}} value={query} type="text" className="bg-gray-200 px-4 py-3 rounded-bl-lg rounded-tl-lg w-11/12" placeholder="Type anything..."></input>
                <button onClick={() => {doSearch()}} className="bg-yellow-400 text-white px-4 py-3 rounded-br-lg rounded-tr-lg font-bold w-1/12 hover:bg-yellow-500"><i className="fa fa-search"></i></button>
            </div>
        
            {(data_img) && (
                <div className="bg-gray-100 p-8 rounded-lg mt-5 flex flex-wrap">
                    {data_img.map((item) => {
                        return (
                            <Gif
                                key={item.id}
                                url={item.images.original.url}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            )}

        </>
    );
}

export default Search;