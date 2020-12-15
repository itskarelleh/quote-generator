import Loader from './Loader';

export default function LoadingScreen() {    
    return (
        <div className="loading">
            <div className="container">
              <Loader message="Finding your daily inspiration" />  
            </div>
        </div>
    )
}