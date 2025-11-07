// lib/ga/index.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Send pageview to GA
export const pageview = (url) => {
    if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Send custom event
export const event = ({ action, params }) => {
    if (window.gtag) {
        window.gtag("event", action, params);
    }
};
