/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter']
      },
      screens: {
        'sd': '836px',
        'a': '480px'
      },
      maxWidth: {
        'sd': '808px',
        'header': '290px',
        'headersm': '172px'
      },
      fontSize: {
        's' : '10px'
      },
      backgroundColor: {
        brend: {
          black: '#464646',
          space_black:  '#2B2828',
          red: '#DA5A5A',
          gray: '#393939',
          darkmode: '#F3F4F4',
          space_gray: '#656565',
          spaced_gray: '#696969',
          space_green: '#19CE83',
          wheat: '#E3E3E3',
          space_wheat: '#F6F6F6',
          pink: '#DA7FBB',
          orange: '#DF7940',
          blue: '#77BCE3',
          space_blue: '#3B8CD7',
          spaced_green: '#53AF89',
          green: '#C8F1E1'
        }
      },
      accentColor: {
        brend: {
          black: '#464646',
          gray: '#818181',
          darkmode: '#F3F4F4',
          space_gray: '#656565',
          space_green: '#19CE83',
          wheat: '#E3E3E3',
          orange: '#DF7940',
          blue: '#2789D0',
          green: '#53AF89'
        }
      },
      borderColor: {
        border: {
          wheat: '#E3E3E3',
          darkmode: '#F3F4F4',
          gray: '#656565',
          spaced_gray: '#696969',
          space_gray: '##757575',
          bob: '#B0B0B0'
        }
      },
      textColor: {
        brand: {
          gray: '#656565',
          space_gray: '#818181',
          spaced_gray: '#A4A4A4',
          gray_text: '#DDD',
          red: '#FFD3D3',
          bob: '#B0B0B0',
          space_green: '#19CE83',
          black: '#2B2828',
          darkmode: '#F3F4F4',
          wheat: '#E3E3E3'
        }
      },
      borderRadius: {
        '2.5xl': '20px',
        '3.5xl': '100px'
      },
      spacing: {
        'left-1/6': '10%'
      }
    },
  },
  plugins: [],
}