# 🍣 Sushi Invoice App

A full-stack invoicing system designed for modern sushi restaurants, built as part of a university software engineering project. It streamlines order management, invoice generation, and supports real-time currency conversion via external APIs.

## 🚀 Live Application

🖥 [View the live app](http://sushi-invoice-application.ap-southeast-2.elasticbeanstalk.com/)  
_(Note: best viewed on desktop for full dashboard experience)_
## 🌟 Features

- 📥 **Order Retrieval**: Automatically fetch order data from external systems.
- 🧾 **Invoice Generation**: Generate neat, printable invoices from orders with a single click.
- 🌐 **Currency Conversion**: Convert invoice totals using real-time exchange rates (via [FreeCurrencyAPI](https://freecurrencyapi.com/)).
- 🤖 **LLM Integration**: Leverages a Large Language Model to enhance the user experience by generating natural-language invoice summaries and providing intelligent invoice explanations.
- 📊 **Admin Dashboard**: View recent orders and invoices, monitor system usage, and test load functionality (for Kubernetes autoscaling).
- ☁️ **Deployed on AWS**: Hosted on AWS using Elastic Beanstalk, integrated with CI/CD pipelines via GitLab.

## 📦 Tech Stack

**Frontend**  
- React + Tailwind CSS  
- Axios for API calls  

**Backend**  
- Node.js + Express  
- DynamoDB for data storage  
- RESTful API with OpenAPI spec  

**DevOps & Deployment**  
- GitLab CI/CD  
- AWS Elastic Beanstalk  
- Kubernetes (for autoscaling experiments)  
- Prometheus + Grafana for real-time monitoring

## 🧪 External API Integration

- **Get Order API**: Retrieves order data to generate invoices.
- **Currency Exchange API**: Enhances international usability by converting totals to selected currencies.

## 🤝 Team Contribution

This project was developed collaboratively as part of SENG2021 at the University of Sydney. My primary contributions include:
- Backend architecture & API development
- AWS deployment pipeline (Elastic Beanstalk + GitLab CI)
- Load testing hooks for Kubernetes autoscaling demo

## 📁 Folder Structure (Top-Level)


