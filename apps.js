let taskTextBox = document.getElementById('taskName')
let addButton = document.getElementById('addButton')

let pendingTaskList = document.querySelector("#pendingTaskList")
let completedTaskList= document.querySelector("#completedTaskList")

let taskListitems = ''

function removeTask(remove) {
  console.log(remove)
  console.log(remove.parentElement)
  console.log("remove task")
}


function taskCompleted(complete) {

  if(complete.checked) {
    console.log("checked")
  } else {
    console.log("unchecked")
    }
    console.log("complete")
}


addButton.addEventListener('click', function(){
let title = taskTextBox.value
.push(title)
let taskListitem = items.map(function(items){
  return `
  <li>
  <input type= 'checkbox'/>
  <label>${title}</label>
  <button>Remove</button>
  </li>
  `
})

let items = `
<li>
<input type= 'checkbox'/>
<label>${title}</label>
<button>Remove</button>
</li>
`
taskListitems += items



pendingTaskList.innerHTML = taskListitems
console.log(taskListitems)
})
