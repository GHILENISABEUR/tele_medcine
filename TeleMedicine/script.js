// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active'); 
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Example data (replace with your actual data fetching logic)
  
  const consultations = [
    { id: 1, date: '2023-05-02', time: '11:00 AM', provider: 'Dr. Sarah Lee' },
    // ... more consultations
  ];
  
  const records = [
    { id: 1, date: '2023-04-15', type: 'Lab Report', provider: 'Dr. John Doe' },
    // ... more records
  ];
  
  const messages = [
    // Example message data
    { sender: 'user', content: 'Hello, Dr. Smith!' },
    { sender: 'doctor', content: 'Hi there! How can I help you today?' },
  ];
  
  // Function to display appointments 
  function displayAppointments() {
    const container = document.getElementById('appointments-container');
    container.innerHTML = ''; 
  
    [
          { id: 1, date: '2023-05-01', time: '10:00 AM', provider: 'Dr. John Doe' },
          // ... more appointments
      ].forEach(appointment => {
      const element = document.createElement('div');
      element.classList.add('appointment');
      element.innerHTML = `
        <h3>Appointment</h3>
        <p>Date: ${appointment.date}</p>
        <p>Time: ${appointment.time}</p>
        <p>Provider: ${appointment.provider}</p>
        <button class="btn">Join</button>
      `;
      container.appendChild(element);
    });
  }
  
  // Function to display consultations (similar to appointments)
  function displayConsultations() {
    const container = document.getElementById('consultations-container');
    container.innerHTML = ''; 
  
    consultations.forEach(consultation => {
      const element = document.createElement('div');
      element.classList.add('consultation');
      element.innerHTML = `
        <h3>Consultation</h3>
        <p>Date: ${consultation.date}</p>
        <p>Time: ${consultation.time}</p>
        <p>Provider: ${consultation.provider}</p>
        <button class="btn">Start</button> 
      `;
      container.appendChild(element);
    });
  }
  
  // Function to display medical records (similar to appointments)
  function displayRecords() {
    const container = document.getElementById('records-container');
    container.innerHTML = ''; 
  
    records.forEach(record => {
      const element = document.createElement('div');
      element.classList.add('record');
      element.innerHTML = `
        <h3>${record.type}</h3>
        <p>Date: ${record.date}</p>
        <p>Provider: ${record.provider}</p>
        <button class="btn">View</button> 
      `;
      container.appendChild(element);
    });
  }
  
  // Function to display messages
  function displayMessages() {
    const container = document.getElementById('messages-container');
    container.innerHTML = ''; 
  
    messages.forEach(message => {
      const element = document.createElement('div');
      element.classList.add('message', message.sender);
      element.textContent = message.content;
      container.appendChild(element);
    });
  
    // Scroll to the bottom to show the latest message
    container.scrollTop = container.scrollHeight;
  }
  
  // Function to send a message 
  function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageContent = messageInput.value.trim();
  
    if (messageContent !== '') {
      messages.push({ sender: 'user', content: messageContent });
      displayMessages();
      messageInput.value = ''; // Clear the input field
  
      // Simulate a response from the doctor (replace with actual logic)
      setTimeout(() => {
        messages.push({ sender: 'doctor', content: 'Thank you for your message. I will get back to you shortly.' });
        displayMessages();
      }, 1000); 
    }
  }
  
  // Ensure script is executed after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Display initial content
    displayAppointments();
    displayMessages(); 
  
    // Event listeners for buttons
    document.getElementById('book-appointment-btn').addEventListener('click', () => {
      // Implement appointment booking logic here
      alert('Booking appointment functionality will be implemented here.');
    });
  
    document.getElementById('upload-record-btn').addEventListener('click', () => {
      // Trigger file input click
      document.getElementById('upload-record-input').click();
    });
  
    document.getElementById('upload-record-input').addEventListener('change', (event) => {
      // Implement file upload logic here
      const file = event.target.files[0];
      alert(`File selected: ${file.name}`); // Placeholder 
    });
  
    document.getElementById('send-message-btn').addEventListener('click', sendMessage);
  
    document.getElementById('edit-profile-btn').addEventListener('click', () => {
      // Implement profile editing logic here
      alert('Profile editing functionality will be implemented here.');
    });
  
    document.getElementById('logout-btn').addEventListener('click', () => {
      // Implement logout logic here
      alert('Logout functionality will be implemented here.');
    });
  });// Existing functions remain the same

// Example functions for new functionalities (replace with your actual implementation)
document.getElementById('book-appointment-btn').addEventListener('click', () => {
    // Implement appointment booking logic here
    // e.g., display a form for selecting date, time, and doctor
  });
  
  document.getElementById('upload-record-btn').addEventListener('click', () => {
    // Implement file upload logic here
    // e.g., open a file selection dialog and handle file upload
  });
  
  document.getElementById('send-message-btn').addEventListener('click', () => {
    // Implement message sending logic here
    // e.g., get message content from textarea, send to server/API
  });
  
  document.getElementById('edit-profile-btn').addEventListener('click', () => {
    // Implement profile editing logic here
    // e.g., display a form for editing profile information
  });
  
  document.getElementById('logout-btn').addEventListener('click', () => {
    // Implement logout logic here
    // e.g., clear user session and redirect to login page
  });
