import React, { useContext } from 'react';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import DescriptionContent from '../Contents/DescriptionContent';
import ExperianceContent from '../Contents/ExperianceContent';
import Banner from './Bannar/Banner';
import ShortServices from './ShortServices/ShortServices';
import GridLoader from "react-spinners/GridLoader";

const Home = () => {
    const { loading } = useContext(Authcontext)
    return (
        <div>
            {
                loading ? <GridLoader
                    color="#36d7b7"
                    className='mx-auto my-auto min-h-screen'
                    size={30}

                    speedMultiplier={.5}

                /> :
                    <>
                        <Banner></Banner>
                        <ShortServices></ShortServices>
                        <DescriptionContent></DescriptionContent>
                        <ExperianceContent></ExperianceContent>
                    </>
            }
        </div>
    );
};

export default Home;