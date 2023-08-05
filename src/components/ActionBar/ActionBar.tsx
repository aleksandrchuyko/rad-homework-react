import css from './ActionBar.module.css';

type Props = {
  openAddForm: (a: string, b?: string) => void;
  openArchive: (a: string, b?: string) => void;
};

const ActionBar: React.FC<Props> = ({ openAddForm, openArchive }) => {
  return (
    <div className={css.mainButtonsBar}>
      <button type='button' onClick={() => openAddForm('add')}>
        Add Note
      </button>
      <button type='button' onClick={() => openAddForm('archive')}>
        Show archive
      </button>
    </div>
  );
};

export default ActionBar;
