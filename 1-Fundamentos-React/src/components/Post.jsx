import styles from "./Post.module.css";

export function Post(props){
	return(
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://github.com/a-cs.png" />
					<div className={styles.authorInfo}>
						<strong>Anderson</strong>
						<span>Software Developer</span>
					</div>
				</div>
				<time title="11 de Julho às 10:42h" dateTime="2023-07-11 10:42:21">Publicado há 1h</time>
			</header>
			<div className={styles.content}>
				<p>
					Fala galeraa 👋
				</p>

				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>

				<p>
					<a href=""> jane.design/doctorcare </a>
				</p>

				<p>
					<a href="">#novoprojeto</a> {" "}
					<a href="">#nlw</a> {" "}
					<a href="">#rocketseat </a> {" "}
				</p>
			</div>
		</article>
	)
}