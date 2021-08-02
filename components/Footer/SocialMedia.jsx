import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import FooterStyle from '../../styles/Footer.module.scss'
import fakeData from '../../FakeData/index.json'

export default function SocialMedia() {
    let username = fakeData.username
    return (
        <>
            <li className={FooterStyle.github}><a href={`https://github.com/${username}`}><FontAwesomeIcon icon={faGithub} /> Github</a></li>
            <li className={FooterStyle.github}><a href={`https://twitter.com/${username}`}><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
            <li className={FooterStyle.github}><a href={`https://linkedin.com/in/${username}`}><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
            <li className={FooterStyle.github}><a href={`https://facebook.com/${username}`}><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
        </>
    )
}