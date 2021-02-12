# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Stateful components are class-based components and manage state. Functional components do not manage state and are used to return a React element. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?
 componenteWillMount triggers before the actual render but it is not considered unsafe to use. componentWillUpdate is invoked befor rerendering when new props or state are being recieved. This is also considered unsafe now.

3. Define stateful logic.
 It is any code that uses State. When using hooks it is the behavior created with the use of hooks. 

4. What are the three step of creating a successful test? What is done in each phase?
Arrang: setting up the component to test
Act: Execute the behavior
Assert: Extract the response