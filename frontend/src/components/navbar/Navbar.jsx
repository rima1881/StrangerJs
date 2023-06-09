import styles from './Navbar.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket ,faBars ,faXmark ,faHome ,faCalendarTimes , faDollarSign ,faCircleInfo ,faCircleUser , faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'

export default function Navbar(props){

    const [ cliked , setClicked] = useState(false);
    const { logout } = useAuth()

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    const LoggedIn = <>
        <span className={styles.login} >
            <a href="/account" className={styles.profile}>
                <FontAwesomeIcon icon={faCircleUser} className={styles.navIcons}/>
                Account
                &nbsp;
            </a>
                |
            <span onClick={props.cartBtnHandle}>
                &nbsp; 
                <FontAwesomeIcon icon={faShoppingCart} className={styles.navIcons} />
                Cart
            </span>
        </span>
    </>


    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    const Annoymous = <>
        <span className={styles.login} >
            <span onClick={props.loginBtnHandle}>
                <FontAwesomeIcon icon={faCircleUser} className={styles.navIcons}/>
                Login
                &nbsp;
            </span>
                |
            <span onClick={props.signupBtnHandle}>
                &nbsp; 
                Sign Up
            </span>
        </span>
    </>


    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const navbar = <>
    
            <li>
                <a href='/'>
                    <FontAwesomeIcon icon={faHome} className={styles.navIcons}/>
                    Home
                </a>
            </li>

            <li>
                <a href='/comingsoon'>
                    <FontAwesomeIcon icon={faCalendarTimes} className={styles.navIcons}/>
                    Coming soon
                </a>
            </li>

            <li>
                <a href='/donation'>
                    <FontAwesomeIcon icon={faDollarSign} className={styles.navIcons}/>
                    Donation
                </a>
            </li>

            <li>
                <a href='/aboutus'>
                    <FontAwesomeIcon icon={faCircleInfo} className={styles.navIcons}/>
                    About Us
                </a>
            </li>

    </>

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const logoutBtn = <>
        <li onClick={logout}>
            <a>
                Logout
            </a>
        </li>
    </>

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    return(
        <nav className={styles.navbar}>

            <ul className={cliked ? styles.active : ''}>
                {navbar}
                {console.log(props.user.roles )}
                { props.user.roles && props.user.roles.includes(2) && logoutBtn}
            </ul>



            { props.user.roles && props.user.roles.includes(2) ? LoggedIn : Annoymous}

            <div className={styles.mobile} onClick={switchMod}>
                <FontAwesomeIcon icon={cliked ? faXmark : faBars} className={styles.menuIcon} />
            </div>
        </nav>
    )

    function switchMod(){
        setClicked(prevState => !prevState)
    }


}