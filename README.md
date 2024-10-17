# Background Color Changer and Navigation Controller

## Overview

This project is a simple yet interactive web application that allows users to change the background color of the screen and control the position of a navigation bar using directional buttons. The app is built with React and utilizes Tailwind CSS for styling, providing a modern and responsive user interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, used for creating reusable components.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development with predefined classes.
- **JavaScript (ES6)**: For scripting and implementing application logic.
- **HTML5**: The markup language used for structuring the web application.

## Features

- Change the background color of the application using a floating navigation bar.
- Move the navigation bar to different positions (top, bottom, left, right) with smooth transitions.
- User-friendly tooltip to guide users on how to interact with the app.
- Responsive design to ensure usability on various screen sizes.

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm (Node package manager, comes with Node.js)

### Steps to Get Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SOMANATHPANDA/bg-changer.git
   cd bg-changer

2. **Install Dependencies**:
    npm install

3. **Start the Development Server**:
    npm start

4. **Open Your Browser**:
    Navigate to http://localhost:3000 to view the application in action.

## Usage

- Click on the color buttons in the navigation bar to change the background color.
- Use the directional buttons to move the navigation bar around the screen. The transition will take 7 seconds, providing a smooth movement effect.
- A tooltip will appear initially to guide users on how to control the navigation bar.

## Customization

- You can customize the color options in the colors array in App.js.
- Modify the transition duration by changing the transitionDuration value in the inline styles.
- Update the tooltip message or visibility duration in the useEffect hook.