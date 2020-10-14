import React from "react";
import marked from "marked";
import { Row, Col } from "react-grid-system";

export default function HealthArticle({ blog_content }) {
	const renderer = new marked.Renderer();
	const heading = `#  Health Article`;
	const content = ` 
<u></u>  

<div class="banner-image"> 

![banner](https://i.ibb.co/t4yYFr6/image-28.png)
</div>

> #  If You Really Want to Optimize Your Diet, Focus on Fiber
<div class="profile-img">![banner](https://i.ibb.co/b5JPXV4/Image-216.png)</div> | <div class="profile-name">Arjun Sharma</div><div class="profile-role">Diet Expert</div> |
---| ---|
|   |
  
<u></u>
 		<div class="content-text">There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn’s disease,” Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet and health data collected from roughly 170,000 women over a period of more than 26 years. It found that those women who landed in the top fifth of the population in terms of fiber intakes were 40% less likely to have been diagnosed with Crohn’s disease than women who landed in the bottom fifth.
</div>
`;
	const Previewer = props => {
		return (
			<div
				id="previewer"
				dangerouslySetInnerHTML={{
					__html: marked(props.markdown, { renderer: renderer })
				}}
			/>
		);
	};
	const PreviewerHead = props => {
		return (
			<div
				id="previewer"
				dangerouslySetInnerHTML={{
					__html: marked(props.markdown, { renderer: renderer })
				}}
			/>
		);
	};
	return (
		<div>
			<Row>
				<Col sm={12}>
					<section className="section-box">
						<div className="section-header">
							<div className="heading-box">
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19 12.9922H5"
										stroke="black"
										stroke-opacity="0.85"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12 19.9922L5 12.9922L12 5.99219"
										stroke="black"
										stroke-opacity="0.85"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<PreviewerHead markdown={heading} />
							</div>
							<div className="header-action">
								<svg
									width="12"
									height="25"
									viewBox="0 0 12 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M6 8.99219C7.1 8.99219 8 8.09219 8 6.99219C8 5.89219 7.1 4.99219 6 4.99219C4.9 4.99219 4 5.89219 4 6.99219C4 8.09219 4.9 8.99219 6 8.99219ZM6 10.9922C4.9 10.9922 4 11.8922 4 12.9922C4 14.0922 4.9 14.9922 6 14.9922C7.1 14.9922 8 14.0922 8 12.9922C8 11.8922 7.1 10.9922 6 10.9922ZM6 16.9922C4.9 16.9922 4 17.8922 4 18.9922C4 20.0922 4.9 20.9922 6 20.9922C7.1 20.9922 8 20.0922 8 18.9922C8 17.8922 7.1 16.9922 6 16.9922Z"
										fill="black"
									/>
								</svg>
							</div>
						</div>

						<Previewer markdown={blog_content} />
					</section>
				</Col>
			</Row>
		</div>
	);
}
