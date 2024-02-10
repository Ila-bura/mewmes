# MewMes

MewMes is a social media platform for cat lovers and meme enthusiasts alike. It was created using React and Django Rest Framework. The purpose of the site is to allow users to share cat memes and interact with memes posted by otehr users.

#

![amiresponsive](readme/amiresponsive.png)

- [Deployed Front-End page](https://mewmes-ila-3228af34fcea.herokuapp.com/)
- [Deployed Back-End page](https://mewmes-dc42376a8874.herokuapp.com/)
- [Back-End repository](https://github.com/Ila-bura/MewMes_API)

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
- [Info page](readme/Info.png)

[Back to top](#contents)

#

### **User Stories**

#### **Authentication**

1. Sign up: As a **user** I can **create an account** so that I can **access the features for signed up users**

2. Sign in: As a **user** I can **log in** so that I can **access features only available to logged in users**

3. Sign out: As a **user** I can **log out** so that I can **exit my account and prevent others from gaining access**

4. Refreshing access tokens: As a **user** I can **maintain my logged in status for 24 hours** so that I can **easily interact with the app throughout the day**.

#### **Navigation:**

5. As a **user** I can **quickly view my logged in/out status in the navbar** so that I can **decide on my next action**.

6. Routing: As a **user** I can **view the navbar on every page** so that I can **easily navigate through the site**.

7. Conditional Rendering: As a **logged out user** I can **view sign in and sign up options** so that I can **easily tell whether I am logged in and can log in easily if not**.

8. Avatar: As a **logged in user** I can **view my profile link and avatar image on the navbar** so that I can **quickly see that I am logged in**.

9. Viral profiles list: As a **logged in user** I can **view other user’s profile names and avatars** so that I can **easily identify and follow other users**.

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

#### Comments

19. Create a comment: As a **user** I can **leave a comment under a meme** so that I can **express my opinion and engage with the content and the community**.

20. Comment date: As a **user** I can **see the comment date** so that I can **know how long a go a comment was left**.

21. View comments: As a **user** I can **view other comments** so that I can **see what others have said**.

22. Edit comments: As a **user** I can **edit my comments** so that I can **revise the content, if necessary**.

23. Delete comments: As a **user** I can **delete my comments** so that I can **remove them, if necessary**.

#### Profiles

24. Profile page: As a **user** I can **view another user’s profile page** so that I can **see their memes and their bio**.

25. User stats: As a **user** I can **see stats on a user profile** so that I can **see how many memes/followers/following they have**.

26. Follow/Unfollow a user: As a **logged in user** I can **follow other users whose content is relevant or meaningful to me** so that I can **view content filtered by the users I follow**.

27. Edit Profile: As a **user** I can **edit my profile** so that I can **update my personal details and profile picture**.

28. Update username and password: As a **user** I can **update my username/password** so that I can **make changes as needed**.

[Back to top](#contents)

### **Design**

#### **Images**

- The images used for the profile avatar and the one that shows when no results are found, were taken from the Code Institute Moments walkthrough.

<details><summary>Avatar</summary>
<img src="readme/avatar.png" >
</details

<details><summary>No Results</summary>
<img src="src/assets/noresults.png" >
</details>

- The images used for the user profiles as well as the memes were all sourced from [Google Images](https://images.google.com/).

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

### **Logo**

- The logo was designed with [Canva](https://www.canva.com/) and customised to add the site name.
- The logo was used as the favicon for the webpage as well as the navbar logo home link.

<details><summary>Logo</summary>
<img src="src/assets/logo.png" >
</details

[Back to top](#contents)

#

### **Custom 404 page**

- The 404 page lets user's know they are still connected to the site but on a non-existent page.

The image used for the 404 Not Found page was created using [Canva](https://www.canva.com/)

<details><summary>Not Found</summary>
<img src="src/assets/notfound.png" >
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
- [Google fonts](https://fonts.google.com/)
- [Markdown TOC generator](https://magnetikonline.github.io/markdown-toc-generate/)

[Back to top](#contents)

### **Installed packages, libraries and components**

- [Axios](https://axios-http.com/): a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
- [jwt-decode](https://jwt.io/): is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): enables you to implement dynamic routing in a web app.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): a technique that automatically adds the next page as the user scrolls down through content, more content is loaded.
- ['Notification Container' component](https://www.npmjs.com/package/react-notifications): to provide real-time feedback and notify users of any changes they make to their data and content.
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/): an open-source tool for running technical website audits.
- [Am I Responsive?](https://ui.dev/amiresponsive): to ensure the project looked good across all devices.
- [HTML Markup Validation](https://validator.w3.org/): used to validate HTML code syntax.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/): used to validate CSS code syntax.
- [Balsamiq](https://balsamiq.com/): used to create mockups/wireframes of the project prior to starting.
- [Google Fonts](https://fonts.google.com/): a computer font and web font service owned by Google. This includes free and open source font families.
- [GitHub](https://github.com/): an Internet hosting service for software development and version control using Git.
- [Heroku](https://heroku.com/): a cloud platform as a service (PaaS) supporting several programming languages. Used to
  deploy and store for final deployment.
- Google Developer Tools - To troubleshoot and test features, solve issues with responsiveness and styling.
- [TinyPNG](https://tinypng.com/) - To compress images.

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

### **Introduction**

This project has been continuously tested throughout the development stages using the following features:

- Python terminal for backend functionalities
- Google Developer Tools
- Manual Testing

### **Validator Testing**

- All HTML files passed through the HTML checker with no errors.

<details><summary>HTML</summary>
<img src="readme/validation_HTML.png" >
</details>

- CSS files passed through the Jigsaw validator with one error. This was easily fixed by restoring the correct transform value.

<details><summary>CSS error</summary>
<img src="readme/css_error.png" >
</details>

- Once this error was fixed, I found some warnings:

![CSS Warnings](readme/css_warnings.JPG)

- The vendor extention warning can be ignored as it is simply an extension not supported by w3c standard css and can be ignored as it is not a code error: [source](https://stackoverflow.com/questions/21889767/warnings-from-w3c-validation-for-css-cant-find-the-warning-message-for-vendor).

* All JSX code was validated and corrected throughout the development of the project.

![screenshot](documentation/test_screenshots/EsLint.png)

#### **LightHouse testing**

- **For Desktop:**

  | Section   | Performance | Accessibility | Best Practices | SEO |
  | --------- | ----------- | ------------- | -------------- | --- |
  | Home      | 73          | 100           | 92             | 100 |
  | Post Page | 81          | 100           | 92             | 100 |
  | Feed      | 73          | 100           | 92             | 100 |
  | Saved     | 73          | 100           | 92             | 100 |
  | Sign Up   | 87          | 100           | 75             | 100 |
  | Sign in   | 87          | 100           | 75             | 100 |
  | Profile   | 83          | 100           | 92             | 100 |

- **For Mobile devices:**

  | Section   | Performance | Accessibility | Best Practices | SEO |
  | --------- | ----------- | ------------- | -------------- | --- |
  | Home      | 51          | 100           | 92             | 100 |
  | Post Page | 50          | 100           | 92             | 100 |
  | Feed.     | 53          | 100           | 92             | 100 |
  | Saved     | 51          | 100           | 92             | 100 |
  | Sign Up   | 53          | 100           | 83             | 100 |
  | Sign in   | 53          | 100           | 83             | 100 |
  | Profile   | 51          | 100           | 92             | 100 |

### **Manual Testing**

Manual testing for this project was carried out as follows:

- Users can see sign-in, sign-up, and about pages only when not logged in.
- Users can create a new account.
- Users can then, sign in to their account and then be redirected to the home page.
- Users can log out.
- Once signed in, users can create, vote, save, and reply to posts. They can edit and delete their posts and replies.
- Users can edit and update their profiles, which include a profile picture, bio entry, and a separate username and password edit feature.
- All NavLinks and buttons go to their destination.
- Clicking on the post image brings you to the post's page.
- You can vote, downvote and save and also undo all of these actions if you change your mind.
- Once you hover over the votes/replies/save icons, they let you know if you need to sign-in to use this feature, and once clicked on if the user is signed out, you will be redirected to the sign-in page.
- The user is notified of what each icon represents. In each post page, if the user is the owner, the three dots to the right side of the post image will bring up the edit and delete feature, both icons have an overlay trigger to indicate which one does what feature.
- The site was continuously built on google chrome, and once built, it was successfully tested on firefox browser, and safari browser. The only issue found on safari was the inability to sign-in properly, which was resolved after some research on Slack. (mentioned and detailed in the fixed bugs section below)

### **User story testing**

**User story:**

## **Bugs**

### **Bugs encountered during development**

[Back to top](#contents)

### **Unresolved bugs**

- No unfixed bugs to report during the production of this project.

- One thing to note is when doing the lighthouse report, best practices for the sign-in and sign-up page show a result of 75, the image shows up tagged as low resolution.
- There are errors in the console of these pages, that were also brought up during the walkthrough Moments. The errors are as follows:

_Failed to load resource: the server responded with a status of 401 (Unauthorized)_

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
