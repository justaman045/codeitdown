import cx from 'classnames'
import PostStyle from '../../styles/PostStyle.module.scss'
import data from '../../Data/index.json'
import Link from 'next/link'

export default function PostHeadingAndOther({ PostName, date, time, cateogary }) {
    let author = data.ownerName;
    return (
        <div className={cx(PostStyle.blogtitle, PostStyle.pxmd5)}>
            <h1 className={PostStyle.titlebig}>{PostName}</h1>
            <ul className={PostStyle.bloglist}>
                <li>
                    <p> Posted on <strong>{date}</strong></p>
                </li>
                <li>
                    <p> By <a href={data.portfolioLink}><strong>{author.charAt(0).toUpperCase() + author.slice(1)}</strong></a></p>
                </li>
                {cateogary && <li>
                    <p> Published in <Link href={`/cateogary/${cateogary}`}><a><strong>{cateogary.charAt(0).toUpperCase() + cateogary.slice(1)}</strong></a></Link></p>
                </li>}
                <li>
                    {/* <p> <a href={`/time/${time}`}><strong>{time} min read</strong></a></p> */}
                    <p> <strong> at {time}</strong></p>
                </li>
            </ul>
        </div>
    )
}