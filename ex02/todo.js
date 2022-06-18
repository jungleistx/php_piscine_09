if (document.cookie && document.cookie != '') {
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var mainDiv = document.getElementById('ft_list');
		var firstNode = mainDiv.firstChild;

		var tasks = cookies[i].split("=");
		var newNode = document.createElement('div');
		newNode.setAttribute("id", tasks[0].trim());
		newNode.setAttribute("onclick", "rmTask('" + tasks[0].trim() + "')");
		var addNode = document.createTextNode(decodeURIComponent(tasks[1]));
		newNode.appendChild(addNode);

		mainDiv.insertBefore(newNode, firstNode);
	}
}

function delcookie(name) {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/";
}

function setcookie(name, value, creation, days) {
	const day = new Date();
	day.setTime(creation + (days * 24 * 60 * 60 * 1000));
	var expire = "Expires=" + day.toUTCString();
	document.cookie = name + "=" + encodeURIComponent(value) + ";" + expire + ";Path=/;";
}

function addTask() {
	let input = prompt("Add new to-do task:");
	if (input != null && input.trim() != "")
	{
		var task = input.trim();
		var maindiv = document.getElementById('ft_list');
		var firstNode = maindiv.firstChild;
		var bday = new Date().getTime();

		var newTask = document.createElement("div");
		newTask.setAttribute("id", "task" + bday);
		newTask.setAttribute("onclick", "rmTask('task" + bday + "')");

		var createtask = document.createTextNode(task);
		newTask.appendChild(createtask);

		setcookie("task" + bday, task, bday, 30);

		maindiv.insertBefore(newTask, firstNode);
	}
}

function rmTask(id) {
	if (confirm("Delete this task?"))
	{
		var mainDiv = document.getElementById('ft_list');
		var rmTask = document.getElementById(id);
		mainDiv.removeChild(rmTask);
		delcookie(id);
	}
}