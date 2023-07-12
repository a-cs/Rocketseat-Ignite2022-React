import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img className={styles.cover} src="https://images.unsplash.com/photo-1680072327107-b55360fb5f25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500" />
			<div className={styles.profile}>
				<Avatar src="https://github.com/a-cs.png"/>
				<strong>Anderson</strong>
				<span>Software Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}