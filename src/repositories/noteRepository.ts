import { prisma } from "../config/database.js";
import { noteData } from "../types/noteType";

export async function findNotesByUserId(userId: number) {
    const result = await prisma.notes.findMany({
        where: { userId },
    });
    return result;
}

export async function findNoteById(noteId: number) {
    const result = await prisma.notes.findUnique({
        where: {id: noteId},
    });
    return result;
}

export async function insertNote(note: noteData) {
    await prisma.notes.create({ data: note });
}

export async function removeNote(noteId: number) {
    const result = await prisma.notes.delete({
        where: { id: noteId },
    });
    return result;
}