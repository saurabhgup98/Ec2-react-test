import { useState } from 'react';
import './css/Table.css';
import DeleteIcon from '../../assets/icons8-delete.svg';
import EditIcon from '../../assets/icons8-edit.svg';

const usersData = [
    { id: 1, firstName : 'John', lastName : 'Doe', email: 'johndoe@mail.com', status: 'completed' },
    { id: 2, firstName : 'John2', lastName : 'Doe', email: 'johndoe@mail.com', status: 'completed' },
    { id: 3, firstName : 'John3', lastName : 'Doe', email: 'johndoe@mail.com', status: 'completed' },
    { id: 4, firstName : 'John4', lastName : 'Doe', email: 'johndoe@mail.com', status: 'completed' },
    { id: 5, firstName : 'John5', lastName : 'Doe', email: 'johndoe@mail.com', status: 'completed' },
    { id: 6, firstName : 'John6', lastName : 'Doe', email: 'johndoe@mail.com', status: 'completed' },
    { id: 7, firstName : 'John7', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 8, firstName : 'John', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 9, firstName : 'John2', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 10, firstName : 'John3', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 11, firstName : 'John4', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 12, firstName : 'John5', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 13, firstName : 'John6', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 14, firstName : 'John7', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 15, firstName : 'John', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 16, firstName : 'John2', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 37, firstName : 'John3', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 48, firstName : 'John4', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 55, firstName : 'John5', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 66, firstName : 'John6', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 77, firstName : 'John7', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
    { id: 88, firstName : 'John', lastName : 'Doe', email: 'johndoe@mail.com', status: 'Active' },
  ];  

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const totalPages = Math.ceil(usersData.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = Math.min(startIndex + usersPerPage, usersData.length);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleDeleteClick = (userId: number) => {
    alert(`Edit the user with ID: ${userId}`);
  }  

  const handleEditClick = (userId: number) => {
    alert(`Edit the user with ID: ${userId}`);
  };

  const getPageNumbers = () => {
    const numButtons = 3;
    const pageNumbers = [];
    if (totalPages <= numButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= Math.ceil(numButtons / 2)) {
        for (let i = 1; i <= numButtons; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage > totalPages - Math.floor(numButtons / 2)) {
        for (let i = totalPages - numButtons + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - Math.floor(numButtons / 2); i <= currentPage + Math.floor(numButtons / 2); i++) {
          pageNumbers.push(i);
        }
      }
    }
    return pageNumbers;
  };

  return (
    <div className="table-container">
      <table className="users-table">
        <thead>
          <tr className='black-bg'>
            <th className='center-di'>Doctor ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Status</th>
            <th className='action-btn-header'>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.slice(startIndex, endIndex).map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? '' : 'gray-bg'}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td><div className='status-wrapper'>{user.status}</div></td>
              <td className='action-btns'>
                <button onClick={() => handleDeleteClick(user.id)}><img src={DeleteIcon} alt="Dele-Icon" /></button>
                <button onClick={() => handleEditClick(user.id)}><img src={EditIcon} alt="Edit-Icon" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  

      <div className="pagination">
        <span className='test'>
          {currentPage * usersPerPage - (usersPerPage - 1)}-{Math.min(currentPage * usersPerPage, usersData.length)} of {usersData.length} items
        </span>
        <div className="pagination-buttons">
          <button className="pagination-button" onClick={handlePreviousPage} disabled={currentPage === 1}>-</button>
            {getPageNumbers().map((page) => (
            <button
              key={page}
              className={currentPage === page ? "pagination-button active" : "pagination-button"}
              onClick={() => setCurrentPage(page)}>
                {page}
            </button>
            ))}
            <button className="pagination-button" onClick={handleNextPage} disabled={currentPage === totalPages}>+</button>
          </div>
      </div>

    </div>
  );
};

export default UsersTable;
