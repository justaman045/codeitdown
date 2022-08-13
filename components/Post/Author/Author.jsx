import PostStyle from '../../../styles/PostStyle.module.scss'
import cx from 'classnames'
import data from '../../../Data/index.json'
import Link from 'next/link'
import Image from 'next/image'

export default function AuthorCard() {
    return (
        <div className={cx(PostStyle.sidebarwidget, PostStyle.sidebarblogcategory)}>
            <div className={PostStyle.author}>
                <div className={PostStyle.sidebartitle}>
                    <h4 style={{ fontFamily: `"Benne", serif` }}>About {data.ownerName}</h4>
                </div>
                <div className={PostStyle.authordetalis}>
                    <a href={data.portfolioLink} className={PostStyle.authorimage}>
                        {/* <img style={{ marginTop: `12px` }} src={data.ownerImage} alt={`${data.ownerName}'s Image`} className={PostStyle.imgfluid} /> */}
                        <Image src={data.ownerImage} alt={`${data.ownerName}'s Image`} width={`130`} height={`130`} className={cx(PostStyle.imgfluid, PostStyle.marginTop12)}  />
                    </a>
                    <div className={PostStyle.authorinfo}>
                        <Link href={`/aboutMe`}>
                            <a className={PostStyle.authorname} style={{ fontFamily: `"Benne", serif` }}>{data.ownerName}</a>
                        </Link>
                        {/* <a href="#follow" className="btn btn-outline-primary">Follow </a> */}
                    </div>
                </div>
                <p className={PostStyle.mt2}>{data.ShortIntro}</p>
            </div>
        </div>
    )
}