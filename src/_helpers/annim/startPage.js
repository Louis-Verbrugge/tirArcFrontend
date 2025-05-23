
import { gsap } from 'gsap';

export function startPage(pageRef, annimChangePage, setAnnimChangePage) {


    if ( annimChangePage ) {
        return

    } else {
        
        let annim = gsap.fromTo(
            pageRef,
            { opacity: 0, y: "-100px" }, 
            { opacity: 1, y: "0px", duration: 1, onComplete: () => {
                setAnnimChangePage(false);
                
            }
            }
        );
        setAnnimChangePage(annim);
    }

};