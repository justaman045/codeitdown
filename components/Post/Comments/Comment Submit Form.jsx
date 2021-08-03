import { useState } from "react";
import validator from "validator";
import UseFetchPost from "../../../components/Transferring Data/UseFetchPost";
import fakeLinks from '../../../components/DataFetching/index'
import cx from 'classnames'
import PostStyle from '../../../styles/PostStyle.module.scss'


export default function CommentSubmitForm({ idArticle, cateogary, slug, PostHead, hashtag }) {

    let email = undefined;
    let message = undefined;
    let CommentorName = undefined;

    const [value, setValue] = useState();
    const [commentMSG, setCommentMSG] = useState();

    function handleClick() {
        if (validator.isEmail(email) && message !== undefined) {
            UseFetchPost(fakeLinks.commentaPost, `{"email": "${email}", "message": "${message}", "name": "${CommentorName}", "BlogHeadlineID": "${idArticle}", "BlogHeadline": "${PostHead}", "slug": "${slug}", "cateogary": "${cateogary}", "hashtag": "${String(hashtag)}"}`)
            document.getElementById('commentForm').style.display = 'none'
            setValue('Thank you for Your Value-able Comment on my Article.')
            let valueSeconds = 60
            setTimeout(()=>{
                setCommentMSG(`You will be able to see your comment after ${valueSeconds} seconds`)
                valueSeconds-1;
            })
        }
    }


    return (
        <div className={PostStyle.leavecommentform} id="comment">
            <h3 className={PostStyle.asidetitle}>Leave a reply</h3>
            {value && <h4 style={{ padding: `2em` }}>{value}</h4>}
            {commentMSG && <h4 style={{ padding: `2em` }}>{commentMSG}</h4>}
            {commentMSG && <button onClick={() => { window.location = document.location }} className={cx(PostStyle.btn, PostStyle.btnstyle, PostStyle.btnprimary)}>
                Refresh
            </button>}
            <div id='commentForm'>
                <div className={PostStyle.inputgrids}>
                    <div className={PostStyle.formgroup}>
                        <input type="text" name="Name" onChange={(e) => { CommentorName = e.target.value }} className={PostStyle.formcontrol} placeholder="Your Name" required />
                    </div>
                    <div className={PostStyle.formgroup}>
                        <input type="email" name="Email" onChange={(e) => { email = e.target.value }} className={PostStyle.formcontrol} placeholder="Email" required />
                    </div>
                    <div className={PostStyle.formgroup}>
                        <textarea name="Comment" onChange={(e) => { message = e.target.value }} className={PostStyle.formcontrol} placeholder="Your Comment" required defaultValue={""} />
                    </div>
                </div>
                <div className={cx(PostStyle.submit, PostStyle.textright)}>
                    <button className={cx(PostStyle.btn, PostStyle.btnstyle, PostStyle.btnprimary)} onClick={() => { handleClick() }}>Post Comment </button></div>
            </div>
        </div>
    )
}