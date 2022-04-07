let coordinates = {}

$(document).ready(function () {
    get_coordinates();
    render_components();
  
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)

    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        // console.log(source)
        let destination = searchParams.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
    } else {
        alert("Coordinates not selected!")
        window.history.back();
    }

}

function render_components(){
   $.ajax({
       url:`https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates.source_lon}%2C${coordinates.source_lat}%3B${coordinates.destination_lon}%2C${coordinates.destination_lat}?alternatives=true&geometries=polyline&steps=true&access_token=pk.eyJ1IjoieWFtdW5hMTIzIiwiYSI6ImNsMWRhcHY3ejA4ZGoza24zazdrNmNmaGwifQ.t-kPX15gsZG7azvrzyHfZA`,
       type:"get",
       success:function(response){
         console.log(response)
       }
   })
}

