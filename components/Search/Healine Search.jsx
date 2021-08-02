import PostStyle from '../../styles/PostStyle.module.scss';
import fakeLinks from '../../components/DataFetching/index';
import UseFetch from '../../components/Transferring Data/UseFetch';
import BlogPostArticleSkeleton from './BlogPostArticleSkeleton';
import ClientSideCards from './client Side Card';

export default function HeadlineSearch({ query }) {
    let a = 0;
    const { blogs, loading } = UseFetch(`${fakeLinks.headsearch}${query}`)
    return (
        <>
            {blogs.length !== 0 && <h3>Search Results for {query} in Headlines</h3>}
            {blogs.length !== 0 && <div className={PostStyle.row}>
                {!loading && blogs.map((blog) => {

                    return <ClientSideCards key={`headlineSearchBlog${blog.id}`} slug={blog.slug} PostContent={blog.Content} image={blog.Image} PostHead={blog.Headline} PostName={blog.Headline} date={blog.date} time={blog.Time} />
                })}
                {loading && Array(6).fill().map(() => {
                    a++;
                    return <BlogPostArticleSkeleton key={`BlogPostArticleSkeleton${a}`} />
                })}
            </div>}
        </>
    )
}