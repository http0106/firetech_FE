import React from 'react';
import {
    FaPhoneAlt,
    FaCheckCircle,
    FaArrowRight,
    FaShieldAlt,
    FaBuilding,
    FaHandshake,
    FaAward,
    FaHeadset
} from 'react-icons/fa';
import Banner from './component/Banner';
import Skill from './component/Skill';
import Partner from './component/Partner';
import Product from './component/Product';
import ProductCard from './component/ProductCard';



const Home = () => {
    return (
        <div className="w-full bg-slate-50/50 min-h-screen pb-16">
            <Banner />

            <Product />


        </div>

    );
};

export default Home;