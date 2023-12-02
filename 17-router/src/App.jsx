import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import router from './router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;

// დავალება
// ● აირჩიე რომელიმე მხატვრული პერსონაჟი
// და შექმენი აპლიკაცია react-router-dom
// ბიბლიოთეკის გამოყენებით
// ● აპლიკაციაში უნდა იყოს მთავარი გვერდი,
// პერსონაჟის ფოტოთი და სახელით, /about
// გვერდი, სადაც პერსონაჟზე ზოგადი
// ინფორმაცია იქნება მოთავსებული და
// /:factId გვერდი, სადაც JavaScript
// ობიექტიდან იქნება შერჩეული ფაქტი
// კონკრეტული id-ით
// ● თუ ფაქტი id - ით არ არსებობს, გვერდზე
// უნდა დაეწეროს, რომ ფაქტი ვერ მოიძებნა
