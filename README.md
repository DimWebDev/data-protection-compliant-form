# Descritpion of this Repository

In creating this form, I aimed to provide a practical example of how GDPR obligations could be technically implemented in the front-end layer of a web application. To ensure compliance with GDPR, particularly the principles of data protection by design and by default, I have implemented AES encryption algorithm to encrypt the sensitive data, and I saved the secret key used for encryption as an environmental variable. I also included a consent checkbox, requiring users to agree to the terms and conditions before submitting the form.

In order to follow best practices during web development, I saved the secret key used for encryption as an environmental variable and ignored it in .gitignore. This provides an extra layer of security, ensuring the key remains secure and is not accidentally committed to a public repository.

Furthermore, I have implemented an additional layer of security by sending the data to the server using HTTPS. This ensures that the data is protected from unauthorized access during transmission.

Overall, this form is an example of how web developers can implement GDPR compliance in the front-end layer of a web application.

There are a few more things that can be done in the front-end layer to further enhance the GDPR compliance of the application:

1. Implement data minimization: Data minimization is the principle of collecting and processing only the minimum amount of data necessary for a specific purpose. In the context of a job application form, this means collecting only the data that is strictly necessary for assessing the suitability of the applicant. Any additional data that is not relevant for this purpose should not be collected.

2. Implement data retention policies: Data retention policies define how long data will be retained and when it will be deleted. This is important because keeping data longer than necessary can pose a risk to the privacy of individuals. In the context of a job application form, data should be retained only as long as necessary to assess the suitability of the applicant, and then deleted.

3. Implement data subject access requests: Data subject access requests allow individuals to request access to their personal data and to have it corrected, deleted, or transferred. In the context of a job application form, this means providing applicants with an easy way to access their personal data and to request changes or deletion.

These are just a few additional measures that can be taken to further enhance the GDPR compliance of the application in the front-end layer.

# Limitations of GDPR Compliance in the FE layer of a web app

While implementing GDPR compliance in the front-end layer of a web application is an essential step, it is important to note that it is not sufficient on its own. There are limitations to what can be achieved in the front-end layer, as the back-end is responsible for the bulk of the processing and storage of personal data. Therefore, it is important to ensure that the back-end is also designed and developed in a way that is compliant with GDPR. This includes implementing measures such as data minimization, data retention policies, and secure storage and processing of personal data. Additionally, organizations must ensure that they have a comprehensive privacy policy in place that outlines how personal data is collected, used, and stored. By taking a holistic approach to GDPR compliance that includes both front-end and back-end measures, organizations can better protect the privacy and data of their users.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Before running this application, ensure that you have the following installed:
- Node.js (v18.12.1)
- npm (v8.19.2)

# Setting Up the Environment

To run this repository, you'll need to set up an environment variable in a .env file. Create a .env file in the root directory of the project and add the following line:
### REACT_APP_SECRET_KEY=your_secret_key_here
Replace your_secret_key_here with your actual encryption key. This key is essential for the application's encryption functionalities.

## Available Scripts

Before running the application, install the necessary dependencies:

### `npm install`

Installs all the dependencies required for the project as defined in the `package.json` file.

After the installation, you can run the application:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
