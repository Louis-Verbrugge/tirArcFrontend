
import { gsap } from "gsap";


export default function startPage(refPage) {

    if (refPage == undefined) return;

    if (refPage.current) {
        gsap.fromTo(refPage.current, 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1 }
        );    
    }
}
