# Waves Intelligence Console

A Bloomberg-style financial terminal dashboard featuring real-time market data, interactive charts, and a command-line interface.

## Features

### Visual Design
- **Bloomberg Terminal Aesthetic**: Authentic black background (#000000) with orange/yellow color scheme (#FF8C00, #FFD700)
- **Monospace Font**: Courier New for that classic terminal feel
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Custom Styled Panels**: Each section has bordered containers with headers

### Dashboard Components

#### 1. Market Overview Panel
- Real-time updates for major market indices
- S&P 500, DOW, NASDAQ
- Commodities: Gold, Crude Oil
- Cryptocurrency: BTC/USD
- Color-coded gains (green) and losses (red)

#### 2. Watchlist
- Live stock quotes for popular tech stocks (AAPL, MSFT, GOOGL, TSLA, AMZN)
- Displays: Symbol, Price, % Change, Volume
- Real-time price updates every 3 seconds
- Flash animation on price changes

#### 3. News Feed
- Timestamped financial news items
- Auto-scrolling with latest news at top
- New items added automatically every 30 seconds
- Maintains latest 10 news items

#### 4. Interactive Price Chart
- Canvas-based S&P 500 intraday chart
- Grid overlay with price labels
- Live price indicator
- Updates every 5 seconds
- Filled area under price line

#### 5. Portfolio Summary
- Total portfolio value
- Day change with percentage
- Available cash
- Buying power

#### 6. Command Line Interface
Terminal-style command prompt with the following commands:
- `help` - Display available commands
- `quote [SYMBOL]` - Get current quote for any symbol
- `portfolio` - View portfolio summary
- `news` - Fetch latest market news
- `time` - Show current date and time
- `about` - System information
- `clear` - Clear command output

## Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side dependencies required

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/jasonheldman-creator/Waves_Console.git
cd Waves_Console
```

2. Open `index.html` in your web browser:
```bash
# Using Python 3
python3 -m http.server 8080

# Or simply open the file
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

3. Navigate to `http://localhost:8080/index.html` in your browser

## Technology Stack

- **HTML5**: Semantic structure and Canvas API for charts
- **CSS3**: Grid layout, custom scrollbars, animations
- **Vanilla JavaScript**: No external dependencies
  - Real-time data simulation
  - Interactive command processing
  - Canvas chart rendering
  - DOM manipulation

## File Structure

```
Waves_Console/
├── index.html      # Main dashboard structure
├── styles.css      # Bloomberg-style theming and layout
├── script.js       # Interactive features and data updates
└── README.md       # Documentation
```

## Features in Detail

### Real-Time Updates
- Market data refreshes automatically
- Price changes trigger visual flash effects
- News feed updates with new items
- Chart redraws with updated data points
- Live clock in header updates every second

### Responsive Design
- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: Single column stacked layout
- Panels resize to fit viewport

### Color Coding
- **Positive changes**: Green (#00FF00)
- **Negative changes**: Red (#FF0000)
- **Primary text**: Orange (#FF8C00)
- **Highlights**: Gold (#FFD700)
- **Background**: Black (#000000)

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - See LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

Inspired by the iconic Bloomberg Terminal interface used by financial professionals worldwide.
