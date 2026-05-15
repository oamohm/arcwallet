# 🏦 arc pro wallet (arc testnet)

ek lightweight aur secure web-based wallet jo specifically **arc testnet** par native usdc transfers ke liye design kiya gaya hai. ye ethers.js v6 ka upyog karke browser mein hi blockchain se interact karta hai.

---

## ✨ features
* **instant connect:** brave ya metamask wallet ke sath seamless integration.
* **auto chain switch:** agar arc testnet added nahi hai, to ye automatically chain add/switch karne ka option deta hai.
* **native usdc support:** `0x3600000000000000000000000000000000000000` contract se direct balance aur transfer fetch karta hai.
* **live ledger:** real-time transaction history tracking browser session ke dauran.
* **optimized ui:** dark mode interface jo mobile aur desktop dono par sahi chalta hai.

---

## 🚀 setup & installation

1.  **file create karein:**
    `index.html` naam ki ek file banayein aur usme sara code paste kar dein.

2.  **local server par chalayein:**
    file ko kisi bhi web browser mein open karein (visual studio code ka *live server* extension best hai).

3.  **network requirements:**
    * **rpc url:** `https://arc-testnet.drpc.org`
    * **chain id:** `5042002` (0x4cef52)
    * **symbol:** `USDC`

---

## 🛠 technical stack
* **frontend:** html5, css3 (inter fonts)
* **blockchain library:** [ethers.js v6.7.0](https://docs.ethers.org/v6/)
* **network:** arc testnet layer 1

---

## 📖 how to use?

1.  **connect wallet:** top right mein 'connect' button par click karein aur brave/metamask permission allow karein.
2.  **check balance:** connect hote hi aapka **native usdc** balance screen par dikhega.
3.  **send tokens:** * recipient ka address (`0x...`) enter karein.
    * amount daalein.
    * 'process transfer' par click karein aur wallet mein sign karein.
4.  **track activity:** ledger mein apni recent transactions ka status check karein.

---

## ⚠️ troubleshooting
* **balance zero dikh raha hai?** ensure karein ki aapne arc testnet faucet se tokens liye hain.
* **rpc error?** kabhi kabhi rpc down hota hai, page refresh karke dobara connect karein.
* **transaction fail?** check karein ki aapke paas gas fees ke liye native tokens hain ya nahi.

---

built with authority by @bhupendrxsingh
