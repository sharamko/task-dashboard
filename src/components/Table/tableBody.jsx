import { StatusLabel, TdTag } from './tableBody.styled';

const TableBody = ({ customers }) => {
  return (
    <tbody>
      {customers.map((user) => (
        <tr key={`${user.name}_key`}>
          {Object.values(user).map((value) => (
            <TdTag key={`${user.name}_${value}`} txtAlign={value}>
              {value === 'Active' || value === 'Inactive' ? (
                value === 'Active' ? (
                  <StatusLabel active="Active">{value}</StatusLabel>
                ) : (
                  <StatusLabel active="Inactive">{value}</StatusLabel>
                )
              ) : (
                value
              )}
            </TdTag>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
