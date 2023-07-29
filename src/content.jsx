import React from 'react';
import { useState, useEffect } from 'react';
import Article from './article';
import { db } from './firebase';
import { collection, limit, getDocs, orderBy, query } from 'firebase/firestore';

export default function Content() {
	const [articles, setArticles] = useState([]);
	const [warningIsHidden, setWarningIsHidden] = useState(false);

	useEffect(() => {
		const reference = collection(db, 'articles');

		(async () => {
			const q = query(reference, orderBy('timestamp', 'desc'), limit(200));
			const docsSnap = await getDocs(q);
			setArticles(docsSnap.docs.map((doc) => doc.data()));
		})();
	}, []);

	return (
		<>
			<div hidden={warningIsHidden} class='overlay'>
				<div class='popup'>
					<div class='content'>
						<h2>
							This site is no longer being maintained, and simply serves as an
							archive for past articles.
						</h2>
					</div>
					<button class='close' onClick={() => setWarningIsHidden(true)}>
						&times;
					</button>
				</div>
			</div>
			<div id='content'>
				{articles.map(({ headline, url, image, source }) => (
					<Article
						key={url}
						headline={headline}
						url={url}
						img={image}
						source={source}
					/>
				))}
			</div>
		</>
	);
}
