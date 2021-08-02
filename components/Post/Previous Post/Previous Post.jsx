import PostStyle from '../../../styles/PostStyle.module.scss'
import UseFetch from "../../../components/Transferring Data/UseFetch"
import cx from 'classnames'
import fakeLinks from '../../../components/DataFetching/index'

export default function PreviousPost({ id }) {
    const { blogs, loading } = UseFetch(`${fakeLinks.previousPost}${id}/`)
    return (
        <>
            {!loading && <a className={cx(PostStyle.prevpost, PostStyle.pullleft)} href={blogs.slug}><span className={cx(PostStyle.fa, PostStyle.faarrowleft)} aria-hidden="true" />Previous Post</a>}
        </>
    )
}