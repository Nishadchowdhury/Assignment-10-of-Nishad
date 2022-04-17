import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);

    console.log(services);



    return (
        <div className='mt-4' >

            <h1 className='text-4xl' >Here is services i Provides</h1>

            <div className=' pb-16 ' >
                <div className='mx-10 border-dashed border-4 rounded-lg grid grid-cols-3 justify-items-center py-9 gap-5 mt-4  ' >
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            data={service}
                        />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;