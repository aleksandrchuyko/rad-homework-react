import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/notesSlice';
import css from './NoteForm.module.css';

type Props = {
  onClose: () => void;
};
const NoteForm: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState('Task');
  const [content, setContent] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    dispatch(addNote({category, content}));
    onClose();
  };

  const handleChange = (e: any) => {
    const currentInputName = e.currentTarget.name;
    switch (currentInputName) {
      case 'category':
        setCategory(e.currentTarget.value);
        break;
      case 'content':
        setContent(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={css.modalNew}>
      <form className={css.addForm} onSubmit={handleSubmit}>
        <label>
          Category
          <select name='category' value={category} onChange={handleChange}>
            <option value='Task'>Task</option>
            <option value='Idea'>Idea</option>
            <option value='Random Thought'>Random Thought</option>
          </select>
        </label>
        <label>
          Note
          <textarea
            name='content'
            rows={8}
            value={content}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type='submit'>Add note</button>
        <button type='button' onClick={() => onClose()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
