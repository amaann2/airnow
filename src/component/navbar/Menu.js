import React from "react";
import "./menu.css";
import { FaLocationArrow, FaQq } from "react-icons/fa";
import { SiEnvoyproxy } from "react-icons/si";
import { MdOutlineAccountBalanceWallet, MdAirplaneTicket } from 'react-icons/md'
import { TbWorld, TbAffiliate } from 'react-icons/tb'
import imgg from '../../assets/imgg.png'
const Menu = () => {
    return (
        <div className="menu">
            <div className="logo">
                <FaLocationArrow className="icon" />
                Airnow
            </div>
            <hr className="line" />
            <h5>MANAGE</h5>
            <div className="menu-item">
                <p><SiEnvoyproxy className="menu-icon"/> proxy</p>
                <p><MdOutlineAccountBalanceWallet className="menu-icon"/> balance</p>
                <p><TbWorld className="menu-icon"/> online check</p>
                <p><TbAffiliate className="menu-icon"/> affiliate system</p>
            </div>
            <h5>SUPPORT</h5>
            <div className="menu-item">
                <p><MdAirplaneTicket className="menu-icon"/>Tickets</p>
                <p><FaQq className="menu-icon"/> FAQ</p>
            </div>

            <div className="box">
                <div className="heading">HELP CENTER</div>
                <div className="para">visit our visit center</div>
                <button>start</button>
                <img src={imgg} className="box-img" alt="" />
            </div>
        </div>
    );
};

export default Menu;
