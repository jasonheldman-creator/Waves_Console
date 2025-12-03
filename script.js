// Bloomberg-style Dashboard JavaScript

// Update current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    const dateString = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    document.getElementById('currentTime').textContent = `${dateString} ${timeString}`;
}

// Initialize time and update every second
updateTime();
setInterval(updateTime, 1000);

// Simulate real-time price updates
function updatePrices() {
    const watchlistBody = document.getElementById('watchlistBody');
    if (!watchlistBody) return;
    
    const rows = watchlistBody.querySelectorAll('tr');
    rows.forEach(row => {
        const priceCell = row.cells[1];
        const changeCell = row.cells[2];
        
        if (Math.random() > 0.7) { // 30% chance to update
            const currentPrice = parseFloat(priceCell.textContent);
            const change = (Math.random() - 0.5) * 2; // Random change between -1 and 1
            const newPrice = (currentPrice + change).toFixed(2);
            const changePercent = ((change / currentPrice) * 100).toFixed(2);
            
            priceCell.textContent = newPrice;
            changeCell.textContent = `${changePercent > 0 ? '+' : ''}${changePercent}%`;
            changeCell.className = changePercent > 0 ? 'positive' : 'negative';
            
            // Flash effect
            priceCell.style.backgroundColor = '#FF8C00';
            setTimeout(() => {
                priceCell.style.backgroundColor = '';
            }, 200);
        }
    });
}

// Update prices every 3 seconds
setInterval(updatePrices, 3000);

// Draw simple chart
function drawChart() {
    const canvas = document.getElementById('priceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Generate mock data points for intraday chart
    const points = 50;
    const data = [];
    let basePrice = 4750;
    
    for (let i = 0; i < points; i++) {
        basePrice += (Math.random() - 0.5) * 20;
        data.push(basePrice);
    }
    
    // Find min and max for scaling
    const minPrice = Math.min(...data);
    const maxPrice = Math.max(...data);
    const priceRange = maxPrice - minPrice;
    
    // Clear canvas
    ctx.fillStyle = '#0A0A0A';
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = '#1A1A1A';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        
        // Price labels
        const price = maxPrice - (priceRange / 5) * i;
        ctx.fillStyle = '#555';
        ctx.font = '10px Courier New';
        ctx.fillText(price.toFixed(2), 5, y - 5);
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 10; i++) {
        const x = (width / 10) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    
    // Draw price line
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((price, index) => {
        const x = (width / (points - 1)) * index;
        const y = height - ((price - minPrice) / priceRange) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Fill area under the line
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 140, 0, 0.1)';
    ctx.fill();
    
    // Current price indicator
    const lastPrice = data[data.length - 1];
    const lastY = height - ((lastPrice - minPrice) / priceRange) * height;
    
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(width - 5, lastY, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Price label box
    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(width - 80, lastY - 12, 75, 20);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Courier New';
    ctx.fillText(lastPrice.toFixed(2), width - 75, lastY + 3);
}

// Initialize chart
setTimeout(drawChart, 100); // Wait for DOM to be ready

// Redraw chart on window resize
window.addEventListener('resize', drawChart);

// Update chart periodically
setInterval(drawChart, 5000);

// Command line interface
const commandInput = document.getElementById('commandInput');
const commandOutput = document.getElementById('commandOutput');

const commands = {
    'help': 'Available commands: help, clear, quote [symbol], news, portfolio, time, about',
    'clear': 'clear',
    'quote': 'Usage: quote [SYMBOL] - Get current quote for a symbol',
    'news': 'Fetching latest market news...',
    'portfolio': 'Portfolio Summary:\nTotal Value: $1,245,678.90\nDay Change: +$12,456.78 (+1.01%)',
    'time': new Date().toLocaleString(),
    'about': 'Waves Intelligence Console v1.0 - Bloomberg-style Financial Terminal'
};

function executeCommand(cmd) {
    const parts = cmd.trim().toLowerCase().split(' ');
    const command = parts[0];
    const args = parts.slice(1);
    
    let output = '';
    
    if (command === '') {
        return;
    }
    
    if (command === 'clear') {
        commandOutput.innerHTML = '';
        commandOutput.classList.remove('active');
        return;
    }
    
    if (command === 'quote' && args.length > 0) {
        const symbol = args[0].toUpperCase();
        const price = (Math.random() * 500 + 50).toFixed(2);
        const change = (Math.random() * 10 - 5).toFixed(2);
        output = `${symbol}: $${price} ${change > 0 ? '+' : ''}${change}%`;
    } else if (commands[command]) {
        output = commands[command];
    } else {
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }
    
    const outputLine = document.createElement('div');
    outputLine.className = 'output-line';
    outputLine.textContent = `> ${cmd}`;
    commandOutput.appendChild(outputLine);
    
    const resultLine = document.createElement('div');
    resultLine.className = 'output-line';
    resultLine.textContent = output;
    commandOutput.appendChild(resultLine);
    
    commandOutput.classList.add('active');
    commandOutput.scrollTop = commandOutput.scrollHeight;
}

commandInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cmd = commandInput.value;
        executeCommand(cmd);
        commandInput.value = '';
    }
});

// Add news item periodically
function addNewsItem() {
    const newsItems = document.getElementById('newsItems');
    if (!newsItems) return;
    
    const newsTemplates = [
        'Market volatility increases amid economic uncertainty',
        'Technology sector leads market gains',
        'Central bank announces policy decision',
        'Corporate earnings exceed expectations',
        'Commodity prices fluctuate on supply news',
        'Financial markets react to geopolitical events'
    ];
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit'
    });
    
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
        <span class="news-time">${timeString}</span>
        <span class="news-text">${newsTemplates[Math.floor(Math.random() * newsTemplates.length)]}</span>
    `;
    
    newsItems.insertBefore(newsItem, newsItems.firstChild);
    
    // Keep only latest 10 news items
    while (newsItems.children.length > 10) {
        newsItems.removeChild(newsItems.lastChild);
    }
}

// Add news every 30 seconds
setInterval(addNewsItem, 30000);

// Console log
console.log('%cWaves Intelligence Console', 'color: #FF8C00; font-size: 20px; font-weight: bold;');
console.log('%cBloomberg-style Financial Terminal', 'color: #FFD700; font-size: 14px;');
console.log('%cType "help" in the command line for available commands', 'color: #FF8C00; font-size: 12px;');
