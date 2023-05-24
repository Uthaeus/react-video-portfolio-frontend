
function CommentCommentItem({ comment }) {

    return (
        <div className="comment-comment-item">
            <p>comment comment item:</p>
            <p>{comment.content}</p>
            <p>{comment.user?.username}</p>
        </div>
    );
}

export default CommentCommentItem;