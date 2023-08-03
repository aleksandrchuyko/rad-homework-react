import { useSelector } from 'react-redux';
import CustomTable from '../CustomTable/CustomTable';
import { getNotes } from '../../redux/selectors';

import { countCategories } from '../utils/countCategories';

const StatisticTable: React.FC = () => {
  let notes = useSelector(getNotes);
  let notesMarkupList = countCategories(notes);
  const cols = [
    { column: 'name', title: 'Category' },
    { column: 'active', title: 'Active' },
    { column: 'archived', title: 'Archived' },
  ];

  return <CustomTable cols={cols} rows={notesMarkupList} />;
};

export default StatisticTable;
