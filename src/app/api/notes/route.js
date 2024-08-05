// app/api/notes/route.js
/*
import { NextResponse } from 'next/server';
let notes = [];

export async function GET() {
  return NextResponse.json(notes);
}

export async function POST(request) {
  const note = await request.json();
  notes.push(note);
  return NextResponse.json(note, { status: 201 });
}

export async function PUT(request) {
  const { id, content } = await request.json();
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes[index].content = content;
    return NextResponse.json(notes[index]);
  } else {
    return NextResponse.json({ message: 'Note not found' }, { status: 404 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  notes = notes.filter(note => note.id !== id);
  return NextResponse.json({ message: 'Note deleted' });
}
*/

// src/app/api/notes/route.js
import { NextResponse } from 'next/server';
import { getNotes, createNote, updateNote, deleteNote } from '../../../controllers/notesController';

export async function GET() {
  const notes = await getNotes();
  return NextResponse.json(notes);
}

export async function POST(request) {
  try {
    const note = await request.json();
    const newNote = await createNote(note);
    return NextResponse.json(newNote, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: e.errors || 'Invalid data' }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const { id, content } = await request.json();
    const updatedNote = await updateNote(id, content);
    return NextResponse.json(updatedNote);
  } catch (e) {
    return NextResponse.json({ message: e.message || 'Invalid data' }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const result = await deleteNote(id);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ message: e.message || 'Invalid data' }, { status: 400 });
  }
}
