import BannerStyle from '../../styles/Banner.module.scss'
import cx from 'classnames'
import PostBanner from './PostBanner'

export default function BannerModule({ recentPost }) {
    return (
        <section className={BannerStyle.w3ltestimonials} id="testimonials">
            <div className={cx(BannerStyle.testimonials, BannerStyle.pt2, BannerStyle.pb5)}>
                <div className={cx(BannerStyle.container, BannerStyle.pblg5)}>
                    <div className={cx(BannerStyle.owltestimonial, BannerStyle.owlcarousel, BannerStyle.owltheme, BannerStyle.mbmd0, BannerStyle.mbsm5, BannerStyle.mb4)}>

                        {recentPost.map(item => {
                            return <PostBanner key={item.id} slug={item.slug} Cateogary={item.Cateogary} Headline={item.Headline} Content={item.Content} image={item.Image} />
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}