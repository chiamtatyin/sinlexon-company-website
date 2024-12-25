import React from 'react';

    function Contact() {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            Feel free to reach out to us for any inquiries or project proposals.
          </p>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Main Street, Cityville, State
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> info@sinlexonconstruction.com
            </p>
          </div>
        </div>
      );
    }

    export default Contact;
