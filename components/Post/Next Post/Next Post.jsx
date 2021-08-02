import PostStyle from '../../../styles/PostStyle.module.scss'
import cx from 'classnames'
import fakeLinks from '../../../components/DataFetching/index'
import UseFetch from '../../../components/Transferring Data/UseFetch'

export default function NextPost({ id }) {
    const { blogs, loading } = UseFetch(`${fakeLinks.nextPost}${id}/`)
    return (
        <>
            {!loading && <a className={cx(PostStyle.nextpost, PostStyle.pullright)} href={blogs.slug}>Next Post <span className={cx(PostStyle.fa, PostStyle.faarrowright)} aria-hidden="true" /></a>}
        </>
    )
}