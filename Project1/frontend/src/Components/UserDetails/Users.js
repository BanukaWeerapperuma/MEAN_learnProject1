import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import User from "../User/User";
import "./users.css";
import jsPDF from "jspdf";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { users: [] };
  }
};

function Users() {
  const [users, setUsers] = useState([]);
  const componentsRef = useRef(); // Ref for the content to print

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log("Fetched users:", data.users);
      setUsers(data.users || []);
    });
  }, []);

  // Function to generate a PDF with all user details
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.setTextColor(33, 150, 243); // Blue color
    doc.text("User List", 20, 20);

    // Background color for the title
    doc.setFillColor(33, 150, 243);
    doc.rect(10, 10, 200, 10, "F");

    // Content: Add details for each user (Name, Email, etc.)
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Black color for text

    let yPosition = 30; // Starting y position for text

    // Iterate over the users and display all details
    users.forEach((user, index) => {
      doc.text(`User #${index + 1}:`, 20, yPosition);
      yPosition += 6;
      doc.text(`Name: ${user.name}`, 20, yPosition);
      yPosition += 6;
      doc.text(`Email: ${user.email}`, 20, yPosition);
      yPosition += 6;
      doc.text(`Age: ${user.age}`, 20, yPosition);
      yPosition += 6;
      // Add more user details (assuming the user object contains these fields)
      if (user.address) {
        doc.text(`Address: ${user.address}`, 20, yPosition);
        yPosition += 6;
      }
      if (user.phone) {
        doc.text(`Phone: ${user.phone}`, 20, yPosition);
        yPosition += 6;
      }
      if (user.role) {
        doc.text(`Role: ${user.role}`, 20, yPosition);
        yPosition += 6;
      }
      if (user.dateJoined) {
        doc.text(`Date Joined: ${user.dateJoined}`, 20, yPosition);
        yPosition += 6;
      }

      // Add a space between users
      yPosition += 6;
    });

    // Border for the PDF
    doc.setDrawColor(0, 0, 0); // Black border color
    doc.rect(10, 10, 200, yPosition + 10); // Border around the page

    // Save the generated PDF
    doc.save("user-list.pdf");
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler()
      .then((data) => {
        const usersData = data.users || []; // Ensure `data.users` is a valid array
        const filteredUsers = usersData.filter((user) =>
          Object.values(user).some((field) =>
            field.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setUsers(filteredUsers);
        setNoResults(filteredUsers.length === 0);
      })
      .catch((error) => {
        console.error("Error during search:", error);
        setUsers([]); // Reset users on error
        setNoResults(true); // Indicate no results
      });
  };

  const handleSendReport = () => {
    //Create the whatsapp Chat URL
    const phoneNumber = "94762048462";
    const message = `selected User Reports`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    //Open the URL in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="Users">
      <h1>User Details Display Page</h1>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a user"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Conditional rendering for no results */}
      {noResults ? (
        <div>
          <p>No users found matching the search query.</p>
        </div>
      ) : (
        <div ref={componentsRef} className="user-list">
          {users.length > 0 ? (
            users.map((user, i) => <User key={i} user={user} />)
          ) : (
            <p>No users found!</p>
          )}
        </div>
      )}

      {/* Button to trigger PDF generation */}
      <button className="print-button" onClick={generatePDF}>
        Generate Colorful PDF
      </button>
      <button className="print-button" onClick={handleSendReport}>
        Send Whatsapp
      </button>
    </div>
  );
}

export default Users;
