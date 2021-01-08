import Loader from './Loader';

export default function LoadingScreen({lights}) {    
    return (
        <div className="loading">
            <div className="container">
              <Loader message="Finding your daily inspiration" lights={lights} />  
            </div>
        </div>
    )
}