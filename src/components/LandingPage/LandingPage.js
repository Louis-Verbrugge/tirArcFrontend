

import SideImage from "./SideImage"
 // dsqds DJIQSDJUUDS
import styles from "./LandingPage.css"

import image1 from '../../image/Plan.png'
import image2 from '../../image/Plan.png'
import image3 from '../../image/Plan.png'
import image4 from '../../image/Plan.png'
import image5 from '../../image/Plan.png'

function LandingPage() {
  return (
    <div className="LandingPage">
      
        <SideImage 
        image = {image1}
        title = {"hello Image 1 pp"}
        />

        <SideImage 
        image = {image1}
        title = {"hello Image 2"}
        />

        <SideImage 
        image = {image1}
        title = {"hello Image 3"}
        />
        
        <SideImage 
        image = {image1}
        title = {"hello Image 3"}
        />
                
        <SideImage 
        image = {image1}
        title = {"hello Image 3"}
        />

    </div>
  );
}

export default LandingPage;
