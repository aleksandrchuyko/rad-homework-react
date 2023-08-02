type Props = {
  cols: {
    column: string;
    title: string;
  }[];
  rows: {
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
            <th>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {cols.map((col) => (
              <td>{row[col.column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
