## Stars 

### The app is implemented with the following components:
- [Home](https://github.com/HristijanAntov/stars/tree/master/src/components/home)
  **This is where the app starts and the popup is shown when it should**
- [Popup Container](https://github.com/HristijanAntov/stars/tree/master/src/components/popup-container)
  **This is the root modal inside which the popup is placed as a children. It is implemented as a React Portal**
- [Popup](https://github.com/HristijanAntov/stars/tree/master/src/components/popup)
  **This is the actual popup component which contains the stars and is designed based on the provided design.png**

- [Star](https://github.com/HristijanAntov/stars/tree/master/src/components/star)
  **The actual Star component that uses the given icons**
 
 ### About state managment:
  #### The Redux state for the stars stores: 
  ```typescript
    
    rating: undefined | -1 | number:
      When it is undefined it means that the fetch for the rating is not done yet.
             - This comes handy when we infere whether we show the popup or not
             - https://github.com/HristijanAntov/stars/blob/master/src/components/home/component.jsx#L21

      When it is -1 it means that the fetch for the rating is received but with an 404 response, so we infere that the user never    rated before.
      When it is some number >= 0 it means that the fetch for the rating is received successfully so the user rated before, therefore we don't show the popup
    
    isFeedbackClosed: undefined | boolean
      When it is undefined it means that the fetch for the closed preference is not done yet.
      When it is a boolean it means that the fetch for the closed preference is done, then we infere whether we show the popup or not
    
    submitting: boolean
      When we do a submit either for the closed preference or for a feedback rating we flag this field as true, after the api call is 
      over we just flag it as false.
      It is used to disable double submits after one is already fired
    
   ```
 
  #### Local component state:
    The only place where local state is stored is in the popup component.
    It stores just the rating field, in order to manage the ingoing user rating (whenever he mouseovers or mouseleaves on some of the stars)
    

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
 
