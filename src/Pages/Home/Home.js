import React from 'react';
import DescriptionContent from '../Contents/DescriptionContent';
import ExperianceContent from '../Contents/ExperianceContent';
import Banner from './Bannar/Banner';
import ShortServices from './ShortServices/ShortServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShortServices></ShortServices>
            <DescriptionContent></DescriptionContent>
            <ExperianceContent></ExperianceContent>
        </div>
    );
};

export default Home;