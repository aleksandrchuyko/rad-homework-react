import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';

import { getNotes } from '../../redux/selectors';
import { deleteNote, toggleArchived } from '../../redux/notesSlice';

import CustomTable from '../CustomTable/CustomTable';

type Props = {
  openEditForm: (a: string, b?: string) => void;
};

const NoteTable: React.FC<Props> = ({openEditForm}) => {
  const dispatch = useDispatch();
  const cols = [
    { column: 'createdAt', title: 'Created At' },
    { column: 'category', title: 'Category' },
    { column: 'content', title: 'Content' },
    { column: 'dates', title: 'Dates' },
    { column: 'actions', title: 'Actions' },
  ];


  const editNote = (e: any) => {
    let id = e.target.dataset.id;
    openEditForm('edit', id);
  };
  const archiveNote = (e: any) => {
    let id = e.target.dataset.id;
    dispatch(toggleArchived(id));
  };
  const removeNote = (e: any) => {
    let id = e.target.dataset.id;
    dispatch(deleteNote(id));
  };

  let notes = useSelector(getNotes);
  let notesMarkupList = notes.reduce((acc: any[], note: any) => {
    if (note.active !== true) {
      return acc;
    }
    return (acc = [
      ...acc,
      {
        ...note,
        dates: note.dates.toString(),
        actions: [
          <button key={nanoid()} data-id={note.id} onClick={editNote}>
            Edit
          </button>,
          <button key={nanoid()} data-id={note.id} onClick={archiveNote}>
            Archive
          </button>,
          <button key={nanoid()} data-id={note.id} onClick={removeNote}>
            Delete
          </button>,
        ],
      },
    ]);
  }, []);
  return <CustomTable cols={cols} rows={notesMarkupList} />;
};

export default NoteTable;
