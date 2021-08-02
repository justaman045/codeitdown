import HeaderStyle from '../../styles/Header.module.scss'
import cx from 'classnames'
import Link from 'next/link'

export default function ExtraLink({ curPage, pageLink }) {
    let activeClass = ``;
    let location = ``;
    let link = ``;
    if (curPage === `Home`) {
        location = 'Home';
        link = `/`;
        if (pageLink === link) {
            activeClass = `${HeaderStyle.active}`;
        }
    }
    if (curPage === `Contact`) {
        location = `${String(curPage)}`;
        link = `/contact`;
        if (pageLink === link) {
            activeClass = `${HeaderStyle.active}`;
        }
    }
    if (curPage === `Blogs`) {
        location = `${String(curPage)}`;
        link = `/blogs`;
        if (pageLink === link) {
            activeClass = `${HeaderStyle.active}`;
        }
        if ( pageLink === '/posts/[post]'){
            activeClass = `${HeaderStyle.active}`;
        }
    }
    if (curPage === `About Me`) {
        location = 'About Me';
        link = `/aboutMe`;
        if (pageLink === link) {
            activeClass = `${HeaderStyle.active}`;
        }
    }
    return (
        <li className={cx(HeaderStyle.navitem, activeClass)}>
            <Link href={link}>
                <a key={location} className={HeaderStyle.navlink}>{location}</a>
            </Link>
        </li>
    )
}