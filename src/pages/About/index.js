import React from 'react';
import './styles.css'
import slimetooth_logo from '../../images/slimetooth_logo'

const About = () => {
    return (
        <div id='ab-div'>
            <div id='ab-div2'>
            <img src={slimetooth_logo} height='400' width='400' />
            <p>Slimetooth Art is based in Massachusetts and is inspired by slime (obvs!), the colors lime green and bright pink, bones, nature, animals, cuteness, Halloween, cemetaries, cartoons, music, baked treats and sweets, candy, sanrio, aliens, the future, the past, ghosts, gremlins, goblins and more!

                Materials most often used include: acrylic paint, polymer clay, glass beads, rhinestones, natural stones, silicon, markers, and love.</p>
                </div>
        </div>
    );
}

export default About;
