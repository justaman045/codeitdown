import BannerStyle from '../../styles/Banner.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function PostBanner({ Cateogary, Headline, Content, image, slug }) {
    console.log(slug);
    return (
        <div className={BannerStyle.item}>
            <div className={cx(BannerStyle.row, BannerStyle.sliderinfo)}>
                <div className={cx(BannerStyle.collg8, BannerStyle.messageinfo, BannerStyle.alignself)}>
                    <Link href={`/cateogary/${Cateogary}`}>
                        <a><span className={cx(BannerStyle.labelblue, BannerStyle.mbsm4, BannerStyle.mb3)}>{Cateogary}</span></a>
                    </Link>
                    <Link href={`/posts/${slug}`}>
                        <a><h1 className={cx(BannerStyle.titlebig, BannerStyle.mb4)}>{Headline}...</h1></a>
                    </Link>
                    {/* <p className="message">Some Post [Length - 364] ....</p> */}
                    <Link href={`/posts/${slug}`}>
                        <a><p className={BannerStyle.message}>{Content.substring(0, 200)}</p></a>
                    </Link>
                </div>
                <div className={cx(BannerStyle.collg4, BannerStyle.colmd8, BannerStyle.imgcircle, BannerStyle.mtlg0, BannerStyle.mt4)}>
                    <Link href={`/posts/${slug}`}>
                        {/* <img src={image} className={cx(BannerStyle.imgfluid, BannerStyle.radiusimagefull)} style={{ height: '23em' }} alt="client" /> */}
                        <Image src={image} className={cx(BannerStyle.imgfluid, BannerStyle.radiusimagefull)} width={`400`} height={`370`} alt={'Post Image'} />
                        {/* <Image src={image} className={cx(BannerStyle.imgfluid, BannerStyle.radiusimagefull)} height={`23em`} alt={'Post Image'} /> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}