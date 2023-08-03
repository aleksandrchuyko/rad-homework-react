import ActionBar from '../components/ActionBar/ActionBar';
import NoteTable from '../components/NoteTable/NoteTable';
import StatisticTable from '../components/StatisticTable/StatisticTable';

const NoteView: React.FC = () => {
  return (
    <div>
      <NoteTable />
      <ActionBar />
      <StatisticTable />
    </div>
  );
};

export default NoteView;
