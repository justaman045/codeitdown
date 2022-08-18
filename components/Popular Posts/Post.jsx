import PostCardStyle from '../../styles/PopularPosts.module.scss'
import cx from 'classnames'
import data from '../../Data/index.json'
import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ image, PostHead, date, time, slug }) {
    return (
        <div className={cx(PostCardStyle.collg4, PostCardStyle.colmd6, PostCardStyle.mtmd0, PostCardStyle.mt4, PostCardStyle.padOnSmall)}>
            <Link href={`/posts/${slug}`} passHref>
                <div className={PostCardStyle.toppic1} style={{ backgroundImage: `url(${image})`, cursor: `pointer` }}>
                    <div className={cx(PostCardStyle.cardbody, PostCardStyle.blogdetails)}>
                        <Link href={`/posts/${slug}`} passHref>
                            <a className={PostCardStyle.blogdesc}> {PostHead} </a>
                        </Link>
                        <div className={cx(PostCardStyle.author, PostCardStyle.alignitemscenter)}>
                            <Image src={data.ownerImage} alt='Owner Image' width={`50`} height={`50`} className={cx(PostCardStyle.imgfluid, PostCardStyle.roundedcircle)} />
                            <ul className={PostCardStyle.blogmeta}>
                                <li>
                                    <a href={data.portfolioLink}>{data.ownerName}</a>
                                </li>
                                <li className={cx(PostCardStyle.metaitem, PostCardStyle.bloglesson)}>
                                    <span className={PostCardStyle.metavalue}> {date} </span>. <span className={cx(PostCardStyle.metavalue, PostCardStyle.ml2)}><span className={cx(PostCardStyle.fa, PostCardStyle.faclocko)} /> at {time}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}