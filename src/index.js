import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
//import UserApp from './chapter_07/UserApp';
//import MeasureExample from './chapter_07/MeasureExample';
//import Accommodate from './chapter_07/Accommodate';
//import Toggle from './chapter_08/Toggle';
//import ConfirmButton from './chapter_08/ConfirmButton';
//import MainPage from './chapter_09/MainPage';
//import LandingPage from './chapter_09/LandingPage';
//import AttendanceBook from './chapter_10/AttendanceBook';
//import NameForm from './chapter_11/NameForm';
//import FruitSelect from './chapter_11/FruitSelect';
//import Reservation from './chapter_11/Reservation';
import SignUp from './chapter_11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<SignUp />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
