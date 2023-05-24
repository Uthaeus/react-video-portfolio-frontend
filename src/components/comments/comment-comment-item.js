
function CommentCommentItem({ comment }) {

    return (
        <div className="comment-comment-item">
            <p className="comment-comment-content">{comment.content}</p>
            <p>{comment.user?.username}</p>
        </div>
    );
}

export default CommentCommentItem;