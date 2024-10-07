# Deployment of a React Application to an AWS EKS Cluster Using Jenkins CI/CD and Docker

## Introduction

This project demonstrates the deployment of a React application to an Amazon Elastic Kubernetes Service (EKS) cluster using Jenkins for Continuous Integration and Continuous Deployment (CI/CD). The objective is to automate the build and deployment processes, ensuring a streamlined workflow for delivering updates and new features.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Build Commands](#build-commands)
- [Deployment Process](#deployment-process)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed:

- [AWS Account](https://aws.amazon.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Docker](https://www.docker.com/get-started)
- [Jenkins](https://www.jenkins.io/download/)

## Project Structure

The project is organized as follows:

```
/my-react-app
├── Dockerfile
├── src
│   ├── App.js
│   └── ...
├── public
│   ├── index.html
│   └── ...
├── package.json
└── deployment.yml
└── service.yml
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [YOUR_REPOSITORY_URL]
   cd my-react-app
   ```

2. **Create a Docker Image**
   Navigate to the project directory and build the Docker image:
   ```bash
   docker build -t my-react-app .
   ```

3. **Set Up AWS EKS Cluster**
   Follow the [AWS documentation](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html) to create an EKS cluster.

4. **Configure Jenkins**
   - Install the necessary plugins for Docker and Kubernetes in Jenkins.
   - Set up the Jenkins pipeline using the `Jenkinsfile` provided in the `jenkins` directory.

## Build Commands

The Jenkins pipeline is configured to automatically build and push the Docker image to the Amazon Elastic Container Registry (ECR) on each commit. The main build commands include:

```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t my-react-app .'
                }
            }
        }
        stage('Push to ECR') {
            steps {
                script {
                    sh 'docker tag my-react-app:latest [YOUR_ECR_URI]:latest'
                    sh 'docker push [YOUR_ECR_URI]:latest'
                }
            }
        }
        stage('Deploy to EKS') {
            steps {
                script {
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                }
            }
        }
    }
}
```

## Deployment Process

1. **Deploy the Application**
   - Ensure that your Kubernetes context is set to your EKS cluster.
   - Use the following command to deploy your application:
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

2. **Access the Application**
   - Once deployed, you can access the React application using the external URL of your LoadBalancer service.

## Screenshots

*EKS Cluster Overview in AWS Console*

![image](https://github.com/user-attachments/assets/a7b56ebc-08aa-40d2-8edb-8b7e222b1b65)

![image](https://github.com/user-attachments/assets/4ace8286-a036-4d75-b491-286496fece34)

*Jenkins Pipeline for CI/CD*

![image](https://github.com/user-attachments/assets/afa6cca0-5cb7-4f74-8482-12687985638d)

![image](https://github.com/user-attachments/assets/cdaf9c72-2a8c-43af-b0ef-18a41cbb8a5b)

![image](https://github.com/user-attachments/assets/2ac79421-7f23-463b-a4f5-5ffab7c0d7e6)

*Running React Application*

![image](https://github.com/user-attachments/assets/4463fbc8-9b7d-4fad-a99d-2bd7ecc5779e)


## Conclusion

This project highlights the integration of Jenkins, Docker, and AWS EKS for deploying a React application. By automating the build and deployment processes, we can ensure faster and more reliable delivery of software updates. Feel free to explore and customize the setup according to your needs.

