interface Ref {
    name: string,
    url: string,
  }
  export interface Questions {
    link: string;
    title: string;
    description: string;
    ref: Ref[];
  }

  const questions: Questions[] = [
    {
      link: 'hello-world',
      title: 'Exercise 1: Hello World!',
      description: 'Every programming language starter tutorial teaches you how to output "Hello, World!" using the language.',
      ref: [
        {
          name: 'handling events', 
          url:'https://legacy.reactjs.org/docs/handling-events.html', 
        },
        {
          name: 'alert() method',
          url: 'https://www.w3schools.com/jsref/met_win_alert.asp'
        }
      ]
    },
    {
      link: 'user_clicks',
      title: 'Exercise 2: Capturing User Clicks',
      description: 'This exercise gets you started with event handling',
      ref: [
        {
          name: 'How to center a text inside a div', 
          url:'https://www.w3schools.com/css/css_align.asp', 
        },
        
      ]
    },
    {
      link: 'custom_component',
      title: 'Exercise 3: Custom Component',
      description: 'In this exercise, build your own Button component and render it three times',
      ref: [      
      ]
    },
    {
      link: 'state_props',
      title: 'Exercise 4: State and Props',
      description: 'The number must increment each time the button is clicked',
      ref: [      
      ]
    },
    {
      link: 'map_list',
      title: 'Exercise 5: Mapping Through A List And Rendering',
      description: 'Use the map function to render them in an unordered list',
      ref: [      
      ]
    },
    {
      link: 'map_list_component',
      title: 'Exercise 6: Mapping Through A List And Rendering using Component',
      description: 'you\'ll create a custom component that displays each item from exercise 5',
      ref: [      
      ]
    },
  ]

  export default questions;