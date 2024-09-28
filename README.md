

# **Stock Price Suggestor**

A simple web application built with **React.js** that allows users to input their budget and select a company to receive real-time stock price suggestions. The app fetches stock prices using the **Alpha Vantage API**, converts them into INR, and provides suggestions on how many shares a user can buy based on their budget.

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

---

## **Features**

- Fetches real-time stock prices for **18 global companies**.
- Calculates stock prices in **INR** (Indian Rupees) using a predefined exchange rate.
- Suggests how many shares a user can purchase based on their **budget**.
- Responsive design for a smooth experience on both desktop and mobile devices.
- Error handling for failed API requests or invalid stock data.

---

## **Technologies Used**

- **React.js**: For building the user interface and handling state.
- **JavaScript (ES6+)**: Used for API calls and form handling.
- **Axios**: For making API requests to the Alpha Vantage API.
- **Alpha Vantage API**: To fetch real-time stock data.
- **HTML5/CSS3**: For building and styling the UI.
  
---

## **Setup and Installation**

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/stock-price-suggestor.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd stock-price-suggestor
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open the app in your browser:**
   Navigate to `http://localhost:3000` to view the app.

---

## **Usage**

1. **Enter your budget** in INR in the input field.
2. **Select a company** from the dropdown menu, which includes 18 popular companies such as Apple, Google, Tesla, etc.
3. **Click "Suggest Stock"** to receive a suggestion on how many shares you can buy based on your budget and the real-time stock price.
4. **View the result** in the output section, showing how many shares you can purchase and the stock price in INR.

---

## **API Integration**

This project uses the **Alpha Vantage API** to fetch real-time stock data.

1. Replace the placeholder `apiKey` in `App.js` with your actual API key:
   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

2. The API endpoint used for fetching stock prices:
   ```
   https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=COMPANY_SYMBOL&apikey=YOUR_API_KEY
   ```

3. The app assumes a fixed exchange rate of **1 USD = 75 INR** for converting stock prices from USD to INR.

---

## **Project Structure**

```
stock-price-suggestor/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js        # Main React component
│   ├── App.css       # Stylesheet
│   ├── index.js      # Entry point for React
│   └── ...
├── package.json      # Project dependencies and scripts
├── README.md         # Project documentation
└── ...
```

---

## **Future Enhancements**

- **Dynamic Currency Conversion**: Fetch the real-time INR conversion rate from an API to provide accurate pricing.
- **Historical Data**: Display historical stock data and price trends for better investment insights.
- **Chart Visualization**: Implement stock price movement charts using a library like **Chart.js** or **Recharts**.
- **Portfolio Feature**: Add the ability for users to track their stock portfolio and visualize growth over time.

---

## **License**

This project is licensed under the MIT License.

---

**Author**: Chidananda A 
**Contact**: chidananda1412@gmail.com

