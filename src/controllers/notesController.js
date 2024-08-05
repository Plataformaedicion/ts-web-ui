// src/controllers/notesController.js
import prisma from '../utils/db';
import { NoteSchema } from '../models/noteModel';


export const getNotes = async () => {
  return await prisma.note.findMany();
};

export const createNote = async (note) => {
  NoteSchema.parse(note);

  // Convertir la fecha al formato ISO
  const createdAt = new Date(note.createdAt).toISOString();

  return await prisma.note.create({
    data: {
      title: note.title,
      content: note.content,
      createdAt
    }
  });
};

export const updateNote = async (id, content) => {
  return await prisma.note.update({
    where: { id: parseInt(id) },
    data: { content }
  });
};

export const deleteNote = async (id) => {
  return await prisma.note.delete({
    where: { id: parseInt(id) }
  });
};
