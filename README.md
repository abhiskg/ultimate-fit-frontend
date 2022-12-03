<h2>Ultimate Fit</h2>

**Website Link:** [https://service-review-3faa3.web.app/](https://service-review-3faa3.web.app/)

**Website Overview:** This website provides personal fitness services where you can find different fitness courses, check service details and reviews, and leave reviews after logging in.

**Achievements:**

- Mongoose Schema validation ensures that all documents are validated against the schema whenever they are created or updated in the database.
- A dynamic pagination system is integrated with backend API calls.
- The private route component blocks unauthorized users from accessing the front-end my reviews and add service sections, and their backend API routes are secured using Jsonwebtoken.
- React Query is used to query data from APIs, caching, and revalidation, which provides a good user experience.
- React hook form and Zod provides proper form control and validation on the front end.
- Firebase handles Email/Password and Google Login.
- The React Context API handles user state as a global state.

**Features:**

- A user can login via google or email/password.
- User can check all services and their reviews.
- My reviews and add service are private route, so only logged-in users can access them.
- Logged in user can add a new service and can write a review for any course.
- Logged in user can also update his reviews or can delete them.

**Technologies Used:** Typescript, React, React-router, React Query, Tailwind CSS, Express, Mongoose, Firebase, Zod, JsonWebToken, React-hook-form, Axios, React-hot-toast.

> **Server-side Github:** [https://github.com/abhiskg/ultimate-fit-backend](https://github.com/abhiskg/ultimate-fit-backend)
