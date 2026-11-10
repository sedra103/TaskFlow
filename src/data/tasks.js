const tasks = [
    {
        id: 1,
        title: "Develop Login Page",
        description: "Create a login page for the website",
        assignee: "Sedra",
        priority: "high",
        status: "pending",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "Fix Navigation Bug",
        description: "Fix the navigation menu issue",
        assignee: "Ahmed",
        priority: "medium",
        status: "in-progress",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        title: "Update User Profile",
        description: "Add new fields to the user profile page",
        assignee: "Mona",
        priority: "low",
        status: "completed",
        createdAt: new Date().toISOString()
    },
    {
        id: 4,
        title: "Write API Documentation",
        description: "Create comprehensive API documentation",
        assignee: "Ali",
        priority: "high",
        status: "pending",
        createdAt: new Date().toISOString()
    },
    {
        id: 5,
        title: "Implement Search Feature",
        description: "Add search functionality to the website",
        assignee: "Sara",
        priority: "medium",
        status: "in-progress",
        createdAt: new Date().toISOString()
    }
];

module.exports = tasks;