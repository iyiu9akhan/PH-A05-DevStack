Project Name : DevStack


Description : DevStack is a responsive web app , designed   for developers to explore and select various programming languages , frameworks and tools to build their ideal technology stack


Technology ussed: 
  - Javascript + TypeScript
  - React + Vite
  - TailwindCSS + React Toastify 


Features: 
  - Responsive navigation header;
  - Interactive stack builder;
  - Responive technology card grid;



i. What is JSX, and why is it used in React? 
  - jsx mean javascript xml , with this we can write html syntax directly in our js/ts files.

ii. What is the difference between props and state?
  - props: i can pass this from a parents component to a child component.
  - state: i can manage this internally within the components and can change based on user actions.

iii. What does the useState hook do, and where did you use it in this project? 
  - useState let use add and manage state variable in functional components. in this project i used it to toggle the mobile menu (hamburger menu icon), also i used this hook to track user's selected tech stack.

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
  - this hook can handle side effects , like data fetching. i need this hook to load json data asynchronously.

v. Why does every item in a .map() list need a unique key prop?
  - "Keys" help react to identify which items have changed , added, remooved and stable stable rendering. 

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
 - conditional rendering is showing or hiding ui based on a condition. in this project , i used conditional rendering to displaying an empty stack message when no technology selected yet.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  - i passed data from a parent component to a child component by using props.
  - parent component pass a function through props, child call that function to send back required data 

