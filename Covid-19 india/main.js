$(document).ready(function () {
    // Get JSON data from url
    $.getJSON("https://data.covid19india.org/v4/min/data.min.json", function(result) {
      var confirmed= [];
      var states=["Andman and Nicobar Island","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Dadra and Nagar Haveli","Goa","Gujrat","Himachal Pradesh","Haryana","Jharkhand","Jammu and Kashmir","Karnataka","Kerela","Ladakh","Lakshadweep","Maharashtra","Meghalaya","Manipur","Madhya Pradesh","Mizoram","Nagaland","Odisha","Punjab","Puducherry","Rajasthan","Sikkim","Telangana","Tamil Nadu","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
      var recovered= [];
      var deaths= [];
      var vaccinated_1= [];
      var vaccinated_2= [];
      var total_vaccinated_1=0;
      var total_vaccinated_2=0;
      var total_confirmed=0;
      var total_recovered=0;
      var total_deaths=0;
      console.log(result);

     // $.each(result, function(index,object){
       // states.push(index);
      
      //});

      $.each(result, function(id,obj){
       confirmed.push(obj.total.confirmed);
       recovered.push(obj.total.recovered);
       deaths.push(obj.total.deceased);
       vaccinated_1.push(obj.total.vaccinated1);
       vaccinated_2.push(obj.total.vaccinated2);


      });
      console.log(confirmed);
      $.each(confirmed, function(index,value){
        total_confirmed=confirmed[33];
       
      });
      //console.log(total_confirmed);
      $.each(recovered, function(index,value){
        total_recovered=recovered[33];
       
      });
      //console.log(total_recovered);
      $.each(deaths, function(index,value){
        total_deaths=deaths[33];
       
      });
      //console.log(total_deaths);
      $.each(vaccinated_1, function(index,value){
        total_vaccinated_1=vaccinated_1[33];
       
      });
      //console.log(total_vaccinated_1);
      $.each(vaccinated_2, function(index,value){
        total_vaccinated_2=vaccinated_2[33];
       
      });
      //console.log(total_vaccinated_2);
      confirmed.splice(33,1);
      recovered.splice(33,1);
      deaths.splice(33,1);
      vaccinated_1.splice(33,1);
      vaccinated_2.splice(33,1);


      $("#confirmed").append(total_confirmed);
      $("#recovered").append(total_recovered);
      $("#deaths").append(total_deaths);
      $("#total_vaccinated_1").append(total_vaccinated_1);
      $("#total_vaccinated_2").append(total_vaccinated_2);


     var myChart = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(myChart, {
        type: "line",
        data: {
          labels: states,
          datasets: [
            {
              label: "Confirmed",
              data: confirmed,
              // backgroundColor: "#f1c40f",
              borderColor: "#f1c40f",
              fill: false,
            //   minBarLength: 100,
            },
            {
              label: "Recovered",
              data: recovered,
              // backgroundColor: "#2ecc71",
              borderColor: "#2ecc71",
              fill: false,
            //   minBarLength: 100,
            },
            {
              label: "Deceased",
              data: deaths,
              // backgroundColor: "#e74c3c",
              borderColor: "#e74c3c",
              fill: false,
            //   minBarLength: 100,
            },
            {
              label: "Vaccinated 1",
              data: vaccinated_1,
              // backgroundColor: "#cc00ff",
              borderColor: "#cc00ff",
              fill: false,
            //   minBarLength: 100,
            },
            {
              label: "Vaccinated 2",
              data: vaccinated_2,
              // backgroundColor: "#0000ff",
              borderColor: "#0000ff",
              fill: false,
            //   minBarLength: 100,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,

        },
      });
    });
});
