import { gsap } from 'gsap';

export function endPage(navigate, pageRef, newPathPage) {
    gsap.to(pageRef, {
        opacity: 0,
        y: "-100px",
        duration: 1,
        onComplete: () => {
            navigate(newPathPage);
        }
    });
}
