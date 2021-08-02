import CardStyle from '../../styles/EditorsPick.module.scss'
import cx from 'classnames'
import Link from 'next/link'

export default function RecomendedTopic({ cateogary }) {
    return (
        <Link href={`/cateogary/${cateogary}`}>
            <a className={cx(CardStyle.topicslist, CardStyle.mt3)}>
                <div className={CardStyle.list1}>
                    <span className={cx(CardStyle.fa, CardStyle.fabath)} />
                    <h4>{cateogary.charAt(0).toUpperCase() + cateogary.slice(1)}</h4>
                </div>
            </a>
        </Link>
    )
}