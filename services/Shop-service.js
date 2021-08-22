


export const  fetchMainDataService = (()=>{
    fetch('http://10.1.50.186:3000/data')
    .then(res=>res.json())
     .then(data)}); 
export const  fetchMainData2Service = (()=>{
        fetch('http://10.1.50.186:3000/data2')
        .then(res=>res.json())
         .then(data=>data)}); 
export const  fetchMainData3Service = (()=>{
            fetch('http://10.1.50.186:3000/data3')
            .then(res=>res.json())
             .then(data=>data)}); 
