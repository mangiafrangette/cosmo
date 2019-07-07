function handleConceptClick(concept){
	/* Clean up all highlighted elements */
	document.querySelectorAll(`.highlight`).forEach(node => {
  		node.classList.remove('highlight');
	})

	/* Select all elements to highlight, which are the ones that have the specified value of the "property" attribute */
	let nodes = document.querySelectorAll(`[property="${concept}"]`)

	/* Higlhlight all selected elements */
	nodes.forEach(node => {
		node.classList.add('highlight')
	})
}

/* Select all buttons that have a conceptButton class */
document.querySelectorAll(".conceptButton").forEach(button => {
	/* Add click listener to the buttons, and call the function to handle the click passing the button's value of the "data-concept" attribute */
	button.addEventListener("mouseover", event => {
		handleConceptClick(event.target.getAttribute("data-concept"))
	})
})