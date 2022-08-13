import data from '../../Data/index.json'
import Link from 'next/link'
import Image from 'next/image'

export default function ClientSideCards({ PostName, image, PostHead, PostContent, date, time, slug }) {
    return (
        <Link href={`/posts/${slug}`} passHref>
            <div className="collg4 colmd6 mtmd5 mt4">
                <div className="card">
                    <div className="cardheader p0 positionrelative">
                        <a href={`/posts/${slug}`}>
                            {/* <img className="cardimgbottom dblock radiusimagefull" src={image} style={{ height: `15em` }} alt="Card cap" /> */}
                            {/* <Image className="cardimgbottom dblock radiusimagefull" src={image} height={`15em`} alt="Card cap" /> */}
                            <Image className="cardimgbottom dblock radiusimagefull" src={image} height={`240`} width={`370`} alt="Card cap" />
                        </a>
                    </div>
                    <div className="cardbody blogdetails">
                        <a href={`/posts/${slug}`} className="blogdesc">{PostHead}</a>
                        <br />
                        {`${PostContent.substring(0, 200)}...`}
                        <div className="author alignitemscenter mt3 mb1">
                            {/* <img src={data.ownerImage} alt='' className="imgfluid roundedcircle" /> */}
                            <Image src={data.ownerImage} width={`63`} height={`50`} className="imgfluid roundedcircle" alt="Owner Image" />
                            <ul className="blogmeta">
                                <li>
                                    <a href={data.portfolioLink}>{data.ownerName}</a>
                                </li>
                                <li className="metaitem bloglesson">
                                    <span className="metavalue"> {date} </span>. <span className="metavalue ml2"><span className="fa faclocko" /> at {time}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </Link>
    )
}