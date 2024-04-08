import React, { useEffect, useState } from 'react';
import jsonData from '../Data'; 

const Stories = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(jsonData);
    }, []);

    return (
        <div className='story'>
            {
                data.map((val, key)=>{
                    return(
                        <div key={key} >
                            <p><span className='story-title'>{val.title}</span></p>
                            <p className='story-link'><span>{val.link}</span></p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Stories;
