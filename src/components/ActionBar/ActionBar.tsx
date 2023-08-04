import { useDispatch } from "react-redux";
import { addNote } from '../../redux/notesSlice';

type Props = {
  openAddForm: (a:string, b?: string) => void;
  openArchive: (a:string, b?: string) => void;
}


const ActionBar: React.FC<Props> = ({openAddForm, openArchive}) => {
  
  return (
    <div>
      <button type='button' onClick={()=> openAddForm('add')}>Add Note</button>
      <button type='button'>Show archive</button>
    </div>
  );
};

export default ActionBar;
