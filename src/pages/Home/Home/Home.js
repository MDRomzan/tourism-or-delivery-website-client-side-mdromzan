import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Extra from '../Extra/Extra';
import HomeService from '../HomeService/HomeService';
import HomeServices from '../HomeServices/HomeServices';
import Latest from '../Latest/Latest';

const Home = () => {
    return (
        <div>
            
          <Banner></Banner>
            <HomeService></HomeService>
          <HomeServices></HomeServices>
          <Discount></Discount>
          <Extra></Extra>
          <Latest></Latest>
        </div>
    );
};

export default Home;