import React, { useState,useEffect  } from 'react';
import '../AllCss/UserForm.css'; 

const ViewProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
     dob: '' 
  });
  const [genderOptions, setGenderOptions] = useState([]);

    useEffect(() => {
      debugger;
    // ✅ Fetch gender dropdown data
     fetch("https://localhost:7083/api/empDetails/drodownbind")
      .then(res => res.json())
      .then(data => {
        setGenderOptions(data);
      })
      .catch(err => {
        console.error("Error fetching gender data:", err);
      });
  }, []);

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
     if (name === "dob")
     {
       const today = new Date();
        const birthDate = new Date(value);
       let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
   setFormData({
    ...formData,
      dob: value,
      age: age >= 0 ? age : "" // negative age avoid
   })
     }else{
    setFormData(prev => ({ ...prev, [name]: value }));
     }
  };
  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      dob:''
    });
  };
  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7083/api/empDetails/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Data saved successfully!');
        resetForm();
      } else {
        alert('Failed to save data.');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error occurred while saving.');
    }
  };
  
  return (
  <form onSubmit={handleSubmit} className="user-form">
    <div style={{
    border: "2px solid #007bff",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "16px",
    backgroundColor: "#f9f9f9"
  }}>
    <h3 style={{ margin: 0, color: "#007bff", fontWeight: "bold" }}> Transition Form :-</h3>      
    </div>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>DOB</label>
          <input type="date" name="dob" value={formData.dob } onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} readOnly />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
              {genderOptions.map((item,idx)=>(
               <option key={idx} value={item.gender}>
                {item.gender}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
      </div>
        <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};


export default ViewProfileForm;
