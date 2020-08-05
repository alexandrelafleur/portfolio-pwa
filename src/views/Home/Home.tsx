import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState<number | null>(null);

    const getData = () => {
        console.log('getData');
        setData(4);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div>{data}</div>
        </div>
    );
};

export default Home;
