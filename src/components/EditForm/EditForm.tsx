import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateNote } from '../../redux/notesSlice';
import css from './EditForm.module.css';
import { getNotes } from '../../redux/selectors';
import { parseDates } from '../utils/parseDates';

import { Note } from '../../types';
type Props = {
  id: string | undefined;
  onClose: () => void;
};

const EditForm: React.FC<Props> = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const [note, setNote] = useState<Note>({
    id: '',
    createdAt: '',
    content: '',
    category: 'Task',
    active: false,
    dates: [],
  });
  const [content, setContent] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let newNote = {
      ...note,
      content,
      dates: parseDates(content),
    };

    dispatch(updateNote(newNote));
    onClose();
  };

  const handleChange = (e: any) => {
    setContent(e.currentTarget.value);
  };

  let notes = useSelector(getNotes);
  useEffect(() => {
    let aimNote = notes.find((item: Note) => item.id === id);
    if (!aimNote) {
      aimNote = {
        id: '',
        createdAt: '',
        content: '',
        category: 'Task',
        active: false,
        dates: [],
      };
    }
    setNote(aimNote);
    setContent(aimNote?.content);
  }, [id, notes]);

  return (
    <div className={css.modalNew}>
      <form className={css.addForm} onSubmit={handleSubmit}>
        <label>
          Note
          <textarea
            name='content'
            rows={8}
            value={content}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type='submit'>Update</button>
        <button type='button' onClick={() => onClose()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
