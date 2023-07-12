import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment(){
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
						<button title="Deletar comentário">
							<Trash size={24}/>
						</button>
					</header>
					<p>Muito bom Anderson, parabéns!! 👏👏</p>
				</div>
				<footer>
					<button title="Deletar comentário">
						<ThumbsUp size={20}/>
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	)
}