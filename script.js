const todoInp = document.querySelector('#todo-item');
const addBtn  = document.querySelector('#add-todo-btn');
const todoContainer = document.querySelector('.list');

todoContainer.addEventListener('',()=>{
	console.log('clicked!');
});

// functions
const loadTODOS = ()=>{
	let getLocalStorage = localStorage.getItem('todos');
	if(getLocalStorage === null || getLocalStorage === undefined){
		todos = [];
	}else{
		todos = JSON.parse(getLocalStorage);
	}
	return todos;
}

const addDOM = (list)=>{
	let newLi = '';
	list.forEach((item,index)=>{
		newLi += `
				<li>
					<span class="todo-text">${item}</span>
					<button class="delete-btn" onClick="deleteMe(${index})">Delete</button>
				</li>
			`;
	});
	todoContainer.innerHTML = newLi;
}

const loadTODOSandAddToDOM = ()=>{
	const tods = loadTODOS();
	addDOM(tods);
}

const deleteMe = (index)=>{
	let toods = loadTODOS();
	toods.splice(index,1);
	localStorage.setItem('todos',JSON.stringify(toods));
	loadTODOSandAddToDOM();
}
// load todos and add them to dom on loading the page!
loadTODOSandAddToDOM();

// add a todo!
addBtn.addEventListener('click',e=>{
	e.preventDefault();
	let tds = loadTODOS();
	let todo = todoInp.value;
	if(todo.trim() !== 0) {
		tds.push(todo);	
		localStorage.setItem('todos',JSON.stringify(tds));
		loadTODOSandAddToDOM();
		todoInp.value = '';
	}
});

// // delete a todo!
// let deleteBtns = document.querySelectorAll('.delete-btn');

// deleteBtns.forEach((btn,index) => {
// 	btn.addEventListener('click',e=>{
// 		e.preventDefault();
// 		deleteMe(index);	
// 	});
// });
