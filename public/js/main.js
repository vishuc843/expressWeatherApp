const cityName=document.getElementById("cityName")
const submitBtn=document.getElementById("submitBtn")
const city_Name=document.getElementById("cityname")
const temp_Status=document.getElementById("temp_status")
const temp=document.getElementById("temp_real_val")
const dataHide=document.querySelector(".middle_layer")

const getInfo=async (e)=>{
    e.preventDefault()
    let cityVal=cityName.value 
    if(cityVal===""){
        city_Name.innerText= `Please write city name before you search`
        dataHide.classList.add("data_hide")

    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c75b36009ab81ea63afc2b8f999b5561&units=metric`
            const response=await fetch(url)
            const data=await response.json()
            const arrData= [data]
            temp.innerText=arrData[0].main.temp
            const tempMood=arrData[0].weather[0].main
            city_Name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`
            console.log(tempMood)
          

            if(tempMood==="Clear"){
                temp_Status.innerHTML="<i class='fa-regular fa-sun' style='color: #eccc68'></i>"
            }
            else if(tempMood==="Clouds"){
                temp_Status.innerHTML="<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>"
            }
            else if(tempMood==="Rain"){
                temp_Status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
            }
            else{
                temp_Status.innerHTML="<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>"
            }
            
            dataHide.classList.remove("data_hide")
            

            }catch(e){
                console.log(e)
            city_Name.innerText= `Please enter the correct city name`
            dataHide.classList.add("data_hide")
        }    
    }
}
submitBtn.addEventListener("click",getInfo)