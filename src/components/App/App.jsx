import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Epic1 from '../UserPageEpic1/Epic1';
import './App.css';
import Epic2 from '../UserPageEpic2/Epic2'; //TOU's Work
import Epic3 from '../UserPageEpic2/Epic2'; //TOU's Work
import Card1Selected from '../UserPageEpic1/EpicCard_1Selected';
import Card1Edit from '../UserPageEpic1/EpicCard_1SSEdit';
import Card2Selected from '../UserPageEpic1/EpicCard_2Selected';
import Card2Edit from '../UserPageEpic1/EpicCard_2SSEdit';
import Card3Selected from '../UserPageEpic1/EpicCard_3Selected';
import Card3Edit from '../UserPageEpic1/EpicCard_3SSEdit';
////////////////////////////Epic2
////////////////////////////Epic2
////////////////////////////Epic2
////////////////////////////Epic2
import Card1GaSelected from '../UserPageEpic2/EpicCard_1GaSelected';
import Card1GaEdit from '../UserPageEpic2/EpicsCard_2GaEdit';
function App() {
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_USER' });
    }, [dispatch]);

    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                    <Redirect exact from="/" to="/home" />

                    {/* Visiting localhost:3000/about will show the about page. */}
                    <Route
                        // shows AboutPage at all times (logged in or not)
                        exact
                        path="/about"
                    >
                        <AboutPage />
                    </Route>

                    {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
                    <ProtectedRoute
                        // logged in shows UserPage else shows LoginPage
                        exact
                        path="/user"
                    >
                        <UserPage />
                    </ProtectedRoute>

                    {/* Tou's work */}
                    <ProtectedRoute exact path="/epic1">
                        <Epic1 />
                    </ProtectedRoute>

                    {/* Tou's work: card 1 selection */}
                    <ProtectedRoute exact path="/card1Selected">
                        <Card1Selected />
                    </ProtectedRoute>

                    {/* Tou's work: Card 1 Edit */}
                    <ProtectedRoute exact path="/Card1Edit">
                        <Card1Edit />
                    </ProtectedRoute>

                    {/* Tou's work card 2 selection */}
                    <ProtectedRoute exact path="/card2Selected">
                        <Card2Selected />
                    </ProtectedRoute>

                    {/* Tou's work Card 2 Edit  */}
                    <ProtectedRoute exact path="/Card2Edit">
                        <Card2Edit />
                    </ProtectedRoute>

                    {/* Tou's work card 3 Selection */}
                    <ProtectedRoute exact path="/card3Selected">
                        <Card3Selected />
                    </ProtectedRoute>

                     {/* Tou's work card 3 edit */}
                    <ProtectedRoute exact path="/Card3Edit">
                        <Card3Edit />
                    </ProtectedRoute>
                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}
                    {/* Tou's work Show me th epics*/}
                    <ProtectedRoute exact path="/epic2">
                        <Epic2 />
                    </ProtectedRoute>

                    {/* Tou's work: selection */}
                    <ProtectedRoute exact path="/card1GaSelected">
                        <Card1GaSelected />
                    </ProtectedRoute>


                    <ProtectedRoute exact path="/Card1GaEdit">
                        <Card1GaEdit />
                    </ProtectedRoute>


                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////// */}

                    {/* Tou's work */}
                    <ProtectedRoute exact path="/epic3">
                        <Epic3 />
                    </ProtectedRoute>

                    <ProtectedRoute
                        // logged in shows InfoPage else shows LoginPage
                        exact
                        path="/info"
                    >
                        <InfoPage />
                    </ProtectedRoute>

                    <Route exact path="/login">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect to the /user page
                            <Redirect to="/user" />
                        ) : (
                            // Otherwise, show the login page
                            <LoginPage />
                        )}
                    </Route>

                    <Route exact path="/registration">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them to the /user page
                            <Redirect to="/user" />
                        ) : (
                            // Otherwise, show the registration page
                            <RegisterPage />
                        )}
                    </Route>
                    <Route exact path="/home">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them to the /user page
                            <Redirect to="/user" />
                        ) : (
                            // Otherwise, show the Landing page
                            <LandingPage />
                        )}
                    </Route>

                    {/* If none of the other routes matched, we will show a 404. */}
                    <Route>
                        <h1>404</h1>
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
