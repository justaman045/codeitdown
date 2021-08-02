import { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons'
import data from '../FakeData/index.json'
import HeaderStyle from '../styles/Header.module.scss'
import cx from 'classnames'
import ExtraLink from '../components/Header/ExtraLinks'
import { useRouter } from 'next/router'


export default function Header() {
    // To Use the router to get the parameter from the URL 
    let router = useRouter();

    // To initialize the variable in which the search Query of the User is stored 
    let query;

    // To initialize the diffrent id to NavBar links 
    let a = 0;

    // To give the Location of the Navbar predefined in the Function 
    let locationOfNavBar = [
        "Home",
        "Blogs",
        "About Me",
        "Contact"
    ]

    // To set the useState for opening and closing of the NavMenuBar 
    const [open, setOpen] = useState(false);

    // Function to handle the onSubmit form whenever the user tries to search something 
    function submitURI(e) {
        e.preventDefault();
        window.location = `/search/${query}`;

    }

    // To return the JSX and render on the DOM 
    return (

        // Header to be used as the primary tag in the JSX 
        <header className={HeaderStyle.header}>
            <div className={HeaderStyle.container}>

                {/* Nav Item to be Rendered as the UL or LI part  */}
                <nav className={cx(HeaderStyle.navbar, HeaderStyle.navbarexpandlg, HeaderStyle.navbarlight, HeaderStyle.fill, HeaderStyle.pxlg0, HeaderStyle.py0, HeaderStyle.pxsm3, HeaderStyle.px0)}>

                    {/* Logo of the Blog  */}
                    <a className={HeaderStyle.navbarbrand} href="/">
                        <span><FontAwesomeIcon icon={faCode} /></span> <span style={{ marginTop: '7px', fontSize: 'revert' }}> {data.name}</span></a>

                    {/* Button to used with the useState to open and close the NavMenu in the Mobile Phones  */}
                    <div>
                        <Button
                            className={cx(HeaderStyle.navbartoggler, HeaderStyle.collapsed)}
                            onClick={() => setOpen(!open)}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={open}
                            style={{ height: `2em`, width: `2em` }}
                        >

                            {/* Usecase of the useState and also checking the if true then opn the navMenu  */}

                            {open ? <span className={cx(HeaderStyle.fa, HeaderStyle.iconclose, HeaderStyle.fatimes)} /> : <span className={cx(HeaderStyle.fa, HeaderStyle.iconexpand, HeaderStyle.fabars)} />}

                            {/* Usecase of the useState and also checking the if true then opn the navMenu  */}


                        </Button>
                        <Collapse in={open}>
                            <div className={cx(HeaderStyle.collapse, HeaderStyle.navbarcollapse)} id="navbarSupportedContent">
                                <nav className={cx(HeaderStyle.mxauto, HeaderStyle.searchItemm)} style={{ paddingLeft: `7em` }}>

                                    {/* Seaarch Box Starts  */}

                                    <div className={HeaderStyle.searchbar}>
                                        <form className={HeaderStyle.search} onSubmit={(e) => submitURI(e)}>
                                            <input type="search" className={HeaderStyle.searchinput} onChange={(e) => { query = e.target.value }} name="search" placeholder="Discover Blogs and more" required />
                                            <FontAwesomeIcon icon={faSearch} size={`1x`} className={HeaderStyle.searchicon} />
                                        </form>
                                    </div>

                                    {/* Search Box Ends */}

                                </nav>
                                <ul className={cx(HeaderStyle.navbarnav, HeaderStyle.navItem)} style={{ paddingLeft: `4em` }}>

                                    {/* To Render the NavLinks to the user */}

                                    {locationOfNavBar.map(item => {
                                        a++;
                                        return <ExtraLink id={`Navbarid${a}`} curPage={item} pageLink={router.route} />
                                    })}

                                    {/* To Render the NavLinks to the user Ends Here */}


                                </ul>
                            </div>
                        </Collapse>
                    </div>


                </nav>
            </div>
        </header >
    )
}
