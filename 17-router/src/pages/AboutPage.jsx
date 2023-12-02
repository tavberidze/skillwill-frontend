import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <h2>About Amélie</h2>
        <p>Amélie Poulain is born in 1974 and brought up by eccentric parents who – incorrectly believing that she has a heart defect – decide to home-school her. To cope with her loneliness, Amélie develops an active imagination and a mischievous personality. When Amélie is six, her mother, Amandine, is killed when a suicidal Canadian tourist jumps from the roof of Notre-Dame de Paris and lands on her. As a result, her father, Raphaël, withdraws more and more from society. Amélie leaves home at the age of 18 and becomes a waitress at the Café des 2 Moulins in Montmartre, which is staffed and frequented by a collection of eccentrics. She is single and lets her imagination roam freely, finding contentment in simple pleasures like dipping her hand into grain sacks, cracking crème brûlée with a spoon, and skipping stones along the Canal Saint-Martin</p>
    </div>
  )
}

export default AboutPage