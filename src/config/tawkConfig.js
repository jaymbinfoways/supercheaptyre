// Tawk.to Configuration
// Replace these with your actual Tawk.to credentials
// You can find these in your Tawk.to dashboard: Administration > Channels > Chat Widget

export const tawkConfig = {
    // Your Property ID from Tawk.to dashboard
    propertyId: import.meta.env.VITE_PROPERTYID,
    
    // Your Widget ID from the script URL
    widgetId: import.meta.env.VITE_WIDGETID,
    
    // Optional: Custom configuration
    options: {
        // You can add custom options here if needed
        // For example: theme customization, etc.
    }
};

// Instructions:
// 1. Log in to your Tawk.to account
// 2. Go to Administration > Channels > Chat Widget
// 3. Copy your Property ID and Widget ID
// 4. Replace the values above with your actual credentials
// 5. Update the ChatSupport.jsx component to use these values
