import ErrorPageStyle from '../../styles/ErrorPageStyle.module.scss'
import Link from 'next/link'
import cx from 'classnames'
import SeoOptimised from '../../components/Seo/index'


export default function Development({ pageHeadline }) {
    return (
        <>
            <SeoOptimised curPage={"Under Maintainence"} />
            <div className={cx(ErrorPageStyle.w3lerrorgrid, ErrorPageStyle.py5, ErrorPageStyle.textcenter)}>
                <div className={cx(ErrorPageStyle.container, ErrorPageStyle.pylg5, ErrorPageStyle.pymd4)}>
                    <div className={ErrorPageStyle.centeralign}>
                        <h1>Under Maintainence</h1>
                        <h2>Website under Maintainence</h2>
                        <p>We are very sorry for the inconvinience.This website is currently under maintainence and would be back after there&apos;s a alternative to Heroku.</p><br />
                        <p>This website was using Heroku as Backend with Django, but due to free tier got expired by Heroku this website won&apos;t be able to show the Article by <a href="https://coderaman7.vercel.app" target={'blank'}>Aman</a></p>
                        <br /><p>Though you still might be able to see this website&apos;s content till 2022&apos;s Hactoberfest</p>
                        {/* <form className="form-inline search-form mt-md-5 mt-4" action="#" method="post">
                        <input className="form-control" type="search" placeholder="Search here" aria-label="email" required />
                        <button className="btn search" type="submit">Submit</button>
                    </form> */}
                        <div className={ErrorPageStyle.mt5}>
                            <Link href="/">
                                <a className={ErrorPageStyle.btnsmall}> Back to home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}