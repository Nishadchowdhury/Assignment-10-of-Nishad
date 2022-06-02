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



    return (
        <div className='mt-4' >

            <h1 className='lg:text-4xl text-xl text-center' >Here is services i Provides</h1>

            <div className=' pb-16 ' >
                <div className='mx-10 border-dashed border-4 rounded-lg grid lg:grid-cols-3 justify-items-center py-9 gap-5 mt-4  ' >
                    {
                        services.map((service, i) => <SingleService
                            key={service.id}
                            data={service}
                            i={i}
                        />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;