
            function func()
            {
            var app = document.getElementById('app');

            var typewriter = new Typewriter(app, {
             loop: true
            });

            typewriter.typeString('Hello My Pagl!')
                .pauseFor(2300)
                .deleteAll()
                .typeString('I know hmare beech boht ldayian hoti hai...i know ham do-do teen-teen din bat nhi krte ldai krke jiski vjah se dono ka mood spoil hota hai')
                .pauseFor(1500)
                .deleteAll()
                .typeString('Mei sach mei yr aisa kuch nhi chahta tha aapne relation mei...bt yr aise circumstances bnte rhe or ab haalat chodne tk ke aagye hai....bt its ok yeh time bhi hamne face kr liya...which is very good for our future')
                .pauseFor(1500)
                .deleteAll()
                .typeString('I love u baby and i know u love too....kya ham aapne pyr ke liye ek last try nhi kr skte....i promise ki agr ab yeh last try ke liye manti hai i will change everything.....')
                .pauseFor(1500)
                .deleteAll()
                .typeString('Mei promise krta hu ki pichli bar jesa kuch nhi hoga....ab agr hmari ldai hui...vo to obvious hai hogi hi...ek relation mei ldai na ho to kya mazaa')
                .pauseFor(1500)
                .deleteAll()
                .typeString('Ham dono ko yeh promise krna hoga ki chahe jitni mrzi bdi ldai ho ham ek dusre se bat krenge naki ek dusre se dur bhagenge.....nd ldai jis din hui hai usi din solve krenge....without any attitude')
                .pauseFor(1500)
                .deleteAll()
                .typeString('kya ham baby aapne relation ko last chance de skte hai??...i promise purane jesa kuch nhi hoga....!!!')
                .pauseFor(1500)
                .deleteAll()
                .typeString('Niche vale button pe click kro')
                .pauseFor(1500)
                .start();
            }