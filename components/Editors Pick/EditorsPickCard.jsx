import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardStyle from '../../styles/EditorsPick.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import data from '../../FakeData/index.json'
import Image from 'next/image'

export default function CardDefault({ cateogary, PostHead, PostContent, date, time, image, slug }) {
    return (
        <div className={cx(CardStyle.collg6, CardStyle.colmd6, CardStyle.item, CardStyle.mt4)}>
            <div className={CardStyle.card}>
                <div className={cx(CardStyle.cardheader, CardStyle.p0, CardStyle.positionrelative)}>
                    <Link href={`/posts/${slug}`}>
                        <a>
                            {/* <img className={cx(CardStyle.cardimgbottom, CardStyle.dblock, CardStyle.radiusimagefull)} src={image} style={{ height: `15em` }} alt="Card cap" /> */}
                            {/* <Image className={cx(CardStyle.cardimgbottom, CardStyle.dblock, CardStyle.radiusimagefull)} layout={`fill`} src={image} alt={'Post Image'} /> */}
                            <Image className={cx(CardStyle.cardimgbottom, CardStyle.dblock, CardStyle.radiusimagefull)} height={`240`} width={`370`} src={image} alt={'Post Image'} />
                        </a>
                    </Link>
                </div>
                <div className={cx(CardStyle.cardbody, CardStyle.blogdetails)}>
                    <span className={CardStyle.labelblue}><Link href={`/cateogary/${cateogary}`}><a>{cateogary.charAt(0).toUpperCase() + cateogary.slice(1)}</a></Link></span>
                    <br />
                    <Link href={`/posts/${slug}`}><a className={CardStyle.blogdesc}>{PostHead}</a></Link>
                    <p>{`${PostContent.substring(0, 150)}...`}</p>
                    <div className={cx(CardStyle.author, CardStyle.alignitemscenter, CardStyle.mt3, CardStyle.mb1)}>
                        {/* <img src={data.ownerImage} alt='' className={cx(CardStyle.imgfluid, CardStyle.roundedcircle)} /> */}
                        <Image src={data.ownerImage} alt='' width={`63`} height={`50`} className={cx(CardStyle.imgfluid, CardStyle.roundedcircle)} />
                        <ul className={CardStyle.blogmeta}>
                            <li>
                                <Link href={data.portfolioLink}><a className={CardStyle.valName}>{data.ownerName}</a></Link>
                            </li>
                            <li className={cx(CardStyle.metaitem, CardStyle.bloglesson)}>
                                <span className={CardStyle.metavalue}> {date} </span>. <span className={cx(CardStyle.metavalue, CardStyle.ml2)}><FontAwesomeIcon icon={faClock} /> at {time}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}