import React, { useState } from 'react';
import Search from './SearchPage';

function GiphyPage() {

    return (
        <center className="p-5 ">
            <div className="w-10/12">

                <div className="w-full mt-5 mb-5 text-left">
                    <span className="mr-5 text-2xl font-bold mb-5 text-gray-600">Search GIF</span>
                </div>
                <Search />

            </div>
        </center>
    );
}

export default GiphyPage;