import CateogaryBlockC from '../../styles/Cateogary.module.scss'
import cx from 'classnames'
import GridFeature from './GridFeature'
import Data from '../../Data/index.json'

export default function CateogaryBlock({ cateogarys }) {
    return (
        <section className={cx(CateogaryBlockC.w3lhomeblock1, CateogaryBlockC.py4, CateogaryBlockC.pysm5)}>
            <div className={cx(CateogaryBlockC.container, CateogaryBlockC.pymd4)}>
                <h3 className={cx(CateogaryBlockC.sectiontitleleft, CateogaryBlockC.mb4)}> Best Cateogary Over {Data.name} </h3>
                <div className={cx(CateogaryBlockC.gridsareahny, CateogaryBlockC.maincontwthreefea, CateogaryBlockC.row)}>
                    {cateogarys.map(cateo => {
                        return <GridFeature key={cateo.id} cateogary={cateo.Cateogary} />
                    })}
                </div>
            </div>
        </section>
    )
}