import cx from 'classnames'
import EditorsPickStyle from '../../styles/EditorsPick.module.scss'
import CardDefault from './EditorsPickCard'
import data from '../../Data/index.json'
import BannerAdv from './AdvertisementBanner'
import Topics from './Topics'

export default function EditorsPick({ editorsPick, url, recomendedTopics }) {
    return (
        <div className={cx(EditorsPickStyle.w3lhomeblock2, EditorsPickStyle.py5)}>
            <div className={cx(EditorsPickStyle.container, EditorsPickStyle.pylg5, EditorsPickStyle.pymd4)}>
                <div className={cx(EditorsPickStyle.row, EditorsPickStyle.trending)}>
                    <div className={EditorsPickStyle.collg8}>
                        <h3 className={cx(EditorsPickStyle.sectiontitleleft, EditorsPickStyle.mb4)}> Editor&apos;s Pick </h3>
                        <div className={EditorsPickStyle.row}>
                            {editorsPick.map(item => {
                                return <CardDefault key={item.id} slug={item.slug} cateogary={item.Cateogary} PostHead={item.Headline} PostContent={item.Content} date={item.date} time={item.Time} image={item.Image} />
                            })}
                        </div>
                        {url && <BannerAdv key={`world`} url={data.advertiseLink} />}
                    </div>
                    <Topics recomendedTopics={recomendedTopics} />
                </div>
            </div>
        </div>
    )
}