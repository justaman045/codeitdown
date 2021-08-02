import PostStyle from '../../../styles/PostStyle.module.scss'
import cx from 'classnames'
import Image from 'next/image'

export default function PostImage({ image }) {
    return (
        <div className={cx(PostStyle.image, PostStyle.mbsm5, PostStyle.mb4)}>
            {/* <img src={image} alt='Post Image' style={{ height: `50em`, width: `82em` }} className={cx(PostStyle.ultraMonitor, PostStyle.imgfluid, PostStyle.radiusimagefull)} /> */}
            <Image src={image} alt='Post Image' width={`1312`} height={`800`} className={cx(PostStyle.ultraMonitor, PostStyle.imgfluid, PostStyle.radiusimagefull)} />
        </div>
    )
}