// src/models/noteModel.js
import { z } from 'zod';

export const NoteSchema = z.object({
  title: z.string(),
  content: z.string(),
  createdAt: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format"
  })
});
