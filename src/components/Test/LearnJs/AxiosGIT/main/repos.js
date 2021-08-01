import React from "react";
import s from "./main.module.css";


const Repo = (props) => {
	const repo = props.repo

	return (
		<div>
			<div className={ s.repo }>
				<div className={ s.repo_header }>
					<div className={ s.repo_header_name } >{ repo.name }</div>
					<div className={ s.repo_header_name } >{ repo.stargazers_count }</div>
					{/*<div className={ s.repo_header_name } >{ repo.has_downloads }</div>*/}
				</div>
				<div className={ s.repo_header_name } >{ repo.update_at}</div>
				<a href={ repo.html_url } className={ s.repo_link } >Respons repo :html_url{ repo.html_url }</a>
			</div>
		</div >
	)
}

export default Repo;