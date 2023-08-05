import { nanoid } from '@reduxjs/toolkit';


type Props = {
  cols: {
    column: string;
    title: string;
  }[];
  rows: {
    id: string;
    [key: string]: string | boolean | string[] | JSX.Element[];
  }[];
  children?: React.ReactNode;
};

const CustomTable: React.FC<Props> = ({ cols, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {cols.map((col) => (
            <th key={nanoid()}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={nanoid()}>
            {cols.map((col) => (
              <td key={nanoid()}>{row[col.column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
