import { useSelector } from 'react-redux';
import CustomTable from '../CustomTable/CustomTable';
import { getNotes } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

const NoteTable: React.FC = () => {
  const cols = [
    { column: 'createdAt', title: 'Created At' },
    { column: 'category', title: 'Category' },
    { column: 'content', title: 'Content' },
    { column: 'dates', title: 'Dates' },
    { column: 'actions', title: 'Actions' },
  ];
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
        actions: [<button key={nanoid()}>Delete</button>],
      },
    ]);
  }, []);
  return <CustomTable cols={cols} rows={notesMarkupList} />;
};

export default NoteTable;
