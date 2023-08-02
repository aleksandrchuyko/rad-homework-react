import CustomTable from '../CustomTable/CustomTable';
import { initialNotes } from '../../constants/initialNotes';

const NoteTable: React.FC = () => {
  const cols = [
    { column: 'createdAt', title: 'Created At' },
    { column: 'category', title: 'Category' },
    { column: 'content', title: 'Content' },
    { column: 'dates', title: 'Dates' },
    { column: 'actions', title: 'Actions' },
  ];
  let notesMarkupList = initialNotes.reduce((acc: any[], note) => {
    if (note.active !== true) {
      return acc;
    }
    return (acc = [
      ...acc,
      {
        ...note,
        actions: [<button>Delete</button>],
      },
    ]);
  }, []);
  return <CustomTable cols={cols} rows={notesMarkupList}></CustomTable>;
};

export default NoteTable;
