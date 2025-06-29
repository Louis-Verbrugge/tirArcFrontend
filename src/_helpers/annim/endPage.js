
import { gsap } from 'gsap';

export function endPage(navigate, pageRef, refFooter, newPathPage, annimChangePage, setAnnimChangePage, setChangeMemPage) {   
    
    // recupe le path de la page
    const path = window.location.pathname;
    const pathArray = path.split("/");
    const pathPage = pathArray[pathArray.length - 1];




    
    if ( annimChangePage ) {
        return;
    } else {

        let annim = gsap.to(pageRef, {
            opacity: 0,
            y: "-100px",
            duration: 1,
            onComplete: () => {
                
                if (pathPage === newPathPage.slice(1)) {
                    alert("Changement de page 11");
                    setChangeMemPage(true);
                }   
                else{
                    alert("Changement de page 22");
                    navigate(newPathPage);
                    
                }
                setAnnimChangePage(false);
            }
        });
        setAnnimChangePage(annim);

        gsap.to(refFooter, {
            opacity: 0,
            y: "+100px",
            duration: 1
        });
    }
    
}
