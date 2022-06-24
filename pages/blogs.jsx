import cx from 'classnames';
import data from '../FakeData/index.json';
import CardsPage from '../styles/cardsPage.module.scss';
import fakeLinks from '../components/DataFetching/index';
import CardsPageCard from '../components/Card Page/Cards Page';
import SeoOptimised from '../components/Seo/index'


export const getStaticProps = async () => {
    const cardsRes = await fetch(`${process.env.blogURLPOST}${process.env.allBlogPost}`)
    const cardsJSON = await cardsRes.json()

    return {
        props: {
            cardsJSON,
        },
        revalidate: 60
    }
}


export default function blogs({ cardsJSON }) {
    return (
        <>
            <SeoOptimised curPage={`Blogs`} Description={`All of the best Blogs over the Internet can be found her ${data.name}. Find Out out Latest Blogs from here.`} />
            <div className={cx(CardsPage.w3lhomeblock2, CardsPage.py5)}>
                <div className={cx(CardsPage.container, CardsPage.ptmd4, CardsPage.pbmd5)}>
                    <h1 className={cx(CardsPage.categorytitle, CardsPage.mb3)}> All Blogs from {data.name}</h1>

                    {/* A short Intro about the Cateogary if needed
                <p className="mb-md-5 mb-4 max-width">Lorem ipsum dolor sit amet elit. Id quaerat amet ipsum sunt et quos dolorum.</p> */}

                    <div className={CardsPage.row}>
                        {/* {!loading && blogs.map((blog) => {
                        return <BlogPostArticle key={blog.id} PostContent={blog.Content} image={blog.Image} PostHead={blog.Headline} PostName={blog.Headline} authorName={dd[0].authorName} date={blog.date} time={blog.Time} />
                    })} */}
                        {cardsJSON.map(blog => {
                            return <CardsPageCard key={blog.id} slug={blog.slug} PostContent={blog.Content} image={blog.Image} PostHead={blog.Headline} date={blog.date} time={blog.Time} />
                        })}
                    </div>

                    {/* Pagination in Developement
                
                <ul className="site-pagination text-center mt-md-5 mt-4">
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