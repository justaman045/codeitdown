import ErrorPageStyle from '../styles/ErrorPageStyle.module.scss'
import Link from 'next/link'
import cx from 'classnames'
import SeoOptimised from '../components/Seo/index'


export default function ErrorPage() {
    return (
        <>
            <SeoOptimised curPage={'Error'} />
            <div className={cx(ErrorPageStyle.w3lerrorgrid, ErrorPageStyle.py5, ErrorPageStyle.textcenter)}>
                <div className={cx(ErrorPageStyle.container, ErrorPageStyle.pylg5, ErrorPageStyle.pymd4)}>
                    <div className={ErrorPageStyle.centeralign}>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>We are very sorry for the inconvinience. Its look like you&apos;re trying to acces a page that has been
                            deleted or never even existed.</p>
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