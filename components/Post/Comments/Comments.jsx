import PostStyle from '../../../styles/PostStyle.module.scss'
import CommentSubmitForm from './Comment Submit Form'
import GetSingleComments from './Single Comment';


export default function CommentControl({ id, slug, cateogary, PostHead, hashtag1, listComments }) {
    return (
        <div className={PostStyle.row}>
            <div className={PostStyle.collg8}>
                <div className={PostStyle.comments}>
                    <h3 className={PostStyle.asidetitle}>Recent comments({listComments.length})</h3>
                    <div className={PostStyle.commentsgrids}>

                        {listComments.map(blog => {
                            return <GetSingleComments key={blog.id} CommentorName={blog.name} CommentMessage={blog.message} date={blog.date} time={blog.Time} />
                        })}

                    </div>
                </div>

                {id && <CommentSubmitForm idArticle={id} slug={slug} cateogary={cateogary} PostHead={PostHead} hashtag={hashtag1} />}

            </div>
        </div>
    )
}