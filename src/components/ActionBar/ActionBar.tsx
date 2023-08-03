import { useDispatch } from "react-redux";
import { addNote } from '../../redux/notesSlice';

const ActionBar: React.FC = () => {
  return (
    <div>
      <button type='button'>Add Note</button>
      <button type='button'>Show archive</button>
    </div>
  );
};

export default ActionBar;
