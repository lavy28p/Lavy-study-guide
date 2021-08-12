# Lavy-study-guide
Lavy-study-guide

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

## Overview
Lavy's Study Guide website helps to quickly browse through snippets of videos and interview questions for Backend and Frontend applications. For Start , I'm posting Ruby and PostgreSql materials. This is mainly for short videos and interview questions/answers to go through quickly just before any interviews when the time is really short.

## MVP

1. Complete Backend functionality: 
   - Setup database for users, questions, comment tables
   - Complete CRUD operations
2. Complete Auth functionality:
   - Complete authentication for signup
   - Complete authentication for signin
   - Complete restriction for users to perform CRUD
3. Complete Frontend functionality:
   - Complete proper links to all pages
   - Render data on all pages
   - Allow user to add data on required pages 
   - Allow user to edit data on required pages 
   - Allow user to delete data on required pages 
   - Complete all components with basic css
 4.  Deploy Backend and Frontend


### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                                                          |
| :--------------: | :------------------------------------------------------------------------------------|
|      React       |A front-end JavaScrpit library for building UI components                             |
|   React Router   | A standard library for routing components in React                                   |
|      Rails       | Web-application framework which allows you to create a database using the MVC pattern|


<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/X17zneG0QfS4lWXs0NGmsk/Lavy's-StudyGuide?node-id=6%3A30


Login Page:
![image](https://user-images.githubusercontent.com/84349667/129055936-0ab861e1-15bc-4754-8da1-43d281991270.png)


Signup Page:
![image](https://user-images.githubusercontent.com/84349667/129056067-6c4ac8f3-07e7-4aa7-8a89-ae4cd8122073.png)


Home Page:
![image](https://user-images.githubusercontent.com/84349667/129056139-387423a7-9571-4ab2-a5e5-75a938e6b50d.png)


Questions Page:
![image](https://user-images.githubusercontent.com/84349667/129105053-09270c29-aa0e-4550-9d67-717aa55e174f.png)


Add Questions Page:
![image](https://user-images.githubusercontent.com/84349667/129104976-3f259d6b-418e-4c75-a477-a4301714e275.png)


Edit Page:
![image](https://user-images.githubusercontent.com/84349667/129104934-d5a3d059-d946-47d1-80aa-93100bba5a6b.png)


Detail/Add Answers Page:
![image](https://user-images.githubusercontent.com/84349667/129104863-ad24c9c2-23d1-4b24-abee-9f1c5851ddbc.png)



#### Component Tree

![image](https://user-images.githubusercontent.com/84349667/129104056-a518d74b-bbe0-4ac9-a705-ca54cc878858.png)


#### Component File Structure

``` structure

client
|__ screens/
      |__ LoginPage.jsx
      |__ SignupPage.jsx
      |__ Homepage.jsx
      |__ Ruby.jsx
      |__ PostgreSql.jsx
      |__ Questions.jsx
      |__ AddQuestion.jsx
      |__ EditQuestion.jsx
      |__ AddAnswers.jsx
      |__ Signout.jsx
|__ components/
      |__ Login.jsx
      |__ Signup.jsx
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Layout.jsx
      |__ QuestionCard.jsx     
|__ layout/
      |__ Header.jsx
      |__ Footer.jsx
|__ services/


```

#### Time Estimates

| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| Initial layout setup |    H     |     4hrs       | 
| Backend setup        |    H     |     5hrs       | 
| CRUD operations      |    H     |     5hrs       |  
| Auth functionality   |    H     |     5hrs       | 
| Frontend setup       |    H     |     5hrs       |
| Work on Links        |    H     |     2hrs       |
| Debugging            |    H     |     4hrs       | 
| Render results       |    H     |     4hrs       | 
| Deployment           |    H     |     1hrs       | 
| Post MVP features    |    M     |     4hrs       |
| General Research     |    M     |     3hrs       |
| Add additional CSS   |    M     |     6hrs       | 
| Total                |    H     |     48hrs      | 


### Server (Back End)

#### ERD Model

![image](https://user-images.githubusercontent.com/84349667/129103767-88127126-2fe3-47b3-b609-e9a01612c60e.png)


## Post-MVP

1. Add screen for Ruby videos
2. Add screen for PostgreSql videos
3. Add more CSS styling
4. Add more screens fot other topics


## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

