import React from 'react'
import "./FAQ.css"

function FAQ({ faq, index, toggleFAQ }) {
	return (
		<div data-testid='masterDiv' className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}>
			<div data-testid='questionDiv' className="faq-question">
				{faq.question}
			</div>
			<div data-testid='answerDiv' className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