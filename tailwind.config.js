/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple":"#7D4AEA",
        "primary-purple-op-1":"#f2edfd",
        "primary-purple-hover": "#ad8eee",
        "custom-gray": "#666666",
        "feature-card-color": "#F5F5F5",
        "faq-border-color" : "#EAEAEA",
        "faq-item-header-text-color" : "#777777",
        "modal1-input-border":"#D2DAE3",
        "position-block-border": "#DDDDDD",
        "lang-red-color":"#EA0F0F",
        "script-color": "#333333"
    },
    fontFamily: {
      inter: 'Inter',
      poppins : 'Poppins',
      robotoMono : 'Roboto Mono'
    }, 
    lineHeight: {
      '80': '80px',
    },
    boxShadow: {
      'tryItDownButton': '0px 5px 10px 2px rgba(125, 74, 234, 0.27)',
      'getYourCode': ' 0px 5px 10px 2px rgba(125, 74, 234, 0.27)'
    }
  },
  plugins: [] 
}
}
