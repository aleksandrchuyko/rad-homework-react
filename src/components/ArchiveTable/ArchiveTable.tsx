import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';

import { getNotes } from '../../redux/selectors';
import { deleteNote, toggleArchived } from '../../redux/notesSlice';

import css from './ArchiveTable.module.css';
import CustomTable from '../CustomTable/CustomTable';

type Props = {
  onClose: () => void;
};

const ArchiveTable: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();
  const cols = [
    { column: 'createdAt', title: 'Created At' },
    { column: 'category', title: 'Category' },
    { column: 'content', title: 'Content' },
    { column: 'actions', title: 'Actions' },
  ];

  const unarchiveNote = (e: any) => {
    let id = e.target.dataset.id;
    dispatch(toggleArchived(id));
  };
  const removeNote = (e: any) => {
    let id = e.target.dataset.id;
    dispatch(deleteNote(id));
  };

  let notes = useSelector(getNotes);
  let archiveMarkupList = notes.reduce((acc: any[], note: any) => {
    if (note.active === true) {
      return acc;
    }
    return (acc = [
      ...acc,
      {
        ...note,
        actions: [
          <button key={nanoid()} data-id={note.id} onClick={unarchiveNote}>
            Unarchive
          </button>,
          <button key={nanoid()} data-id={note.id} onClick={removeNote}>
            Delete
          </button>,
        ],
      },
    ]);
  }, []);
  return (
    <div className={css.modalArchive}>
      <CustomTable cols={cols} rows={archiveMarkupList} />
      <button
        type='button'
        className={css.modalArchiveClose}
        onClick={() => onClose()}
      >
        Close Archive
      </button>
    </div>
  );
};

export default ArchiveTable;
