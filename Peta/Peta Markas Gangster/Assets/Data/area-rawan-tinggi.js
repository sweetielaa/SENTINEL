//Connect Server
function fetchData() {
    fetch('http://localhost:4000/api/user')
        .then(response => response.json())
        .then(({ areaRawan }) => {
            console.log("Area Rawan:");
            console.log(areaRawan);
        })
        .catch(error => console.error('Error:', error));
}

// Panggil fungsi fetchData saat halaman dimuat
window.onload = fetchData;

// Buat variabel dari hasil connect database
var area_rawan_tinggi = {
"type": "FeatureCollection",
"name": "buffer100_area_rawan",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": null, "lineID": 40, "fclass": "primary", "name": "Jl Brigadir", "mr_DIS": "high-high" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 110.431997559373272, -6.994259602952929 ], [ 110.431991268791805, -6.994336609433201 ], [ 110.433884733808057, -6.995060885977657 ], [ 110.433891024389524, -6.994985960869978 ], [ 110.431997559373272, -6.994259602952929 ] ] ] ] } },
{ "type": "Feature", "properties": { "id": null, "lineID": 29, "fclass": "primary", "name": "Jl MT Haryono", "mr_DIS": "high-high" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 110.431578187276642, -6.985553626340566 ], [ 110.43164214152138, -6.985544260512211 ], [ 110.431925217686612, -6.994264806093887 ], [ 110.431999656233742, -6.994272090491134 ], [ 110.431578187276642, -6.985553626340566 ] ] ] ] } },
{ "type": "Feature", "properties": { "id": 20, "lineID": 20, "fclass": "primary", "name": "Jl Brigadi", "mr_DIS": "high-high" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 110.492397625590158, -7.018841715139239 ], [ 110.492355688380513, -7.019049829758225 ], [ 110.499216615881309, -7.0213057862548 ], [ 110.499300490300655, -7.021114321737077 ], [ 110.492397625590158, -7.018841715139239 ] ] ] ] } }

]
}
