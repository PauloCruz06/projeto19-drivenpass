import { Router } from "express";

import { validateSchema } from "../middlewares/validateSchema.js";
import noteSchema from "../schemas/noteSchema.js";
import validateIdSchema from "../schemas/validateIdSchema.js";
import tokenValidation from "../middlewares/tokenValidation.js";
import {
    registerNote,
    showUserNotes,
    showNotesbyId,
    deleteNote,
} from "../controller/noteController.js";

const noteRouter = Router();

noteRouter.post(
    "/register/notes",
    validateSchema(noteSchema),
    tokenValidation,
    registerNote
);
noteRouter.get(
    "/notes",
    tokenValidation,
    showUserNotes
)
noteRouter.get(
    "/notes/:id",
    validateSchema(validateIdSchema),
    tokenValidation,
    showNotesbyId
)
noteRouter.delete(
    "/remove/notes/:id",
    validateSchema(validateIdSchema),
    tokenValidation,
    deleteNote
)

export default noteRouter;