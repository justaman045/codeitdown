import PostStyle from '../../styles/PostStyle.module.scss';
import fakeLinks from '../../components/DataFetching/index';
import UseFetch from '../../components/Transferring Data/UseFetch';
import BlogPostArticleSkeleton from './BlogPostArticleSkeleton';
import ClientSideCards from './client Side Card';

export default function CategarySearch({ query }) {
    let a = 0;
    const { blogs, loading } = UseFetch(`${fakeLinks.catsearch}${query}`)
    return (
        <>
            {blogs.length !== 0 && <h3 style={{ marginTop: `1em` }}>Search Results for {query} in Cateogary</h3>}
            {blogs.length !== 0 && <div className={PostStyle.row}>
                {!loading && blogs.map((blog) => {

                    return <ClientSideCards key={`CategarySearchBlog${blog.id}`} slug={blog.slug} PostContent={blog.Content} image={blog.Image} PostHead={blog.Headline} PostName={blog.Headline} date={blog.date} time={blog.Time} />
                })}
                {loading && Array(6).fill().map(() => {
                    a++;
                    return <BlogPostArticleSkeleton key={`BlogPostArticleSkeleton${a}`} />
                })}
            </div>}
        </>
    )
}