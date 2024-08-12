
//SEC1
let ST1 = document.getElementById("ST1")

let C1 = document.getElementById("C1")

let HIIT1 = document.getElementById("HIIT1")

//SEC2
let ST2 = document.getElementById("ST2")

let C2 = document.getElementById("C2")

let HIIT2 = document.getElementById("HIIT2")

//SEC3
let ST3 = document.getElementById("ST3")

let C3 = document.getElementById("C3")

let HIIT3 = document.getElementById("HIIT3")


//SEC1
let pTag1 = document.getElementById("pTag1")

let pTag2 = document.getElementById("pTag2")

let pTag3 = document.getElementById("pTag3")

//SEC2
let pTag4 = document.getElementById("pTag4")

let pTag5 = document.getElementById("pTag5")

let pTag6 = document.getElementById("pTag6")

//SEC3
let pTag7 = document.getElementById("pTag7")

let pTag8 = document.getElementById("pTag8")

let pTag9 = document.getElementById("pTag9")


//SEC1
ST1.addEventListener('mouseover', function(){
  pTag1.textContent = "Yoga"
})
ST1.addEventListener('mouseout', function(){
  pTag1.textContent = ""
})

C1.addEventListener('mouseover', function(){
  pTag2.textContent = "Dance"
})
C1.addEventListener('mouseout', function(){
  pTag2.textContent = ""
})

HIIT1.addEventListener('mouseover', function(){
  pTag3.textContent = "Burpees"
})
HIIT1.addEventListener('mouseout', function(){
  pTag3.textContent = ""
})



//SEC2
ST2.addEventListener('mouseover', function(){
  pTag4.textContent = "Squats"
})
ST2.addEventListener('mouseout', function(){
  pTag4.textContent = ""
})

C2.addEventListener('mouseover', function(){
  pTag5.textContent = "Jump Rope"
})
C2.addEventListener('mouseout', function(){
  pTag5.textContent = ""
})

HIIT2.addEventListener('mouseover', function(){
  pTag6.textContent = "Plank Jacks"
})
HIIT2.addEventListener('mouseout', function(){
  pTag6.textContent = ""
})




//SEC3
ST3.addEventListener('mouseover', function(){
  pTag7.textContent = "Planks"
})
ST3.addEventListener('mouseout', function(){
  pTag7.textContent = ""
})

C3.addEventListener('mouseover', function(){
  pTag8.textContent = "Running"
})
C3.addEventListener('mouseout', function(){
  pTag8.textContent = ""
})

HIIT3.addEventListener('mouseover', function(){
  pTag9.textContent = "Jump Squats"
})
HIIT3.addEventListener('mouseout', function(){
  pTag9.textContent = ""
})


let u1 = document.getElementById("unit1")
let u2 = document.getElementById("unit2")
let u3 = document.getElementById("unit3")

let l1 = document.getElementById("lesson1")
let l2 = document.getElementById("lesson2")
let l3 = document.getElementById("lesson3")

let h21 = document.getElementById("h21")

let h22 = document.getElementById("h22")

u1.addEventListener('click', function(){
  h21.textContent = "You are currently in Unit 1"
})

u2.addEventListener('click', function(){
h21.textContent = "You are currently in Unit 2"
})

u3.addEventListener('click', function(){
  h21.textContent = "You are currently in Unit 3"
})

l1.addEventListener('click', function(){
  h22.textContent = "On Lesson 1"
})

l2.addEventListener('click', function(){
  h22.textContent = "On Lesson 2"
})

l3.addEventListener('click', function(){
   h22.textContent = "On Lesson 3"
}) 



let h23 = document.getElementById("h23")

let g9 = document.getElementById("grade9")

let g10 = document.getElementById("grade10")

let g11 = document.getElementById("grade11")

let g12 = document.getElementById("grade12")

g9.addEventListener('click', function(){
  h23.textContent = "You are in grade 9"
})

g10.addEventListener('click', function(){
  h23.textContent = "You are in grade 10"
})

g11.addEventListener('click', function(){
   h23.textContent = "You are in grade 11"
}) 

g12.addEventListener('click', function(){
   h23.textContent = "You are in grade 12"
}) 

let btn = document.getElementsByClassName("btns")

for(let i = 0; i<btn.length; i++){
  btn[i].addEventListener('click',function(){
    btn[i].textContent = "Selected"
  })
  btn[i].addEventListener('mouseover',function(){
    btn[i].textContent = "Select"
  })
}



