<script>
	import Todo from '$lib/Todo.svelte';
	import { writable } from 'svelte/store';

	let newTodo = '';
	let todos = writable([]);

	function addTodo() {
		if (newTodo.trim() !== '') {
			todos.update((items) => [...items, { id: Date.now(), text: newTodo.trim(), done: false }]);
			newTodo = '';
		}
	}
	
	function removeTodo(id) {
		todos.update((items) => items.filter((todo) => todo.id !== id));
	}

	function toggleDone(id) {
		todos.update((items) =>
			items.map((todo) => {
				if (todo.id === id) {
					todo.done = !todo.done;
				}
				return todo;
			})
		);
	}
</script>

<div class="drop-shadow-md">
	<!--  -->
	<div class="bg-white border-b-2 border-b-gray-200 holder-title">
		<h1 class="font-fnt-vazir-medium font-extrabold text-gray-600 text-center text-4xl tracking-tight">December</h1>
		<h2 class="font-fnt-vazir-medium font-extrabold text-clr-blue text-center mt-2 tracking-tighter">Tuesday, December 22</h2>
	</div>

	<!--  -->
	<div class="bg-white drop-shadow-md holder-todos">
		{#each $todos as todo}
			<Todo {todo} toggle={toggleDone} />
		{/each}
		<div class="pt-7 pb-5">
			<input
				type="text"
				bind:value={newTodo}
				placeholder="Add task"
				class="w-full border border-gray-300 cursor-text text-base pt-2 pb-3 px-2 text-gray-400 focus:outline-none focus:border-clr-blue focus:ring-1 focus:ring-clr-blue focus:ring-opacity-50 rounded-md"
				on:keydown={(e) => e.key === 'Enter' && addTodo()}
			/>
		</div>
	</div>

	<!--  -->
	<div class="text-center absolute inset-x-0 -m-4">
		<button type="button" class="bg-clr-green px-9 py-1 rounded-full text-white font-fnt-vazir-medium font-extrabold cursor-pointer" on:click={addTodo}>Add</button>
	</div>

</div>
