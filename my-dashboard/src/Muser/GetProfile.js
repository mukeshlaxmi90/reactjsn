import React, { useState ,useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../AllCss/GetProfile.css';

const GetProfile = () => {
  // const data = [
  //   { id: 1, name: 'John Doe', age: 28, email: 'john@example.com', phone: '9876543210' },
  //   { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com', phone: '9123456780' },
  //   { id: 3, name: 'Anjali Mehta', age: 35, email: 'anjali@xyz.com', phone: '9988776655', status: 'Active' },
  //   { id: 4, name: 'Mukesh Kumar', age: 30, email: 'mukesh@example.com', phone: '9911223344', department: 'IT' }
  // ];
   const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
    // 📡 Fetch data from ASP.NET Core API
  useEffect(() => {
    const fetchData = async () => {
      debugger;
      try {
        const res = await fetch('https://localhost:7083/api/empDetails/showData', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        console.log("API Response:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // 🔍 Dynamic filter for all fields
  const filteredData = data.filter(item =>
    Object.values(item).some(
      val =>
        val &&
        val.toString().toLowerCase().includes(search.toLowerCase().trim())
    )
  );
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // 🔢 Dynamic column generation with safety check
  const dynamicColumns =
    data.length > 0
      ? Object.keys(data[0])
          .filter(key => key !== 'id') // Optionally skip 'id' in visible columns
          .map(key => ({
            name: key.toUpperCase(),
            selector: row => row[key],
            sortable: true,
          }))
      : [];
  // Prepend Serial Number column
  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
      width: '50px',
    },
    ...dynamicColumns,
  ];
  return (
    <div className="profile-table-container">
      <h2>Dynamic Profile Table</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search anything..."
          value={search}
          onChange={handleSearch}
        />
        {search && (
          <button onClick={() => setSearch('')} className="clear-btn">×</button>
        )}
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        responsive
        highlightOnHover
        striped
        className="styled-table"
        keyField="id" // ✅ ensure rows re-render correctly
      />
    </div>
  );
};

export default GetProfile;
