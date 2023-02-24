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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
