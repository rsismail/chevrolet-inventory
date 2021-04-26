import React ,{useContext,useState,useEffect}from 'react'


const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext)

}

export default function AuthProvider({children}) {
     const [sortBy,setSortBy]=useState(false);
    const [gridListView, setGridListView]=useState('Grid')
    const [gridListViewBool, setGridListViewBool]=useState(false)
    const [locationDropDown,setLocationDropDown]=useState(false)
    const [capsuleDropDown,setCapsuleDropDown]=useState(false)
    const [monthlyPaymentSlider ,setMonthlyPaymentSlider]=useState(750);
    const[downPaymentDropDown,setdownPaymentDropDown]=useState(false);
    const[disclaimerDropDown,setdisclaimerDropDown]=useState(false);
    const [searchBarDropDown,setSearchBarDropDown]= useState(false);
    const[menuDropDown,setMenuDropDown]=useState(false);
    const[refineYourVehicleDropDown,setrefineYourVehicleDropDown]=useState(false);
    const[packageDropDown,setpackageDropDown]=useState(false)
    const[stopScrolling,setStopScrolling]=useState(false);
    const [filterBtn,setFilterBtn]=useState(false);
    const[sortByFilter,setSortByFilter]=useState(false)




        function handleError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
           alert("User denied the request for Geolocation. AIzaSyBDA4Ss3GTZP5c2G6SKuBSFHfC0jNzGPy0")
            break;
          case error.POSITION_UNAVAILABLE:
            alert ("Location information is unavailable.")
            break;
          case error.TIMEOUT:
           alert( "The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
          alert ( "An unknown error occurred.")
            break;
            default:
                alert('an unknown error accured');
        }
      }





     function sortByVisible() {
         setSortBy(!sortBy);
         setStopScrolling(!stopScrolling)

    }
    function locationDropDownVisible() {
        setLocationDropDown(!locationDropDown);
        setStopScrolling(!stopScrolling)


   }
   function capsuleDropDownVisible() {
    setCapsuleDropDown(!capsuleDropDown);
    setStopScrolling(!stopScrolling)

}
    function changeToList() {
        setGridListViewBool(true)
        gridListViewBool? setGridListView('List'):setGridListView('Grid')
    }
    function changeToGrid() {
        setGridListViewBool(false)
        gridListViewBool? setGridListView('List'):setGridListView('Grid')
    }
    function monthlyPaymentSliderFunc(value){
        setMonthlyPaymentSlider(value)
    }
    function downPaymentDropDownVisible(){
        setdownPaymentDropDown(!downPaymentDropDown);
        setStopScrolling(!stopScrolling)
    }
    function disclaimerDropDownVisible(){
        setdisclaimerDropDown(!disclaimerDropDown);
        setStopScrolling(!stopScrolling)


    }
    function searchBarDropDownVisible(){
        setSearchBarDropDown(!searchBarDropDown);
        setStopScrolling(!stopScrolling)

    }
    function menufunction(){
        setMenuDropDown(!menuDropDown);
        setStopScrolling(!stopScrolling)

    }
    function refineYourVehicleDropDownFunction(){
        setrefineYourVehicleDropDown(!refineYourVehicleDropDown);
        setStopScrolling(!stopScrolling)
    }
    function packageDropDownFunction(){
       setpackageDropDown(!packageDropDown)


    }
    function filterBtnVisible(){
        setFilterBtn(!filterBtn)
        setStopScrolling(!stopScrolling)


     }


function sortByFilterFunction(){
    setSortByFilter(!sortByFilter)

    console.log("guygygu")
}



 const value={
      sortBy,
      sortByVisible,
      changeToList,
      gridListView,
      changeToGrid,
      locationDropDown,
      locationDropDownVisible,
      capsuleDropDown,
      capsuleDropDownVisible,
      monthlyPaymentSliderFunc,
      monthlyPaymentSlider,
      downPaymentDropDown,
      downPaymentDropDownVisible,
      disclaimerDropDown,
      disclaimerDropDownVisible,
      searchBarDropDownVisible,
      searchBarDropDown,
      menuDropDown,
      menufunction,
      refineYourVehicleDropDown,
      refineYourVehicleDropDownFunction,
      packageDropDown,
      packageDropDownFunction,
      stopScrolling,
      filterBtn,
      filterBtnVisible,
      sortByFilter,
      sortByFilterFunction
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}




















 // const googleApis='AIzaSyBDA4Ss3GTZP5c2G6SKuBSFHfC0jNzGPy0'


    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(getCoordinates,handleError);
    //     } else {
    //       alert( "Geolocation is not supported by this browser.");
    //     }
    //   }
    //   function getCoordinates(position){
    //        setLocationAttributes({latitude:position.coords.latitude,longitude:position.coords.longitude})
    //     console.log(position);
    //     reverseGeoCodeoordinates()
    // }
    // function reverseGeoCodeoordinates(){
    //     fetch(`https://maps.googleapis.com/maps/api/js?key=${googleApis}&callback=initMap`)
    //     .then(response=>
    //         response.json()).then(data=>console.log(data))
    //     .catch(error=>alert(error))
    // }