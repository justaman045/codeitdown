import FooterStyle from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import UsefullLink from '../components/Footer/UseFullLinks'
import Data from '../Data/index.json'
import SocialMedia from '../components/Footer/SocialMedia'

function Footer() {
    return (
        <section className={FooterStyle.appfooter}>
            <footer className={cx(FooterStyle.footer28, FooterStyle.py5)}>
                <div className={FooterStyle.footerbglayer}>
                    <div className={cx(FooterStyle.container, FooterStyle.pylg3)}>



                        <div className={cx(FooterStyle.row, FooterStyle.footertop28)}>
                            <div className={cx(FooterStyle.collg4, FooterStyle.footerlist28, FooterStyle.copyright, FooterStyle.mblg0, FooterStyle.mbsm5, FooterStyle.mt4)}>

                                {/* Image of the Blog  */}

                                <a className={cx(FooterStyle.navbarbrand, FooterStyle.mb3)} href="/">
                                    <span><FontAwesomeIcon icon={faCode} height={25} /></span> <span> {Data["name"]}</span></a>

                                {/* Image of the Blog  */}

                                <p className={FooterStyle.copyfooter28}> © 2020. All Rights Reserved. </p>

                                {/* Owner Details with Name and Portfolio Link  */}

                                <h5 className={cx(FooterStyle.mt2, FooterStyle.colorOfText)}>Design by <a href={Data["portfolioLink"]}>{Data["ownerName"]}</a></h5>

                                {/* Owner Details with Name and Portfolio Link  */}

                            </div>
                            <div className={cx(FooterStyle.collg8, FooterStyle.row)}>
                                <div className={cx(FooterStyle.colsm4, FooterStyle.col6, FooterStyle.footerlist28)}>
                                    <h6 className={FooterStyle.footertitle28}>Useful links</h6>
                                    <ul>

                                        {/* To Move to the Other Parts of the Blog  */}

                                        <UsefullLink id={'useFullLinks'} />

                                        {/* To Move to the Other Parts of the Blog  */}

                                    </ul>
                                </div>


                                {/* Cateogary Column it is not working so Removing it  */}


                                {/* <div className={cx(FooterStyle.colsm4, FooterStyle.col6, FooterStyle.footerlist28)}>
                                    <h6 className={FooterStyle.footertitle28}>Categories</h6>
                                    <ul>

                                        <li><a href='/NoCateogary'>No Cateogary</a></li>
                                        <Cateoga />

                                    </ul>
                                </div> */}



                                {/* Cateogary Column it is not working so Removing it  */}



                                <div className={cx(FooterStyle.colsm4, FooterStyle.col6, FooterStyle.footerlist28, FooterStyle.mtsm0, FooterStyle.mt4)}>
                                    <h6 className={FooterStyle.footertitle28}>Social Media</h6>
                                    <ul className={FooterStyle.socialicons}>

                                        <SocialMedia key={`socialMedia`} />


                                    </ul>
                                </div>
                                <div className={cx(FooterStyle.colsm4, FooterStyle.col6, FooterStyle.footerlist28, FooterStyle.mtsm0, FooterStyle.mt4)}>
                                    <h6 className={FooterStyle.footertitle28}>Social Media</h6>
                                    <ul className={FooterStyle.socialicons}>

                                        <li className={FooterStyle.github}><p>{Data.name} is an Open Source Blog App Designed and Developed by Aman Ojha. You can see the complete Source Code on <code>github.com</code>.</p></li>

                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
            {/* <button onClick={() => { topFunction() }} id="movetop" title="Go to top" style={{ display: 'block' }}>
                <span className={cx(FooterStyle.fa, FooterStyle.faangleup)} />
            </button> */}
        </section>
    )
}


export default Footer
