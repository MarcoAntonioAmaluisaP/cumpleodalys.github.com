var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Lugares_1 = new ol.format.GeoJSON();
var features_Lugares_1 = format_Lugares_1.readFeatures(json_Lugares_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lugares_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lugares_1.addFeatures(features_Lugares_1);
var lyr_Lugares_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lugares_1, 
                style: style_Lugares_1,
                interactive: true,
    title: 'Lugares<br />\
    <img src="styles/legend/Lugares_1_0.png" /> Donde me vas a encontrar siempre<br />\
    <img src="styles/legend/Lugares_1_1.png" /> Donde te conocí<br />\
    <img src="styles/legend/Lugares_1_2.png" /> Granizado<br />\
    <img src="styles/legend/Lugares_1_3.png" /> Tu Casita<br />\
    <img src="styles/legend/Lugares_1_4.png" /> Tu Ranchito<br />\
    <img src="styles/legend/Lugares_1_5.png" /> <br />'
        });

lyr_Positronretina_0.setVisible(true);lyr_Lugares_1.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Lugares_1];
lyr_Lugares_1.set('fieldAliases', {'Lugar': 'Lugar', 'Y': 'Y', 'X': 'X', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Lugares_1.set('fieldImages', {'Lugar': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Lugares_1.set('fieldLabels', {'Lugar': 'no label', 'Latitud': 'inline label', 'Longitud': 'inline label', });
lyr_Lugares_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});