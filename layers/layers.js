var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Municipal_Area_1 = new ol.format.GeoJSON();
var features_Municipal_Area_1 = format_Municipal_Area_1.readFeatures(json_Municipal_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_Area_1.addFeatures(features_Municipal_Area_1);
var lyr_Municipal_Area_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipal_Area_1, 
                style: style_Municipal_Area_1,
                interactive: true,
                title: '<img src="styles/legend/Municipal_Area_1.png" /> Municipal_Area'
            });
var format_Civic_Amenities_2 = new ol.format.GeoJSON();
var features_Civic_Amenities_2 = format_Civic_Amenities_2.readFeatures(json_Civic_Amenities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Civic_Amenities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Civic_Amenities_2.addFeatures(features_Civic_Amenities_2);
var lyr_Civic_Amenities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Civic_Amenities_2, 
                style: style_Civic_Amenities_2,
                interactive: true,
                title: '<img src="styles/legend/Civic_Amenities_2.png" /> Civic_Amenities'
            });
var format_Heritge_sites_varanasi_3 = new ol.format.GeoJSON();
var features_Heritge_sites_varanasi_3 = format_Heritge_sites_varanasi_3.readFeatures(json_Heritge_sites_varanasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heritge_sites_varanasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heritge_sites_varanasi_3.addFeatures(features_Heritge_sites_varanasi_3);
var lyr_Heritge_sites_varanasi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Heritge_sites_varanasi_3, 
                style: style_Heritge_sites_varanasi_3,
                interactive: true,
                title: '<img src="styles/legend/Heritge_sites_varanasi_3.png" /> Heritge_sites_varanasi'
            });
var format_154stops_4 = new ol.format.GeoJSON();
var features_154stops_4 = format_154stops_4.readFeatures(json_154stops_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154stops_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154stops_4.addFeatures(features_154stops_4);
var lyr_154stops_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_154stops_4, 
                style: style_154stops_4,
                interactive: true,
                title: '<img src="styles/legend/154stops_4.png" /> 15+4 stops'
            });
var format_Ropeway_routes_all_28_5 = new ol.format.GeoJSON();
var features_Ropeway_routes_all_28_5 = format_Ropeway_routes_all_28_5.readFeatures(json_Ropeway_routes_all_28_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ropeway_routes_all_28_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ropeway_routes_all_28_5.addFeatures(features_Ropeway_routes_all_28_5);
var lyr_Ropeway_routes_all_28_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ropeway_routes_all_28_5, 
                style: style_Ropeway_routes_all_28_5,
                interactive: true,
                title: '<img src="styles/legend/Ropeway_routes_all_28_5.png" /> Ropeway_routes_all_28'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Municipal_Area_1.setVisible(true);lyr_Civic_Amenities_2.setVisible(true);lyr_Heritge_sites_varanasi_3.setVisible(true);lyr_154stops_4.setVisible(true);lyr_Ropeway_routes_all_28_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Municipal_Area_1,lyr_Civic_Amenities_2,lyr_Heritge_sites_varanasi_3,lyr_154stops_4,lyr_Ropeway_routes_all_28_5];
lyr_Municipal_Area_1.set('fieldAliases', {'MUN_ID': 'MUN_ID', 'CLASS': 'CLASS', 'SUB_CLASS': 'SUB_CLASS', 'MUN_CODE': 'MUN_CODE', 'MUN_NAM': 'MUN_NAM', 'T_AR': 'T_AR', 'T_POP': 'T_POP', 'T_WARDS': 'T_WARDS', 'T_HH': 'T_HH', 'T_HH_WC': 'T_HH_WC', 'T_HH_SC': 'T_HH_SC', 'T_PROP': 'T_PROP', 'T_SL_AR': 'T_SL_AR', 'TIME_ST': 'TIME_ST', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Civic_Amenities_2.set('fieldAliases', {'CIVA_ID': 'CIVA_ID', 'LOCALITY': 'LOCALITY', 'Ward': 'Ward', });
lyr_Heritge_sites_varanasi_3.set('fieldAliases', {'Name': 'Name', });
lyr_154stops_4.set('fieldAliases', {'Name': 'Name', });
lyr_Ropeway_routes_all_28_5.set('fieldAliases', {'RD_ID': 'RD_ID', 'RD_NAME': 'RD_NAME', });
lyr_Municipal_Area_1.set('fieldImages', {'MUN_ID': 'TextEdit', 'CLASS': 'TextEdit', 'SUB_CLASS': 'TextEdit', 'MUN_CODE': 'TextEdit', 'MUN_NAM': 'TextEdit', 'T_AR': 'TextEdit', 'T_POP': 'TextEdit', 'T_WARDS': 'TextEdit', 'T_HH': 'TextEdit', 'T_HH_WC': 'TextEdit', 'T_HH_SC': 'TextEdit', 'T_PROP': 'TextEdit', 'T_SL_AR': 'TextEdit', 'TIME_ST': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Civic_Amenities_2.set('fieldImages', {'CIVA_ID': 'TextEdit', 'LOCALITY': 'TextEdit', 'Ward': 'TextEdit', });
lyr_Heritge_sites_varanasi_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_154stops_4.set('fieldImages', {'Name': '', });
lyr_Ropeway_routes_all_28_5.set('fieldImages', {'RD_ID': '', 'RD_NAME': '', });
lyr_Municipal_Area_1.set('fieldLabels', {'MUN_ID': 'no label', 'CLASS': 'no label', 'SUB_CLASS': 'no label', 'MUN_CODE': 'no label', 'MUN_NAM': 'inline label', 'T_AR': 'no label', 'T_POP': 'no label', 'T_WARDS': 'no label', 'T_HH': 'no label', 'T_HH_WC': 'no label', 'T_HH_SC': 'no label', 'T_PROP': 'no label', 'T_SL_AR': 'no label', 'TIME_ST': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Civic_Amenities_2.set('fieldLabels', {'CIVA_ID': 'no label', 'LOCALITY': 'no label', 'Ward': 'no label', });
lyr_Heritge_sites_varanasi_3.set('fieldLabels', {'Name': 'inline label', });
lyr_154stops_4.set('fieldLabels', {'Name': 'inline label', });
lyr_Ropeway_routes_all_28_5.set('fieldLabels', {'RD_ID': 'no label', 'RD_NAME': 'no label', });
lyr_Ropeway_routes_all_28_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});