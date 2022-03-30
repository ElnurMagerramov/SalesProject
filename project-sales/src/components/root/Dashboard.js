import React, { Component } from 'react'
import Categories from '../categories/Categories'
import MiddleAbout from '../home/MiddleAbout'
import SlideShow from '../home/SlideShow'
import Statistics from '../home/Statistics'
import Contact from "../contact/Contact";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <SlideShow/>
                <Categories/>
                <Statistics/>
                <MiddleAbout/>
                <Contact/>
            </div>
        )
    }
}
