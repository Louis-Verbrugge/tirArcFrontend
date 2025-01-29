
import { gsap } from "gsap";


let annimationChangePage = null;

export default function endPage(setRefPage, refPage, path, navigate) {

    if (refPage == undefined || annimationChangePage) return;

    if (refPage.current) {
        annimationChangePage = gsap.fromTo(refPage.current, 
            { y: 0, opacity: 1 }, 
            { y: -100, opacity: 0,  duration: 1, onComplete: () => 
                {
                    setRefPage(null);
                    navigate(path);
                    annimationChangePage = null;
                }
            }
        );    
    }
}
