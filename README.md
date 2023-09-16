# Three features of my Course Registration project here:
* Course Management
* Anyone can add only unique item in queue
* Anyone can add multiple item in course list
* Here is a alert system for duplicate item select and credit limit exceed
* My project has a latest feature that can measure and calculate the course credit, credit hour and total cost. A student can not get more than 20 credit if it exist student can take a alert.

# How can I manage my state in this project.
* First declare a state using useState() hook in app.jsx file cause we can share props from parent to child. and also declare a envent handler function for handle the event. App.jsx send a props to his child component and the button we clicked it can get the handle function then the onclick connect with that and if we click the button then a parameter is send to the app.jsx file event handler function and the function update the state valu. In this way I manage my state in this project.

* Here another state is useEffect() for fetching data from public. We can use useEffect for fetching data thats why if any error in fetching then don't crush my site and also have a dependency array. Dependency array have a number that is the number of data fetching after render the page.
