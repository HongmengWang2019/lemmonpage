// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'roboto-flex': ['"roboto-flex"', 'sans-serif'], // Define custom font-family
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'],
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'],
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif']
        // sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        '70p': '70%', 
      },
      spacing: {
        '20p': '20%',
        '40p': '40%',
        '45p': '45%',
        '60p': '60%', // Adding a custom spacing key '20p' for 20%
      },
      inset: {
        '20p': '20%',
        '40p': '40%',
        '45p': '45%', 
        '60p': '60%', // Extending inset to include '20p' for top, right, bottom, left
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
