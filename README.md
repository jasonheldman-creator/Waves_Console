# 🌊 WAVES Intelligence™ Console

An institutional-grade portfolio management console built with Streamlit. The WAVES Intelligence Console provides real-time portfolio analytics, allocation monitoring, and trade tracking for multiple investment "Wave" strategies.

## Features

### 📊 Portfolio Analytics
- **Real-time NAV tracking** - Monitor total Net Asset Value across your Wave portfolios
- **Holdings analysis** - Detailed breakdown of all portfolio positions with customizable views
- **Concentration metrics** - Track largest positions and top 10 concentration levels
- **Interactive visualizations** - Dynamic charts built with Altair for data exploration

### 🎯 Wave Strategies
The console supports 15 different investment Wave strategies:
- **AI-Managed Waves**: S&P 500, US Growth, US Value, Small Cap Growth, Small-Mid Cap Growth, Tech Leaders
- **Core Waves**: Quality Core, US Core Equity, International Developed, Emerging Markets
- **Income Waves**: Equity Income, Dividend Growth
- **Thematic Waves**: Future Power & Energy, AI & Automation
- **Tactical Waves**: Sector Rotation

### 📈 Alpha Analysis
- **Benchmark comparison** - Compare portfolio weights vs index weights
- **Active weight heatmaps** - Visualize overweight/underweight positions
- **Allocation alpha tracking** - Monitor performance attribution

### 💼 Trade Management
- **Activity log** - Track all portfolio trades and rebalancing activities
- **Flow analysis** - Visualize net trading flows over time
- **Trade history** - Comprehensive log of all buy/sell transactions

### 🎨 Modern UI
- Custom dark theme with professional styling
- Responsive wide layout optimized for institutional use
- Metric cards with gradient effects and professional typography
- Interactive sidebar controls for Wave selection and settings

## Installation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Setup

1. Clone the repository:
```bash
git clone https://github.com/jasonheldman-creator/Waves_Console.git
cd Waves_Console
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### Running the Application

Launch the Streamlit app:
```bash
streamlit run streamlit_app.py
```

The application will open in your default web browser at `http://localhost:8501`.

### Data Format

#### Portfolio CSV Format
Upload a CSV file with the following columns (any order):

**Required columns:**
- `Ticker` - Stock ticker symbol
- `Price` - Current price per share
- `Dollar_Alloc` - Dollar allocation for the position

**Optional columns:**
- `Weight_pct` - Position weight as percentage (will be calculated if not provided)
- `Index_Weight` - Benchmark index weight for alpha analysis

Example:
```csv
Ticker,Price,Dollar_Alloc,Weight_pct,Index_Weight
AAPL,185.50,50000,5.2,3.8
MSFT,375.20,45000,4.7,4.1
GOOGL,140.30,40000,4.2,3.5
```

#### Trade Log CSV Format
Upload a CSV file with the following columns:

**Required columns:**
- `Timestamp` - Date and time of the trade
- `Wave` - Wave strategy name
- `Ticker` - Stock ticker symbol
- `Side` - Buy or Sell
- `Quantity` - Number of shares
- `Price` - Trade price per share

**Optional columns:**
- `Dollar_Amount` - Total dollar value (will be calculated if not provided)

Example:
```csv
Timestamp,Wave,Ticker,Side,Quantity,Price,Dollar_Amount
2025-12-01 10:30:00,sp500,AAPL,Buy,100,185.50,18550
2025-12-01 14:15:00,sp500,MSFT,Sell,50,375.20,18760
```

### Features & Controls

#### Sidebar Controls
- **Wave Selection** - Choose from 15 different Wave strategies
- **SmartSafe™ Level** - Adjust risk settings (Standard, Defensive, Max Safety)
- **CSV Upload** - Upload portfolio snapshot and trade logs

#### Dashboard Sections
1. **Metric Cards** - Key portfolio statistics at a glance
2. **Top Holdings** - Sortable table of largest positions
3. **Alpha Analysis** - Benchmark comparison charts
4. **Full Allocation** - Complete portfolio breakdown
5. **Top 10 Chart** - Visual representation of largest positions
6. **Trade Activity** - Recent trade log and flow analysis

## Configuration

### Customizing Wave Strategies
Edit the `WAVES` dictionary in `streamlit_app.py` to add or modify Wave strategies:

```python
WAVES = {
    "custom_wave": {
        "label": "Custom Wave Name",
        "benchmark": "Benchmark Index",
        "csv_hint": "CUSTOM_WAVE.csv",
        "wave_type": "Wave Type",
    },
}
```

### Styling
Modify the `CUSTOM_CSS` section in `streamlit_app.py` to customize colors and styling:

```python
DARK_BG = "#020617"      # Background color
ACCENT = "#22C55E"       # Primary accent color
ACCENT_SOFT = "#38BDF8"  # Secondary accent color
```

## Dependencies

- **streamlit** - Web application framework
- **pandas** - Data manipulation and analysis
- **numpy** - Numerical computing
- **altair** - Declarative statistical visualization

See `requirements.txt` for specific version requirements.

## Architecture

The application follows a single-file architecture with clear separation of concerns:

1. **Configuration** - Page setup and styling
2. **Data Definitions** - Wave strategies and constants
3. **UI Components** - Sidebar, header, and dashboard sections
4. **Data Processing** - CSV loading and normalization
5. **Visualizations** - Chart generation and rendering
6. **Interactivity** - File uploads and user controls

## License

This project is for demonstration purposes. Internal use only - not investment advice.

## Author

Jason Heldman (jasonheldman@gmail.com)

## Support

For issues or questions, please open an issue on the GitHub repository.
