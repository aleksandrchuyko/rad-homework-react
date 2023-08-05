import { useState } from 'react';
import ActionBar from '../components/ActionBar/ActionBar';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import NoteTable from '../components/NoteTable/NoteTable';
import StatisticTable from '../components/StatisticTable/StatisticTable';
import { useToggle } from '../hooks/useToggle';
import NoteForm from '../components/NoteForm/NoteForm';
import ArchiveTable from '../components/ArchiveTable/ArchiveTable';
import EditForm from '../components/EditForm/EditForm';

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

      case 'edit': {
        setModalContent(<EditForm onClose={closeModal} id={noteId} />);
        openModal();
        return;
      }

      case 'archive': {
        setModalContent(<ArchiveTable onClose={closeModal} />);
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
      <NoteTable openEditForm={handleOpenModal} />
      <ActionBar openAddForm={handleOpenModal} openArchive={handleOpenModal} />
      <StatisticTable />
    </div>
  );
};

export default NoteView;
