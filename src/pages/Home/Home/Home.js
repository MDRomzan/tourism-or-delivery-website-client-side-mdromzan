import React from 'react';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            
          <Banner></Banner>
            <HomeService></HomeService>
          <HomeServices></HomeServices>
        </div>
    );
};

export default Home;