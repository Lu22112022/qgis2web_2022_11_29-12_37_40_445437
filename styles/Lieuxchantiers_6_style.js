var size = 0;
var placement = 'point';

var style_Lieuxchantiers_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "18.2px \'.AppleSystemUIFont\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Nom") !== null) {
        labelText = String(feature.get("Nom"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
