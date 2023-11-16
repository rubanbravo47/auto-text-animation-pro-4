const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = '👋 Hi, I’m @rubanbravo47. i m a Continental chef past 8 years👀. I’m interested in ... Sports & Cooking🌱 I’m currently learning ... MERN Stack💞️ I’m looking to collaborate on ...😛Any One if intrested to 🤖learn with us just 🔊DM me Any social media.📫 How to reach me ...Gmail - rubanonemore@gmail.cominsta - local_ruban47youtube - Mr.monkey boywts No : +91 7339120624. !'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)