import { useState } from 'react';
import ActionBar from '../components/ActionBar/ActionBar';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import NoteTable from '../components/NoteTable/NoteTable';
import StatisticTable from '../components/StatisticTable/StatisticTable';
import { useToggle } from '../hooks/useToggle';
import NoteForm from '../components/NoteForm/NoteForm';

const NoteView: React.FC = () => {
  const [modalContent, setModalContent] = useState(<></>);
  const {
    isOpen: isOpenModal,
    open: openModal,
    close: closeModal,
  } = useToggle();

  const handleOpenModal = (type: string, noteId?: string) => {
    switch (type) {
      case 'add': {
        setModalContent(<NoteForm onClose={closeModal} />);
        openModal();
        return;
      }

      case 'archive': {
        setModalContent(<NoteForm onClose={closeModal} />);
        openModal();
        return;
      }
      default:
        return setModalContent(
          <div>
            <h2>Def</h2>
          </div>
        );
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {isOpenModal && <ModalWindow>{modalContent}</ModalWindow>}
      <NoteTable />
      <ActionBar openAddForm={handleOpenModal} openArchive={handleOpenModal} />
      <StatisticTable />
    </div>
  );
};

export default NoteView;
