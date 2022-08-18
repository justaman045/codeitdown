import data from '../../Data/index.json'
import cardPageStyle from '../../styles/cardsPage.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CardsPage({ image, PostHead, PostContent }) {
    let PostHeadd = String(PostHead).slice(1);
    return (
        <>
            <div className={cx(cardPageStyle.collg4, cardPageStyle.cursorStyle, cardPageStyle.colmd6, cardPageStyle.mtmd5, cardPageStyle.mt4)}>
                <div className={cardPageStyle.card}>
                    <Link href={`/hashtag/${encodeURIComponent(PostHeadd)}`} >
                        <a>
                            <div className={cx(cardPageStyle.cardheader, cardPageStyle.p0, cardPageStyle.positionrelative)}>
                                {/* <img className={cx(cardPageStyle.cardimgbottom, cardPageStyle.dblock, cardPageStyle.radiusimagefull)} src={image} style={{ height: `15em` }} alt={`${PostHead}'s Image`} /> */}
                                <Image src={image} className={cx(cardPageStyle.cardimgbottom, cardPageStyle.dblock, cardPageStyle.radiusimagefull)} alt={`${PostHead}'s Image`} height={`240`} width={`370`} />
                            </div>
                        </a>
                    </Link>
                    <div className={cx(cardPageStyle.cardbody, cardPageStyle.blogdetails)}>
                        <Link href={`/hashtag/${encodeURIComponent(PostHeadd)}`}>
                            <a className={cardPageStyle.blogdesc}>{PostHead}</a>
                        </Link>
                        <br />
                        {`${PostContent.substring(0, 101)}...`}
                        <div className={cx(cardPageStyle.author, cardPageStyle.alignitemscenter, cardPageStyle.mt3, cardPageStyle.mb1)}>
                            {/* <img src={data.ownerImage} alt={`${data.ownerName}' Image`} className={cx(cardPageStyle.imgfluid, cardPageStyle.roundedcircle)} /> */}
                            <Image src={data.ownerImage} className={cx(cardPageStyle.imgfluid, cardPageStyle.roundedcircle)} width={`50`} height={`50`} alt={`${data.ownerName}' Image`} />
                            <ul className={cardPageStyle.blogmeta}>
                                <li>
                                    <Link href={data.portfolioLink}>
                                        <a>{data.ownerName}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}