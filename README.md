# Hotel Management Dashboard

![Demo](demo.webp)

This is a quick implementation for the requirements in the hotel management dashboard challenge. I tried my best to cover all in the time I can have but there are more to improve. I took notes for a few of them which you can find below as well.

You can see it the implementation in the demo, live on https://hotel-management-challenge.netlify.app/ or built locally with the initial instructions.

```
- Run `npm install` to install the dependencies.
- Run `npm run dev` to start the development server.
- Go to `http://localhost:5173` to view the application and the sample data.
```

### Brainstorming
![Brainstorming](brainstorming.png)

First I tried to get an initial understanding of the dashboard design for hotel management needs. This could be the inspiration and starting point for better UI/UX improvements.

### Code structure

```
src/
├─ components/
│  ├─ UI/
│  │  ├─ Card.tsx
│  ├─ Header.tsx
│  ├─ index.ts
├─ context/
├─ data/
├─ hooks/
│  ├─ useAppContext.tsx
├─ layouts/
│  ├─ MainLayout.tsx
├─ pages/
│  ├─ Dashboard/
│  │  ├─ components/
│  │  ├─ hooks/
│  │  │  ├─ useDashboard.ts
│  │  ├─ Dashboard.tsx
│  ├─ Cleaning/
├─ utils/
router.ts
types.ts
```

This is the high level code structure. I like keeping things encapsulated as much as possible, therefore having custom hooks help me to organize the code in a good way. 

For ex, `Dashboard.tsx` is responsible for the view and organizing the components, for whatever I need logically or as formatted data, I abstract it to its `useDashbord.ts` hook and call the data/functions I need from this hook. It keeps everything separated meaningfully and easy to read hopefully.

Also pages can have their own components, if it is only used in this page I tried to keep it inside the page, only move it to global components if a reusable need arises. For ex, it happened with `RoomsTable` since two places use it already.

Creating `Layouts` is a great way to keep the page designs consistent in the whole dashboard flow.

These are the key points I can think of at the moment.


### Possible improvement areas

These are the notes for some improvement point that I've taken along the way of building the dashboard. 

- Absolute import config for cleaner import statements
- Create a DataTable, and LineGraph reusable components getting data directly in props for consistency in future uses
- Add pagination to the table data for smooth loading experience
- Better UX/UI and performance improvements in general for the dashboard needs
- Thumbnail images for faster loads
- Permanent storage can be applied
- Add modal confirmation for removing
- Better navigation with sidebar menu
- Add tests
...

Since there is no limit for improving, there can be many addition/refactoring that could bring better user experience and performance.

Thank you.

Best,
Ebru

---
# RoomPriceGenie React Developer Coding Challenge

![RoomPriceGenie](team.webp)

## Overview

You have been asked to create a simple React application that allows users to browse a list of hotel rooms and add them to a cleaning table. A simple skeleton for the application was bootstrapped with Vite and should be built using React and TypeScript and should demonstrate your understanding of core React concepts such as hooks, context API, and reusable components, in addition to proficiency with data visualisation libraries like ReCharts. You can use additional libraries such as component libraries or other state management libraries to build the application, but TailwindCSS has been installed as that is the preferred choice of the team. The repository includes a small JSON file that contains the data that is required for this challenge and a function that generates random occupancy data for the chart. A selection of images are in the `./images` folder and the rooms.json references those. No backend service is required to store the data, all interactivity should take place in the UI. The coding challenge is designed so that it can be completed within 3-4 hours.

## Requirements

- The application should be built using React and TypeScript.
- The user should be able to view a list of hotel rooms, each with a number, image and category.
- The user should be able to add and remove a room to a cleaning table by clicking the "Needs cleaning" button.
- The user should be able to view the cleaning, which should display all the hotel rooms they have added.
- A graphical representation of room occupancy over a month using ReCharts should be provided.
  - It should show a line graph with days on the X-axis and room occupancy percentage on the Y-axis. Different categories of rooms should be represented by different lines on the graph. Provide a legend and tooltips for the chart to enhance user understanding.

## Getting Started

- Run `npm install` to install the dependencies.
- Run `npm run dev` to start the development server.
- Go to `http://localhost:5173` to view the application and the sample data.

## Instructions

- Open this repository to your local machine.
- Implement the requirements outlined above.
- Send your implementation by replying to the email with a download link.

## Evaluation Criteria

- Your submission will be evaluated based on the following criteria:
- Does the application meet the requirements outlined above?
- Is the application well-organized and easy to follow?
- Does the application demonstrate a good understanding of React concepts such as hooks, context API, and reusable components?
- Does the application display well on different screen sizes?
- Are the instructions for running the application clear and easy to follow?
- Bonus points:
  - Deploying the application to a free tier service of a hosting provider such as Netlify or Vercel.
  - Outlining any improvements you would make to the application if you had more time.
  - Implementing responsive design.

Good luck!
