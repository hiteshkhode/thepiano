var counter = 0;
var main = function () {
    const octaves = [2, 3, 4, 5, 6]
    const notes = ['A', 'As', 'B', 'C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs']
    root = document.getElementById("root")
    sounds = document.getElementById("sounds")
    octaves.forEach(function (octave_item, octave_index, octave_array) {
        notes.forEach(function (note_item, note_index, note_array) {
            let { button, audio } = factory(note_item + octave_item)
            root.appendChild(button)
            sounds.appendChild(audio)
        })
    })
}
var factory = function (note) {
    let button = document.createElement("div")
    // button.innerText = note
    button.id = note
    if(note.length === 3){
        button.setAttribute('class', 'blackkey')
        abslengthcounter =  counter*40 - 2
        button.style.left = abslengthcounter + 'px'
    }
    else {
        button.setAttribute('class', 'whitekey')
        counter += 1
    }
    let audio = document.createElement("audio")
    audio.src = "sounds/" + note + ".mp3"
    audio.id = note
    button.onclick = () => {
        audio.pause()
        audio.currentTime = 0
        audio.play()
    }
    return { button, audio }
}