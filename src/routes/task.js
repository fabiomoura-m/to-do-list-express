const express = require('express');
const checklistDependentRouter = express.Router();

const Checklist = require('../models/checklist');
const Task = require('../models/task');

checklistDependentRouter.get('/:id/tasks/new', async (req, res) => {
    const id = req.params.id;
    try {
        let task = new Task();
        res.status(200).render('tasks/new', { checklistId: id, task: task });
    } catch (error) {
        res.status(422).render('pages/error', {
            errors: 'Erro ao carregar o formulário'
        });
    }
});

checklistDependentRouter.post('/:id/tasks', async (req, res) => {
    let { name } = req.body.task;
    const id = req.params.id;
    let task = new Task({ name, checklist: id });

    try {
        await task.save();
        let checklist = await Checklist.findById(id);
        checklist.tasks.push(task);
        await checklist.save();
        res.redirect(`/checklists/${id}`)
    } catch (error) {
        let errors = error.errors;
        res.status(422).render('tasks/new', {
            task: { ...task, errors },
            checklistId: id
        });
    }
});

module.exports = { checklistDependent: checklistDependentRouter };
