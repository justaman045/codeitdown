import CardStyle from '../../styles/EditorsPick.module.scss'
import cx from 'classnames'

export default function BannerAdv({ url }) {
    return (
        <div className={cx(CardStyle.mt4, CardStyle.leftright, CardStyle.bgclrwhite, CardStyle.p3)}>
            <h3 className={cx(CardStyle.sectiontitleleft, CardStyle.alignself, CardStyle.pl2, CardStyle.mbsm0, CardStyle.mb3)}>Advertise with us </h3>
            <a className={cx(CardStyle.btn, CardStyle.btnstyle, CardStyle.btnprimary)} href={`${url}`}>Learn more</a>
        </div>
    )
}