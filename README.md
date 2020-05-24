# CommunityFirst
## Project Motivation
This is a website, developed by 7 SDA students. We built this as a part of our final group project. Instruction for idea was to build something which can make an impact
in current situation with COVID-19. That is how we come up with idea of helping communities.
Project was run using scrum methodology.
# What is CommunityFirst?
Community First is a platform for people to voluntarily share, donate and offer services to others in their communities.
We at Community First believe that real, sustainable change requires ingenuity and engagement of its members.
Our vision is to help communities better equip themselves to deal with unforeseen circumstances such as war, natural disasters and pandemics etc.
## Project Structure
It is a full stack web application.
Below I will list different technologies and libraries used:
- Docker
- Java
- Spring
- React
- GIT
- Bootstrap
- Lombok
- Material UI
- Countup
- ChartJS2

## Project SetUp
### Prerequisites
- Install docker and docker-compose.
- Install Nodejs.
- Java 11
- IDE

To start the database open the terminal and cd your way in to the project root folder. You can just simply run 
'docker-compose up' to start the database. Closing the terminal will kill the database. So you need to restart the 
database every time you need to use it.

### Starting the backend server
Open the root folder of project and import all the maven dependencies (this has to be done only once of course).
Make sure the database is running (see steps above) otherwise the backend won't have access to it. Then run the main 
class at src/main/java/se/sda/communityfirst/CommunityfirstApplication.java to start the web server.

### Starting the frontend development server
To install the project dependencies for the frontend, open the terminal and make sure that the current directory is
frontend-communityfirst. You can then run 'npm install' to install all the dependencies needed for the project (This has to be done only once).


## Project Pages
- Homepage (presentation of what CommunityFirst is about)
- About Page (presentation of Developers and website as a project)
- Covid tracker page (with country selection for latest fetched information regarding COVID represented in graphs)
- Register Page
- Login Page
- Community Selection Page (Before entering, user is required to pick a community he/she wants to browse posts)
- Items Page (User can post and seee other posts about physical items. User can either request or offer an item)
- Servivces Page (User can post and seee other posts about services. User can either request or offer help)
- My Post Page (User sees all his/her posts and has ability to edit and delete them)
- Post Detail Page (User can see entire post and fetch contact information of the person who posted it)
- EXTRA FUNCITIONALITY: Search

## Backlog items never saw the life of day (TODO)
If we would have more time, we planned to implement following features:
- Profile page
- Option to upload images for items posts

## Rewards Recieved
This project recieved two out of four awards at the SDA final day award ceremony.
- Best User Interface
- Most impactful idea

## Developers:
- Ainura Polatoglu
- Irenej Bozovicar
- Krishna Nadella
- Kshitiz Bista
- Pallavi Thanikonda
- Saloumi Ghabbour
- Sadia Chaudhary


###FAQ
How to connect to running database from terminal
Sometimes you might want to inspect the tables, run raw queries, seed the database, check that a certain backend action 
has been performed correctly. To do that you can simply run the following command:-

docker run -it --network host postgres:11-alpine psql -h localhost -U communityfirst_user -p 5433 -W communityfirst
Use the password specified in docker-compose.yaml.