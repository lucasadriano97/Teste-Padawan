async function loadIntoTable(url, table){
	const tableHead = table.querySelector('thead');
	const tableBody = table.querySelector('tbody');
	const response = await fetch(url);
	const { id, title} = await response.json();
	
	console.log(id,data);
}
fetch ('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json());
  .then loadIntoTable(("https://jsonplaceholder.typicode.com/posts/", document.querySelector('pTable'));