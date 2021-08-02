import cateogaryPage from '../../../styles/cardsPage.module.scss'
import cx from 'classnames'
import data from '../../../FakeData/index.json'
import fakeLinks from '../../../components/DataFetching/index'
import CardsPage from '../../../components/Card Page/Cards Page';
import SeoOptimised from '../../../components/Seo/index'
import { useRouter } from 'next/router';


export const getStaticPaths = async () => {
    const getTheCateogariesRes = await fetch(`${fakeLinks.cateogary}`)
    const getTheCateogaries = await getTheCateogariesRes.json()

    const Cateogaries = getTheCateogaries.map(article => article.Cateogary)
    const paths = Cateogaries.map(cateogary => ({ params: { cateogary: cateogary.toString() } }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const cateogary = context.params.cateogary;
    const getTheCateogariesRes = await fetch(`${fakeLinks.catsearch}${cateogary}/`)
    const getTheCateogaries = await getTheCateogariesRes.json()

    return {
        props: {
            getTheCateogaries
        },
        revalidate: 30,
    }
}

const cateogaryPageFun = ({ getTheCateogaries }) => {
    const router = useRouter();

    if(router.isFallback){
        return (<h3>Loading...</h3>)
    } else {
        let cateogaryHead = String(getTheCateogaries[0].Cateogary);
        return (
            <>
                <SeoOptimised curPage={String(cateogaryHead).charAt(0).toUpperCase() + String(cateogaryHead).slice(1)} />
                <div className={cx(cateogaryPage.w3lhomeblock2, cateogaryPage.py5)}>
                    <div className={cx(cateogaryPage.container, cateogaryPage.ptmd4, cateogaryPage.pbmd5)}>
                        {/* block */}
                        <h1 className={cx(cateogaryPage.categorytitle, cateogaryPage.mb3)}> {String(cateogaryHead).charAt(0).toUpperCase() + String(cateogaryHead).slice(1)}</h1>
                        <p className={cx(cateogaryPage.mbmd5, cateogaryPage.mb4, cateogaryPage.maxwidth, cateogaryPage.CustomP)}>Cateogarised Blog Post from {data.name}. Showing Results for {cateogaryHead}</p>
                        <div className={cateogaryPage.row}>
                            {getTheCateogaries.map((blog) => {
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

export default cateogaryPageFun;