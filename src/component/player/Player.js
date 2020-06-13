import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Photo from './image/Chuong-Nguyen.jpg'
import './Player.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});


const midfilder = [ 
    { number: 10 , image: "Chuong-Nguyen.jpg", name: "Chuong Nguyen", position: "MIDFIELDER"},
    { number: 10 , image: "Tim-Huynh.jpg", name: "Tim Huynh", position: " CENTRAL MID"},
    { number: 10 , image: "Nguyen-Sy-Nguyen.jpg", name: "Nguyen Sy Nguyen", position:"ATTACKING MID"}
]; 



const forward = [ 
    { number: 21 , image: "Kevin-Nguyen.jpg", name: "Kevin Nguyen", position: "FORWARD"},
    { number: 10 , image: "Toan.jpg", name: "Toan Nguyen", position:"FORWARD"},
   
]; 

const defender = [ 
    { number: 21 , image: "Thinh-Quet.jpg", name: "Thinh Quoc", position: "RIGHT BACK"},
    { number: 10 , image: "Thuan-Nguyen.jpg", name: "Thuan Nguyen", position: "CENTER BACK"},
   
]; 





export default function Player() {
    

console.log (Photo)
  const classes = useStyles();
    return( 
        <div className="playerContainerbox"> 
                <h2 className="position" > ROSTER </h2>
                <img className="austinFusionIcon" src= "https://i.ibb.co/M5BhZjJ/Austin-logo.png" />
                <br/>
                <div class="containerCard">
                {
                    midfilder.map ((value ) => {
                            return (
                                <article class="card">
                                <header class="card__header"><img class="card__header--thumb" src= {require(`./image/${value.image}`)} /></header>
                                {/* <section class="card__date"><span class="card__date--day">10</span></section> */}
                                <section class="card__body">
                            <h5 class="card__body--category"> <a href="#">{value.position}</a></h5>
                            <h1 class="card__body--title"> <a href="#">{value.name}</a></h1>
                                  {/* <h2 class="card__body--subtitle">Animation effect card CSS</h2> */}
                                  <p class="card__body--description">I had fun at creates an animation in the overview of this card, giving him up with a transition effect. I got inspiration from a tutorial on the web and I meet at best the BEN convention</p>
                                </section>
                                <footer class="card__footer"><span class="icon icon--time">4h</span><span class="icon icon--comment"><a href="#">1 comments</a></span></footer>
                              </article>
                            )
                    })
                }
                {
                    forward.map ((value ) => {
                            return (
                                <article class="card">
                                <header class="card__header"><img class="card__header--thumb" src= {require(`./image/${value.image}`)} /></header>
                                {/* <section class="card__date"><span class="card__date--day">10</span></section> */}
                                <section class="card__body">
                            <h5 class="card__body--category"> <a href="#">{value.position}</a></h5>
                            <h1 class="card__body--title"> <a href="#">{value.name}</a></h1>
                                  {/* <h2 class="card__body--subtitle">Animation effect card CSS</h2> */}
                                  <p class="card__body--description">I had fun at creates an animation in the overview of this card, giving him up with a transition effect. I got inspiration from a tutorial on the web and I meet at best the BEN convention</p>
                                </section>
                                <footer class="card__footer"><span class="icon icon--time">4h</span><span class="icon icon--comment"><a href="#">1 comments</a></span></footer>
                              </article>
                            )
                    })
                }
                {
                    defender.map ((value ) => {
                            return (
                                <article class="card">
                                <header class="card__header"><img class="card__header--thumb" src= {require(`./image/${value.image}`)} /></header>
                                {/* <section class="card__date"><span class="card__date--day">10</span></section> */}
                                <section class="card__body">
                            <h5 class="card__body--category"> <a href="#">{value.position}</a></h5>
                            <h1 class="card__body--title"> <a href="#">{value.name}</a></h1>
                                  {/* <h2 class="card__body--subtitle">Animation effect card CSS</h2> */}
                                  <p class="card__body--description">I had fun at creates an animation in the overview of this card, giving him up with a transition effect. I got inspiration from a tutorial on the web and I meet at best the BEN convention</p>
                                </section>
                                <footer class="card__footer"><span class="icon icon--time">4h</span><span class="icon icon--comment"><a href="#">1 comments</a></span></footer>
                              </article>
                            )
                    })
                }
                </div>
        </div>
    );
}
