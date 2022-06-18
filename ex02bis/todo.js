if (document.cookie && document.cookie != '') {
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {

		var tasks = cookies[i].split("=");
		var newNode = document.createElement('div');
		$(newNode).attr("id", tasks[0].trim());
		$(newNode).attr("onclick", "rmTask('" + tasks[0].trim() + "')");
		var addNode = document.createTextNode(decodeURIComponent(tasks[1]));
		newNode.appendChild(addNode);

		$("#ft_list").prepend(newNode);
	}
}

function addTask() {
	let input = prompt("Add new to-do task:")
	if (input != null && input.trim() != "")
	{
		var task = input.trim();
		const newItem = document.createElement("div");
		var bday = new Date().getTime();
		$("newItem").attr("id", "task" + bday);
		$("newItem").attr("onclick", "rmTask('task" + bday + "')");
		var createtask = document.createTextNode(task);
		newItem.appendChild(createtask);

		setcookie("task" + bday, task, bday, 30);

		$("#ft_list").prepend(newItem);
	}
}

function rmTask(id) {
	if (confirm("Delete this task?"))
	{
		$("#ft_list").remove(id);
		delcookie(id);
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
