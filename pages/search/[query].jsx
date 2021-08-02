import PostStyle from '../../styles/PostStyle.module.scss'
import HeadStyle from '../../styles/cardsPage.module.scss'
import cx from 'classnames'
import data from '../../FakeData/index.json'
import HeadlineSearch from '../../components/Search/Healine Search';
import { useRouter } from 'next/router'
import HashtagSearch from '../../components/Search/Hashtag Search';
import CategarySearch from '../../components/Search/Catoegary Search';
import SeoOptimised from '../../components/Seo/index'
import { useState } from 'react';
import ErrorPage from '../404';


export default function SearchResults() {
    let router = useRouter();
    return (
        <>
            <SeoOptimised curPage={router.query.query} />
            <div className={cx(PostStyle.w3lhomeblock2, PostStyle.py5)}>
                <div className={cx(PostStyle.container, PostStyle.ptmd4, PostStyle.pbmd5)}>
                    {/* block */}
                    <h1 className={cx(HeadStyle.categorytitle, PostStyle.mb3)}> All Blogs from {data.name}</h1>
                    {/* <p className="mb-md-5 mb-4 max-width">Lorem ipsum dolor sit amet elit. Id quaerat amet ipsum sunt et quos dolorum.</p> */}
                    <HeadlineSearch key={`headlineSearch`} query={router.query.query} />
                    {/* <p className="mb-md-5 mb-4 max-width">Lorem ipsum dolor sit amet elit. Id quaerat amet ipsum sunt et quos dolorum.</p> */}
                    <HashtagSearch key={`cateogarySearch`} query={router.query.query} />
                    {/* <p className="mb-md-5 mb-4 max-width">Lorem ipsum dolor sit amet elit. Id quaerat amet ipsum sunt et quos dolorum.</p> */}
                    <CategarySearch key={`hashSearch`} query={router.query.query} />
                    {/* {!foundCateogary && !foundHastag && !foundheadline && <ErrorPage erorCode={`422`} erorName={`No Search Results Found`} erorMessage={`None of the Headlines, Hashtags or Cateoagry Matched with the term you Entered. Please Enter another word to search again`} />} */}
                </div>
            </div>
        </>
    )
}