import taskFilter from "./taskFilter"
describe("taskFilter", () => {
    it("returns the same list of tasks when all filters are off",() =>{
        const inputTasks= [
            {
                completed: 0,
                description: "Task A",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 1,
                description: "Task B",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 0,
                description: "Task C",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            }
        ];
        const inputFilters = {
            outstandingTasksOnly: false,
            priorityTasksOnly: false,
            overdueTasksOnly: false
        }
        const outputTasks = taskFilter(inputFilters,inputTasks)
        expect(outputTasks).toEqual(inputTasks);
    })
    it("filters by completion",() =>{
        const inputTasks= [
            {
                completed: 0,
                description: "Task A",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 1,
                description: "Task B",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 0,
                description: "Task C",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            }
        ];
        const inputFilters = {
            outstandingTasksOnly: true,
            priorityTasksOnly: false,
            overdueTasksOnly: false
        }
        const expectedTasks= [
            {
                completed: 0,
                description: "Task A",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 0,
                description: "Task C",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            }
        ];
        const outputTasks = taskFilter(inputFilters,inputTasks)
        expect(outputTasks).toEqual(expectedTasks);
    })
    it("filters by priority",() =>{
        const inputTasks= [
            {
                completed: 0,
                description: "Task A",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 1,
                description: "Task B",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 0,
                description: "Task C",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 1,
            }
        ];
        const inputFilters = {
            outstandingTasksOnly: false,
            priorityTasksOnly: true,
            overdueTasksOnly: false
        }
        const expectedTasks= [
            
            {
                completed: 0,
                description: "Task C",
                dueDate: "2019-07-24T00:00:00.000Z",
                priority: 1,
            }
        ];
        const outputTasks = taskFilter(inputFilters,inputTasks)
        expect(outputTasks).toEqual(expectedTasks);
    })
    it("filters by due date",() =>{
        const inputTasks= [
            {
                completed: 0,
                description: "Task A",
                dueDate: "2019-05-01T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 0,
                description: "Task B",
                dueDate: "2019-07-01T00:00:00.000Z",
                priority: 0,
            },
            {
                completed: 0,
                description: "Task C",
                dueDate: "2019-08-01T00:00:00.000Z",
                priority: 1,
            }
        ];
        const inputFilters = {
            outstandingTasksOnly: false,
            priorityTasksOnly: false,
            overdueTasksOnly: true
        }
        const inputDate = "2019-06-01T00:00:00.000Z"
        const expectedTasks= [
            
            {
                completed: 0,
                description: "Task A",
                dueDate: "2019-05-01T00:00:00.000Z",
                priority: 0,
            }
        ];
        const outputTasks = taskFilter(inputFilters,inputTasks,inputDate)
        expect(outputTasks).toEqual(expectedTasks);
    })
})