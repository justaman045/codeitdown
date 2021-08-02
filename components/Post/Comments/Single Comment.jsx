import PostStyle from '../../../styles/PostStyle.module.scss'
import cx from 'classnames'
import Image from 'next/image'

export default function GetSingleComments({ CommentorName, date, time, CommentMessage }) {
    return (
        <div className={PostStyle.mediagrid}>
            <div className={PostStyle.media}>
                <a className={PostStyle.commentimg} href={''}>
                    {/* <img src="https://img.icons8.com/plasticine/50/000000/user-male-circle.png" className={PostStyle.imgresponsive} width="100px" alt="placeholder" /> */}
                    <Image src="https://img.icons8.com/plasticine/50/000000/user-male-circle.png" className={PostStyle.imgresponsive} layout={`fill`} alt="placeholder" />
                    {/* <Image src="https://img.icons8.com/plasticine/50/000000/user-male-circle.png" className={PostStyle.imgresponsive} width={`100px`} alt="placeholder" /> */}
                </a>
                <div className={cx(PostStyle.mediabody, PostStyle.commentsgridright)}>
                    <h5>{CommentorName}</h5>
                    <ul className={cx(PostStyle.p0, PostStyle.comment)}>
                        <li>{date} at {String(time).substr(0, String(time).length - 7)}</li>


                        {/* <li className>{date} at {String(time).substr(0, time.length - 7)}</li>
                        <li>
                            <a href="#comment" className="text-primary">Reply</a>
                        </li> */}


                    </ul>
                    <p>{CommentMessage}</p>
                </div>
            </div>
        </div>
    )
}