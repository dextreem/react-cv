import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* 
Font sizes:
10 12 14 16 18 20 24 30 36 44 52 62 74 86 98

Spaces:
2 4 8 12 16 24 32 48 64 80 96 128

Font weights:
Default: 400
Medium: 500
Semi-Bold: 600
Bold: 700
*/

:root {

  scroll-behavior: smooth;

  --color-grey-fixed-light: #e5e7eb;
  --color-grey-fixed-dark: #374151;
  --color-brand-fixed-medium: #087f5b;
  --color-background-grey-opaque-fixed-light: rgb(229, 231, 235, 0.8);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  
  &, &.light-mode{
    --color-brand-50: #e6f2ef;
    --color-brand-100: #cee5de;
    --color-brand-200: #9cccbd;
    --color-brand-500: #52a58c;
    --color-brand-600: #087f5b;
    --color-brand-700: #065940;
    --color-brand-800: #033324;
    --color-brand-900: #021912;

    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    

    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  &, &.dark-mode{
    --color-brand-900: #e6f2ef;
    --color-brand-800: #cee5de;
    --color-brand-700: #9cccbd;
    --color-brand-600: #52a58c;
    --color-brand-500: #087f5b;
    --color-brand-200: #065940;
    --color-brand-100: #033324;
    --color-brand-50: #021912;

    --color-grey-0: #0f131a;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #166534;
    --color-green-700: #dcfce7;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
    
  }
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  transition: background-color 0.3s, border 0.3s;
}

*:disabled{
  cursor: not-allowed;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  

  /* TODO: Enable when done */
  /* overflow: hidden; */
}

body {
  font-family: "Rubik", sans-serif;
  color: var(--color-grey-700);
  background-color: var(--color-grey-50);

  transition: background-color 0.3s, color 0.3s;
  line-height: 1.5;
  min-height: 100vh;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button {
  cursor: pointer;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
