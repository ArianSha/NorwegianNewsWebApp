import React, { lazy, suspense, useRef } from 'react';
import { useState, useEffect } from 'react';
import Article from './article';
import { db } from './firebase';
import { collection, limit, getDocs, orderBy, query } from 'firebase/firestore';
import InfiniteScroll from 'react-infinite-scroll-component';

// rate limited by firebase free tier (50k reads/day)
const MAX_ARTICLES = 1950;

// const fakeArticle = {
// 	headline: 'This is a fake article',
// 	url: 'https://www.google.com',
// 	img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
// 	source: 'vg',
// };
// const fakeArticles = Array(MAX_ARTICLES).fill(fakeArticle);

export default function Content() {
	const [articles, setArticles] = useState([]);
	const [articlesToRender, setArticlesToRender] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [warningIsHidden, setWarningIsHidden] = useState(false);

	useEffect(() => {
		(async () => {
			const reference = collection(db, 'articles');
			const q = query(
				reference,
				orderBy('timestamp', 'desc'),
				limit(MAX_ARTICLES)
			);
			const docsSnap = await getDocs(q);
			const articles = docsSnap.docs.map((doc) => doc.data());
			setArticles(articles);
			setArticlesToRender(articles.slice(0, 33));
		})();
	}, []);

	return (
		<>
			<div hidden={warningIsHidden} className='overlay'>
				<div className='popup'>
					<div className='content'>
						<h2>
							This site is no longer being maintained, and simply serves as an
							archive for past articles.
						</h2>
					</div>
					<button className='close' onClick={() => setWarningIsHidden(true)}>
						&times;
					</button>
				</div>
			</div>
			<InfiniteScroll
				className='articles'
				dataLength={articlesToRender.length}
				next={() => {
					if (articlesToRender.length === MAX_ARTICLES) {
						setHasMore(false);
						return;
					}
					setArticlesToRender(
						articlesToRender.concat(
							articles.slice(
								articlesToRender.length,
								articlesToRender.length + 33
							)
						)
					);
				}}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
			>
				{articlesToRender.map(({ headline, url, image, source }) => (
					<Article
						key={url}
						headline={headline}
						url={url}
						img={image}
						source={source}
					/>
				))}
			</InfiniteScroll>
		</>
	);
}
