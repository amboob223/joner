// okay now we need to return the value when it been selected and we use an click event to do so
const jone = { //  may be
    nose: {
        fat: ["plump", "juicy", "pumpkin", "blubber", "muffin", "gorrila", "egg", "hammer", "basket", "cucumbuer", "swollen thumb"],
        slim: ["cigarette", "diet", "line", "linkedin", "link", "sausage"],
        small: ["baby", "midget", "wicbaby", "gerberbaby", "mini", "lilbitti", "roach"]
    },
    head: {
        fat: ["peanut", "macbook", "boonkey", "football", "bottle", "sandwhich", "monkey"],
        slim: ["hot dawg", "dagger", "choppa", "tube", "soundbar", "stapler"],
        small: ["peach", "bean", "ice chip", "button", "beetlejuice tiny ugly head "]
    },
    body: {
        fat: ["big", "hamburger and cheese", "fudge round body", "fat", "slopy", "jabba the hut lookin",],
        slim: ["line body", "I need a dollar lookin", "ethiopian commerical back in the day lookin", "refugee", "stick body"],
        small: ["baby", "lil bitty", "jitbody", "roach lookin", "southpark shawty body"]
    }
}//we user an object because the body part keys will be uniue and the values will be arrays we can indexi nto with the random number

//varibles

const button = document.querySelector(".btn")
const nose = document.getElementById("nose")
const body = document.getElementById("body")
const head = document.getElementById("head")
const container = document.querySelector(".jone")


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
    place.innerHTML = "yo gat dammm " + `${randomWord} ` + `${randomKey} ` + " ahh"
    console.log(place)

    container.appendChild(place)

    // console.log(randomKey)




})// anytime we clikc or have an input its an event




   //we need it to randomly pick what part its going to jone and 
    // the diffrence between click and onclick