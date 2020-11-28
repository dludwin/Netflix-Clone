import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';

// Everything that's inside Containers is the children

export function FaqsContainer() {
	return (
		<Accordion>
			{' '}
			// Accordion returns Container that has Inner children Inner. The entire
			content is in the Inner
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame>
				{' '}
				// Map creates new array for each item of the faqsData
				{faqsData.map((item) => (
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
