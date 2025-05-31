### 📝 **Problem Statement: Real-time Financial Dashboard – "Stoxly"**

**Background:**

In the fast-paced world of finance, investors, traders, and researchers often rely on multiple platforms to track stock prices, commodity trends, and relevant financial news. This fragmentation causes inefficiency, delayed decision-making, and poor user experience — especially for retail investors or beginners trying to make informed decisions quickly.

**Objective:**

To build a **responsive, single-page financial dashboard** that consolidates and presents **real-time stock market data**, **commodity prices**, and **latest financial news headlines** in an organized and accessible format. The dashboard must be cleanly structured with smooth in-page navigation using `react-scroll`, enabling users to instantly jump to specific sections like "Active Stocks," "Commodities," or "News".


###  **Core Features:**

1. **Active Stock Listings**

   * Real-time or near-real-time prices of trending or user-specified stocks.
   * Include ticker, company name, current price, price change, and % change.
   * Color-coded indicators for gains/losses.

2. **Commodities Market**

   * Live prices for key commodities (e.g., Gold, Silver, Crude Oil).
   * Option to filter/view different timeframes or chart history.

3. **Stock News Feed**

   * Latest financial and market-related news articles.
   * Headlines with short summaries and clickable links to sources.

4. **Sticky Navigation Bar**

   * Navigation bar with links (via `react-scroll`) to smoothly scroll to:

     * `#active` – Active Stocks Section
     * `#commodities` – Commodities Section
     * `#news` – News Section

5. **Mobile-Responsive Design**

   * Optimized layout for desktops, tablets, and mobile devices.
   * Mobile drawer menu that collapses into a hamburger icon.



###  **Tech Stack:**

* **Frontend:** React, Material-UI (MUI), react-scroll
* **Data Sources:** Alpha Vantage / Finnhub / Yahoo Finance APIs (for stocks/commodities), NewsAPI / GNews (for financial headlines)
* **Deployment:** Vercel / Netlify / GitHub Pages (optional)



### **Success Criteria:**

* Users can view all financial data in one page without page reloads.
* Navigation to different sections is smooth and responsive.
* Data is accurate and updated frequently.
* UI/UX is clean, modern, and beginner-friendly.



