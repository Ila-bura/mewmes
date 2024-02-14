# MewMes

MewMes is a social media platform for cat lovers and meme enthusiasts alike. The purpose of the site is to allow users to share cat memes and interact with memes posted by other users. MewMes was created using React and Django Rest Framework.

#

![amiresponsive](readme/amiresponsive.png)

- [MewMes Deployed Front-End Page](https://mewmes-ila-3228af34fcea.herokuapp.com/)
- [MewMes Deployed Back-End Page](https://mewmes-dc42376a8874.herokuapp.com/)
- [Back-End repository](https://github.com/Ila-bura/MewMes_API)

## **Contents**

- [Planning and Project Conception](#planning-and-project-conception)
  - [Project Goals](#project-goals)
  - [Site Goals](#site-goals)
  - [Future Goals](#future-goals)
  - [GitHub Project Board](#github-project-board)
  - [Github Issues](#github-issues)
  - [Wireframes](#wireframes)
    - [List of Wireframe pages](#list-of-wireframe-pages)
  - [User Stories](#user-stories)
    - [Authentication](#authentication)
    - [Navigation](#navigation)
    - [Memes](#memes)
    - [Comments](#comments)
    - [Profiles](#profiles)
  - [Design](#design)
    - [Images](#images)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Logo](#logo)
  - [NavBar](#navbar)
  - [Home Page](#homepage)
  - [Meme Page](#memepage)
  - [Info Page](#infopage)
  - [Add Meme](#addmeme)
  - [Feed](#feed)
  - [Saved](#saved)
  - [Profile Page](#profilepage)
  - [Sign In](#signin)
  - [Sign Up](#signup)
  - [No Results Found](#no-result-found)
  - [Custom 404 page](#custom-404-page)
  - [Real Time Notification](#realtime-notification)
  - [CRUD](#crud)
  - [Defensive Design](#defensive-design)
  - [Future Features](#future-features)
- [Technologies](#technologies)
  - [Languages used](#languages-used)
  - [Databases](#databases)
  - [Cloud storage and deployment services](#cloud-storage-and-deployment-services)
  - [Frameworks, tools and libraries](#frameworks-tools-and-libraries)
    - [API Back-End](#api-back-end)
    - [Front-End](#front-end)
  - [Installed packages, libraries and components](#installed-packages-libraries-and-components)
- [Components](#components)
- [Testing](#testing)
  - [Introduction](#introduction)
- [Validator Testing](#validator-testing)
  - [HTML Validation](#html-validation)
  - [CSS Validation](#css-validation)
  - [JSX Validation](#jsx-validation)
- [Lighthouse Testing](#lighthouse-testing)
- [Manual Testing](#manual-testing)
  - [User Story Testing](#user-story-testing)
- [Automated Testing](#automated-testing)
- [Bugs](#bugs)
  - [Fixed Bugs](#fixed-bugs)
  - [Unresolved bugs](#unresolved-bugs)
- [Deployment](#deployment)
  - [Initial Deployment](#initial-deployment)
  - [Deployment Steps](#deployment-steps)
  - [Final Deployment](#final-deployment)
  - [Cloning](#cloning)
  - [Forking](#forking)
- [Credits](#credits)
  - [Code Institute](#code-institute)
  - [Sources](#sources)
  - [Media](#media)
- [Acknowledgments](#acknowledgments)

## **Planning and Project Conception**

### **Project Goals**

### **Site Goals**

- To build an online community around a common interest of cat memes.
- To allow community members to share their favourite memes and interact with each other using the reactions and comment features.
- To allow community members to follow other users whose content is interesting to them.
- To allow users to save their favourite memes.

### **Future Goals**

- Add the functionality to like user's comments.
- Allow profile's owners to delete their own profile.

[Back to top](#contents)

#

#### **GitHub Project Board**

This project was designed using agile methodologies.
User stories are recorded on the GitHub [Project Board](https://github.com/users/Ila-bura/projects/22/views/1).

[Back to top](#contents)

#### **Wireframes**

- The plan for this project is loosely based on the Code Institute Moments walkthrough project.
- Most of the UI is based on similar features and functionality but customised for the specific purposes of MewMes - a cat meme sharing platform.

#### **List of Wireframe pages**

<details><summary>Home Page on Desktop</summary>
  <img src="readme/homepage_desktop.png" >
  </details>

<details><summary>Home Page on Mobile</summary>
  <img src="readme/homepage_mobile.png" >
  </details>

<details><summary>Sign Up Page</summary>
  <img src="readme/signup.png" >
  </details>

<details><summary>Sign In Page</summary>
  <img src="readme/signin.png" >
  </details>

<details><summary>User Profile</summary>
  <img src="readme/userprofile.png" >
  </details>

<details><summary>Info Page</summary>
  <img src="readme/Info.png" >
  </details>

[Back to top](#contents)

#

### **User Stories**

#### **Authentication**

1. Sign up: as a user I can create an account so that I can access the features for signed up users.

2. Sign in: as a user I can log in so that I can access features only available to logged in users.

3. Sign out: as a user I can log out so that I can exit my account and prevent others from gaining access.

4. Refreshing access tokens: as a user I can maintain my logged in status for 24 hours so that I can easily interact with the app throughout the day.

#### **Navigation:**

5. As a logged in user I can easily view my logged in or out status in the navbar so that I can decide on my next action.

6. Routing: as a user I can view the navbar on every page so that I can easily navigate through the site.

7. Conditional Rendering: as a logged out user I can view sign in and sign up options so that I can easily tell whether I am logged in and can log in easily if not.

8. Avatar: as a logged in user I can view my profile link and avatar image in the navbar so that I can quickly check that I am logged in.

9. Viral profiles list: as a logged in user I can view other user’s profile names and avatars so that I can easily identify and follow other users.

#### **Memes**

10. Create a meme: as a logged in user I can create a new meme so that I can share my best memes with the world.

11. Edit a meme: as a logged in user I can edit my own memes so that I can revise my content, if necessary.

12. Delete a meme: as a logged in user I can delete my own memes so that I can remove content I have posted, if necessary.

13. View most recent memes: as a user I can view all the most recent memes, ordered by most recently created first so that I can immediately be up to date with the newest content.

14. View meme detail: as a logged in user I can view individual meme details so that I can view more details and comments about the meme.

15. React to a meme: as a logged in user I can laugh or unlike a meme so that I can quickly show my reaction to another users content.

16. Save memes: as a logged in user I can save a meme so that I can easily find all the memes I might want to view again at a later stage.

17. View saved memes: as a logged in user I can view saved memes so that I can easily find all the memes that interested me under the Saved section.

18. Search memes: As a user I can search meme and users with keywords so that I can find the memes and user profiles I am most interested in.

#### Comments

19. Create a comment: as a logged in user I can leave a comment under a meme so that I can express my opinion and engage with the content and the community.

20. View comment date: as a user I can see the comment date so that I know how long a go a comment was left.

21. View comments: as a user I can view other comments so that I can see what others have said.

22. Edit comments: as a logged in user I can edit my own comments so that I can revise the content, if necessary.

23. Delete comments: as a logged in user I can delete my own comments so that I can remove them, if necessary.

#### Profiles

24. Profile page: as a user I can view another user’s profile page so that I can see their memes and their bio.

25. User stats: as a user I can see stats on a user profile so that I can see how many memes, followers and following users they have.

26. Follow/Unfollow a user: as a logged in user I can follow other users whose content is relevant or meaningful to me so that I can view content filtered by the users I follow.

27. Edit Profile: as a logged in user I can edit my profile so that I can update my personal details and profile picture.

28. Update username and password: as a logged in user I can update my username and password so that I can make changes as needed.

[Back to top](#contents)

### **Design**

#### **Images**

The images used for the profile avatar and the one that shows when no results are found, were sourced from the Code Institute Moments walkthrough.

<details><summary>Avatar</summary>
<img src="readme/avatar.png" >
</details>

<details><summary>No Results</summary>
<img src="src/assets/noresults.png" >
</details>

The images used for the user profiles as well as the memes were all sourced from [Google Images](https://images.google.com/).

The favicons were created on [Favicon.io](https://favicon.io/).

#### **Colour Scheme**

The colour palette was generated with Canva, to match the colours of the logo.

<details><summary>Colour Scheme</summary>
<img src="readme/colour_palette.png" >
</details>

#### **Typography**

The two font families used were obtained from the Google Fonts library:

1. Comfortaa
2. Outfit

[Back to top](#contents)

## **Features**

### **Existing Features**

### **Logo**

The logo was designed with [Canva](https://www.canva.com/) and customised to add the site name.
The logo was also used as the favicon for the webpage as well as the navbar logo home link.

<details><summary>Logo</summary>
<img src="src/assets/logo.png" >
</details>

### **NavBar**

NavBar, when the user is not logged in.

<details><summary>Logged Out NavBar</summary>
<img src="readme/loggedout_navbar.png" >
</details>

NavBar, when the user is logged in.

<details><summary>Logged In NavBar</summary>
<img src="readme/loggedin_navbar.png" >
</details>

### **Home Page**

The landing page, with the "Most viral profiles" sidebar.

<details><summary>Logged In NavBar</summary>
<img src="readme/landing.png" >
</details>

### **Meme Page**

When clicking on a single meme, user is directed to that meme's page, which still features the most viral profiles sidebar.
Under the meme, the first three icons represent the action a user can take:

- The pin icon is for saving the meme, which can be viewed in the "Saved" section from the NavBar. You need to be logged in to save a meme. When you save a meme, this will be indicated by the "pinned" icon, which turns to a solid shade once it's clicked and if clicked again, this will undo the action of saving the meme.
- The laughing and crying icons are for reacting to the meme. Each icon turns to a solid shade, once a user has clicked on it and will also undo the action if clicked on again. The number next to the icon indicates how many users added their reaction.
- The comment icon displays the number of comments for that meme.

Underneath the meme, the comment section shows all the comments users left for any given meme.

**Single meme page, when the user is not logged in**

- When a logged out user hovers on the pin icon, an overlay message is displayed encouraging logging in to be able to save memes.
- When a logged out user hovers on the laughing or crying icons, an overlay message is displayed encouraging logging in to be able to react to memes.
- When a logged out user hovers on the comment icon, an overlay message is displayed encouraging logging in to be able to comment on memes.

If they click on any of the icons, they are redirected to the Sign In page.
Logged out user do not have the opportunity to leave a comment.

<details><summary>Logged Out Meme Page</summary>
<img src="readme/loggedout_meme.png" >
</details>

**Single meme page, when the user is logged in**

<details><summary>Logged In Meme Page</summary>
<img src="readme/meme_page.png" >
</details>

In the comment section logged in users have the opportunity to publish a comment.
After having published a comment, three vertical dots are displayed on the side of their comment: when clicked, users can edit or delete their own comments.

<details><summary>Logged In Comment Delete</summary>
<img src="readme/owner_comment.png" >
</details>

<details><summary>Logged In Comment Edit</summary>
<img src="readme/owner_edit_comment.png" >
</details>

**Single meme page, when the user is logged in and the owner of the meme**

If a user is the owner of the meme, three vertical dots are displayed on the side of the meme image: when clicked, users can edit or delete their meme.

<details><summary>Logged In Owner Meme Page</summary>
<img src="readme/owner_meme_page.png" >
</details>

<details><summary>Logged In Owner Meme Edit</summary>
<img src="readme/owner_edit_meme.png" >
</details>

### **Info Page**

Here you will find a few engaging lines to describe MewMes to the uninitiated. The icon and link to this page will only appear in the NavBar to logged out users.

<details><summary>Info Page</summary>
<img src="readme/info_page.png" >
</details>

### **Add Meme**

This is where logged in users can upload an image of their meme and complete the Title and Content sections, before clicking on the "Create" button to post their meme.

<details><summary>Add Meme</summary>
<img src="readme/add_meme.png" >
</details>

### **Feed**

The Feed consists of memes created by users that you follow.
If the logged in user is not following anyone, the no results found message is displayed, encouraging them to start following someone.

<details><summary>Feed Page</summary>
<img src="readme/feed.png" >
</details>

<details><summary>No Followers Feed Page</summary>
<img src="readme/no_feed.png" >
</details>

### **Saved**

The Saved page consists of memes the user has saved by clicking on the pin icon.
If the logged in user hasn't saved any memes yet, the no results found message is displayed, encouraging them to save a meme.

<details><summary>Saved Page</summary>
<img src="readme/saved.png" >
</details>

<details><summary>No Saved Page</summary>
<img src="readme/no_saved.png" >
</details>

### **Profile Page**

The profile page shows the profile owner's avatar or image, the stats reporting the number of posted memes, the number of followed and following profiles. There is also a bio section, under which all the memes the owner of that given profile has added.

On the left-hand side, the section displaying the most viral profiles is visibie.
If the user is logged in, the button "Follow/Unfollow me" is displayed at the top of the profile section.

If the logged in user is also the owner of that given profile, the three bar icon is displayed on the top right corner. By clicking on it, the profile owner is able to edit or delete their profile.

<details><summary>Logged Out Profile Page</summary>
<img src="readme/loggedout_profile_page.png" >
</details>

<details><summary>Logged In Profile Page</summary>
<img src="readme/loggedin_profile_page.png" >
</details>

<details><summary>Profile Page by Owner</summary>
<img src="readme/owner_profile_page.png" >
</details>

### **Sign In**

Sign in page with a link to sign up for an account if the user does not have an account yet.

<details><summary>Sign In Page</summary>
<img src="readme/signin_page.png" >
</details>

### **Sign Up**

Sign up page with a link to sign in if the user already has an account.

<details><summary>Sign Up Page</summary>
<img src="readme/signup_page.png" >
</details>

### **No results found**

The "No results image" is displayed in these scenarios:

- The keyword entered in the search bar does not exist:

<details><summary>No Result Search Bar</summary>
<img src="readme/noresult_keyword.png" >
</details>

- In the user's Saved page, when no memes have been saved yet:

<details><summary>No Result Saved</summary>
<img src="readme/noresult_saved.png" >
</details>

- In the user's Feed page, if the user does not follow anyone:

<details><summary>No Result Feed</summary>
<img src="readme/noresult_feed.png" >
</details>

- On the user's profile page, if no memes have been added yet:

<details><summary>No Result Profile</summary>
<img src="readme/noresult_profile.png" >
</details>

### **Custom 404 page**

The 404 page lets users know they are still connected to the site but on a non-existent page.

The image used for the 404 Not Found page was created using [Canva](https://www.canva.com/)

<details><summary>Not Found</summary>
<img src="src/assets/notfound.png" >
</details>

### **Real Time Notification**

The user is notified in real time with a range of pop up messages appearing on the top right corner of the screen. These notifications inform users of a change of their content or when user's action is required.

After signing up, the user is encouraged to sign in.

<details><summary>Signed Up Notification</summary>
<img src="readme/info_notification.png" >
</details>

The user is successfully logged in.

<details><summary>Logged In Notification</summary>
<img src="readme/notification_loggedin.png" >
</details>

The user is successfully logged out.

<details><summary>Logged Out Notification</summary>
<img src="readme/notification_loggedout.png" >
</details>

A meme is successfully created.

<details><summary>Meme Created Notification</summary>
<img src="readme/meme_created.png" >
</details>

A meme is successfully edited.

<details><summary>Meme Edited Notification</summary>
<img src="readme/meme_edit_confirmation.png" >
</details>

Confirmation is necessary to delete a meme.

<details><summary>Meme Deletion Confirmation</summary>
<img src="readme/meme_delete_confirmation.png" >
</details>

A meme is successfully deleted.

<details><summary>Meme Deleted Notification</summary>
<img src="readme/meme_delete_success.png" >
</details>

A comment is successfully published.

<details><summary>Comment Published Notification</summary>
<img src="readme/comment_published.png" >
</details>

A comment is successfully edited.

<details><summary>Comment Edited Notification</summary>
<img src="readme/comment_edited.png" >
</details>

Confirmation is necessary to delete a comment.

<details><summary>Comment Deletion Confirmation</summary>
<img src="readme/comment_delete_confirmation.png" >
</details>

A comment is successfully deleted.

<details><summary>Comment Deleted Notification</summary>
<img src="readme/comment_deleted.png" >
</details>

User profile is successfully edited.

<details><summary>Profile Updated</summary>
<img src="readme/profile_updated.png" >
</details>

User username is successfully updated.

<details><summary>Username Updated</summary>
<img src="readme/username_updated.png" >
</details>

User password is successfully updated.

<details><summary>Password Updated</summary>
<img src="readme/password_updated.png" >
</details>

[Back to top](#contents)

### **CRUD**

The CRUD functionalities implemented in this project are the following:

- Once signed up to an account, the user can update their profile with a profile picture and a bio. They can also update their username and password from the profile page.
- Once a meme has been created, the owner of the meme can update or delete their meme. The three dots on the right of the post's image will either delete the post (and bring you back to the home page once this is done) or edit the meme, bringing the user to an edit meme form.
- Once a comment to a meme is created, the comment creator can delete or edit their comment. If user chooses to edit their comment, an edit form lets the user modify their comment and either save or cancel the edit.
- Users can positively or negatively react to memes as well as save memes. These actions can always be undone, should the user change their mind at a later stage.
- Users can also follow and unfollow other users.

[Back to top](#contents)

### **Defensive Design**

When creating a new account, the following error message will appear if any of the inputs are left blank:

<details><summary>Blank Input Error</summary>
<img src="readme/blank_input_error.png" >
</details>

Login attempts with the wrong credentials will trigger the following error message:

<details><summary>Sign Up Error</summary>
<img src="readme/error_notification1.png" >
</details>

Sign up attempts with a common password will trigger the following error message:

<details><summary>Common Password</summary>
<img src="readme/error_notification.png" >
</details>

Sign up attempts using existing credentials will trigger the following error message:

<details><summary>Existing User Error</summary>
<img src="readme/error_notification2.png" >
</details>

Attempts to save or react to one's own memes will show the following messages, when hovering on the relevant icons:

<details><summary>Overlay Message Save</summary>
<img src="readme/overlay_trigger1.png" >
</details>

<details><summary>Overlay Message Laugh</summary>
<img src="readme/overlay_trigger2.png" >
</details>

<details><summary>Overlay Message Cry</summary>
<img src="readme/overlay_trigger3.png" >
</details>

In the "Add meme" page, leaving the title input blank will trigger the following error message:

<details><summary>Blank Title</summary>
<img src="readme/blank_title.png" >
</details>

In the "Add meme" page, failing to add an image will trigger the following error message:

<details><summary>Blank Image</summary>
<img src="readme/blank_image.png" >
</details>

### **Future Features**

- Registered users might find it useful to be able to delete their own account.
- Another future that might be useful to implement is giving signed in users to ability to like other people's comments.

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
  Used to store media files and images.
- [Heroku](https://www.heroku.com/)
  Used to host the deployed site.
- [ElephantSQL](https://www.elephantsql.com/)
  Used to host and operate the PostgresSQL database.

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

1. axiosDefault.js : used to send http requests to the backend API in the case of user crud actions or get requests for a specific object or list of objects.
2. Asset.js : used to export the loading spinner when required.
3. Avatar.js : used to export users' avatar image to the most viral profiles list, profile page and navbar profile link.
4. MoreDropdown.js : used to display menu to authorised users with options to edit and delete memes, comments and profile details.
5. CurrentUserContext.js : used to confirm users logged-in status to determine what functionality is available to that user.
6. ProfileDataContext.js : used to provide follow and unfollow ability to authorised user via PopularProfiles component and ProfilePage component.
7. useRedirect.js : used to redirect a user to another page if they are not authorised to be on the page they are trying to access.
8. useClickOutsideToggle.js : implemented for the mobile dropdown nav component, which allows users to close the expanded navbar by tapping or clicking outside the navbar.
9. utils.js : used to supply functionality to all of the components that utilise the Infinite Scroll.
10. 404.js : used to display an error image and a message if an invalid page is typed in. After a few seconds the user is redirected to the Home page.

[Back to top](#contents)

## **Testing**

### **Introduction**

This project has been continuously tested throughout the development stages using the following features:

- Python terminal for backend functionalities
- Google Developer Tools
- Manual Testing

### **Validator Testing**

## HTML Validation

All HTML files passed through the HTML checker with no errors.

<details><summary>HTML</summary>
<img src="readme/validation_HTML.png" >
</details>

## CSS Validation

CSS files passed through the Jigsaw validator with one error. This was easily fixed by restoring the correct transform value.

<details><summary>CSS error</summary>
<img src="readme/css_error.png" >
</details>

Once this error was fixed, some warnings were displayed:

<details><summary>CSS warnings</summary>
<img src="readme/css_warnings.png" >
</details>

The vendor extension warning can be ignored as it is simply an extension not supported by w3c standard css and can be ignored as it is not a code error: [source](https://stackoverflow.com/questions/21889767/warnings-from-w3c-validation-for-css-cant-find-the-warning-message-for-vendor).

### JSX Validation

All JSX code was validated and corrected throughout the development of the project.
Most of the code validation was done through the CodeAnywhere IDE problems tab and with the help of the Prettier code formatting extension.

<details><summary>Successfully Compiled message</summary>
<img src="readme/compiled.png" >
</details>

For good measure, I ran the JSX files through this [eslint](https://eslint.org/play/).
These are the settings used for this validator in order not to get unrelated JavaScript errors as a result of the html tags in JSX.

<details><summary>Settings</summary>
<img src="readme/eslint_settings.png" >
</details>

This was not an ideal way to validate due to the fact that it is bound to throw unused variable and undefined variable errors because of the nature of importing and exporting components and variables between the different files.
The below error types were ignored and no syntax errors were found.

<details><summary>ESLint errors</summary>
<img src="readme/jsx_errors.png" >
</details>

#### **Lighthouse Testing**

**For Desktop:**

| Section   | Performance | Accessibility | Best Practices | SEO |
| --------- | ----------- | ------------- | -------------- | --- |
| Home      | 89          | 94            | 95             | 100 |
| Meme Page | 95          | 94            | 95             | 100 |
| Feed      | 95          | 94            | 100            | 100 |
| Saved     | 95          | 94            | 100            | 100 |
| Sign Up   | 98          | 94            | 91             | 100 |
| Sign in   | 98          | 94            | 95             | 100 |
| Profile   | 97          | 100           | 100            | 100 |
| Add Meme  | 99          | 94            | 95             | 100 |
| Info      | 100         | 93            | 95             | 100 |

<details><summary>Home on Desktop</summary>
<img src="readme/home_desktop.png" >
</details>

<details><summary>Meme page on Desktop</summary>
<img src="readme/meme_desktop.png" >
</details>

<details><summary>Feed on Desktop</summary>
<img src="readme/feed_desktop.png" >
</details>

<details><summary>Saved on Desktop</summary>
<img src="readme/saved_desktop.png" >
</details>

<details><summary>Sign Up on Desktop</summary>
<img src="readme/signup_desktop.png" >
</details>

<details><summary>Sign In on Desktop</summary>
<img src="readme/signin_desktop.png" >
</details>

<details><summary>Profile on Desktop</summary>
<img src="readme/profile_desktop.png" >
</details>

<details><summary>Add Meme on Desktop</summary>
<img src="readme/addmemes_desktop.png" >
</details>

<details><summary>Info on Desktop</summary>
<img src="readme/info_desktop.png" >
</details>

**For Mobile devices:**

| Section   | Performance | Accessibility | Best Practices | SEO |
| --------- | ----------- | ------------- | -------------- | --- |
| Home      | 72          | 100           | 95             | 100 |
| Meme Page | 74          | 94            | 95             | 100 |
| Feed      | 75          | 100           | 100            | 100 |
| Saved     | 74          | 100           | 100            | 100 |
| Sign Up   | 85          | 94            | 91             | 100 |
| Sign in   | 86          | 94            | 95             | 100 |
| Profile   | 79          | 100           | 100            | 100 |
| Add Meme  | 82          | 100           | 91             | 100 |
| Info      | 90          | 100           | 95             | 100 |

<details><summary>Home on Mobile</summary>
<img src="readme/home_mobile.png" >
</details>

<details><summary>Meme page on Mobile</summary>
<img src="readme/meme_mobile.png" >
</details>

<details><summary>Feed on Mobile</summary>
<img src="readme/feed_mobile.png" >
</details>

<details><summary>Saved on Mobile</summary>
<img src="readme/saved_mobile.png" >
</details>

<details><summary>Sign Up on Mobile</summary>
<img src="readme/signup_mobile.png" >
</details>

<details><summary>Sign In on Mobile</summary>
<img src="readme/signin_mobile.png" >
</details>

<details><summary>Profile on Mobile</summary>
<img src="readme/profile_mobile.png" >
</details>

<details><summary>Add Meme on Mobile</summary>
<img src="readme/addmemes_mobile.png" >
</details>

<details><summary>Info on Mobile</summary>
<img src="readme/info_mobile.png" >
</details>

### **Manual Testing**

Manual testing for this project was carried out as follows:

- Users can see sign-in, sign-up, and info pages only when not logged in. ✅
- Users can create a new account. ✅
- Users can then, sign in to their account and then be redirected to the home page.✅
- Users can log out. ✅
- Once signed in, users can create, vote, save, and reply to memes. They can edit and delete their memes and replies. ✅
- Users can edit and update their profiles, which include a profile picture, bio entry, and a separate username and password edit feature. ✅
- All NavLinks and buttons go to their expected destination. ✅
- Clicking on the meme image brings you to the meme's page. ✅
- You can save and react to a meme; you can also undo all of these actions if you change your mind. ✅
- Once you hover over the reactions and save icons, a message will let you know if you need to sign-in to use these features, and once clicked on if the user is signed out, you will be redirected to the sign-in page. ✅
- The user is notified of what each icon represents. In each meme page, if the user is the owner, the three dots to the right side of the meme image will bring up the edit and delete features, both icons have an overlay trigger to indicate which one does what feature. ✅
- The site was continuously built on Google Chrome, and once built, it was successfully tested on Firefox browser, and Safari browser. ✅

### **User story testing**

**User story:**

1: User: Navigation - _"As a user I can view a NavBar from every page so that I can navigate easily between pages."_ ✅

2: User: Routing - _"As a user I can navigate through pages quickly and easily so that I can view content without page refresh."_ ✅

3: User: Authentication - Sign up - _"As a user I can create a new account so that I can access all the features for signed up users."_
✅

4: User: Authentication - Sign in - _"As a user I can sign in to the app so that I can access functionality and features for logged in users."_ ✅

5: User: Authentication - Logged in Status - _"As a user I can always tell if I am logged in or not so that I can log in to use features."_ ✅

6: User: Authentication - Refreshing access tokens - _"As a user I can maintain my logged-in status (for 24hrs) until I choose to log out so that my user experience is not compromised."_ ✅

7: User: Navigation: Conditional rendering - _"As a logged out user I can see sign in/sign up options so that I can easily sign in/sign up."_ ✅

8: User: Avatar - _"As a user I can view other user's avatars so that I can easily identify users of the application."_ ✅

9: User: Create memes - _"As a logged in user I can create memes so that I can share my content with my followers and the app users."_ ✅

10: User: View a meme - _"As a user I can view the details of a single meme so that I can read more about it."_ ✅

11: User: Save and react to a meme - _"As a logged in user I can save and react to a meme so that I can interact with the meme creators and show my preferences."_ ✅

12: User: View most recent memes in order - _"As a user I can view all the most recent memes, ordered by most recently created first so that I am up to date with the most recent content."_ ✅

13: User: Searchbar filter - _"As a user, I can search for memes using keywords, so that I can find the memes and user profiles that I prefer."_ ✅

14: User: View saved memes - _"As a logged in user I can view the memes I saved and reacted to so that I can find the memes that I love."_ ✅

15: User: View memes of followed users - _"As a logged in user I can view content filtered by users I follow so that I can keep up to date with them specifically."_ ✅

16: User: Infinite scroll - _"As a user I can keep scrolling through the memes on the site, which are loaded automatically so that there is no need for a "next page/previous page" option."_ ✅

17: User: Meme page - _"As a user I can view the single meme page so that I can read the comments specifically about that meme."_ ✅

18: User: Edit/delete meme - _"As a meme owner I can edit/delete my meme title, description and image so that I can make corrections or update my meme after it was created."_ ✅

19: User: Create a comment - _"As a logged in user I can add comments to a meme so that I can share my opinions about the meme and interact with the community."_ ✅

20: User: View comment date - _"As a user I can see how long ago a comment was made so that I know how recent a comment is."_ ✅

21: User: View comments - _"As a user I can read comments on memes so that I can read what other users think about the memes and reply to them accordingly."_ ✅

22: User: Edit/delete a comment - _"As an owner of a comment I can edit and/or delete my comment so that I can edit/remove my comment from the application."_ ✅

23: User: Like a comment - _"As a logged in user I can like or unlike a comment to show that I agree with it."_ - Future implementation. ⏸️

24: User: View profile page - _"As a user I can view other user's profiles so that I can see their memes and bio and read more about them."_ ✅

25: User: Most popular profiles - _"As a user I can see a list of the most followed profiles so that I can see which profiles are popular and see their memes."_ ✅

26: User: User profile - view user stats - _"As a user I can view statistics about a specific user: bio, number of memes, followers and users followed so that I can read more about them."_ ✅

27: User: Follow/Unfollow a user - _"As a logged in user I can follow and unfollow users so that I can see and remove memes by specific users in my memes feed."_ ✅

28: User: View/filter all memes by a specific user - _"As a user I can view all the memes by a specific user by filtering so that I can catch up on their latest posts, or decide to follow them."_ ✅

29: User: Edit profile - _"As a logged in user I can edit my profile so that I can change my profile picture, name and bio to keep my followers updated."_ ✅

30: User: Delete profile - _"As a logged in user I can delete my profile in case I decide to leave this social media."_ - Future implementation. ⏸️

31: Update username and password - _"As a logged in user I can update my username and password so that I can change my display name and keep my profile more secure."_ ✅

32: Admin: Complete README documentation - _"Complete README, documenting sources, frontend and frameworks used."_ ✅

33: User: remove reaction/unsave a meme - _"As a user I can remove my reaction/unsave a meme so that I can change what I see in my saved feed."_ ✅

The link To GitHub KanBan Project - [here](https://github.com/users/Ila-bura/projects/22/views/1)

### **Automated Testing**

This project includes automated tests to ensure the functionality of the NavBar component. The tests were written following the Code Institute Moments walkthrough, using Jest and React Testing Library.
To run the automated tests, the following steps were taken:

- Install dependencies: npm install
- Run tests: npm test

**Test Cases**

**Test 1: Renders NavBar**
Description: This test checks if the NavBar component renders correctly.
Steps:

- Render the NavBar component within a Router component.
- Find the "Sign In" link in the NavBar.
- Expected Outcome: The "Sign In" link should be present in the rendered NavBar.

<details><summary>Test 1</summary>
<img src="readme/test1.png" >
</details>

**Test 2: Renders links to the user profile for logged-in users**
Description: This test verifies that links to the user profile are rendered when a user is logged in.
Steps:

- Render the NavBar component within a Router and CurrentUserProvider component.
- Find the user profile avatar.
- Expected Outcome: The user profile avatar should be present in the NavBar.

<details><summary>Test 2</summary>
<img src="readme/test2.png" >
</details>

**Test 3: Renders "Sign In" and "Sign Up" buttons on log out**
Description: This test ensures that the "Sign In" and "Sign Up" buttons are rendered when a user logs out.
Steps:

- Render the NavBar component within a Router and CurrentUserProvider component.
- Find the "Log out" link and simulate a click event.
- Find the "Sign In" and "Sign Up" links.
- Expected Outcome: The "Sign In" and "Sign Up" links should be present in the NavBar after logging out.

<details><summary>Test 3</summary>
<img src="readme/test3.png" >
</details>

## **Bugs**

### **Fixed bugs and solutions**

- The first deployment attempt failed and I came across an error message suggesting a CORS (Cross-Origin Resource Sharing) issue. After rewatching the Code Institite walkthrough instructions and reserching the issue in Slack, I managed to correctly configure CORS settings in the back-end Settings.py file.

- While testing on Safari mobile, there was an issue with logging in through Safari: once a new user was created and logged in with the correct credentials, the system would redirect back to the sign-in page.

Solution: Upon researching the matter using Slack, I found the issue was with the JWT json web token as a HTTP-only cookie in the browser. This was solved by enabling "Allow cross-website tracking" in Safari settings.

[Back to top](#contents)

### **Unresolved bugs**

- There are errors in the console of these pages, that were also mentioned in the Code Institute Moments walkthrough as expected. The errors read:

_Failed to load resource: the server responded with a status of 401 (Unauthorized)_

- When testing the functionalities of the app, I came across some unexpected behaviour. As a logged out user, when I open a single meme post and I hover on the icons for saving and reacting to a meme, the overlay trigger message is showed at the top left corner of the screen. This appears to happen even if the property "bottom" is correctly set in the code.The same behaviour can be reproduced also on mobile testing. A relevant ticket was kept open in the MewMes Stories board in GitHub.

It is worth noting that this bug does not affect the functionality of the app in the slightest.

<details><summary>Overlay Trigger expected behaviour</summary>
<img src="readme/expected.png" >
</details>

<details><summary>Overlay Trigger unexpected behaviour</summary>
<img src="readme/unexpected.png" >
</details>

- Not a bug but worth mentioning that when running the Lighthouse reports, Performance rating for pages with multiple images scored generally on the lower side, especially on Mobile devices.

[Back to top](#contents)

## Deployment

### Initial Deployment

- Navigate to Heroku for initial deployment
- Click on the "new" dropdown and select "Create new app"
- Give the app a name and select the region, I selected Europe for this app.
- Click the Create app button
- Under the "Deploy" tab, click on github for deployment method and connect the app to the [MewMes](https://github.com/Ila-bura/mewmes/tree/main) github repository.
- Once the app is connected to the correct github repository, click "Deploy Branch" and open the app in the browser to make sure it works.

[Back to top](#contents)

### Deployment Steps

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

### Forking

Here are the steps to fork the repository:

- Navigate to the GitHub Repository you want to fork.

- On the top right of the page under the header, click the fork button.

- This will create a duplicate of the full project in your GitHub Repository.

[Back to top](#contents)

## **Credits**

### Code Institute

This project is largely based on the [Code Institute Moments](https://github.com/Code-Institute-Solutions/moments) walkthrough project.
It contains some of the styles and logic from that project which have been modified and customised for the purpose of the MewMes project.

### Sources

- [Stack Overflow](https://stackoverflow.com/)
- [Slack](https://www.slack.com/) - to look up how to fix common bugs.
- [W3 Schools](https://www.w3schools.com/)
- [educative.io](https://www.educative.io/answers/how-to-handle-react-notifications) - to learn how to implement React notifications.
- [davidhu.io](https://www.davidhu.io/react-spinners/storybook/?path=/docs/beatloader--main) - to learn how to implement the BeatLoader spinner.

### **Media**

The majority of the images used to populate the content of this website was sourced on Google and Google Images. Some more pictures were also souced from:

- [boredpanda](https://www.boredpanda.com/)
- [Friends of the Animal Village](https://www.friendsoftheanimalvillage.org/)
- [Pinterest](https://www.pinterest.com/)

[Back to top](#contents)

## **Acknowledgements**

- My mentor at Code Institute - Martina Terlevic.
- Using CodeAnywhere as my IDE during the development of this project has been incredibily challenging: on several occasions infinite long loading times greatly slowed down my project progress. A big token of appreciation to Bruno from CodeAnywhere support who provided assistance, whenever he could.
