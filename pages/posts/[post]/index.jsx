import PostStyle from '../../../styles/PostStyle.module.scss'
import cx from 'classnames'
import fakeLinks from '../../../components/DataFetching/index'
import PostHeadingAndOther from '../../../components/Post/PostHeading'
import PostImage from '../../../components/Post/PostImage/PostImage'
import SeoOptimised from '../../../components/Seo'
import PostWithContent from '../../../components/Post/PostWithContent/PostWithContent'
import AuthorCard from '../../../components/Post/Author/Author'
import Cateogaries from '../../../components/Post/Cateogaries/Cateogary'
import RecentPosts from '../../../components/Post/Recent Post/Recent Post';
import CommentControl from '../../../components/Post/Comments/Comments'
import { useRouter } from 'next/router'

export default function index({ articles, listcomment }) {
    const router = useRouter();

    if (router.isFallback) {
        return (<h3>Loading...</h3>)
    } else {
        return (
            <>
                <SeoOptimised curPage={String(articles.Headline)} Description={articles.Content} />
                <section className={cx(PostStyle.text11, PostStyle.py5)}>
                    <div className={cx(PostStyle.text11, PostStyle.pylg5, PostStyle.pymd4)}>
                        <div className={PostStyle.container}>


                            <PostHeadingAndOther key={articles.id} PostName={articles.Headline} date={articles.date} time={articles.Time} cateogary={articles.Cateogary} />


                        </div>

                        <PostImage key={articles.id} image={articles.Image} />

                        <div className={PostStyle.container}>
                            <div className={PostStyle.row}>
                                <div className={PostStyle.collg8}>

                                    {/* Main Post and Image  */}
                                    <PostWithContent key={articles.id} slug={articles.slug} PostHead={articles.Headline} idd={articles.id} PostContent={articles.Content} hashtag1={articles.Hashtag} hashtag2={articles.Hashtag2} hashtag3={articles.Hashtag3} hashtag4={articles.Hashtag4} />
                                    {/* <PostWithContent key={blogs.id} PostHead={blogs.Headline} idd={blogs.id} PostContent={blogs.Content} hashtag1={blogs.Hashtag} hashtag2={blogs.Hashtag2} hashtag3={blogs.Hashtag3} facebook={data[0].social.facebook} twitter={data[0].social.twitter} linkedin={data[0].social.linkedin} /> */}
                                    {/* <PostWithContent /> */}






                                </div>
                                <div className={cx(PostStyle.sidebarside, PostStyle.collg4, PostStyle.colmd12, PostStyle.colsm12, PostStyle.mtlg0, PostStyle.mt5)}>
                                    <aside className={PostStyle.sidebar}>




                                        {/* Author Component  */}
                                        <AuthorCard key={`AuthorKey1`} />





                                        {/* Cateogary Component  */}
                                        <Cateogaries key={`Cateogaries1`} />
                                        {/* <Cateogaries /> */}





                                        {/* Recent Posts Component  */}
                                        <RecentPosts key={`RecentPosts1`} />





                                        {/* Recent Twitter Feed  */}
                                        {/* <TwitterComponent /> */}

                                    </aside>
                                </div>
                            </div>


                            {articles.id && <CommentControl key={articles.id} listComments={listcomment} id={articles.id} cateogary={articles.Cateogary} PostHead={articles.Headline} hashtag1={articles.Hashtag} />}



                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(fakeLinks.allBlogPost)
    const articles = await res.json()

    const paths = articles.map(post => {
        return {
            params: { post: post.slug.toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {

    const { post } = context.params;

    const [articlesRes, listCommentsRes] = await Promise.all([
        fetch(`${fakeLinks.searchByPost}${post}/`),
        fetch(`${fakeLinks.getComments}${post}/`),
    ])

    const [articles, listcomment] = await Promise.all([
        articlesRes.json(),
        listCommentsRes.json(),
    ])


    return {
        props: {
            articles,
            listcomment,
        },
        revalidate: 1,
    }
}