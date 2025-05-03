
import { gsap } from 'gsap';

export function startPage(pageRef) {

    gsap.fromTo(
        pageRef,
        { opacity: 0, y: "-100px" }, 
        { opacity: 1, y: "0px", duration: 1 }
    );
};