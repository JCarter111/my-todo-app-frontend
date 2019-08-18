import moment from "moment"
function taskFilter (filters, tasks, today) {
    // object representing filter settings
    // array of tasks to filter
    // return filtered array of tasks
    return tasks
        .filter((task,i)=>{
            if (filters.outstandingTasksOnly){
                return task.completed === 0;
            }
            return true;
        })
        .filter((task,i)=>{
            if (filters.priorityTasksOnly){
                return task.priority === 1;
            }
            return true;
        })
        .filter((task, i) => {
            if (filters.overdueTasksOnly) {
                return (moment(task.dueDate).isBefore(moment(today),"day") 
                && task.completed === 0);
            } 
                return true;
            
        })
}
export default taskFilter;