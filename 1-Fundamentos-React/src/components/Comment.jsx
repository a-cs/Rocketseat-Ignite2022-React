import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({content, onDeleteComment}){
	const [likeCount, setLikeCount] = useState(0)

	function handleDeleteComment(){
		onDeleteComment(content)
	}

	function handleLikeComment(){
		setLikeCount((previousCount) => previousCount + 1)
	}

	return(
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/a-cs.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Anderson</strong>
							<time title="11 de Julho às 10:42h" dateTime="2023-07-11 10:42:21">Cerca de 1h atrás</time>
						</div>
						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24}/>
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment} title="Deletar comentário">
						<ThumbsUp size={20}/>
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}