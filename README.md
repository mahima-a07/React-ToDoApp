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

/my-react-app ├── Dockerfile ├── jenkins │ ├── Jenkinsfile │ └── config.xml ├── src │ ├── App.js │ └── ... ├── public │ ├── index.html │ └── ... ├── package.json └── ...

bash
Copy code

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [YOUR_REPOSITORY_URL]
   cd my-react-app
Create a Docker Image Navigate to the project directory and build the Docker image:

bash
Copy code
docker build -t my-react-app .
Set Up AWS EKS Cluster Follow the AWS documentation to create an EKS cluster.

Configure Jenkins

Install the necessary plugins for Docker and Kubernetes in Jenkins.
Set up the Jenkins pipeline using the Jenkinsfile provided in the jenkins directory.
Build Commands
The Jenkins pipeline is configured to automatically build and push the Docker image to the Amazon Elastic Container Registry (ECR) on each commit. The main build commands include:

groovy
Copy code
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
                    sh 'kubectl apply -f k8s/deployment.yaml'
                }
            }
        }
    }
}
Deployment Process
Deploy the Application

Ensure that your Kubernetes context is set to your EKS cluster.
Use the following command to deploy your application:
bash
Copy code
kubectl apply -f k8s/deployment.yaml
Access the Application

Once deployed, you can access the React application using the external URL of your LoadBalancer service.
Screenshots

EKS Cluster Overview in AWS Console


Jenkins Pipeline for CI/CD


Running React Application

Conclusion
This project highlights the integration of Jenkins, Docker, and AWS EKS for deploying a React application. By automating the build and deployment processes, we can ensure faster and more reliable delivery of software updates. Feel free to explore and customize the setup according to your needs.

