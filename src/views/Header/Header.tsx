import React, { useState, useEffect } from 'react';

const Header = () => {
    const [data, setData] = useState<number | null>(null);

    const getData = () => {
        console.log('getData');
        setData(4);
    };

    useEffect(() => {
        getData();
    }, []);

    return <div>HEADER</div>;
};

export default Header;
