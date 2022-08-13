import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import FooterStyle from '../../styles/Footer.module.scss'
import Data from '../../Data/index.json'

export default function SocialMedia() {
    return (
        <>
            <li className={FooterStyle.github}><a href={`https://github.com/${Data.username}`}><FontAwesomeIcon icon={faGithub} height={25} /> Github</a></li>
            <li className={FooterStyle.github}><a href={Data.twitter}><FontAwesomeIcon icon={faTwitter} height={25} /> Twitter</a></li>
            <li className={FooterStyle.github}><a href={Data.linkedin}><FontAwesomeIcon icon={faLinkedinIn} height={25} /> LinkedIn</a></li>
            <li className={FooterStyle.github}><a href={Data.facebook}><FontAwesomeIcon icon={faFacebookF} height={25} /> Facebook</a></li>
        </>
    )
}