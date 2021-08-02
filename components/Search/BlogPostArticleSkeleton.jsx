import cardPageStyle from '../../styles/cardsPage.module.scss'
import Skeleton from 'react-loading-skeleton';
import cx from 'classnames'

function BlogPostArticleSkeleton() {
    return (
        <div className={cx(cardPageStyle.collg4, cardPageStyle.cursorStyle, cardPageStyle.colmd6, cardPageStyle.mtmd5, cardPageStyle.mt4)}>
            <div className={cardPageStyle.card}>
                <div className={cx(cardPageStyle.cardheader, cardPageStyle.p0, cardPageStyle.positionrelative)}>
                    <a href={`/posts/`}>
                        <Skeleton style={{ height: `15em` }} className={cx(cardPageStyle.cardimgbottom, cardPageStyle.dblock, cardPageStyle.radiusimagefull)} />
                    </a>
                </div>
                <div className={cx(cardPageStyle.cardbody, cardPageStyle.blogdetails)}>
                    <a href={`/posts/`} className={cardPageStyle.blogdesc}><Skeleton height={`2em`} /></a>
                    <br />
                    <br />
                    <Skeleton height={`1em`} />
                    <Skeleton height={`1em`} />
                    <Skeleton width={`5em`} />
                    <div className={cx(cardPageStyle.author, cardPageStyle.alignitemscenter, cardPageStyle.mt3, cardPageStyle.mb1)}>
                        <Skeleton width={`2.5em`} height={`2.5em`} />
                        <ul className={cardPageStyle.blogmeta}>
                            <li>
                                <a href={`/`}><Skeleton width={`2em`} /></a>
                            </li>
                            <li className={cx(cardPageStyle.metaitem, cardPageStyle.bloglesson)}>
                                <span className={cardPageStyle.metavalue}> <Skeleton width={`2em`} /> </span>. <span className={cx(cardPageStyle.metavalue, cardPageStyle.ml2)}><span className={cx(cardPageStyle.fa, cardPageStyle.faclocko)} /> <Skeleton width={`2em`} /> min</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPostArticleSkeleton
