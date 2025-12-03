# WAVES Intelligence™ — Institutional Wave Console

A sophisticated Streamlit-based portfolio analytics dashboard for institutional investment management. This application provides real-time portfolio visualization, allocation analysis, and performance tracking across 15 different investment "waves" (strategies).

## Features

- **15 Pre-configured Investment Waves**: From S&P 500 to AI & Automation, Emerging Markets, and more
- **Dark Theme UI**: Professional, modern interface with custom styling
- **CSV-Driven Data**: Upload portfolio snapshots and trade logs for instant analysis
- **Interactive Visualizations**: Altair-powered charts for allocation analysis and performance tracking
- **Allocation Alpha Analysis**: Compare portfolio weights vs. benchmark indices
- **Trade Activity Tracking**: Optional trade log upload to track recent activity
- **SmartSafe™ Risk Controls**: Demo risk management level selector

## Installation

1. Clone this repository:
```bash
git clone https://github.com/jasonheldman-creator/Waves_Console.git
cd Waves_Console
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

Run the Streamlit application:
```bash
streamlit run app.py
```

The application will open in your default web browser at `http://localhost:8501`.

## CSV Data Format

### Portfolio Snapshot CSV

Required columns (any order):
- **Ticker**: Stock ticker symbol (e.g., "AAPL", "MSFT")
- **Price**: Current price per share
- **Dollar_Alloc**: Dollar allocation/value for this position

Optional columns:
- **Weight_pct**: Portfolio weight percentage (will be calculated if not provided)
- **Index_Weight**: Benchmark weight for alpha analysis

Example:
```csv
Ticker,Price,Dollar_Alloc,Index_Weight
AAPL,180.50,50000,4.5
MSFT,350.25,45000,3.8
GOOGL,140.75,40000,3.2
```

### Trade Log CSV (Optional)

Required columns:
- **Timestamp**: Date/time of trade
- **Wave**: Name of the wave (must match wave key like "sp500")
- **Ticker**: Stock ticker symbol
- **Side**: "BUY", "SELL", or "TRIM"
- **Quantity**: Number of shares
- **Price**: Execution price

Optional columns:
- **Dollar_Amount**: Total trade value (calculated if not provided)

Example:
```csv
Timestamp,Wave,Ticker,Side,Quantity,Price
2024-01-15 10:30:00,sp500,AAPL,BUY,100,180.50
2024-01-16 14:20:00,sp500,MSFT,SELL,50,350.25
```

## Available Waves

1. **S&P 500 Wave** (LIVE Demo) - S&P 500 Index
2. **US Growth Wave** - Russell 1000 Growth
3. **US Value Wave** - Russell 1000 Value
4. **Small Cap Growth Wave** - Russell 2000 Growth
5. **Small-Mid Cap Growth Wave** - SMID Growth Composite
6. **Equity Income Wave** - US Dividend Composite
7. **Future Power & Energy Wave** - Clean Energy/Infrastructure
8. **Tech Leaders Wave** - NASDAQ 100
9. **AI & Automation Wave** - AI/Robotics Composite
10. **Quality Core Wave** - Global Quality Composite
11. **US Core Equity Wave** - Total US Market
12. **International Developed Wave** - MSCI EAFE
13. **Emerging Markets Wave** - MSCI EM
14. **Dividend Growth Wave** - US Dividend Growth Index
15. **Sector Rotation Wave** - Sector-Neutral Composite

## Dashboard Components

### Metrics Row
- Total NAV
- Number of Holdings
- Largest Position
- Top 10 Concentration

### Visualizations
- **Top Holdings Table**: Configurable display of top positions
- **Allocation Alpha vs Index**: Overweight/underweight analysis
- **Full Wave Allocation**: Complete portfolio breakdown
- **Top 10 by Weight**: Bar chart of largest positions
- **Alpha Heatmap**: Top 50 active positions
- **Trade Activity Flow**: 30-day trading volume chart (if trade log provided)

## Technology Stack

- **Streamlit**: Web application framework
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Altair**: Interactive visualization library

## Notes

- This is a demo application for internal use only
- No external data calls are made - all data is CSV-driven
- Not intended as investment advice
- Data privacy: All uploaded files are processed in-memory only

## License

Copyright © 2024 WAVES Intelligence™. All rights reserved.
