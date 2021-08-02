import PostStyle from '../../../styles/PostStyle.module.scss'
import cx from 'classnames'
import RecentArticle from './RecentArticles';
import UseFetch from '../../../components/Transferring Data/UseFetch';
import fakeLinks from '../../../components/DataFetching/index'


export default function RecentPosts() {
    const { blogs, loading } = UseFetch(fakeLinks.recentBlogPosts)
    return (
        <div className={cx(PostStyle.sidebarwidget, PostStyle.popularposts)}>
            <div className={PostStyle.sidebartitle}>
                <h4>Recent Posts</h4>
            </div>
            {!loading && blogs.map((blog) => {
                return <RecentArticle key={blog.id} slug={blog.slug} image={blog.Image} PostHeading={blog.Headline} date={blog.date} />
            })}
        </div>
    )
}