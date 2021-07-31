import React from 'react';

//function Blog(props) {
//	const posts = [
//		{ id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!' },
//		{ id: 2, title: 'Установка', content: 'React можно установить из npm.' }
//	];
//	const sidebar = (
//		<ul>
//			{ posts.map((post) =>
//				<li key={ post.id }>
//					{ post.title }
//				</li>
//			) }
//		</ul>
//	);
//	const content = posts.map((post) =>
//		<div key={ post.id }>
//			<h3>{ post.title }</h3>
//			<p>{ post.content }</p>
//		</div>
//	);
//	return (
//		<div>
//			{ sidebar }
//			<hr />
//			{ content }

//		</div>
//	);
//}



let Blog = porps => {
	const posts = [
		{ id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!' },
		{ id: 2, title: 'Установка', content: 'React можно установить из npm.' }
	];

	const sidebar = (
		<ul >
			{ posts.map((post) =>
				<li key={post.id}>
					{ post.title }
				</li>) }
		</ul>
	);
	const content = posts.map((post) =>
		<div key={post.id}>
			<h3>{ post.title }</h3>
			<p>{ post.content }</p>
		</div>)

	return (
		<div>
			{sidebar}
			<hr/>
			{content}
		</div>
	)
}

export default Blog;