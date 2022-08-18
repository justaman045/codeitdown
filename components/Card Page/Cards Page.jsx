import Data from '../../Data/index.json'
import cardPageStyle from '../../styles/cardsPage.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CardsPage({ image, PostHead, PostContent, date, time, slug }) {
    return (
        <>
            <div className={cx(cardPageStyle.collg4, cardPageStyle.cursorStyle, cardPageStyle.colmd6, cardPageStyle.mtmd5, cardPageStyle.mt4)}>
                <div className={cardPageStyle.card}>
                    <Link href={`/posts/${encodeURIComponent(slug)}`} >
                        <a>
                            <div className={cx(cardPageStyle.cardheader, cardPageStyle.p0, cardPageStyle.positionrelative)}>
                                <Image src={image} className={cx(cardPageStyle.cardimgbottom, cardPageStyle.dblock, cardPageStyle.radiusimagefull)} alt={`${PostHead}'s Image`} height={`240`} width={`370`} />
                            </div>
                        </a>
                        </Link>
                        <div className={cx(cardPageStyle.cardbody, cardPageStyle.blogdetails)}>
                            <Link href={`/posts/${encodeURIComponent(slug)}`}>
                                    <a className={cardPageStyle.blogdesc}>{PostHead.toString().length > 49 ? `${PostHead.substring(0, 49)}...` : PostHead}</a>
                            </Link>
                                <br />
                                {`${PostContent.substring(0, 200)}...`}
                                <div className={cx(cardPageStyle.author, cardPageStyle.alignitemscenter, cardPageStyle.mt3, cardPageStyle.mb1)}>
                                    <Image src={Data.ownerImage} className={cx(cardPageStyle.imgfluid, cardPageStyle.roundedcircle)} width={`50`} height={`50`} alt={`${Data.ownerName}' Image`} />
                                    <ul className={cardPageStyle.blogmeta}>
                                        <li>
                                            <Link href={Data.portfolioLink}>
                                                <a>{Data.ownerName}</a>
                                            </Link>
                                        </li>
                                        <li className={cx(cardPageStyle.metaitem, cardPageStyle.bloglesson)}>
                                            <span className={cardPageStyle.metavalue}> {date} </span>. <span className={cx(cardPageStyle.metavalue, cardPageStyle.ml2)}><span className={cx(cardPageStyle.fa, cardPageStyle.faclocko)} /> at {time}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}