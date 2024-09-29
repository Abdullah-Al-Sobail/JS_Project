# To-Do App

A simple To-Do application built using **HTML**, **CSS**, and **JavaScript**. This project allows users to add, delete, and toggle tasks as completed. The tasks are saved to the browser's `localStorage` so they persist across sessions.

## Features

- Add new tasks to the to-do list.
- Delete tasks from the list.
- Mark tasks as completed by clicking on them (strike-through effect).
- Persist tasks using `localStorage`.

## Demo

![To-Do App Screenshot](assets/images/TodoApp%20Preview.png)

## Folder Structure

```bash
todo-app/
├── index.html               # The main HTML file
├── css/
│   └── styles.css           # Custom CSS for styling the app
├── js/
│   └── app.js               # Main JavaScript file for the app
├── assets/
│   └── images/              # (Optional) Folder for storing images
│       └── logo.png         # Example of an image (can be removed)
└── README.md                # Documentation of the project
```

## Getting Started

Follow the instructions below to clone and run the project locally.

### Prerequisites

- A web browser (Chrome, Firefox, etc.).
- Internet connection (only for cloning the project from GitHub).

### Installation

1. **Clone the repository**:
   
   Open your terminal or command prompt and run the following command to clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

   Replace `your-username` with your GitHub username.

2. **Navigate to the project folder**:

   ```bash
   cd todo-app
   ```

3. **Open the project in a web browser**:

   Simply open the `index.html` file in your preferred web browser. You can do this by:

   - Double-clicking on the `index.html` file in the project folder.
   - Or, using the command below (if you have Python installed):

     ```bash
     python -m http.server
     ```

     This will start a local server, and you can view the app by opening `http://localhost:8000` in your browser.

## Usage

- To add a task, type into the input field and click the "Add Task" button.
- To delete a task, click the "Delete" button next to the task.
- To mark a task as completed, click on the task text (it will toggle a strike-through).
- All tasks are saved automatically using `localStorage`, so they will persist even after refreshing the page.

## Project Preview

![Project Preview](assets/images/TodoApp%20Preview.png)

## Technologies Used

- **HTML5**: For creating the structure of the app.
- **CSS3**: For styling the UI.
- **JavaScript**: For adding interactivity and handling task management.
- **localStorage**: To store tasks persistently on the browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [Abdullah-Al-Sobail](https://github.com/Abdullah-Al-Sobail)
- **Email**: abdullahalsobail78@gmail.com


### Key Sections:

- **Project Overview**: A brief introduction to the project and its functionality.
- **Folder Structure**: Explanation of the files and directories in the project.
- **Getting Started**: Step-by-step guide on how to clone, install, and run the app locally.
- **Usage**: Instructions on how to use the to-do app.
- **Contributing**: Guidelines on how to contribute to the project.
