import { faCode, faDatabase, faBookOpen, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CateogaryBlock from '../../styles/Cateogary.module.scss'
import cx from 'classnames'
import Link from 'next/link'

function GridFeature({ cateogary }) {
    let iconDataArray = [faDatabase, faBookOpen, faBookReader, faCode];
    let iconData = iconDataArray[Math.floor(Math.random() * (1 - 4) + 4)]
    return (
        <div className={cx(CateogaryBlock.collg3, CateogaryBlock.col6, CateogaryBlock.gridsfeature, CateogaryBlock.mt2)}>
            <Link href={`/cateogary/${cateogary}`}>
                <a>
                    <div className={CateogaryBlock.areaHover}>
                        <FontAwesomeIcon icon={iconData} style={{ width: '10vh', height: '3vh' }} />
                        <h4 className={CateogaryBlock.titlehead}>{cateogary.charAt(0).toUpperCase() + cateogary.slice(1)}</h4>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default GridFeature
