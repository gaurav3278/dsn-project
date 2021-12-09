$(document).ready(function () {
    // Get JSON data from url
    $.getJSON("https://corona-api.com/countries", function(result) {
      var confirmed= [];
    //   var states=["Andman and Nicobar Island","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Dadra and Nagar Haveli","Goa","Gujrat","Himachal Pradesh","Haryana","Jharkhand","Jammu and Kashmir","Karnataka","Kerela","Ladakh","Lakshadweep","Maharashtra","Meghalaya","Manipur","Madhya Pradesh","Mizoram","Nagaland","Odisha","Punjab","Puducherry","Rajasthan","Sikkim","Telangana","Tamil Nadu","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
      var recovered= [];
      var deaths= [];
      // var vaccinated_1= [];
      // var vaccinated_2= [];
      // var total_vaccinated_1=0;
      // var total_vaccinated_2=0;
      var total_confirmed=0;
      var total_recovered=0;
      var total_deaths=0;
      console.log(result.data);

//      // $.each(result, function(index,object){
//        // states.push(index);
      
//       //});

      $.each(result.data, function(id,obj){
       confirmed.push(obj.latest_data.confirmed);
       recovered.push(obj.latest_data.recovered);
       deaths.push(obj.latest_data.deaths);
//        vaccinated_1.push(obj.total.vaccinated1);
//        vaccinated_2.push(obj.total.vaccinated2);


      });
      // console.log(recovered);
      $.each(confirmed, function(index,value){
        total_confirmed=total_confirmed+confirmed[index];
       
      });
      // console.log(total_confirmed);
      $.each(recovered, function(index,value){
        total_recovered=total_recovered+recovered[index];
       
      });
      //console.log(total_recovered);
      $.each(deaths, function(index,value){
        total_deaths=total_deaths+deaths[index];
       
      });
//       //console.log(total_deaths);
//       $.each(vaccinated_1, function(index,value){
//         total_vaccinated_1=total_vaccinated_1+vaccinated_1[index];
       
//       });
//       //console.log(total_vaccinated_1);
//       $.each(vaccinated_2, function(index,value){
//         total_vaccinated_2=total_vaccinated_2+vaccinated_2[index];
       
//       });
//       //console.log(total_vaccinated_2);

//       $("#confirmed").append(total_confirmed);
//       $("#recovered").append(total_recovered);
//       $("#deaths").append(total_deaths);
//       $("#total_vaccinated_1").append(total_vaccinated_1);
//       $("#total_vaccinated_2").append(total_vaccinated_2);


    //  var myChart = document.getElementById("chart").getContext("2d");
    //   var chart = new Chart(myChart, {
    //     type: "line",
    //     data: {
    //       labels: states,
    //       datasets: [
    //         {
    //           label: "Confirmed",
    //           data: confirmed,
    //           backgroundColor: "#f1c40f",
    //           borderColor: "#f1c40f"
    //         //   minBarLength: 100,
    //         },
    //         {
    //           label: "Recovered",
    //           data: recovered,
    //           backgroundColor: "#2ecc71",
    //           borderColor: "#2ecc71"
    //         //   minBarLength: 100,
    //         },
    //         {
    //           label: "Deceased",
    //           data: deaths,
    //           backgroundColor: "#e74c3c",
    //           borderColor: "#e74c3c"
    //         //   minBarLength: 100,
    //         },
    //         {
    //           label: "Vaccinated 1",
    //           data: vaccinated_1,
    //           backgroundColor: "#cc00ff",
    //           borderColor: "#cc00ff"
    //         //   minBarLength: 100,
    //         },
    //         {
    //           label: "Vaccinated 2",
    //           data: vaccinated_2,
    //           backgroundColor: "#0000ff",
    //           borderColor: "#0000ff"
    //         //   minBarLength: 100,
    //         },
    //       ],
    //     },
    //     options: {
    //       responsive: false,
    //       maintainAspectRatio: false,

    //     },
    //   });
    let my_chart;
function axesLinearChart() {
  if (my_chart) {
    my_chart.destroy();
  }
    my_chart = new Chart(chart, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Cases",
            data: confirmed,
            fill: false,
            borderColor: "#FFF",
            backgroundColor: "#FFF",
            borderWidth: 1,
          },
          {
            label: "Recovered",
            data: recovered,
            fill: false,
            borderColor: "#009688",
            backgroundColor: "#009688",
            borderWidth: 1,
          },
          {
            label: "Deaths",
            data: deaths,
            fill: false,
            borderColor: "#f44336",
            backgroundColor: "#f44336",
            borderWidth: 1,
          },
        ],
        // labels: formatedDates,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
     });
 });
