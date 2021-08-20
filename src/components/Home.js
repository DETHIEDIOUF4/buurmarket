import './Styles/stylefirstpage.css'
import callapp from '../img/callapp.png'
export default function Home() {
    return (
        <>
            
            <div className="first-page" >
                <section>
                    <div className="Container">
            <div class="row py-5">
         <div class="col-lg-6 ml-auto">
            <div class="device-wrapper mx-auto">
              <div className="img-div "data-device="iPhoneX"  data-color="black">
                 <img class="img-fluid" style={{ width: 350,alignSelf:'center' }} src={callapp} alt=""/>
              </div>
            </div>
          </div>       
             <div class="col-lg-5 py-5">
                <h1 class="font-weight-bold" style={{color:'white'}}>Acceder plus facilement aux marches financiers depuis  l'afrique </h1>
                <p  style={{color:'red'}}>#1 Courtier en ligne sans commission 100% africain </p>
                <ul class="list-inline mb-0">
                <li class="list-inline-item mb-2 mb-lg-0"><a class="btn btn-primary btn-lg px-4" href="/home"> <i class="fab fa-google-play mr-3"></i>Google Play</a></li>
                <li class="list-inline-item"><a class="btn btn-primary btn-lg px-4" href="/home"> <i class="fab fa-app-store mr-3"></i>App Store</a></li>
                </ul>
            </div>
          
        </div>

                </div>
                </section>
                
            </div>

          
          
        </>
            
    )
}