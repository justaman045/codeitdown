import hashtagPage from '../../../styles/cardsPage.module.scss'
import cx from 'classnames'
import data from '../../../Data/index.json'
import fakeLinks from '../../../components/DataFetching/index'
import CardsPage from '../../../components/Card Page/Cards Page';
import SeoOptimised from '../../../components/Seo/index'
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {

    return {
        paths: [],
        fallback: true
    }
}


export const getStaticProps = async (context) => {
    // const getTheHashtagRes = await fetch(`${fakeLinks.cateogary}`)
    const { hashtag } = context.params;
    const getTheHashtagRes = await fetch(`${process.env.blogURLPOST}/hashtagsearch/${hashtag}/`)
    const getTheHashtag = await getTheHashtagRes.json()

    return {
        props: {
            getTheHashtag
        },
        revalidate: 30,
    }
}


export default function hashtagPageFun({ getTheHashtag }) {

    const router = useRouter();

    if (router.isFallback) {
        return (<h3>Loading...</h3>)
    } else {
        let cateogaryHead = 'You found a Bug!! Contact Me from the Contact Page';

        if (getTheHashtag) {
            cateogaryHead = router.query.hashtag;
        }
        return (
            <>
                <SeoOptimised curPage={cateogaryHead} />
                <div className={cx(hashtagPage.w3lhomeblock2, hashtagPage.py5)}>
                    <div className={cx(hashtagPage.container, hashtagPage.ptmd4, hashtagPage.pbmd5)}>
                        {/* block */}
                        <h1 className={cx(hashtagPage.categorytitle, hashtagPage.mb3)}> {String(cateogaryHead).charAt(0).toUpperCase() + String(cateogaryHead).slice(1)}</h1>
                        <p className={cx(hashtagPage.mbmd5, hashtagPage.mb4, hashtagPage.maxwidth, hashtagPage.CustomP)}>Cateogarised Blog Post from {data.name}. Showing Results for {String(cateogaryHead).charAt(0).toUpperCase() + String(cateogaryHead).slice(1)}</p>
                        <div className={hashtagPage.row}>
                            {getTheHashtag.map((blog) => {
                                return <CardsPage key={blog.id} slug={blog.slug} PostContent={blog.Content} image={blog.Image} PostHead={blog.Headline} PostName={blog.Headline} date={blog.date} time={blog.Time} />
                            })}
                        </div>
                        {/* <ul className="site-pagination text-center mt-md-5 mt-4">
                        <li><span aria-current="page" className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href="#page2">2</a></li>
                        <li><a className="page-numbers" href="#page3">3</a></li>
                        <li><span className="page-numbers dots">…</span></li>
                        <li><a className="page-numbers" href="#page7">7</a></li>
                        <li><a className="next page-numbers" href="#next">Next »</a></li>
                    </ul> */}
                    </div>
                </div>
            </>
        )
    }
}