# MewMes

MewMes is a social media platform for cat lovers and meme enthusiasts alike. It was created using React and Django Rest Framework. The purpose of the site is to allow users to share cat memes they find funny.

#

![amiresponsive](readme/amiresponsive.png)

- [Deployed Front-End page](https://mewmes-ila-3228af34fcea.herokuapp.com/)
- [Deployed Back-End page](https://mewmes-dc42376a8874.herokuapp.com/)
- [Backend repository](https://github.com/Ila-bura/MewMes_API)

## **Contents**

- [**Planning and Project Conception**](#planning-and-project-conception)
  - [**Project Goals**](#project-goals)
  - [**Site Goals**](#site-goals)
  - [**Future Goals**](#future-goals)
    - [**GitHub Project Board**](#github-project-board)
    - [**Github Issues**](#github-issues)
    - [**Wireframes**](#wireframes)
    - [**List of Wireframe pages**](#list-of-wireframe-pages)
  - [**Epics**](#epics)
    - [Authentication](#authentication)
    - [Navigation](#navigation)
    - [Posts](#posts)
    - [Comments](#comments)
    - [Profiles](#profiles)
  - [**User Stories**](#user-stories)
    - [**Epic 1: Authentication**](#epic-1-authentication)
    - [**Epic 2: Navigation:**](#epic-2-navigation)
    - [**Epic 3: Posts**](#epic-3-posts)
    - [**Epic 4: Comments**](#epic-4-comments)
    - [**Epic 5: Profiles**](#epic-5-profiles)
  - [**Design**](#design)
    - [**Images**](#images)
    - [**Colour Scheme and Accessibility**](#colour-scheme-and-accessibility)
    - [**Typography**](#typography)
- [**Features**](#features)
  - [**Existing Features**](#existing-features)
  - [**logo**](#logo)
  - [**custom 404 page**](#custom-404-page)
  - [**Future Features**](#future-features)
- [**Technologies**](#technologies)
  - [**Languages used**](#languages-used)
  - [**Databases**](#databases)
  - [**Cloud storage and deployment services**](#cloud-storage-and-deployment-services)
  - [**Frameworks, tools and libraries**](#frameworks-tools-and-libraries)
    - [**API Back-End**](#api-back-end)
    - [**Front-End**](#front-end)
  - [**Installed packages, libraries and componenets**](#installed-packages-libraries-and-componenets)
- [**Components**](#components)
- [**Testing**](#testing)
  - [**Manual Testing**](#manual-testing)
  - [**Test cases**](#test-cases)
  - [**Integration Testing**](#integration-testing)
  - [**Code Validation**](#code-validation)
- [**Bugs**](#bugs)
  - [**Bugs encountered during development**](#bugs-encountered-during-development)
  - [**Bugs and issues encountered during testing**](#bugs-and-issues-encountered-during-testing)
  - [**Unresolved bugs**](#unresolved-bugs)
- [**Gitpod set up and deployment**](#gitpod-set-up-and-deployment)
  - [Set-up in gitpod](#set-up-in-gitpod)
  - [Initial Deployment](#initial-deployment)
  - [Deployment issues and bugs](#deployment-issues-and-bugs)
  - [Connect the Frontend app with the Backend API](#connect-the-frontend-app-with-the-backend-api)
  - [Final Deployment](#final-deployment)
  - [Cloning](#cloning)
  - [Forking](#forking)
- [**Credits**](#credits)
  - [Code Institute](#code-institute)
  - [Resources for creating the star rating component:](#resources-for-creating-the-star-rating-component)
  - [Bug fix sources:](#bug-fix-sources)

## **Planning and Project Conception**

### **Project Goals**

[Back to top](#contents)

### **Site Goals**

- To build an online community around a common interest of cat memes.
- To allow community members to share their favourite memes and interact with each other using the reactions and comment features.
- To allow commnunity members to follow other users whose content is interesting to them.
- To allow users to save meme that are funny to them.

### **Future Goals**

- Allow users to interact more efficiently by implementing private messaging.
- Add the functionality to like user's comments.
- Allow profile's owners to delete their profile.

[Back to top](#contents)

#

#### **GitHub Project Board**

This project was designed using agile methodologies.
User stories are recorded on the [Project Board](https://github.com/users/Ila-bura/projects/22/views/1).

[Back to top](#contents)

#### **Wireframes**

- The plan for this project is based on the Code Institute Moments walkthrough project.
- Most of the UI is based on the same kind of features and functionality but customised for the specific purposes of MewMes.

#### **List of Wireframe pages**

- [Home page Desktop](readme/homepage_desktop.png)
- [Home page Mobile](readme/homepage_mobile.png)
- [Sign up page](readme/signup.png)
- [Sign in page](readme/signin.png)
- [Profile page](readme/userprofile.png)
- [Info page](readme/info.png)

[Back to top](#contents)

#

### **User Stories**

#### **Authentication**

1. Sign up: As a **user** I can **create an account** so that I can **access the features for signed up users**

2. Sign in: As a **user** I can **log in** so that I can **access features only available to logged in users**

3. Sign out: As a **user** I can **log out** so that I can **exit my account and prevent others from gaining access**

4. Refreshing access tokens: As a **user** I can **maintain my logged in status for 24 hours** so that I can **easily interact with the app throughout the day**.

[Back to top](#contents)

#### **Navigation:**

5. As a **user** I can **quickly view my logged in/out status in the navbar** so that I can **decide on my next action**.

6. Routing: As a **user** I can **view the navbar on every page** so that I can **easily navigate through the site**.

7. Conditional Rendering: As a **logged out user** I can **view sign in and sign up options** so that I can **easily tell whether I am logged in and can log in easily if not**.

8. Avatar: As a **logged in user** I can **view my profile link and avatar image on the navbar** so that I can **quickly see that I am logged in**.

9. Viral profiles list: As a **logged in user** I can **view other user’s profile names and avatars** so that I can **easily identify and follow other users**.

[Back to top](#contents)

#### **Memes**

10. Create a meme: As a **logged in user** I can **create a new post** so that I can **share my best memes with the world**.

11. Edit a meme: As a **logged in user** I can**edit my memes** so that I can **revise my content, if necessary**.

12. Delete a meme: As a **logged in user** I can **delete my memes** so that I can **remove content I have posted, if necessary**.

13. View most recent memes: As a **user** I can **view all the most recent memes, ordered by most recently created first** so that I can **immediately be up to date with the newest content**.

14. View meme detail: As a **user** I can **view individual meme details** so that I can **view more details and comments about the meme**.

15. React to a meme: As a **logged in user** I can **like or unlike a meme** so that I can **quickly show my reaction to another users content**.

16. Save memes: As a **logged in user** I can **save a meme** so that I can **easily find all the memes I might wnat to view again at a later stage**.

17. View saved memes: As a **logged in user** I can **view saved memes** so that I can **easily find all the memes that interested me under the Saved section**.

18. Search memes: As a **user** I can **search meme with keywords** so that I can **find the memes and user profiles I am most interested in**.

[Back to top](#contents)

#### Comments

19. Create a comment: As a **user** I can **leave a comment under a meme** so that I can **express my opinion and engage with the content and the community**.

20. Comment date: As a **user** I can **see the comment date** so that I can **know how long a go a comment was left**.

21. View comments: As a **user** I can **view other comments** so that I can **see what others have said**.

22. Edit comments: As a **user** I can **edit my comments** so that I can **revise the content, if necessary**.

23. Delete comments: As a **user** I can **delete my comments** so that I can **remove them, if necessary**.

[Back to top](#contents)

#### Profiles

25. Profile page: As a **user** I can **view another user’s profile page** so that I can **see their memes and their bio**.

26. User stats: As a **user** I can **see stats on a user profile** so that I can **see how many memes/followers/following they have**.

27. Follow/Unfollow a user: As a **logged in user** I can **follow other users whose content is relevant or meaningful to me** so that I can **view content filtered by the users I follow**.

28. Edit Profile: As a **user** I can **edit my profile** so that I can **update my personal details and profile picture**.

29. Update username and password: As a **user** I can **update my username/password** so that I can **make changes as needed**.

[Back to top](#contents)

### **Design**

#### **Images**

- The images used for the profile avatar and the one that shows when no results are found, were taken from the Code Institute Moments walkthrough.

<details><summary>Avatar</summary>
<img src="readme/avatar.png" >
</details

<details><summary>No Results</summary>
<img src="assets/noresults.png" >
</details>

- The images used for the user profiles as well as the memes were all taken from the Internet using Google images.

- The favicons were created on [Favicon.io](https://favicon.io/).

#### **Colour Scheme**

- The colour palette was generated with Canva, to match the colours of the logo.

<details><summary>Colour Scheme</summary>
<img src="readme/colour_palette.png" >
</details>

#### **Typography**

- The two main font families used were obtained from the Google Fonts library:

1. Comfortaa
2. Outfit

[Back to top](#contents)

## **Features**

### **Existing Features**

### **logo**

- The logo was designed with [Canva](https://www.canva.com/) and customised to add the site name.
- The logo was used as the favicon for the webpage as well as the navbar logo home link.

<details><summary>Logo</summary>
<img src="assets/logo.png" >
</details

[Back to top](#contents)

#

### **Custom 404 page**

- The 404 page lets user's know they are still connected to the site but on a non-existent page.

The image used for the 404 Not Found page was created using [Canva](https://www.canva.com/)

<details><summary>Not Found</summary>
<img src="assets/notfound.png" >
</details>

[Back to top](#contents)

#

### **Future Features**

- Private messaging would be a good feature to implement.
- Registered users might find it useful to be able to delete their own account.

[Back to top](#contents)

## **Technologies**

### **Languages used**

- [Python](https://www.python.org/)

- [HTML](https://www.w3schools.com/html/html_intro.asp)

- [CSS](https://www.w3schools.com/css/css_intro.asp)

- [JS](https://reactjs.org/)

### **Databases**

- [Postgresql](https://www.postgresql.org/)

### **Cloud storage and deployment services**

- [Cloudinary](https://cloudinary.com/)
  - Used to store media files and images.
- [Heroku](https://www.heroku.com/)
  - Used to host the deployed site.
- [ElephantSQL]()
  - Used to host and operate the PostgresSQL database.

[Back to top](#contents)

### **Frameworks, tools and libraries**

#### **API Back-End**

- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Psycopg2](https://pypi.org/project/psycopg2/)
- [django_filters](https://django-filter.readthedocs.io/en/stable/guide/install.html)
- [dj_rest_auth](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)
- [rest_framework.authtoken](https://pypi.org/project/django-rest-authtoken/)
- [dj_rest_auth.registration](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)
- [allauth](https://django-allauth.readthedocs.io/en/latest/installation.html)
- [corsheaders](https://pypi.org/project/django-cors-headers/)
- [JSON WEB tokens](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

[Back to top](#contents)

#### **Front-End**

- [React JS](https://reactjs.org/)
- [JSON Web Tokens](https://jwt.io/)
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/)
- [react-simple-star-rating](https://www.npmjs.com/package/react-simple-star-rating/v/4.0.5)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Font Awesome](https://fontawesome.com/)
- [Canva](https://www.canva.com/)
- [Favicon.io](https://favicon.io/favicon-converter/)
- [Schemecolor](https://www.schemecolor.com/)
- [Pixabay](https://pixabay.com/)
- [Google fonts](https://fonts.google.com/)
- [Markdown TOC generator](https://magnetikonline.github.io/markdown-toc-generate/)

[Back to top](#contents)

### **Installed packages, libraries and componenets**

- React
  - npx create-react-app . --use-npm
  - Main JavaScript framework for creating the UI
- Node
  - Package manager used to install dependencies
- React simple star rating:
  - npm i react-simple-star-rating@4.0.5
  - Star rating component as a rating field in the Posts model.
- React Router:
  - npm install react-router-dom
  - Handles routing of the React app:
    - Keeps the UI in sync with the URL and only renders components required by whichever URL path the user navigates to.
- Axios library:
  - npm install axios
  - Tells React app to send requests to the api
- React Infinite scroll
  - npm install react-infinite-scroll-component
  - Used with list pages instead of pagination
  - Utilised by posts and comments when there are long lists of these components
- jwtDecode library:
  - npm install jwt-decode
  - Stops unneccessary network requests every time unauthenticated user interacts with the app.
  - Stores the logged in user's refresh token timestamp in the browser using localStorage.
  - Then check if this timestamp exists and only if it does make attempt to refresh access token.

[Back to top](#content)

## **Components**

Below are some components that have been implemented and reused throughout the project:

1. axiosDefault.js : Send http request to the backend API in the case of user crud actions or get requests for a specific object or list of objects.
2. Asset.js : exports the loading spinner when/where requied in the site.
3. Avatar.js exports users' avatar image to the popular profileslist, profile page and navbar profile link.
4. MoreDropdown.js : displays menu to authorised users with options to edit/delete Posts, comments and profile details.
5. CurrentUserContext.js : confirm users logged-in status to determine what functionality is available to that user.
6. ProfileDataContext.js : provide un/follow ability to authorised user via popular profiles componenet and profile page component.
7. useRedirect.js : redirects a user to another page if they are not authorised to be on the page they are trying to access.
8. useClickOutsideToggle.js : Implemented for the mobile dropdown nav component, which allows users to close the expanded navbar by tapping/clicking outside the navbar.
9. utils.js : supplies functionality to all of the components that utilise the Infinite Scroll.

[Back to top](#contents)

## **Testing**

The testing documentation can be viewed [here](/TESTING.md)

[Back to top](#contents)

## **Bugs**

### **Bugs encountered during development**

[Back to top](#contents)

### **Unresolved bugs**

- No unfixed bugs to report during the production of this project.

- One thing to note is when doing the lighthouse report, best practices for the sign-in and sign-up page show a result of 75, the image shows up tagged as low resolution.
- There are errors in the console of these pages, that were also brought up during the walkthrough Moments. The errors are as follows:

_Failed to load resource: the server responded with a status of 401 (Unauthorized)_

[Back to top](#contents)

## **Codeanywheee set up and deployment**

- This project was created and developed using CodeAnywhere using the following steps:

### Set-up in gitpod

- Navigate to your github repository page and click the green "new" button to create a new repo.
- choose a name with all lower case letters: trekkers
- Click the green "create repository" button.
- Click the Green "Gitpod button to create a workspace.
- Enter the following commands:
  - npx create-react-app . --use-npm
  - npm install -g npm@9.6.6
- Run npm start to check the app is working.
- Add extension to help manage the code:
  - ES7 React/Redux/GraphQl/React-Native : (snippets) by dsznajder
  - Prettier : (Code formatter) by esbenp
- Commit and push to github tr prepare for initial deployment.

[Back to top](#contents)

#

### Initial Deployment

- Navigate to Heroku for initial deployment
- Click on the "new" dropdown and select "Create new app"
- Give the app a name and select the region, I selected Europe for this app.
- Click the Create app button
- Under the "Deploy" tab, click on github for deployment method and connect the app to the [MewMes](https://github.com/Ila-bura/mewmes/tree/main) github repository.
- Once the app is connected to the correct github repository, click "Deploy Branch" and open the app in the browser to make sure it works.

### Deployment issues and bugs

-

[Back to top](#contents)

## Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

1. Launch the CodeAnywhere workspace.
2. Install ReactJS:

```
npx create-react-app . --use-npm
npm start
```

2. Install the following packages using the command `npm install`:

```
react-bootstrap@1.6.3 bootstrap@4.6.0
react-router-dom@5.3.0
axios
react-infinite-scroll-component
msw --save-dev
jwt-decode
-g eslint
```

3. Git add, commit, and push changes.
4. Navigate to Heroku and click on the "new" dropdown and select "Create new app"
5. Give the app a name and select the region, I selected Europe for this app.
6. Click the Create app button.
7. Under the "Deploy" tab, click on github for deployment method and connect the app to the [MewMes](https://github.com/Ila-bura/mewmes/tree/main) github repository.
8. Once the app is connected to the correct github repository, click "Deploy Branch" and open the app in the browser to make sure it works.

[Back to top](#contents)

#

### Final Deployment

- In CodeAnywhere IDE:

1. Remove React.StrictMode component from index.js.
2. Optimise bootstrap imports by making sure each component is imported individually:
   Example:

   ```
   import Navbar from "react-bootstrap/Navbar";
   import Container from "react-bootstrap/Container";
   import Nav from "react-bootstrap/Nav";
   ```

3. Remove console.logs

- Note: following the instructions found the Moments walkthrough, the console.logs were left and commented out inside the catch blocks for easier debugging practices later on.

4. Add the Heroku deployment commands in package.json in the "scripts" section.

```
   "heroku-prebuild": "npm install -g serve",
```

5. Add a Procfile to the root of the project with the following command:

```
web: serve -s build
```

6. After pushing the final version to GitHub, navigate to the app on heroku.
   - Under the deploy tab, scroll to the bottom of the page and click the "Deploy Branch" button.
   - Ensure the build is successful and open the app.
   - Test all feautures in in the final deployed app to make sure everythin is the same and working as it should.

[Back to top](#contents)

#

### Cloning

Here are the steps to clone the repository:
Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

Install Dependencies:

`npm install`

Run Application:

`npm start`

[Back to top](#contents)

#

### Forking

Here are the steps to fork the repository:

- Navigate to the GitHub Repository you want to fork.

- On the top right of the page under the header, click the fork button.

- This will create a duplicate of the full project in your GitHub Repository.

[Back to top](#contents)

## **Credits**

### Code Institute

This project is largely based on the [Code Institute Moments](https://github.com/Code-Institute-Solutions/moments) walkthrough project.
It contains some of the styles and logic from that project which have bee modified and customised for the purpose of MewMes project.

[Back to top](#contents)
