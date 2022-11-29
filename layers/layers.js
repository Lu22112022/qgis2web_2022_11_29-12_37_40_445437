var wms_layers = [];

var format_Dpartementbis_0 = new ol.format.GeoJSON();
var features_Dpartementbis_0 = format_Dpartementbis_0.readFeatures(json_Dpartementbis_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartementbis_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartementbis_0.addFeatures(features_Dpartementbis_0);
var lyr_Dpartementbis_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartementbis_0, 
                style: style_Dpartementbis_0,
                interactive: false,
                title: '<img src="styles/legend/Dpartementbis_0.png" /> Département bis'
            });
var format_COMMUNE_1 = new ol.format.GeoJSON();
var features_COMMUNE_1 = format_COMMUNE_1.readFeatures(json_COMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_1.addFeatures(features_COMMUNE_1);
var lyr_COMMUNE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_1, 
                style: style_COMMUNE_1,
                interactive: false,
                title: '<img src="styles/legend/COMMUNE_1.png" /> COMMUNE'
            });
var format_nomscommune_2 = new ol.format.GeoJSON();
var features_nomscommune_2 = format_nomscommune_2.readFeatures(json_nomscommune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nomscommune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nomscommune_2.addFeatures(features_nomscommune_2);
var lyr_nomscommune_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nomscommune_2, 
                style: style_nomscommune_2,
                interactive: false,
    title: 'noms commune<br />\
    <img src="styles/legend/nomscommune_2_0.png" /> Capitale d\'état<br />\
    <img src="styles/legend/nomscommune_2_1.png" /> Commune simple<br />\
    <img src="styles/legend/nomscommune_2_2.png" /> Préfecture<br />\
    <img src="styles/legend/nomscommune_2_3.png" /> Sous-préfecture<br />'
        });
var format_Dcoup_3 = new ol.format.GeoJSON();
var features_Dcoup_3 = format_Dcoup_3.readFeatures(json_Dcoup_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dcoup_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dcoup_3.addFeatures(features_Dcoup_3);
var lyr_Dcoup_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dcoup_3, 
                style: style_Dcoup_3,
                interactive: false,
    title: 'Découpé<br />\
    <img src="styles/legend/Dcoup_3_0.png" /> Bâti<br />\
    <img src="styles/legend/Dcoup_3_1.png" /> Broussailles<br />\
    <img src="styles/legend/Dcoup_3_2.png" /> Carrière, décharge<br />\
    <img src="styles/legend/Dcoup_3_3.png" /> Eau libre<br />\
    <img src="styles/legend/Dcoup_3_4.png" /> Forêt<br />\
    <img src="styles/legend/Dcoup_3_5.png" /> Marais, tourbière<br />\
    <img src="styles/legend/Dcoup_3_6.png" /> Prairie<br />\
    <img src="styles/legend/Dcoup_3_7.png" /> Vigne, verger<br />\
    <img src="styles/legend/Dcoup_3_8.png" /> Zone d\'activités<br />\
    <img src="styles/legend/Dcoup_3_9.png" /> <br />'
        });
var format_TRONCON_HYDROGRAPHIQUE_4 = new ol.format.GeoJSON();
var features_TRONCON_HYDROGRAPHIQUE_4 = format_TRONCON_HYDROGRAPHIQUE_4.readFeatures(json_TRONCON_HYDROGRAPHIQUE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRONCON_HYDROGRAPHIQUE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRONCON_HYDROGRAPHIQUE_4.addFeatures(features_TRONCON_HYDROGRAPHIQUE_4);
var lyr_TRONCON_HYDROGRAPHIQUE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRONCON_HYDROGRAPHIQUE_4, 
                style: style_TRONCON_HYDROGRAPHIQUE_4,
                interactive: false,
                title: '<img src="styles/legend/TRONCON_HYDROGRAPHIQUE_4.png" /> TRONCON_HYDROGRAPHIQUE'
            });
var format_DEPARTEMENT_5 = new ol.format.GeoJSON();
var features_DEPARTEMENT_5 = format_DEPARTEMENT_5.readFeatures(json_DEPARTEMENT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTEMENT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTEMENT_5.addFeatures(features_DEPARTEMENT_5);
var lyr_DEPARTEMENT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTEMENT_5, 
                style: style_DEPARTEMENT_5,
                interactive: false,
                title: '<img src="styles/legend/DEPARTEMENT_5.png" /> DEPARTEMENT'
            });
var format_Lieuxchantiers_6 = new ol.format.GeoJSON();
var features_Lieuxchantiers_6 = format_Lieuxchantiers_6.readFeatures(json_Lieuxchantiers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lieuxchantiers_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lieuxchantiers_6.addFeatures(features_Lieuxchantiers_6);
var lyr_Lieuxchantiers_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lieuxchantiers_6, 
                style: style_Lieuxchantiers_6,
                interactive: true,
                title: '<img src="styles/legend/Lieuxchantiers_6.png" /> Lieux chantiers'
            });

