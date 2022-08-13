import React from 'react'
import dataLinks from '../components/DataFetching/index'
import hashtagPage from '../styles/cardsPage.module.scss'
import SeoOptimised from '../components/Seo'
import CardsPage from '../components/Hashtags/Cards'
import cx from 'classnames'
import data from '../Data/index.json'


export const getStaticProps = async () => {
    const HashtagRes = await fetch(`${process.env.blogURLPOST}${process.env.allHashtag}`)
    const Hashtag = await HashtagRes.json()

    return {
        props: {
            Hashtag
        },
        revalidate: 60,
    }
}


export default function hashtags({ Hashtag }) {
    const cateogaryHead = 'All of the Popular and the Best Hashtags to select from Code it Down';
    return (
        <>
            <SeoOptimised curPage={`Hashtags`} Description={cateogaryHead} />
            <div className={cx(hashtagPage.w3lhomeblock2, hashtagPage.py5)}>
                <div className={cx(hashtagPage.container, hashtagPage.ptmd4, hashtagPage.pbmd5)}>
                    {/* block */}
                    <h1 className={cx(hashtagPage.categorytitle, hashtagPage.mb3)}> {String(cateogaryHead).charAt(0).toUpperCase() + String(cateogaryHead).slice(1)}</h1>
                    <p className={cx(hashtagPage.mbmd5, hashtagPage.mb4, hashtagPage.maxwidth, hashtagPage.CustomP)}>All the Hashtags used in {data.name}.</p>
                    <div className={hashtagPage.row}>
                        {Hashtag.map((hashtag) => {
                            return <CardsPage key={hashtag.id} PostHead={`#${hashtag.Hashtag}`} PostContent={hashtag.HashtagDescription || 'NONE'} image={hashtag.Image} />
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
