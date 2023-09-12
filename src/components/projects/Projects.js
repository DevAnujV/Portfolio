import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Airbnb Clone"
          des={
            <>
              This app is a replica of (AirBNB or VRBO). It is a rental site
              made with <b>MVC</b> pattern where if a user is logged in as a
              customer, can book rental properties and email verification would
              be sent on checkout and if user choose to log in as data entry
              clerk, can perform CRUD operations on the rentals. Used{" "}
              <b>
                Handlebars for front-end, NodeJS, ExpressJS, MongoDB and
                Mongoose for Database
              </b>
            </>
          }
          src={projectOne}
          gitLink="https://github.com/DevAnujV/web322-averma100"
          websiteLink="https://clumsy-capris-tick.cyclic.app/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des={
            <>
              This web app is developed with <b>MERN</b> technology. M- MongoDB
              E- Express.js R - React and N - Node.js. <br />
              It features - Product reviews and ratings, Top products, Product
              pagination, Product search feature, User profile with orders,
              Admin product management, Admin user management, Mark orders as
              delivered option, Checkout process (shipping, payment method and
              PayPal integration)
            </>
          }
          src={projectTwo}
          gitLink="https://github.com/DevAnujV/MERN-VermaShop/tree/main"
          websiteLink="https://vermashop.onrender.com/"
        />
        <ProjectsCard
          title="Assembly Line Project"
          des=" An assembly line comprises workstations with specific stock items. A manager moves customer orders through the line, filling them at each station as needed. Each station processes orders in a queue, provided they request the station's item in stock. Once all orders are processed or some items run out, completed and incomplete orders are reported."
          src={projectThree}
          gitLink="https://github.com/DevAnujV/CPP-AssemblyLine_Project"
          websiteLink="https://github.com/DevAnujV/CPP-AssemblyLine_Project"
        />
        <ProjectsCard
          title="Maze Runner"
          des={
            <>
              Generated a maze using <b>Graph</b> and used{" "}
              <b>Kruskal's Minimum Spanning Tree algorithm</b> to find the
              shortest distance to travel the whole graph. Using this
              information, walls were set at all places except MST co-ordinates.
              Then, used a <b>recursive</b> maze runner function that travel all
              side of maze and come back if a wall is hit. It uses
              <b> Depth-First-Search (DFS)</b> phenomenon. This way, whole maze
              is travelled with minimum time possible
            </>
          }
          src={projectFour}
          gitLink="https://github.com/DevAnujV/Py_DSA-Maze_Runner_Project"
          websiteLink="https://github.com/DevAnujV/Py_DSA-Maze_Runner_Project"
        />
        <ProjectsCard
          title="Vacation Checklist"
          des={
            <>
              Packing is a hastle when going somewhere, well not anymore with my
              Packing List app. You can add what items to pack and cut them once
              packed, or either delete them from list. Items can also be sorted
              according to name.
            </>
          }
          src={projectFive}
          gitLink="https://github.com/DevAnujV/React-Vacation_CheckList_App"
          websiteLink="https://rainbow-cat-f03cae.netlify.app/"
        />
        <ProjectsCard
          title="Chatting App"
          des=" Currently Working on It"
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
