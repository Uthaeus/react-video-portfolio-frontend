import { useState } from "react";

import CommentForm from "./comment-form";

function CommentItem({ comment }) {
    const [showReplyForm, setShowReplyForm] = useState(false);

    return (
        <div className="comment-item">
            <p>{comment.content}</p>

            <p onClick={() => setShowReplyForm(!showReplyForm)}>{showReplyForm ? 'close form' : 'reply'}</p>
            <p>{comment.user?.username}</p>

            {showReplyForm && <CommentForm comment_id={comment.id} commentSubmitHandler={() => setShowReplyForm(false)} />}
        </div>
    );
}

export default CommentItem;