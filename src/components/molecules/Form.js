import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import styled from "styled-components";
import { Label } from "../atoms/label/Label";
import { Input } from "../atoms/input/Input";
import { Textarea } from "../atoms/textarea/Textarea";
import { Checkbox } from "../atoms/checkbox/Checkbox";
import { Button } from "../atoms/button/Button";

// Define a styled form container using styled-components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: right;
  font-family: sans-serif;
  width: 80%;
  margin-left: 150px;
`;

// Define the main form component
export const Form = () => {
  // Define the initial form data as a state object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    coverLetter: null,
    references: "",
  });

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreedToTerms || !formData.consentToDataProcessing) {
      // Display an alert if the user hasn't agreed to the terms and conditions or consented to data processing
      alert(
        "Please confirm that you have read and agree to the terms and conditions and give consent for processing of your personal data."
      );
      return;
    }

    // Encrypt the sensitive form data using CryptoJS and the secret key stored in an environment variable
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

    // Log the encrypted values in console, to check that the encryption works
    console.log("Encrypted Name:", encryptedFormData.name);
    console.log("Encrypted Email:", encryptedFormData.email);
    console.log("Encrypted Phone:", encryptedFormData.phone);
    console.log("Encrypted Address:", encryptedFormData.address);
    console.log("Encrypted References:", encryptedFormData.references);

    // Send the encrypted form data to the server using Axios
    axios
      .post("https://jsonplaceholder.typicode.com/posts", encryptedFormData)
      .then((response) => {
        // Handle the response from the server
        console.log("Response:", response);
      })
      .catch((error) => {
        // Handle any errors that occur during the POST request
        console.error("Error:", error);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label labelFor="name" labelText="Name" isRequired />
      <Input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Label labelFor="email" labelText="Email" isRequired />
      <Input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Label labelFor="phone" labelText="Phone" isRequired />
      <Input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <Label labelFor="address" labelText="Address" isRequired />
      <Input
        type="textarea"
        id="address"
        name="address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />
      <Label labelFor="resume" labelText="Resume" isRequired />
      <Input
        type="file"
        id="resume"
        name="resume"
        onChange={(e) =>
          setFormData({ ...formData, resume: e.target.files[0] })
        }
        required
      />
      <Label labelFor="coverLetter" labelText="Cover Letter" isRequired />
      <Input
        type="file"
        id="coverLetter"
        name="coverLetter"
        onChange={(e) =>
          setFormData({ ...formData, coverLetter: e.target.files[0] })
        }
        required
      />
      <Label labelFor="references" labelText="References" isRequired />
      <Textarea
        id="references"
        name="references"
        value={formData.references}
        onChange={(e) =>
          setFormData({ ...formData, references: e.target.value })
        }
        required
      ></Textarea>
      <Checkbox
        id="terms-and-conditions"
        name="terms-and-conditions"
        isChecked={formData.agreedToTerms}
        onChange={(e) =>
          setFormData({ ...formData, agreedToTerms: e.target.checked })
        }
        labelText="I agree to the"
      />
      <Checkbox
        type="consent"
        id="data-processing-consent"
        name="data-processing-consent"
        isChecked={formData.consentToDataProcessing}
        onChange={(e) =>
          setFormData({
            ...formData,
            consentToDataProcessing: e.target.checked,
          })
        }
        labelText="I give my consent for the processing of my personal data, which will be used to assess my suitability for the job. The legal basis for processing my personal data is my consent. The controller is [COMPANY NAME], which can be contacted at [CONTACT DETAILS]. I am aware that I can withdraw my consent at any time by contacting [contact details] in the same way I provided, by clicking a checkbox."
      />

      <Button type="submit" text="Submit the form and apply!" />
    </FormContainer>
  );
};
