# Caption Generator Using Generative AI

This project is a web application that generates catchy slogans or captions based on user-provided keywords using a generative AI model. The application uses Google's Generative AI (Gemini 2.0) to craft creative and engaging captions, making it ideal for marketers, content creators, and branding professionals.

## Features
- Input a keyword to generate creative slogans or captions.
- Uses Google's Generative AI (Gemini 2.0) model for keyword-based content generation.
- Simple and intuitive interface for entering keywords and generating captions.

## Technologies Used
- **HTML/CSS**: For structuring and styling the web application.
- **JavaScript**: For handling events and API interactions.
- **Google Generative AI (Gemini 2.0)**: For generating captions based on the keyword.

## Setup and Installation
### Prerequisites
Ensure you have the following installed:
- A modern web browser (e.g., Chrome, Firefox, Edge).
- Internet connection to access the Generative AI API.

### Steps to Run the Application
1. Clone this repository or download the source code.
   ```bash
   git clone <repository_url>
   ```
2. Open the project directory and ensure all required dependencies are installed (if applicable).
   ```bash
   npm install
   ```
3. Add your Google Generative AI API key in the script section of the `index.html` file:
   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
4. Open the `index.html` file in your browser to run the application.

### Directory Structure
```
project-directory/
├── index.html       # Main HTML file
├── style.css        # CSS for styling
├── script.js        # Main JavaScript logic (inline in the HTML file for now)
└── README.md        # Documentation file
```

## How to Use the Application
1. Open the application in a browser.
2. Enter a keyword in the input field.
3. Click the "Generate Caption" button to initiate the caption generation process.
4. Wait a few moments as the application interacts with the AI model to generate captions.
