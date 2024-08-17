
import { hourglass } from 'ldrs'


import styles from './Loading.module.css';


function Loading(props) {

    const { 
        size = 60,
        bgOpacity = 0.1,
        speed = 1.75,
        color = 'black'
    } = props;
    

    hourglass.register()


    return (

        <div className={styles.loading}>

            <l-hourglass
                size={size}
                bg-opacity={bgOpacity}
                speed={speed}
                color={color}
            ></l-hourglass>


        </div>
    )
}

export default Loading;
