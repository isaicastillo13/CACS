/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",    
    "src/js/**/*.js"    
  ],
  theme: {
    colors: {
      'AguamarinaMediana':'#65D5A6',
      'AzulCielo':'#84C9DF',
      'BlancoCultivado':'#F5F5F5',
      'Gris':'#555555',
      'Negro':'#000000'
    },
    extend: {
      fontFamily: {
        BlauerNueRegular: ['Blauer-Nue-Regular', 'sans-serif'],
        BlauerNueBold: ['Blauer-Nue-Bold', 'sans-serif'],
        BlauerNueThin: ['Blauer-Nue-Thin', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/imagenes/Gradiantes/Color/Gradient-(2).jpg')",
      }
    },             
  },
  plugins: []               
}
