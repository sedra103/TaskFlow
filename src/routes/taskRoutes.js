const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks'); 
const ApiError = require('../utils/ApiError');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'TaskFlow API',
    success: true,
    data: tasks
  });
});

// Get a specific task by ID
router.get('/:id', (req, res, next) => {
    try {
  const taskId = parseInt(req.params.id);
  if (isNaN(taskId)) {
    return res.status(400).json({
      message: 'Invalid task ID',
      success: false
    });
  }
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    throw new ApiError(`Task with ID ${taskId} not found`, 404);
  }
  res.status(200).json({
    message: 'Task found',
    success: true,
    data: task
  });
}catch (error) {
    next(error);
}
});

router.post('/', (req, res, next) => {
    const { title, description, assignee, priority = 'medium', status = 'pending' } = req.body;
     if (!title || !description || !assignee) {
        return res.status(400).json({
            success: false,
            message: 'Title, description, and assignee are required'
        });
    }

    const newTask = {
        id: tasks.length + 1,
        title: title.trim(),
        description: description.trim(),
        assignee: assignee.trim(),
        priority,
        status,
        createdAt: new Date().toISOString()
    };
    tasks.push(newTask);
    res.status(201).json({
        message: 'Task created successfully',
        success: true,
        data: newTask
    });
});

// Update a specific task by ID
router.put('/:id', (req, res, next) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({
            message: `Task with ID ${taskId} not found`,
            success: false
        });
    }
    
    tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...req.body,
        id: tasks[taskIndex].id, // Ensure the ID remains unchanged 
        createdAt: tasks[taskIndex].createdAt // Ensure the createdAt remains unchanged
    };
    res.status(200).json({
        message: 'Task updated successfully',
        success: true,
        data: tasks[taskIndex]
    });
});

// Delete a specific task by ID
router.delete('/:id', (req, res, next) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({
            message: `Task with ID ${taskId} not found`,
            success: false
        });
    }

    tasks.splice(taskIndex, 1);
    res.status(200).json({
        message: 'Task deleted successfully',
        success: true
    });
});
module.exports = router;