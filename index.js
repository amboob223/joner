const jone = { //  may be
    nose: {
        fat: ["plump", "juicy", "pumpkin", "blubber", "muffin", "gorrila", "egg", "hammer", "basket", "cucumbuer", "swollen thumb"],
        slim: ["cigarette", "diet", "line", "linkedin", "link", "sausage"],
        small: ["baby", "midget", "wicbaby", "gerberbaby", "mini", "lilbitti", "roach"]
    },
    head: {
        fat: ["peanut", "macbook", "boonkey", "football", "bottle", "sandwhich", "monkey"],
        slim: ["hot dawg", "dagger", "choppa", "tube", "soundbar", "stapler"],
        small: ["peach", "bean", "ice chip", "button", "beetlejuice tiny ugly"]
    },
    body: {
        fat: ["truck", "hamburger and cheese", "fudge round", "bowl of fat", "slopy joe", "jabba the hut",],
        slim: ["line body", "I need a dollar lookin", "ethiopian commerical back in the day", "refugee", "stick body"],
        small: ["baby", "lil bitty", "jitbody", "roach lookin", "southpark shawty body"]
    }
}//we user an object because the body part keys will be uniue and the values will be arrays we can indexi nto with the random number

//varibles

const button = document.querySelector(".btn")
const nose = document.getElementById("nose")
const body = document.getElementById("body")
const head = document.getElementById("head")
const container = document.querySelector(".jcontain")


const dome = head.value // this values is a property of the option that siin the select the head element
const snoz = nose.value
const bod = body.value
//
//events

button.addEventListener("click", () => {

    container.innerHTML = ""
    const dome = head.value // this values is a property of the option that siin the select the head element
    const snoz = nose.value // 
    const bod = body.value //

    //what we want is when you clik it it takes tht and talks to the jone data
    //i.e. if you click slim nose we need to makthc theat with a conditional
    //if you picked fat then we get a  random generated jone bout a fat nose
    // and we take that jone and append it to the jonecontainer in the form of a string

    const target = [snoz, dome, bod]// these are element values this is chosen randomly when the click event happens we pick the target

    let randnum = Math.floor(Math.random() * target.length)

    //     //then in here I want to get a random jone 
    //    let randomNum= Math.floor(Math.random() * jone.nose.fat.length) // this if for now eventually I will use a map to get each array individually then adjust the three here for the given RRAY LENGTH
    //    let randomWord =  jone.nose.fat[randomNum]

    //     let str = "gone with yo "+` ${randomWord}`+" nose ahh"
    //     // console.log(str)

    //ranodom key that will pick what part to jone with the given info
    //we need the user choice as well  
    let tar = target[randnum] // this works


    let randomKey = Object.keys(jone)[randnum] // a random key from jon
    let randomTar = jone[randomKey] // a random target to jon on with the info we got

    let choice = target[randnum]
    let randomar = Math.floor(Math.random() * randomTar[choice].length)
    // let randwornum = Math.floor(Math.random() * randWor.length)
    // console.log(jone[randomKey][randomTar][randwornum])
    let randomWord = randomTar[choice][randomar]

    place = document.createElement("p")
    place.classList.add("result")

    const sentences = ["Yo gat dammm " + `${randomWord} ` + `${randomKey} ` + " ahh! ", "Ole gat damm " + `${randomWord} ` + `${randomKey}` + " ahh! ", "Dats why yo " + `${randomKey} ` + " built like a " + `${randomWord}!`]

    place.innerHTML = [sentences[randnum]]


    console.log(place)

    container.appendChild(place)

    // console.log(randomar)
    // console.log(choice)
    // console.log(target)




})// anytime we clikc or have an input its an event




   //we need it to randomly pick what part its going to jone and 
    // the diffrence between click and onclick

    //o add a favicon to a JavaScript project without using React, you will need to do the following:

// Create a favicon.ico file. You can use an online favicon generator or create your own using an image editor.

// Place the favicon.ico file in the root directory of your project.

// Add a link element in the head of your HTML file pointing to the favicon.ico file. The link element should look something like this:

// Copy code
// <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
// That's it! When you load your project in a browser, the favicon should appear in the browser tab.

// If you want to use a different file type for your favicon (such as a PNG), you can use the "type" attribute to specify the file type and the "href" attribute to specify the location of the favicon file.

// Copy code
// <link rel="shortcut icon" type="image/png" href="/favicon.png">