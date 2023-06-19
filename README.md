# Order Management App

This project is an Order Management Application built with Symfony (PHP) on the backend and Angular CLI (TypeScript) on the frontend. 

# Requirements
- PHP >= 7.4
- composer
- Node.js >= 15
- npm
- yarn
- Angular CLI

# Installation
1. First clone this repository
2. git clone `https://github.com/niravpateljoin/angularsymfonyapp`
3. Navigate to angularsymfonyapp
4. now run `composer install`
5. after composer command please run `yarn install`
6. now navigate to `order-management-front`
7. now run `npm install`
8. now navigate to the root directory of project
9. setup `.env` file
10. Create the database:
11. `php bin/console doctrine:database:create`
12. Run the Migrations, `php bin/console doctrine:migrations:migrate`
13. start the symfony app `symfony server:start`
14. after finishing all above command please run `yarn encore dev`

# Usage 
1. Open your web browser and visit http://localhost:8000 to access the Order Management App.    
2. If you dont see any orders, please run `php bin/console app:import-orders`
3. select Data File from there and Enter,
4. now again navigate to web and visit above link you can see orders now.
5. Use the provided features to filter orders by customers or status, and other functionalities within the app.
