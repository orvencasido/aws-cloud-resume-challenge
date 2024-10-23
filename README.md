# AWS Cloud Resume Challenge

This is my attempt on the Cloud Resume Challenge. I used AWS technologies to deploy my resume as a static website, integrating services like S3 for hosting, and CloudFront for content delivery.

Cloud Resume Challenge- A comprehensive, multi-step project aimed at developing and demonstrating key cloud skills necessary for a career in the industry. The challenge was initiated by Forrest Brazeal.




## System Architecture
![Cloud Resume Challenge Architecture](other/cloud-resume-architecture.png)






## Technology Used

- AWS S3
- AWS Lambda
- AWS CloudFront
- Add DynamoDB
- Certificate Manager
- Domain Name System
- Namecheap
- Git 
- Github Actions
- Terraform



<h2><a href="https://techwithorven.xyz/">Preview of Website</a></h2>



## 🔗 Developer Links
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/orvencasido)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/orven-casido-39bb58319/)
[![faceook](https://img.shields.io/badge/facebook-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://www.facebook.com/profile.php?id=100008985125961)


# Cloud Resume Challenge Documentation

### Project Overview
The project showcases the cloud skills through the Cloud Resume Challenge.

### Prerequisites
AWS Account | DNS


## Creating the HTML Website
I began by creating an HTML website. 

## Hosting on AWS S3
After customizing my resume, I hosted the website on an AWS S3 bucket. Hosting on S3 provides a scalable and durable storage solution, ensuring that my website remains accessible.

## Integrating CloudFront for Content Delivery
To enhance my website's performance, I incorporated AWS CloudFront for content delivery. CloudFront is a Content Delivery Network (CDN) that securely distributes content with low latency. By using CloudFront, I was able to convert my website from HTTP to HTTPS, which significantly improves security. Additionally, CloudFront protects my site against Distributed Denial of Service (DDoS) attacks by caching content at multiple edge locations around the world, ensuring my website remains resilient and fast.

## Domain Acquisition Challenges
I encountered a challenge when trying to purchase a domain through Route 53, as my AWS costs were too low to qualify for domain registration. To resolve this issue, I opted to buy a domain from Namecheap, which cost around $3 each. I purchased two domains: one for the website and another for my personal email.

## Connecting Domain and Setting Up SSL
After acquiring the domains, I connected the CloudFront distribution to Namecheap’s DNS. I also used AWS Certificate Manager to register my domain and obtain an SSL certificate, ensuring secure connections. After a few minutes, my website successfully propagated around the globe, and it was officially live on the internet.

## Backend Development
With the front-end part nearly complete, I focused on the backend. I wrote a Python script using the Boto3 library to count the number of visitors to my website. I utilized AWS Lambda for serverless computing, which allowed me to run my code without managing servers. The data collected was stored in DynamoDB, serving as a robust and scalable database solution.

## Utilizing Function URLs
I decided not to use API Gateway since AWS Lambda now offers function URLs. This function URL acts as an HTTP API, allowing me to retrieve the number of users who viewed my website easily. This streamlined approach reduces complexity while still providing the necessary functionality.

## Implementing Version Control
Next, I established a version control system for my website using GitHub. I employed PowerShell and Visual Studio Code to facilitate the development process, making it more efficient and organized.

## Terraforming the Backend
The final step involved using Terraform to manage my infrastructure. While I didn't terraform the entire website, I focused on the Lambda backend. I gained a solid understanding of Terraforming principles during this process, allowing me to automate resource management effectively.

## Conclusion
Overall, it took me almost 2 months to complete this project. As a student in an internship during this time, I initially finished most of the project within the first week, including the terraforming aspect. However, I lacked the time to document the challenge fully. Now, I am pleased to present my completed project.

2024 | Orven Casido








