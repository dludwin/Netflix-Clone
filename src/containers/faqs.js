import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';

// Everything that's inside Containers is the children

export function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{/* 'Accordion returns Inner. Width of Inner is based on that, and then 	Item max-width: 676px '*/}
			<Accordion.Frame>
				{/* Frame gives border-bottom and holds all Items */}
				{faqsData.map((item) => (
					// Iterate of json array. For each item in Array Create Accordion.Item with key
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>
			<OptForm>
				<OptForm.Input placeholder="Email address" />
				<OptForm.Button>Try it now</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</OptForm.Text>
			</OptForm>
		</Accordion>
	);
}
