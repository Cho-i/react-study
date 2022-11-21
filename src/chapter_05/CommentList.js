import React from "react";
import Comment from "./Comment";

const comments = [
	{
		name: "이초이",
		comment: "안녕하세용"
	},
	{
		name: "이초이222",
		comment: "안녕하세용222"
	},
	{
		name: "이초이333",
		comment: "안녕하세용333"
	},
	{
		name: "이초이444",
		comment: "안녕하세용444"
	},
];

function CommentList(props) {
	return (
		<div>
			{
				comments.map((comment) => {
					return (
						<Comment name={comment.name} comment={comment.comment} />
					);
				})
			}
		</div>
	);
}

export default CommentList;