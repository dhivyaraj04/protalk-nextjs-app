import React from "react";
import Head from "next/head";
import HealthArticle from "../health-article/health-article";

export default function Index(props) {
	return (
		<main>
			<Head>
				<title>Protalk App</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					httpEquiv="Content-Type"
					content="text/html;charset=ut-8"
				/>
				<meta
					name="description"
					content="ProTalk experts are standing by to talk with you about healthy tips"
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<div>
				<HealthArticle blog_content={props.content} />
			</div>
		</main>
	);
}
export const getServerSideProps = async () => {
	const res = await fetch(
		"https://run.mocky.io/v3/43f83c21-8678-4e6e-8e95-2725d9a51d03"
	);
	const data = await res.text();
	return {
		props: { content: data }
	};
};
