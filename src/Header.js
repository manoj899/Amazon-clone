import React from 'react'
import Logo from "./amazonimg.jpg"
import "./Header.css";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import Login from "./Login"
import { auth } from './firebase';

const Header = () => {

    const [{basket, user}] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    };

    return (
        <div className="headerr">
            <nav className="header">
                <Link to="/">
                <img className="header__logo" src={Logo}></img>
                </Link>

                <div className="header__search">
                    <input type="text" className="header__searchInput"/>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>

                <div className="header__nav">

                    {/* 1st link */}
                    <Link to={!user && "/login"} className="header__link">
                    {/* href will refresh the page while Link will not*/}
                        <div onClick={login} className="header__option">
                            <span className="header__optionlineOne">Hello {user?.email}</span>
                            <span className="header__optionlineTwo">{user ? 'Sign Out': 'Sign In'}</span>
                        </div>
                    </Link>

                    <Link to="/return" className="header__link">
                        <div className="header__option">
                            <span className="header__optionlineOne">Returns</span>
                            <span className="header__optionlineTwo">& Orders</span>
                        </div>
                    </Link>

                    <Link to="/prime" className="header__link">
                        <div className="header__option">
                            <span className="header__optionlineOne">Your</span>
                            <span className="header__optionlineTwo">Prime</span>
                        </div>
                    </Link>

                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    <span className="header__optionlineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>

                </div>
            </nav>
        </div>
    )
}

export default Header;
