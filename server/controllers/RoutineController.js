const routine = require('../models/Routine');

exports.createRoutine = async (req, res, next) => {
    try {
        const newRoutine = await routine.create({
            title: req.body.title,
            author: req.user.nickname,
            content: req.body.content,
            likes: req.body.likes,
        })
        res.json(newRoutine);
    } catch (error) {
        next(error)
;    }
}

exports.readRoutine = async (req, res, next) => {
    try {
        const routineId = req.params.routineId;
        const foundRoutine = await routine.findById(routineId);

        if (!foundRoutine) {
            return res.status(404).json({message: "Routine not found"});
        }

        res.status(200).json(foundRoutine);
    } catch (error) {
        next(error);
    }
}

exports.updateRoutine = async (req, res, next) => {
    try {
        const routineId = req.params.routineId;
        const updatedRoutine = await routine.findByIdAndUpdate(
            routineId,
            {
                title: req.body.title,
                content: req.body.content,
            },
            { new: true}
        );

        if (!updatedRoutine) {
            return res.status(404).json({ message: "Routine not found"})
        }

        res.status(200).json(updatedRoutine);
    } catch (error) {
        next(error);
    }
}

exports.deleteRoutine = async (req, res, next) => {
    try {
        const routineId = req.params.routineId;
        const deletedRoutine = await routine.findByIdAndDelete(routineId);

        if (!deletedRoutine) {
            return res.status(404).json({ message: "Routine not found"});
        }

        res.status(200).json({ message: 'routine deleted successfully' });
    } catch (error) {
        next(error);
    }
}
