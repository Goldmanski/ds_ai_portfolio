# PDF Offer Generator

## Overview

PDF Offer Generator is a web application for creating professional customer quotations and generating ready-to-send PDF documents.

The application combines an interactive **Streamlit** interface with a layered architecture inspired by **Domain-Driven Design (DDD)**.

The project focuses on separating user interface, application logic, domain logic and infrastructure responsibilities.

[Live Demo](https://offer-generator-app.streamlit.app){ .md-button .md-button--primary }
[GitHub](https://github.com/Goldmanski/offer-generator){ .md-button }

---

## Problem

Preparing customer quotations involves several repetitive operations:

- entering customer information,
- selecting products,
- managing quantities,
- calculating the quotation value,
- validating required information,
- preparing the final document.

The goal of the application is to bring these operations into a single workflow and automatically generate a professional PDF quotation.

---

## Solution

The application provides an interactive interface where the user can:

- enter offer details,
- provide customer information,
- browse products grouped by category,
- add products to the quotation,
- modify product quantities,
- remove products,
- review the calculated total,
- validate the quotation,
- generate the PDF document,
- download the finished quotation.

The application also automatically merges duplicate products added to the quotation.

---

## Architecture

The project follows a layered architecture inspired by **Domain-Driven Design**.

```text
UI
│
├── Application
│
├── Domain
│
└── Infrastructure
```

### UI

The UI layer is responsible for user interaction.

It contains components such as:

- Customer Form
- Product Selector
- Offer Table
- Validation Panel

### Application

The Application layer coordinates business operations and communication between the UI and the domain layer.

Examples include:

- `QuoteService`
- `ProductService`
- `PdfService`

### Domain

The Domain layer contains the core business logic and domain models.

Examples include:

- `Quote`
- `QuoteItem`
- `Product`
- `Customer`
- `OfferDetails`

### Infrastructure

The Infrastructure layer is responsible for external resources used by the application, such as loading product data.

---

## Core Workflow

The application follows a quotation workflow from entering customer information to generating the final document.

```text
Customer & Offer Details
          │
          ▼
     Product Selection
          │
          ▼
   Quantity Management
          │
          ▼
   Automatic Calculation
          │
          ▼
       Validation
          │
          ▼
     PDF Generation
          │
          ▼
      Final Offer
```

---

## Key Features

### Customer & Offer Management

The user can enter the information required to prepare a customer quotation.

### Product Management

Products are grouped by category and can be added to the quotation.

The application supports:

- adding products,
- changing quantities,
- removing products,
- merging duplicate products.

### Automatic Calculation

The quotation value is calculated automatically based on the selected products and quantities.

### Validation

Required information is validated before generating the final document.

### PDF Generation

The application generates a professional PDF quotation using **ReportLab**.

The generated document can then be downloaded and sent to the customer.

---

## Screenshots

### Main Application

The main interface allows the user to enter offer details and customer information.

![Main Application](https://raw.githubusercontent.com/Goldmanski/offer-generator/main/data/screenshots/app-main.png)

### Product Selection

Products are grouped by category and can be added to the quotation. Quantities can then be adjusted before generating the final document.

![Product Selection](https://raw.githubusercontent.com/Goldmanski/offer-generator/main/data/screenshots/products.png)

### Generated PDF

The final quotation is generated as a ready-to-send PDF document.

![Generated PDF](https://raw.githubusercontent.com/Goldmanski/offer-generator/main/data/screenshots/pdf-preview.png)

---

## Testing

The project includes unit tests for business logic using **Pytest**.

Tests can be executed with:

```bash
pytest
```

---

## Technology Stack

- Python 3.11
- Streamlit
- ReportLab
- Pytest

---

## Project Structure

```text
offer-generator/
│
├── application/
├── data/
│   ├── fonts/
│   ├── images/
│   ├── screenshots/
│   └── products.csv
├── domain/
├── infrastructure/
├── tests/
├── ui/
├── utils/
├── app.py
└── requirements.txt
```

---

## Deployment

The application is deployed using **Streamlit Community Cloud**.

[Open the live application](https://offer-generator-app.streamlit.app){ .md-button .md-button--primary }

---

## What This Project Demonstrates

This project demonstrates practical experience with:

- layered application architecture,
- Domain-Driven Design principles,
- separation of responsibilities,
- domain modelling,
- encapsulation of business logic,
- testable components,
- PDF document generation,
- interactive Streamlit applications.

The project focuses on applying software engineering principles to a business-oriented Python application.

---

## Possible Improvements

Potential future improvements include:

- database integration,
- customer management,
- offer history,
- authentication and user accounts,
- product search and filtering,
- additional export formats,
- REST API,
- ERP integration.