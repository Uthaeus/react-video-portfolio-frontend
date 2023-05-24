import { useState } from "react";

import CommentForm from "./comment-form";
import CommentCommentItem from "./comment-comment-item";

function CommentItem({ comment }) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    console.log(comment);

    return (
        <>
            <div className="comment-item">
                <p className="comment-item-content">{comment.content}</p>

                <div className="comment-item-footer">

                    <div className="comment-item-actions">
                        <p className="comment-item-action reply" onClick={() => setShowReplyForm(!showReplyForm)}>{showReplyForm ? 'close form' : 'reply'}</p>
                        {comment.replies?.length > 0 && <p className="comment-item-action replies" onClick={() => setShowReplies(!showReplies)}>{showReplies ? "hide replies" : "show replies"}</p>}
                    </div>

                    <p className="comment-item-user"> posted by: <span className="comment-item-username">{comment.user?.username}</span></p>
                </div>
                
            </div>

            {showReplyForm && <CommentForm comment_id={comment.id} commentSubmitHandler={() => setShowReplyForm(false)} />}

            {showReplies && comment.replies?.map((comment) => <CommentCommentItem key={comment.id} comment={comment} />)}
        </>
    );
}

export default CommentItem;