// Show appointments
// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active'); 
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Example data (replace with your actual data fetching logic)
  const appointments = [
    { id: 1, date: '2023-05-01', time: '10:00 AM', provider: 'Dr. John Doe' },
    // ... more appointments
  ];
  

  
  // Function to display appointments 
  function displayAppointments() {
    const container = document.getElementById('appointments-container');
    container.innerHTML = ''; // Clear previous content
  
    [
          { id: 1, date: '2023-05-01', time: '10:00 AM', provider: 'Dr. John Doe' },
          // ... more appointments
      ].forEach(appointment => {
      const element = document.createElement('div');
      element.classList.add('appointment');
      element.innerHTML = `
        <h3>Appointment</h3>
        <p>Date: ${appointment.date}</p>
        <p>Time: ${appointment.time}</p>
        <p>Provider: ${appointment.provider}</p>
        <button class="btn">Join</button>
      `;
      container.appendChild(element);
    });
  }
  
  // Function to display consultations (similar to appointments)
  function displayConsultations() {
    // ... implementation
  }
  
  // Function to display medical records (similar to appointments)
  function displayRecords() {
    // ... implementation
  }
  
  // Initial display of appointments
  displayAppointments();
function showAppointments() {
    // Fetch and display appointments data
    const appointmentsContainer = document.getElementById('appointments-container');
    appointmentsContainer.innerHTML = '';
  
    // Example appointments data
    const appointments = [
      { id: 1, date: '2023-05-01', time: '10:00 AM', provider: 'Dr. John Doe' },
      { id: 2, date: '2023-05-03', time: '2:30 PM', provider: 'Dr. Jane Smith' },
      { id: 3, date: '2023-05-05', time: '9:00 AM', provider: 'Dr. Michael Johnson' }
    ];
  
    appointments.forEach(appointment => {
      const appointmentElement = document.createElement('div');
      appointmentElement.classList.add('appointment');
  
      const dateTimeElement = document.createElement('div');
      dateTimeElement.innerHTML = `<h3>Appointment</h3><p>${appointment.date} - ${appointment.time}</p>`;
  
      const providerElement = document.createElement('div');
      providerElement.innerHTML = `<h3>Provider</h3><p>${appointment.provider}</p>`;
  
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('btn');
      buttonElement.textContent = 'Join';
  
      appointmentElement.appendChild(dateTimeElement);
      appointmentElement.appendChild(providerElement);
      appointmentElement.appendChild(buttonElement);
  
      appointmentsContainer.appendChild(appointmentElement);
    });
  
    // Hide other containers
    document.getElementById('consultations-container').classList.add('hidden');
    document.getElementById('records-container').classList.add('hidden');
  }
  
  // Show consultations
  function showConsultations() {
    // Fetch and display consultations data
    const consultationsContainer = document.getElementById('consultations-container');
    consultationsContainer.innerHTML = '';
  
    // Example consultations data
    const consultations = [
      { id: 1, date: '2023-05-02', time: '11:00 AM', provider: 'Dr. Sarah Lee' },
      { id: 2, date: '2023-05-04', time: '3:45 PM', provider: 'Dr. David Kim' },
      { id: 3, date: '2023-05-06', time: '10:30 AM', provider: 'Dr. Emily Chen' }
    ];
  
    consultations.forEach(consultation => {
      const consultationElement = document.createElement('div');
      consultationElement.classList.add('consultation');
  
      const dateTimeElement = document.createElement('div');
      dateTimeElement.innerHTML = `<h3>Consultation</h3><p>${consultation.date} - ${consultation.time}</p>`;
  
      const providerElement = document.createElement('div');
      providerElement.innerHTML = `<h3>Provider</h3><p>${consultation.provider}</p>`;
  
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('btn');
      buttonElement.textContent = 'Join';
  
      consultationElement.appendChild(dateTimeElement);
      consultationElement.appendChild(providerElement);
      consultationElement.appendChild(buttonElement);
  
      consultationsContainer.appendChild(consultationElement);
    });
  
    // Hide other containers
    document.getElementById('appointments-container').classList.add('hidden');
    document.getElementById('records-container').classList.add('hidden');
  }
  
  // Show medical records
  function showRecords() {
    // Fetch and display medical records data
    const recordsContainer = document.getElementById('records-container');
    recordsContainer.innerHTML = '';
  
    // Example medical records data
    const records = [
      { id: 1, date: '2023-04-15', type: 'Lab Report', provider: 'Dr. John Doe' },
      { id: 2, date: '2023-03-20', type: 'Prescription', provider: 'Dr. Jane Smith' },
      { id: 3, date: '2023-02-10', type: 'X-Ray', provider: 'Dr. Michael Johnson' }
    ];
  
    records.forEach(record => {
      const recordElement = document.createElement('div');
      recordElement.classList.add('record');
  
      const infoElement = document.createElement('div');
      infoElement.innerHTML = `<h3>${record.type}</h3><p>${record.date} - ${record.provider}</p>`;
  
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('btn');
      buttonElement.textContent = 'View';
  
      recordElement.appendChild(infoElement);
      recordElement.appendChild(buttonElement);
  
      recordsContainer.appendChild(recordElement);
    });
  
    // Hide other containers
    document.getElementById('appointments-container').classList.add('hidden');
    document.getElementById('consultations-container').classList.add('hidden');
  }
  
  // Button listeners
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#"]').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default action of anchor tag
    });
  
    const appointmentsLink = document.getElementById('appointments-link');
    const consultationsLink = document.getElementById('consultations-link');
    const recordsLink = document.getElementById('records-link');
  
    appointmentsLink.addEventListener('click', showAppointments);
    consultationsLink.addEventListener('click', showConsultations);
    recordsLink.addEventListener('click', showRecords);
  });
  