import React from "react"
import siteStyle from './index.module.scss'
import { Helmet } from 'react-helmet'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import Projects from '../components/projects'
import Education from '../components/education'

const Index = () => {
  return (
    <div className={siteStyle}>
      <Helmet title="Michaels-Portfolio">
        <link href="https://fonts.googleapis.com/css?family=Blinker&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Carter+One&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}
export default Index