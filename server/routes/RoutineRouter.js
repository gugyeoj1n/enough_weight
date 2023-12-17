const express = require("express");
const router = express.Router();

const { createRoutine, readRoutine, updateRoutine, deleteRoutine } = require('../controllers/RoutineController')

router.post('/', createRoutine);

router.get('/:routineId', readRoutine);

router.patch('/:routineId', updateRoutine);

router.delete('/:routineId', deleteRoutine);

module.exports = router;