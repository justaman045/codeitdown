import cx from 'classnames';
import CateogaryBlockStyle from '../../styles/CateogaryBlock.module.scss';
import CateogaryCards from './Cards';
import Link from 'next/link'

export default function CateogaryBlock({ randomCateogary, head, typeOfSection }) {
    let linkToDirect;
    if (typeOfSection === 'cateogary') {
        linkToDirect = `/cateogary/${String(head).toLocaleLowerCase()}`;
    }
    if (typeOfSection === 'recent') {
        linkToDirect = '/blogs';
    }
    return (
        <div className={cx(CateogaryBlockStyle.w3lhomeblock2, CateogaryBlockStyle.py5)}>
            <div className={cx(CateogaryBlockStyle.container, CateogaryBlockStyle.pylg5, CateogaryBlockStyle.pymd4)}>
                <div className={CateogaryBlockStyle.leftright}>
                    <h3 className={cx(CateogaryBlockStyle.sectiontitleleft, CateogaryBlockStyle.mbsm4, CateogaryBlockStyle.mb2)}> {head.charAt(0).toUpperCase() + head.slice(1)} </h3>
                    <Link href={linkToDirect}>
                        <a className={cx(CateogaryBlockStyle.more, CateogaryBlockStyle.btn, CateogaryBlockStyle.btnsmall, CateogaryBlockStyle.mbsm0, CateogaryBlockStyle.mb4)} style={{ background: `#5a67d8` }}>View more</a>
                    </Link>
                </div>
                <div className={CateogaryBlockStyle.row}>

                    {/* Develop the Card for the Popular Posts  */}

                    {randomCateogary.map(blog => {
                        return <CateogaryCards key={blog.id} slug={blog.slug} image={blog.Image} PostHead={blog.Headline} date={blog.date} time={blog.Time} />
                    })}
                </div>
            </div>
        </div>
    )
}