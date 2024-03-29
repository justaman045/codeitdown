import React from 'react'
import dataLinks from '../components/DataFetching/index'
import hashtagPage from '../styles/cardsPage.module.scss'
import SeoOptimised from '../components/Seo'
import CardsPage from '../components/Categories/Cards'
import cx from 'classnames'
import data from '../Data/index.json'


export const getStaticProps = async () => {
    const CateogariesRes = await fetch(`${process.env.blogURLPOST}${process.env.allCategories}`)
    const Cateogaries = await CateogariesRes.json()

    return {
        props: {
            Cateogaries
        },
        revalidate: 60,
    }
}


export default function hashtags({ Cateogaries }) {
    const cateogaryHead = 'All of the Popular and the Best Categories';
    return (
        <>
            <SeoOptimised curPage={`Categories`} Description={cateogaryHead} />
            <div className={cx(hashtagPage.w3lhomeblock2, hashtagPage.py5)}>
                <div className={cx(hashtagPage.container, hashtagPage.ptmd4, hashtagPage.pbmd5)}>
                    {/* block */}
                    <h1 className={cx(hashtagPage.categorytitle, hashtagPage.mb3)}> {String(cateogaryHead).charAt(0).toUpperCase() + String(cateogaryHead).slice(1)}</h1>
                    <p className={cx(hashtagPage.mbmd5, hashtagPage.mb4, hashtagPage.maxwidth, hashtagPage.CustomP)}>All the Categories used in {data.name}.</p>
                    <div className={hashtagPage.row}>
                        {Cateogaries.map((cate) => {
                            return <CardsPage key={cate.id} PostHead={cate.Cateogary} PostContent={cate.CateogaryDesc || 'NONE'} image={cate.Image || 'https://amanojha.pythonanywhere.com/media/Aman_Ojha.jpg'} />
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
