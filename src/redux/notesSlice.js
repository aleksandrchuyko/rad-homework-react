import { createSlice, nanoid } from '@reduxjs/toolkit';
import { parseDates } from '../components/utils/parseDates';
import { getFormatedDate } from '../components/utils/getFormatedDate';

const notesInitialState = [
  {
    id: '0',
    createdAt: '1/5/2023',
    content: "It's time to return the books to the library",
    category: 'Random Thought',
    active: false,
    dates: [],
  },
  {
    id: '1',
    createdAt: '3/5/2023',
    content: "I need ketchup, it's time to go to the store",
    category: 'Task',
    active: true,
    dates: [],
  },
  {
    id: '2',
    createdAt: '16/5/2023',
    content: 'Who painted the fence?',
    category: 'Random Thought',
    active: true,
    dates: [],
  },
  {
    id: '3',
    createdAt: '1/6/2023',
    content: 'Sport - is life...',
    category: 'Idea',
    active: true,
    dates: [],
  },
  {
    id: '4',
    createdAt: '7/6/2023',
    content:
      "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    category: 'Task',
    active: true,
    dates: ['3/5/2021', '5/5/2021'],
  },
  {
    id: '5',
    createdAt: '21/6/2023',
    content: "Isn't it time to visit grandmother in the village?",
    category: 'Random Thought',
    active: true,
    dates: [],
  },
  {
    id: '6',
    createdAt: '22/6/2023',
    content: 'It would be wonderful to start my own business',
    category: 'Idea',
    active: true,
    dates: [],
  },
  {
    id: '7',
    createdAt: '10/7/2023',
    content: 'My smartphone needs an OS update. Maybe at 12/7/2023',
    category: 'Task',
    active: true,
    dates: ['12/7/2023'],
  },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesInitialState,
  reducers: {
    addNote: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(category, content) {
        return {
          payload: {
            createdAt: getFormatedDate(),
            category,
            content,
            id: nanoid(),
            active: true,
            dates: parseDates(),
          },
        };
      },
    },
    deleteNote(state, action) {
      const index = state.findIndex((note) => note.id === action.payload);
      state.splice(index, 1);
    },
    toggleArchived(state, action) {
      for (const note of state) {
        if (note.id === action.payload) {
          note.completed = !note.completed;
          break;
        }
      }
    },
  },
});

export const { addNote, deleteNote, toggleArchived } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
