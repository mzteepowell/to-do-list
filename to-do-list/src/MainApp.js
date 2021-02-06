import React from 'react';
import ToDo from './ToDo';
import './App.css';
import Footer from './Footer';
import Header from './Header';

export default function MainApp() {
    const date = new Date();
    var hourFormat = date.getHours() === 0 ? 12 : date.getHours() % 12;
    var am_pm = date.getHours() < 12 ? "AM" : "PM";
    var minFormat = (date.getMinutes() % 60) < 10 ? "0" :"";
    var greeting =  date.getHours() >= 18 ? "Good evening, "
        : date.getHours() >= 12 ? "Good afternoon, "
        : "Good morning, ";

    return (
        <div className="App">
        <main className="App-Wrapper">
        <Header />
        <section>
            <h2 className="time">{`${greeting} The time is ${hourFormat }:${minFormat}${date.getMinutes() %60} ${am_pm}`}</h2>
            <h3>What do you want to accomplish today?</h3>
        </section>
        <section>
        <ToDo/>
        </section>
        <Footer />
        </main>
        
        </div>
        );
}