import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
import {useHistory} from 'react-router-dom';

function Header() {

    const history = useHistory();
    const [{basket,user},dispatch] =useStateValue();

    const handleAuthentication = (e) => {
        if(user){
            auth.signOut();
            history.push("/");
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__navOption">
                        <span className="header__navOptionLine1">Hello {user ? user.email : "Guest"} </span>
                        <span className="header__navOptionLine2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                 </Link>   
                <div className="header__navOption">
                    <span className="header__navOptionLine1">Return</span>
                    <span className="header__navOptionLine2">& Orders</span>
                </div>
                <div className="header__navOption">
                    <span className="header__navOptionLine1">Your</span>
                    <span className="header__navOptionLine2">Prime</span>
                </div>
                
                <Link to='/checkout'>
                    <div className="header__navOption header__navOptionBasket">                    
                        <span className="header__navOptionLine1">{user ? basket.length : 0 }</span>
                        <ShoppingCartIcon />
                    </div>
                </Link>
                
            </div>

            
        </div>
    )
}

export default Header
