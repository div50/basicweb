function last()
{
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('I LOVE U MY BEVKOOF')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('GDHI')
    .pauseFor(1500)
    .deleteChars(4)
    .typeString('PRINCESS')
    .pauseFor(1500)
    .deleteChars(8)
    .deleteAll()
    .typeString('Can we begin again with a new start??')
    .pauseFor(1500)
    .deleteChars(30)
    .typeString('be back again together??')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Please type yes or no in chat')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Yours Loving:- Divyansh')
    .pauseFor(400000)
    .start();
}