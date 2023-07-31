# Grid App

The Grid App is a responsive web application built with Nuxt.js that allows users to filter and view items based on their shapes and colors. It includes an authentication system and features a grid display with various shapes and colors that users can filter through.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Filtering Items](#filtering-items)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To run this project, you need to have the following installed on your local machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/G-vans/grid-app-nuxt.git
```

2. Change into the project directory:

```bash
cd grid-app-nuxt
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

### Authentication

The Grid App uses a hardcoded authentication system. The login credentials are provided within the application. To access the app, use the following login credentials:

Username: `demo`
Password: `qwerty123`

### Filtering Items

Once logged in, the user can view the items displayed in a grid format. The items can be filtered based on their shapes and colors. The filtering options are available in the Filters component, where the user can select and deselect the desired shapes and colors. The grid will automatically update and display items that match the selected filters.

## Project Structure

The project follows a standard Nuxt.js structure. The main directories and files are organized as follows:

```
grid-app/
|-- assets/
|   |-- main.scss
|
|-- components/
|   |-- Grid.vue
|   |-- Filters.vue
|
|-- data/
|   |-- items.json
|
|-- pages/
|   |-- index.vue
|
|-- tests/
|   |-- Grid.spec.js
|
|-- nuxt.config.js
|-- package.json
|-- README.md
```

- `assets`: Contains the main SCSS file for styling the application.
- `components`: Contains Vue components used in the application, such as Grid and Filters.
- `data`: Contains the JSON file (`items.json`) with data for the items.
- `pages`: Contains the main page component (`index.vue`) that renders the Grid and Filters components.
- `tests`: Contains test files (e.g., `Grid.spec.js`) for testing components and functionalities.
- `nuxt.config.js`: Nuxt.js configuration file.
- `package.json`: Contains project dependencies and scripts.
- `README.md`: This file, providing an overview of the project and instructions for running and using the application.

## Technologies Used

- Nuxt.js
- Vue.js
- SCSS
- Jest (for testing)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
