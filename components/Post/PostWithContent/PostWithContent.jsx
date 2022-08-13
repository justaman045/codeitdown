import PostStyle from '../../../styles/PostStyle.module.scss'
import MarkdownView from 'react-showdown';
import cx from 'classnames'
import { useState } from 'react';
import data from '../../../Data/index.json'
import { faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fakeLinks from '../../../components/DataFetching/index'
import PreviousPost from '../Previous Post/Previous Post';
import NextPost from '../Next Post/Next Post';

export default function PostWithContent({ idd, hashtag1, hashtag2, PostHead, hashtag3, hashtag4, slug, facebook, twitter, linkedin, nextPost, PostContent }) {

    const [liked, setLiked] = useState('Like');
    const [likes, setLikes] = useState();

    let msgToPost = 'I recently found this amazing blog post by Aman posted on his Blog Web App. Go and Read this article from the given link, also do consider to subscribe his newsletter. #downthecode #100DaysOfCode';

    async function likeThePost() {
        let dd = await fetch(`${fakeLinks.likeThePost}${PostHead}`)
        let response = await dd.json()
        setLiked('Liked')
        setLikes(response)
    }


    return (
        <div className={PostStyle.text11content}>
            <span><MarkdownView markdown={PostContent} className={PostStyle.linebreak} options={{ emoji: true }} /></span>
            <div className={cx(PostStyle.socialshareblog, PostStyle.mt5)}>
                <ul className={cx(PostStyle.column3, PostStyle.tags, PostStyle.m0, PostStyle.p0)}>
                    <li onClick={() => { likeThePost() }}><button className={PostStyle.btnsmall}>{liked} {likes} times</button></li>
                </ul>


                {/* If one Hashtag is used then the Tags section will be available else it will get disappear */}
                {hashtag1 && <ul className={cx(PostStyle.column3, PostStyle.tags, PostStyle.m0, PostStyle.p0, PostStyle.organise)}>
                    <li>
                        <p className={cx(PostStyle.m0, PostStyle.mrsm4, PostStyle.mr2)}>Tags :</p>
                    </li>
                    <li><a href={`/hashtag/${hashtag1}`} className={PostStyle.btnsmall}>#{hashtag1}</a></li>
                    {hashtag2 && <li><a href={`/hashtag/${hashtag2}`} className={PostStyle.btnsmall}>#{hashtag2}</a></li>}
                    {hashtag3 && <li><a href={`/hashtag/${hashtag3}`} className={PostStyle.btnsmall}>#{hashtag3}</a></li>}
                    {hashtag4 && <li><a href={`/hashtag/${hashtag4}`} className={PostStyle.btnsmall}>#{hashtag4}</a></li>}
                </ul>}



                {/* Controlled Social Media Sharing  */}
                <ul className={cx(PostStyle.column3, PostStyle.social, PostStyle.m0, PostStyle.p0)}>
                    <li><p className={cx(PostStyle.m0, PostStyle.mrsm4, PostStyle.mr2)}>Share this post :</p></li>
                    {data.facebook && <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${data.currentDomain}/posts/${slug}`} className={PostStyle.facebook}><FontAwesomeIcon icon={faFacebookF} /></a></li>}
                    {data.twitter && <li><a href={`https://twitter.com/intent/tweet?url=${data.currentDomain}/posts/${slug}&text=${msgToPost}`} className={PostStyle.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>}
                    {data.linkedin && <li><a href={`https://www.linkedin.com/shareArticle?mini=true&url=${data.currentDomain}/posts/${slug}`} className={PostStyle.linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>}
                </ul>

            </div>


            {/* Controlled Pagination  */}
            {idd && <div className={cx(PostStyle.newposts, PostStyle.clearfix)}>
                <PreviousPost id={idd} />
                <NextPost id={idd} />
            </div>}
        </div>
    )
}