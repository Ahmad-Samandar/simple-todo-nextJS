import { ITask } from "../../../types/task"
import Task from './Task'

interface TodoListPros {
    tasks: ITask[]
}

const ToDoList: React.FC<TodoListPros> = ( { tasks } ) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th> Tasks </th>
        <th> Actions </th>
      </tr>
    </thead>
    <tbody>
        {tasks.map((task) => (
            <Task key = {task.id } task = {task} />
        ))}
      
    </tbody>
  </table>
</div>
  )
}

export default ToDoList