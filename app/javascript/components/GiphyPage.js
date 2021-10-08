import React, { useState } from 'react';
import Search from './SearchPage';

function GiphyPage(props) {

    return (
        <center className="p-5 ">
            <div className="w-10/12">

                <div className="w-full mt-5 mb-5 text-left">
                    <span className="mr-5 text-2xl font-bold mb-5 text-gray-600">{props.title}</span>
                    <br/>
                    <span className="mr-5 text-sm mb-5 text-gray-400">by {props.name}</span>
                </div>
                <Search />

            </div>
        </center>
    );
}

export default GiphyPage;