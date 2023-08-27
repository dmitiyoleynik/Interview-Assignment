# Overview of Container Ships

The "Overview of Container Ships" project aims to provide users with a comprehensive view of container ships around the world. Leveraging an available API that supplies the necessary data, this project entails creating a website with two distinct pages. The start page serves as the entry point, showcasing an ordered list of container ships along with key details such as name, country of origin, and TEU (Twenty-foot Equivalent Unit) capacity. Upon selecting a specific ship, users are seamlessly redirected to a detailed page displaying comprehensive information about the chosen vessel.

## Project Goals

The main objectives of the "Overview of Container Ships" project include:

1. **Data Retrieval:** Upon opening the website, it instantaneously fetches relevant data from the designated API source and presents it in an organized manner.

2. **Responsive Design:** The website's layout and interface are optimized to look visually appealing and function seamlessly on both desktop and mobile devices, ensuring consistent user experiences across screen sizes.

## Features

The project encompasses the following key features:

- **Ship List:** The website's starting page displays a list of container ships, including their names, countries of origin, and TEU capacity.

- **Detailed Ship Page:** Upon selecting a specific ship from the list, users are directed to an in-depth page dedicated to that ship. This page presents an extensive array of data related to the ship's technical specifications.

## Usage

### For Development

To run the "Overview of Container Ships" website in the development environment, follow these steps:


# 1. Clone the repository to your local machine:
```bash 
git clone https://github.com/dmitiyoleynik/Interview-Assignment
```
# 2. Make sure you have json-server installed on your computer. If not, install it:
```bash
npm install -g json-server
```
# 3. Navigate to the project directory

# 4. Start the JSON Server with:
```bash
json-server --watch server/db.json --port 3001 -d 2000
```

# 5. Install dependencies using npm or yarn:
```bash
npm install
```
# or
```bash
yarn
```
# 6. Start the React app:
```bash
npm start```
# or
```bash
yarn start```


### Production Deployment with Docker Compose

To deploy the "Overview of Container Ships" website in a production environment using Docker Compose, follow these steps:

1. **Check Docker and Docker Compose Installation:**
   Before proceeding, ensure that you have both Docker and Docker Compose installed on your system. If not, you can download and install them from the official Docker website:
   - [Get Docker](https://www.docker.com/get-started)
   - [Install Docker Compose](https://docs.docker.com/compose/install/)

2. **Clone the Repository:**
   Clone the repository to your local machine and navigate to the project's root folder:
   ```bash
   git clone https://github.com/dmitiyoleynik/Interview-Assignment

3. **Run json-server like showed in For Development part**
4. **Run Docker Compose:**
    ```docker-compose up```




