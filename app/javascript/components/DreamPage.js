import React from 'react';

function Dream(props) {
    console.log(props);
    return (
        <div>
            <center>
                Tes dream page.
                <br/>
                Halo, {props.data.nama}
            </center>
        </div>
    );
}

export default Dream;