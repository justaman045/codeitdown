import PostStyle from '../../../styles/PostStyle.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function RecentArticle({ image, PostHeading, date, slug }) {
    return (
        <Link href={`/posts/${slug}`} passHref>
            <article className={PostStyle.post}>
                <figure className={PostStyle.postthumb}>
                    {/* <img style={{ marginTop: `9px` }} src={image} alt='Article' /> */}
                    <Image src={image} width={`80`} height={`80`} alt='Article' className={PostStyle.marginTop9} />
                    </figure>
                <div className={PostStyle.text}><Link href={`/posts/${slug}`}><a>{PostHeading}</a></Link>
                </div>
                <div className={PostStyle.postinfo}>{date}</div>
            </article>
        </Link>
    )
}