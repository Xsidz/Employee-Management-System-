const employees = [
  {
      "id": 1,
      "name": "Rohan Sharma",
      "email": "employee1@example.com",
      "password": "12345",
      "taskCount": {
        "active": 1,
        "completed": 2,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Design Landing Page Wireframe",
          "taskDescription": "Create a low-fidelity wireframe for the new marketing landing page.",
          "taskDate": "2025-07-22",
          "taskCategory": "UI/UX Design",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Set Up Staging Environment",
          "taskDescription": "Configure the new staging server on AWS for the upcoming release.",
          "taskDate": "2025-07-18",
          "taskCategory": "DevOps",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Fix Login Button Bug",
          "taskDescription": "The login button is not responsive on mobile devices. Needs urgent fix.",
          "taskDate": "2025-07-15",
          "taskCategory": "Frontend Development",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        }
      ]
    },
    {
      "id": 2,
      "name": "Priya Patel",
      "email": "employee2@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 1,
        "newTask": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Develop User Profile Component",
          "taskDescription": "Build the React component for the user profile page, including data fetching.",
          "taskDate": "2025-07-28",
          "taskCategory": "Frontend Development",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Write API Documentation",
          "taskDescription": "Document the new '/users' and '/posts' endpoints using Swagger.",
          "taskDate": "2025-08-05",
          "taskCategory": "Backend Development",
          "active": true,
          "completed": false,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Optimize Database Query",
          "taskDescription": "The main dashboard query is slow. Analyze and optimize it.",
          "taskDate": "2025-07-10",
          "taskCategory": "Database Management",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "User Acceptance Testing for Feature X",
          "taskDescription": "The UAT failed due to multiple critical bugs reported by the client.",
          "taskDate": "2025-07-01",
          "taskCategory": "QA Testing",
          "active": false,
          "completed": false,
          "newTask": false,
          "failed": true,
          "adminName": "Aditya Mehta"
        }
      ]
    },
    {
      "id": 3,
      "name": "Amit Singh",
      "email": "employee3@example.com",
      "password": "12345",
      "taskCount": {
        "active": 1,
        "completed": 2,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Create User Authentication API",
          "taskDescription": "Implement JWT-based authentication for the main application.",
          "taskDate": "2025-07-25",
          "taskCategory": "Backend Development",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Design Color Palette",
          "taskDescription": "Choose a new color palette for the rebranding project.",
          "taskDate": "2025-07-20",
          "taskCategory": "UI/UX Design",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Deploy Microservice",
          "taskDescription": "Deploy the new notification microservice to the production environment.",
          "taskDate": "2025-07-19",
          "taskCategory": "DevOps",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        }
      ]
    },
    {
      "id": 4,
      "name": "Anjali Gupta",
      "email": "employee4@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 2,
        "newTask": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Test Payment Gateway Integration",
          "taskDescription": "Perform end-to-end testing for the new Stripe integration.",
          "taskDate": "2025-07-29",
          "taskCategory": "QA Testing",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Plan Q4 Project Roadmap",
          "taskDescription": "Outline the major features and timelines for the last quarter of the year.",
          "taskDate": "2025-08-15",
          "taskCategory": "Project Management",
          "active": true,
          "completed": false,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Migrate Legacy CSS to Tailwind",
          "taskDescription": "Refactor the 'settings' page from custom CSS to Tailwind CSS.",
          "taskDate": "2025-07-12",
          "taskCategory": "Frontend Development",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Database Backup Script",
          "taskDescription": "The daily backup script failed to execute last night.",
          "taskDate": "2025-07-19",
          "taskCategory": "Database Management",
          "active": false,
          "completed": false,
          "newTask": false,
          "failed": true,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Onboard New Developer",
          "taskDescription": "Prepare onboarding documents and initial tasks for the new team member.",
          "taskDate": "2025-07-14",
          "taskCategory": "Project Management",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        }
      ]
    },
    {
      "id": 5,
      "name": "Vikram Kumar",
      "email": "employee5@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 1,
        "newTask": 2,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Build CI/CD Pipeline",
          "taskDescription": "Create a new CI/CD pipeline using Jenkins for the mobile app.",
          "taskDate": "2025-08-01",
          "taskCategory": "DevOps",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Research Competitor Features",
          "taskDescription": "Analyze the top 3 competitors and document their key features.",
          "taskDate": "2025-07-24",
          "taskCategory": "Project Management",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Update Third-Party Libraries",
          "taskDescription": "Update all outdated npm packages and resolve any breaking changes.",
          "taskDate": "2025-07-11",
          "taskCategory": "Frontend Development",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        }
      ]
    },
    {
      "id": 6,
      "name": "Sneha Reddy",
      "email": "employee6@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 1,
        "newTask": 2,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Schema Design for Analytics",
          "taskDescription": "Design the database schema for the new user analytics module.",
          "taskDate": "2025-07-26",
          "taskCategory": "Database Management",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Code Review for PR #123",
          "taskDescription": "Review the pull request for the new caching mechanism.",
          "taskDate": "2025-07-21",
          "taskCategory": "Backend Development",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Create High-Fidelity Mockups",
          "taskDescription": "Create the final mockups for the checkout flow.",
          "taskDate": "2025-07-16",
          "taskCategory": "UI/UX Design",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Performance Testing",
          "taskDescription": "Load testing of the API showed major bottlenecks under 100 concurrent users.",
          "taskDate": "2025-07-05",
          "taskCategory": "QA Testing",
          "active": false,
          "completed": false,
          "newTask": false,
          "failed": true,
          "adminName": "Pooja Joshi"
        }
      ]
    },
    {
      "id": 7,
      "name": "Sandeep Das",
      "email": "employee7@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 1,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Implement State Management with Redux",
          "taskDescription": "Refactor the application to use Redux Toolkit for global state management.",
          "taskDate": "2025-08-10",
          "taskCategory": "Frontend Development",
          "active": true,
          "completed": false,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Set up Monitoring and Alerts",
          "taskDescription": "Configure Datadog for monitoring the production servers and set up alerts for high CPU usage.",
          "taskDate": "2025-07-23",
          "taskCategory": "DevOps",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Write Test Cases for User Module",
          "taskDescription": "Write unit and integration tests for the user service.",
          "taskDate": "2025-07-18",
          "taskCategory": "Backend Development",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        }
      ]
    },
    {
      "id": 8,
      "name": "Meera Iyer",
      "email": "employee8@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 2,
        "newTask": 2,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Conduct User Interviews",
          "taskDescription": "Interview 5 target users to gather feedback on the new prototype.",
          "taskDate": "2025-07-30",
          "taskCategory": "UI/UX Design",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Regression Testing for v2.1",
          "taskDescription": "Perform full regression testing before the v2.1 release.",
          "taskDate": "2025-07-25",
          "taskCategory": "QA Testing",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Sprint Planning Meeting",
          "taskDescription": "Prepare the backlog and lead the sprint planning session for the next two weeks.",
          "taskDate": "2025-07-17",
          "taskCategory": "Project Management",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Fix Broken API Endpoint",
          "taskDescription": "The '/products/:id' endpoint is returning a 500 error.",
          "taskDate": "2025-07-19",
          "taskCategory": "Backend Development",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        }
      ]
    },
    {
      "id": 9,
      "name": "Arjun Nair",
      "email": "employee9@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 1,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Create an ERD for the new DB",
          "taskDescription": "Create an Entity-Relationship Diagram for the new 'orders' microservice database.",
          "taskDate": "2025-07-27",
          "taskCategory": "Database Management",
          "active": true,
          "completed": false,
          "newTask": true,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Implement WebSocket for Real-time Notifications",
          "taskDescription": "Add a WebSocket service for pushing real-time notifications to users.",
          "taskDate": "2025-08-02",
          "taskCategory": "Backend Development",
          "active": true,
          "completed": false,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Update Style Guide",
          "taskDescription": "The project's style guide is outdated and needs to be updated with new components.",
          "taskDate": "2025-07-13",
          "taskCategory": "UI/UX Design",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        }
      ]
    },
    {
      "id": 10,
      "name": "Divya Rao",
      "email": "employee10@example.com",
      "password": "12345",
      "taskCount": {
        "active": 2,
        "completed": 1,
        "newTask": 0,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Develop Admin Dashboard UI",
          "taskDescription": "Build the main UI for the admin dashboard, including charts and tables.",
          "taskDate": "2025-08-20",
          "taskCategory": "Frontend Development",
          "active": true,
          "completed": false,
          "newTask": false,
          "failed": false,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Automate Deployment to Kubernetes",
          "taskDescription": "Write scripts to automate the deployment process to the K8s cluster.",
          "taskDate": "2025-08-12",
          "taskCategory": "DevOps",
          "active": true,
          "completed": false,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        },
        {
          "taskTitle": "Security Audit",
          "taskDescription": "The recent security audit revealed several XSS vulnerabilities that need to be patched.",
          "taskDate": "2025-07-08",
          "taskCategory": "Backend Development",
          "active": false,
          "completed": false,
          "newTask": false,
          "failed": true,
          "adminName": "Aditya Mehta"
        },
        {
          "taskTitle": "Client Demo Preparation",
          "taskDescription": "Prepare the presentation and demo for the bi-weekly client meeting.",
          "taskDate": "2025-07-18",
          "taskCategory": "Project Management",
          "active": false,
          "completed": true,
          "newTask": false,
          "failed": false,
          "adminName": "Pooja Joshi"
        }
      ]
    }
]

const admin = [
   {
      "id": 101,
      "name": "Aditya Mehta",
      "email": "admin1@example.com",
      "password": "12345"
    },
    {
      "id": 102,
      "name": "Pooja Joshi",
      "email": "admin2@example.com",
      "password": "12345"
    }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return {employees, admin}
};

