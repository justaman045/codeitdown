import PostStyle from '../../../styles/PostStyle.module.scss'
import cx from 'classnames'
import UseFetch from '../../../components/Transferring Data/UseFetch'
import fakeLinks from '../../../components/DataFetching/index'
import Link from 'next/link'

export default function Cateogaries() {
    const { blogs, loading } = UseFetch(fakeLinks.famousCateogaries)
    return (
        <div className={cx(PostStyle.sidebarwidget, PostStyle.sidebarblogcategory)}>
            <div className={PostStyle.sidebartitle}>
                <h4>Categories</h4>
            </div>
            <ul className={PostStyle.blogcat}>

                {!loading && blogs.map(blog => {
                    let cateogary = blog.Cateogary;
                    return <li key={blog.id}><Link href={`/cateogary/${cateogary}`}><a>{cateogary.charAt(0).toUpperCase() + cateogary.slice(1)} </a></Link></li>
                })}

            </ul>
        </div>
    )
}