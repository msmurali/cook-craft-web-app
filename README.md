# Cook Craft Web App

**Cook Craft Web App** is a modern, dynamic recipe platform that enables users to search for recipes by name or category, explore trending recipes, browse recipe blogs, and subscribe to weekly newsletters for delicious cooking ideas. Built with Angular and utilizing NgRx for state management, the app delivers a smooth user experience with an API-driven architecture.

![image](https://github.com/user-attachments/assets/a8024926-dc9a-419b-9a2b-c23ef5df01dc)
https://cook-craft-web-app.vercel.app/home


## Table of Contents
- [Project Setup](#project-setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Key Features](#key-features)
- [API Integrations](#api-integrations)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Setup

### Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** (v14 or later)
- **Angular CLI** (v12 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cook-craft-web-app.git
    ```
 
1. Navigate into the project directory:


```bash
cd cook-craft-web-app
```
 
2. Install the project dependencies:


```bash
npm install
```
 
3. Set up the environment variables by creating a `.env` file at the root of the project and add the following variables:

```bash
MAILGUN_API_KEY=<your-api-key>
MAILGUN_DOMAIN=<your-mailgun-domain>
POSTGRES_CONNECTION_STRING=<your-postgres-connection-string>
NEWS_API_KEY=<your-newsapi-key>
```

### Running the Project 
 
- **Development Server** : Run the development server with hot-reloading.

```bash
npm start
```
Open [http://localhost:4200]()  in your browser.
 
- **Build** : Build the project for production.

```bash
npm run build
```
 
- **Watch Mode** : Automatically rebuild the project when files change.

```bash
npm run watch
```

## Scripts 

The following are the available npm scripts in this project:
 
- **`ng`** : Run Angular CLI commands.
 
- **`start`** : Start the development server.
 
- **`build`** : Build the app for production.
 
- **`watch`** : Rebuild the app on file changes.

## Dependencies 

Below are the core dependencies used in the Cook Craft Web App:
 
- **@angular/core** : Angular framework for building the app.
 
- **@ngrx/store** : For state management in Angular.
 
- **@ngrx/effects** : Manage side effects in NgRx state.
 
- **axios** : Promise-based HTTP client for API calls.
 
- **mailgun-js**  & **mailgun.js** : Email service to send newsletters using Mailgun.
 
- **newsapi** : Fetch news data to display related recipes or blogs.
 
- **pg** : PostgreSQL client for Node.js to handle database operations.
 
- **ngx-pagination** : For paginating recipe results.
 
- **tailwindcss** : Utility-first CSS framework for rapid UI development.
 
- **bootstrap-icons** : Icon library to enhance UI components.

## Dev Dependencies 

The following are tools and libraries used during development:
 
- **@angular/cli** : Command-line interface for Angular development.
 
- **tailwindcss** : For custom styling.
 
- **autoprefixer** : Automatically adds vendor prefixes to CSS.
 
- **typescript** : Provides static typing for better code maintenance.
 
- **dotenv** : Manage environment variables in a `.env` file.

## Key Features 
1. **Search Recipe by Name** 
- Users can search recipes by entering the name of the dish in the search bar. The app retrieves relevant recipes based on the input.
2. **Search Recipes by Categories** 
- Allows users to filter recipes by different categories such as main courses, appetizers, desserts, and more.
3. **Weekly Recipe Newsletter** 
- Users can subscribe to receive a weekly newsletter with top trending recipes via email. The newsletters are dynamically generated and sent using Mailgun.
4. **Trending Recipes** 
- Displays the most popular and trending recipes based on user engagement and API data.
5. **Blogs Recipes** 
- The platform includes recipe blogs with detailed instructions, cooking tips, and new food trends to explore.

## API Integrations 
 
1. **Mailgun API** 
  - The Mailgun API is integrated to send weekly recipe newsletters to subscribed users.
 
2. **NewsAPI** 
  - NewsAPI is used to fetch relevant news and blog content related to food and recipes.
 
3. **PostgreSQL Database**  
  - Stores user data, recipe information, and subscription details in a PostgreSQL database, which is accessed using the `pg` Node.js library.

## Technologies Used 
 
- **Angular** : A front-end framework for building dynamic web applications.
 
- **NgRx** : For managing the application's state and side effects.
 
- **Tailwind CSS** : For responsive and utility-based CSS styling.
 
- **PostgreSQL** : Relational database for handling persistent data storage.
 
- **Mailgun** : For sending email newsletters.
 
- **NewsAPI** : For fetching dynamic content related to recipes and blogs.
 
- **Node.js** : Server-side JavaScript runtime for handling backend operations.
 
- **Axios** : HTTP client for making API requests.

## License 
This project is licensed under the MIT License. See the [LICENSE]()  file for more information.
