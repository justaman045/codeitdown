import fakeData from '../../FakeData/index.json'
import CateogaryBlockC from '../../styles/Cateogary.module.scss'
import cx from 'classnames'
import GridFeature from './GridFeature'

export default function CateogaryBlock({ cateogarys }) {
    return (
        <section className={cx(CateogaryBlockC.w3lhomeblock1, CateogaryBlockC.py4, CateogaryBlockC.pysm5)}>
            <div className={cx(CateogaryBlockC.container, CateogaryBlockC.pymd4)}>
                <h3 className={cx(CateogaryBlockC.sectiontitleleft, CateogaryBlockC.mb4)}> Best Cateogary Over {fakeData.name} </h3>
                <div className={cx(CateogaryBlockC.gridsareahny, CateogaryBlockC.maincontwthreefea, CateogaryBlockC.row)}>
                    {cateogarys.map(cateo => {
                        return <GridFeature key={cateo.id} cateogary={cateo.Cateogary} />
                    })}
                </div>
            </div>
        </section>
    )
}