lyr_Dpartementbis_0.setVisible(true);lyr_COMMUNE_1.setVisible(true);lyr_nomscommune_2.setVisible(true);lyr_Dcoup_3.setVisible(true);lyr_TRONCON_HYDROGRAPHIQUE_4.setVisible(true);lyr_DEPARTEMENT_5.setVisible(true);lyr_Lieuxchantiers_6.setVisible(true);
var layersList = [lyr_Dpartementbis_0,lyr_COMMUNE_1,lyr_nomscommune_2,lyr_Dcoup_3,lyr_TRONCON_HYDROGRAPHIQUE_4,lyr_DEPARTEMENT_5,lyr_Lieuxchantiers_6];
lyr_Dpartementbis_0.set('fieldAliases', {'ID': 'ID', 'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'X_DEPT': 'X_DEPT', 'Y_DEPT': 'Y_DEPT', 'INSEE_REG': 'INSEE_REG', });
lyr_COMMUNE_1.set('fieldAliases', {'ID': 'ID', 'NOM_COMM': 'NOM_COMM', 'INSEE_COMM': 'INSEE_COMM', 'STATUT': 'STATUT', 'X_COMMUNE': 'X_COMMUNE', 'Y_COMMUNE': 'Y_COMMUNE', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'NOM_REGION': 'NOM_REGION', 'INSEE_REG': 'INSEE_REG', });
lyr_nomscommune_2.set('fieldAliases', {'ID': 'ID', 'NOM_COMM': 'NOM_COMM', 'INSEE_COMM': 'INSEE_COMM', 'STATUT': 'STATUT', 'X_COMMUNE': 'X_COMMUNE', 'Y_COMMUNE': 'Y_COMMUNE', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'NOM_REGION': 'NOM_REGION', 'INSEE_REG': 'INSEE_REG', });
lyr_Dcoup_3.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', });
lyr_TRONCON_HYDROGRAPHIQUE_4.set('fieldAliases', {'ID': 'ID', 'ETAT': 'ETAT', 'LARGEUR': 'LARGEUR', 'NATURE': 'NATURE', 'NAVIGABLE': 'NAVIGABLE', 'POS_SOL': 'POS_SOL', 'TOPONYME': 'TOPONYME', 'SENS': 'SENS', 'CLASSE': 'CLASSE', });
lyr_DEPARTEMENT_5.set('fieldAliases', {'ID': 'ID', 'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'X_DEPT': 'X_DEPT', 'Y_DEPT': 'Y_DEPT', 'INSEE_REG': 'INSEE_REG', });
lyr_Lieuxchantiers_6.set('fieldAliases', {'Nom': 'Nom', 'Lieu': 'Lieu', 'url': 'url', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Date': 'Date', });
lyr_Dpartementbis_0.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'INSEE_DEPT': 'TextEdit', 'X_DEPT': 'Range', 'Y_DEPT': 'Range', 'INSEE_REG': 'TextEdit', });
lyr_COMMUNE_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_COMM': 'TextEdit', 'INSEE_COMM': 'TextEdit', 'STATUT': 'TextEdit', 'X_COMMUNE': 'Range', 'Y_COMMUNE': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'Range', 'INSEE_ARR': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'INSEE_DEPT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'INSEE_REG': 'TextEdit', });
lyr_nomscommune_2.set('fieldImages', {'ID': 'TextEdit', 'NOM_COMM': 'TextEdit', 'INSEE_COMM': 'TextEdit', 'STATUT': 'TextEdit', 'X_COMMUNE': 'Range', 'Y_COMMUNE': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'Range', 'INSEE_ARR': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'INSEE_DEPT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'INSEE_REG': 'TextEdit', });
lyr_Dcoup_3.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', });
lyr_TRONCON_HYDROGRAPHIQUE_4.set('fieldImages', {'ID': 'TextEdit', 'ETAT': 'TextEdit', 'LARGEUR': 'TextEdit', 'NATURE': 'TextEdit', 'NAVIGABLE': 'TextEdit', 'POS_SOL': 'TextEdit', 'TOPONYME': 'TextEdit', 'SENS': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DEPARTEMENT_5.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'INSEE_DEPT': 'TextEdit', 'X_DEPT': 'Range', 'Y_DEPT': 'Range', 'INSEE_REG': 'TextEdit', });
lyr_Lieuxchantiers_6.set('fieldImages', {'Nom': 'TextEdit', 'Lieu': 'TextEdit', 'url': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Date': 'TextEdit', });
lyr_Dpartementbis_0.set('fieldLabels', {'ID': 'no label', 'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'X_DEPT': 'no label', 'Y_DEPT': 'no label', 'INSEE_REG': 'no label', });
lyr_COMMUNE_1.set('fieldLabels', {'ID': 'no label', 'NOM_COMM': 'no label', 'INSEE_COMM': 'no label', 'STATUT': 'no label', 'X_COMMUNE': 'no label', 'Y_COMMUNE': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'NOM_REGION': 'no label', 'INSEE_REG': 'no label', });
lyr_nomscommune_2.set('fieldLabels', {'ID': 'no label', 'NOM_COMM': 'no label', 'INSEE_COMM': 'no label', 'STATUT': 'no label', 'X_COMMUNE': 'no label', 'Y_COMMUNE': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'NOM_REGION': 'no label', 'INSEE_REG': 'no label', });
lyr_Dcoup_3.set('fieldLabels', {'ID': 'no label', 'NATURE': 'no label', });
lyr_TRONCON_HYDROGRAPHIQUE_4.set('fieldLabels', {'ID': 'no label', 'ETAT': 'no label', 'LARGEUR': 'no label', 'NATURE': 'no label', 'NAVIGABLE': 'no label', 'POS_SOL': 'no label', 'TOPONYME': 'no label', 'SENS': 'no label', 'CLASSE': 'no label', });
lyr_DEPARTEMENT_5.set('fieldLabels', {'ID': 'no label', 'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'X_DEPT': 'no label', 'Y_DEPT': 'no label', 'INSEE_REG': 'no label', });
lyr_Lieuxchantiers_6.set('fieldLabels', {'Nom': 'no label', 'Lieu': 'no label', 'url': 'no label', 'Longitude': 'inline label', 'Latitude': 'inline label', 'Date': 'no label', });
lyr_Lieuxchantiers_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});