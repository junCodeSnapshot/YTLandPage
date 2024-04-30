import { Header } from '../components/Header';
import { Aside } from '../components/Aside';
import { Display } from '../components/Display';

import '../style/styles.css';

export const MainPage = () => {
    
    return (
        <div>
            <Aside /> 
            <Header />
            <Display />
        </div>
    )
}
