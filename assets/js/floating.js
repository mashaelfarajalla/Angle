const header=document.querySelector('.header');

const movebtn=(e)=>{
    const btn=document.querySelector('.custom-btn1');
    if(!e[0].isIntersecting){
        btn.classList.add('floating');
    }
    if(e[0].isIntersecting){
        btn.classList.remove('floating');
    }
}
const movebtninter=new IntersectionObserver(movebtn);
movebtninter.observe(header);