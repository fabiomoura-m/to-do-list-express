const express = require('express');
const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
    try {
        const checklists = await Checklist.find({});
        res.status(200).render('checklists/index', {checklists: checklists});
    } catch (error) {
        res.status(200).render('pages/error', {error: 'Erro ao exibir as Listas de tarefas'});
    }
});

router.post('/', async (req, res) => {
    let { name } = req.body;

    try {
        let checklists = await Checklist.create({ name });
        res.status(200).json(checklists);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const checklist = await Checklist.findById(id);
        res.status(200).render('checklists/show', {checklist: checklist});
    } catch (error) {
        res.status(500).render('pages/error', {error: 'Erro ao exibir as Listas de tarefas'});
    }
});

router.put('/:id', async (req, res) => {
    let { name } = req.body;
    const id = req.params.id;

    try {
        let checklist = await Checklist.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        let checklist = await Checklist.findByIdAndDelete(id)
        res.status(204).end()
    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;
