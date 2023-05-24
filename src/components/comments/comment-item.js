import { useState } from "react";

import CommentForm from "./comment-form";
import CommentCommentItem from "./comment-comment-item";

function CommentItem({ comment }) {
    const [showReplyForm, setShowReplyForm] = useState(false);

    

    return (
        <div className="comment-item">
            <p>{comment.content}</p>

            <p onClick={() => setShowReplyForm(!showReplyForm)}>{showReplyForm ? 'close form' : 'reply'}</p>
            <p>{comment.user?.username}</p>

            {showReplyForm && <CommentForm comment_id={comment.id} commentSubmitHandler={() => setShowReplyForm(false)} />}

            {comment.replies?.map((comment) => <CommentCommentItem key={comment.id} comment={comment} />)}
        </div>
    );
}

export default CommentItem;