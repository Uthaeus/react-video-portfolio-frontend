

function CommentItem({ comment }) {

    return (
        <div className="comment-item">
            <p>{comment.content}</p>
            <p>{comment.user?.username}</p>
        </div>
    );
}

export default CommentItem;