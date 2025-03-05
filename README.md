<div align="center">

# CodeForge
</div>

## About
CodeForge is a platform where developers can share their projects with other developers. Showcase your innovative designs and full stack projects, inspire others, and build your professional portfolio. With CodeForge, your talent gets noticed by top companies.

## Features
- **Showcase Your Projects and Designs**: Share your work with a wide audience.
- **Inspire Others**: Inspire other developers and UI/UX designers with your creativity.
- **Build Your Professional Portfolio**: Create a comprehensive portfolio to showcase your skills.

## How to Use?
### Share Your Project
Upload your project or design to the platform.

### Discover
Explore projects from other developers for inspiration.

### Connect
Network with other developers and designers to collaborate on new ideas.

## Running CodeForge
CodeForge is developed using Next.js for the frontend, Tailwind CSS for styling, and a backend stack including MongoDB, Mongoose, Express, Axios, Cloudinary, React-Quill, and React SortableJS.

### Using Docker
With the Dockerized setup, you can run the application without manually configuring the environment.

#### Prerequisites
- Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

#### Steps to Run
1. Clone the repository:

   ```bash
   git clone https://github.com/Dheerajjha451/CodeForge.git
   cd CodeForge
   ```

2. Create a `.env` file in the root directory with the following variables:

   ```env
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   MONGODB_URI=
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   NEXTAUTH_SECRET=
   ```

3. Build and run the Docker containers:

   ```bash
   docker-compose up --build
   ```

4. Access the application at `http://localhost:3000`.

### Without Docker (Optional)
If you prefer running the application manually:

#### Setup

1. Install the required dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with the necessary variables:

   ```env
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   MONGODB_URI=
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   NEXTAUTH_SECRET=
   ```

3. Start the project:

   ```bash
   npm run dev
   ```

## Screenshots

![CodeForge1](https://github.com/Dheerajjha451/CodeForge/assets/106474979/456f129d-bd95-4cc6-bbc9-96738d3bdc47)
![CodeForge](https://github.com/Dheerajjha451/CodeForge/assets/106474979/f0c1a90d-aeff-480d-ac36-d10234b0ac25)

# Contributing
Check out the [contributing guidelines](https://github.com/Dheerajjha451/CodeForge/blob/main/CONTRIBUTING.md)

# License
This project is licensed under the [License.](https://github.com/Dheerajjha451/CodeForge/blob/main/LICENSE)

#   S h a r e Y o u r C o d e  
 