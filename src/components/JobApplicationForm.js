import React, { useState } from "react";
import CryptoJS from "crypto-js";

export const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    coverLetter: null,
    references: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encrypt the sensitive data before sending it to the server
    const encryptedFormData = {
      name: CryptoJS.AES.encrypt(
        formData.name,
        process.env.REACT_APP_SECRET_KEY
      ).toString(),
      email: CryptoJS.AES.encrypt(
        formData.email,
        process.env.REACT_APP_SECRET_KEY
      ).toString(),
      phone: CryptoJS.AES.encrypt(
        formData.phone,
        process.env.REACT_APP_SECRET_KEY
      ).toString(),
      address: CryptoJS.AES.encrypt(
        formData.address,
        process.env.REACT_APP_SECRET_KEY
      ).toString(),
      references: CryptoJS.AES.encrypt(
        formData.references,
        process.env.REACT_APP_SECRET_KEY
      ).toString(),
    };

    // Send the encrypted data to the server
    // TODO: Implement server-side decryption of the data
    console.log("Encrypted form data:", encryptedFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />

      <label htmlFor="address">Address</label>
      <textarea
        id="address"
        name="address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      ></textarea>

      <label htmlFor="resume">Resume</label>
      <input
        type="file"
        id="resume"
        name="resume"
        onChange={(e) =>
          setFormData({ ...formData, resume: e.target.files[0] })
        }
      />

      <label htmlFor="coverLetter">Cover Letter</label>
      <input
        type="file"
        id="coverLetter"
        name="coverLetter"
        onChange={(e) =>
          setFormData({ ...formData, coverLetter: e.target.files[0] })
        }
      />

      <label htmlFor="references">References</label>
      <textarea
        id="references"
        name="references"
        value={formData.references}
        onChange={(e) =>
          setFormData({ ...formData, references: e.target.value })
        }
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};
