import { Note } from './types';

const SESSION = 'my-session';

export async function getNotes(): Promise<Note[]> {
  const res = await fetch(`https://challenge.surfe.com/${SESSION}/notes`);

  return res.json();
}

export async function getNote(id: number): Promise<Note> {
  const res = await fetch(`https://challenge.surfe.com/${SESSION}/notes/${id}`);

  return res.json();
}

export async function createNote(body: string): Promise<Note> {
  const res = await fetch(
    `https://challenge.surfe.com/${SESSION}/notes`,
    { method: 'POST', body: JSON.stringify({ body }), headers: { 'Content-type': 'application/json' } }
  );

  return res.json();
}

export async function saveNote({ id, body }: Note): Promise<Note> {
  const res = await fetch(
    `https://challenge.surfe.com/${SESSION}/notes/${id}`,
    { method: 'PUT', body: JSON.stringify({ body }), headers: { 'Content-type': 'application/json' } }
  );

  return res.json();
}
