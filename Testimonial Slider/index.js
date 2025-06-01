const testimonials = [
    {
        name: "- Rachel Johnson",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple's mobile devices are truly revolutionary. Their sleek design and cutting-edge technology make them a must-have for tech-savvy individuals. I can't imagine my life without my Apple mobile device!",
    },

    {
        name: "- Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple's mobile devices are sleek, powerful, and intuitive. I can't imagine my day without my Apple products by my side. The seamless integration between my devices has made my life so much easier!",
    },

    {
        name: "- Samantha Scott",
        photoUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely satisfied with the mobile devices from Apple. Their sleek design and user-friendly interface make them a must-have for tech enthusiasts like me. Apple truly delivers innovation and quality in every product.",
    },
];


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 6000)

}