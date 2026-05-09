// replace existing balance logic in script.js
async function updateRealTimeData() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const address = accounts[0];

        // get balance
        const balance = await provider.getBalance(address);
        document.getElementById('balanceDisplay').innerText = ethers.utils.formatEther(balance);

        // get transactions (last 5)
        const history = await provider.getHistory(address);
        const recentTx = history.slice(0, 5);
        console.log("recent activity:", recentTx);
    }
}

// call this on interval for real-time feel
setInterval(updateRealTimeData, 10000); 
