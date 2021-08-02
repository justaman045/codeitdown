import PopularPostStyle from '../../styles/PopularPosts.module.scss'
import cx from 'classnames'
import data from '../../FakeData/index.json'
import PostCard from './Post'

export default function PopularPost({ popularPosts }) {
    return (
        <div className={cx(PopularPostStyle.w3lhomeblock3, PopularPostStyle.py5)}>
            <div className={cx(PopularPostStyle.container, PopularPostStyle.pylg5, PopularPostStyle.pymd4)}>
                <h3 className={cx(PopularPostStyle.sectiontitleleft, PopularPostStyle.mb4)}> Most Loved Blogs on {data.name} </h3>
                <div className={cx(PopularPostStyle.row, PopularPostStyle.toppics)}>
                    {popularPosts.map(blog => {
                        return <PostCard key={blog.id} slug={blog.slug} image={blog.Image} PostHead={blog.Headline} date={blog.date} time={blog.Time} />
                    })}
                </div>
            </div>
        </div>
    )
}