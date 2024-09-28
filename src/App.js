import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [budget, setBudget] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('AAPL');
    const [result, setResult] = useState('');

    const suggestStock = async () => {
        try {
            const budgetInRupees = parseFloat(budget);
            const apiKey = 'BOJYSCSACVIGSCHI'; // Replace with your actual API key

            const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedCompany}&apikey=${apiKey}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch stock data for ${selectedCompany}. Status: ${response.status}`);
            }

            const data = await response.json();
            if (data["Global Quote"]) {
                const stockPriceUSD = parseFloat(data["Global Quote"]["05. price"]);
                const stockPriceINR = stockPriceUSD * 75; // Example conversion rate
                const sharesToBuy = Math.floor(budgetInRupees / stockPriceINR);

                setResult(`${selectedCompany}: Buy ${sharesToBuy} shares at ${stockPriceINR.toFixed(2)} INR per share.`);
            } else {
                throw new Error('Invalid stock data.');
            }
        } catch (error) {
            console.error(error.message);
            setResult('Error suggesting stocks. Please try again.');
        }
    };

    return (
        <div className="container">
            <h1>Stock Price Suggestor</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="budget">Enter your budget in Rupees: </label>
                <input
                    type="number"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    min="1"
                />
                <label htmlFor="selectedCompany">Select a company: </label>
                <select
                    id="selectedCompany"
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                >
                    <option value="AAPL">Apple Inc.</option>
                    <option value="GOOGL">Alphabet Inc. (Google)</option>
                    <option value="MSFT">Microsoft Corporation</option>
                    <option value="AMZN">Amazon.com Inc.</option>
                    <option value="TSLA">Tesla Inc.</option>
                    <option value="FB">Facebook Inc.</option>
                    <option value="NVDA">NVIDIA Corporation</option>
                    <option value="AMD">Advanced Micro Devices, Inc.</option>
                    <option value="NFLX">Netflix Inc.</option>
                    <option value="PYPL">PayPal Holdings, Inc.</option>
                    <option value="V">Visa Inc.</option>
                    <option value="MA">Mastercard Incorporated</option>
                    <option value="DIS">The Walt Disney Company</option>
                    <option value="INTC">Intel Corporation</option>
                    <option value="CSCO">Cisco Systems, Inc.</option>
                    <option value="IBM">International Business Machines Corporation (IBM)</option>
                    <option value="GS">The Goldman Sachs Group, Inc.</option>
                    <option value="WMT">Walmart Inc.</option>
                    <option value="JPM">JPMorgan Chase & Co.</option>
                </select>
                <button className="btn" type="button" onClick={suggestStock}>
                    Suggest Stock
                </button>
            </form>
            <div className="output">
                <h2>Suggested Stocks:</h2>
                <p>{result}</p>
            </div>
        </div>
    );
};

export default App;
