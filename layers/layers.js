var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2020_1 = new ol.format.GeoJSON();
var features_2020_1 = format_2020_1.readFeatures(json_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_1.addFeatures(features_2020_1);
var lyr_2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_1, 
                style: style_2020_1,
                interactive: true,
                title: '<img src="styles/legend/2020_1.png" /> 2020'
            });
var format_2018_2 = new ol.format.GeoJSON();
var features_2018_2 = format_2018_2.readFeatures(json_2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_2.addFeatures(features_2018_2);
var lyr_2018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018_2, 
                style: style_2018_2,
                interactive: true,
                title: '<img src="styles/legend/2018_2.png" /> 2018'
            });
var format_2019_3 = new ol.format.GeoJSON();
var features_2019_3 = format_2019_3.readFeatures(json_2019_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_3.addFeatures(features_2019_3);
var lyr_2019_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_3, 
                style: style_2019_3,
                interactive: true,
                title: '<img src="styles/legend/2019_3.png" /> 2019'
            });
var format_2017_4 = new ol.format.GeoJSON();
var features_2017_4 = format_2017_4.readFeatures(json_2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_4.addFeatures(features_2017_4);
var lyr_2017_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017_4, 
                style: style_2017_4,
                interactive: true,
                title: '<img src="styles/legend/2017_4.png" /> 2017'
            });
var format_2016_5 = new ol.format.GeoJSON();
var features_2016_5 = format_2016_5.readFeatures(json_2016_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_5.addFeatures(features_2016_5);
var lyr_2016_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_5, 
                style: style_2016_5,
                interactive: true,
                title: '<img src="styles/legend/2016_5.png" /> 2016'
            });
var format_urucumapkr_6 = new ol.format.GeoJSON();
var features_urucumapkr_6 = format_urucumapkr_6.readFeatures(json_urucumapkr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urucumapkr_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urucumapkr_6.addFeatures(features_urucumapkr_6);
var lyr_urucumapkr_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urucumapkr_6, 
                style: style_urucumapkr_6,
                interactive: true,
                title: '<img src="styles/legend/urucumapkr_6.png" /> urucum (apɨ̃kɨrɨ)'
            });
var format_urucumpkr_7 = new ol.format.GeoJSON();
var features_urucumpkr_7 = format_urucumpkr_7.readFeatures(json_urucumpkr_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urucumpkr_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urucumpkr_7.addFeatures(features_urucumpkr_7);
var lyr_urucumpkr_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urucumpkr_7, 
                style: style_urucumpkr_7,
                interactive: true,
                title: '<img src="styles/legend/urucumpkr_7.png" /> urucum (ãpɨkɨrɨ)'
            });
var format_teradosaasarasarasara_8 = new ol.format.GeoJSON();
var features_teradosaasarasarasara_8 = format_teradosaasarasarasara_8.readFeatures(json_teradosaasarasarasara_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_teradosaasarasarasara_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_teradosaasarasarasara_8.addFeatures(features_teradosaasarasarasara_8);
var lyr_teradosaasarasarasara_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_teradosaasarasarasara_8, 
                style: style_teradosaasarasarasara_8,
                interactive: true,
                title: '<img src="styles/legend/teradosaasarasarasara_8.png" /> terçado (saasara/sarasara)'
            });
var format_teradosarasara_9 = new ol.format.GeoJSON();
var features_teradosarasara_9 = format_teradosarasara_9.readFeatures(json_teradosarasara_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_teradosarasara_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_teradosarasara_9.addFeatures(features_teradosarasara_9);
var lyr_teradosarasara_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_teradosarasara_9, 
                style: style_teradosarasara_9,
                interactive: true,
                title: '<img src="styles/legend/teradosarasara_9.png" /> terçado (sarasara)'
            });
var format_teradosaasara_10 = new ol.format.GeoJSON();
var features_teradosaasara_10 = format_teradosaasara_10.readFeatures(json_teradosaasara_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_teradosaasara_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_teradosaasara_10.addFeatures(features_teradosaasara_10);
var lyr_teradosaasara_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_teradosaasara_10, 
                style: style_teradosaasara_10,
                interactive: true,
                title: '<img src="styles/legend/teradosaasara_10.png" /> terçado (saasara)'
            });
var format_tamandubandeiraexuwaexiwa_11 = new ol.format.GeoJSON();
var features_tamandubandeiraexuwaexiwa_11 = format_tamandubandeiraexuwaexiwa_11.readFeatures(json_tamandubandeiraexuwaexiwa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraexuwaexiwa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraexuwaexiwa_11.addFeatures(features_tamandubandeiraexuwaexiwa_11);
var lyr_tamandubandeiraexuwaexiwa_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraexuwaexiwa_11, 
                style: style_tamandubandeiraexuwaexiwa_11,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraexuwaexiwa_11.png" /> tamanduá-bandeira (exuwa/exiwa)'
            });
var format_tamandubandeiraexiwaixiwa_12 = new ol.format.GeoJSON();
var features_tamandubandeiraexiwaixiwa_12 = format_tamandubandeiraexiwaixiwa_12.readFeatures(json_tamandubandeiraexiwaixiwa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraexiwaixiwa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraexiwaixiwa_12.addFeatures(features_tamandubandeiraexiwaixiwa_12);
var lyr_tamandubandeiraexiwaixiwa_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraexiwaixiwa_12, 
                style: style_tamandubandeiraexiwaixiwa_12,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraexiwaixiwa_12.png" /> tamanduá-bandeira (exiwa/ixiwa)'
            });
var format_tamandubandeiraixuwaixiwa_13 = new ol.format.GeoJSON();
var features_tamandubandeiraixuwaixiwa_13 = format_tamandubandeiraixuwaixiwa_13.readFeatures(json_tamandubandeiraixuwaixiwa_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraixuwaixiwa_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraixuwaixiwa_13.addFeatures(features_tamandubandeiraixuwaixiwa_13);
var lyr_tamandubandeiraixuwaixiwa_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraixuwaixiwa_13, 
                style: style_tamandubandeiraixuwaixiwa_13,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraixuwaixiwa_13.png" /> tamanduá-bandeira (ixuwa/ixiwa)'
            });
var format_tamandubandeiraexuwa_14 = new ol.format.GeoJSON();
var features_tamandubandeiraexuwa_14 = format_tamandubandeiraexuwa_14.readFeatures(json_tamandubandeiraexuwa_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraexuwa_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraexuwa_14.addFeatures(features_tamandubandeiraexuwa_14);
var lyr_tamandubandeiraexuwa_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraexuwa_14, 
                style: style_tamandubandeiraexuwa_14,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraexuwa_14.png" /> tamanduá-bandeira (exuwa)'
            });
var format_tamandubandeiraixiwa_15 = new ol.format.GeoJSON();
var features_tamandubandeiraixiwa_15 = format_tamandubandeiraixiwa_15.readFeatures(json_tamandubandeiraixiwa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraixiwa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraixiwa_15.addFeatures(features_tamandubandeiraixiwa_15);
var lyr_tamandubandeiraixiwa_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraixiwa_15, 
                style: style_tamandubandeiraixiwa_15,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraixiwa_15.png" /> tamanduá-bandeira (ixiwa)'
            });
var format_tamandubandeiraixuwa_16 = new ol.format.GeoJSON();
var features_tamandubandeiraixuwa_16 = format_tamandubandeiraixuwa_16.readFeatures(json_tamandubandeiraixuwa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraixuwa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraixuwa_16.addFeatures(features_tamandubandeiraixuwa_16);
var lyr_tamandubandeiraixuwa_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraixuwa_16, 
                style: style_tamandubandeiraixuwa_16,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraixuwa_16.png" /> tamanduá-bandeira (ixuwa)'
            });
var format_poraqupetsty_17 = new ol.format.GeoJSON();
var features_poraqupetsty_17 = format_poraqupetsty_17.readFeatures(json_poraqupetsty_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraqupetsty_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraqupetsty_17.addFeatures(features_poraqupetsty_17);
var lyr_poraqupetsty_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraqupetsty_17, 
                style: style_poraqupetsty_17,
                interactive: true,
                title: '<img src="styles/legend/poraqupetsty_17.png" /> poraquê (petsũty)'
            });
var format_poraquptsuty_18 = new ol.format.GeoJSON();
var features_poraquptsuty_18 = format_poraquptsuty_18.readFeatures(json_poraquptsuty_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraquptsuty_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraquptsuty_18.addFeatures(features_poraquptsuty_18);
var lyr_poraquptsuty_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraquptsuty_18, 
                style: style_poraquptsuty_18,
                interactive: true,
                title: '<img src="styles/legend/poraquptsuty_18.png" /> poraquê (pẽtsuty)'
            });
var format_mutumirkairka_19 = new ol.format.GeoJSON();
var features_mutumirkairka_19 = format_mutumirkairka_19.readFeatures(json_mutumirkairka_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mutumirkairka_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mutumirkairka_19.addFeatures(features_mutumirkairka_19);
var lyr_mutumirkairka_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mutumirkairka_19, 
                style: style_mutumirkairka_19,
                interactive: true,
                title: '<img src="styles/legend/mutumirkairka_19.png" /> mutum (irẽka/irãka)'
            });
var format_mutumirka_20 = new ol.format.GeoJSON();
var features_mutumirka_20 = format_mutumirka_20.readFeatures(json_mutumirka_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mutumirka_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mutumirka_20.addFeatures(features_mutumirka_20);
var lyr_mutumirka_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mutumirka_20, 
                style: style_mutumirka_20,
                interactive: true,
                title: '<img src="styles/legend/mutumirka_20.png" /> mutum (irãka)'
            });
var format_mutumirka_21 = new ol.format.GeoJSON();
var features_mutumirka_21 = format_mutumirka_21.readFeatures(json_mutumirka_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mutumirka_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mutumirka_21.addFeatures(features_mutumirka_21);
var lyr_mutumirka_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mutumirka_21, 
                style: style_mutumirka_21,
                interactive: true,
                title: '<img src="styles/legend/mutumirka_21.png" /> mutum (irẽka)'
            });
var format_jacarkaikyri_22 = new ol.format.GeoJSON();
var features_jacarkaikyri_22 = format_jacarkaikyri_22.readFeatures(json_jacarkaikyri_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jacarkaikyri_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jacarkaikyri_22.addFeatures(features_jacarkaikyri_22);
var lyr_jacarkaikyri_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jacarkaikyri_22, 
                style: style_jacarkaikyri_22,
                interactive: true,
                title: '<img src="styles/legend/jacarkaikyri_22.png" /> jacaré (kaikyri)'
            });
var format_jacarkaiukyri_23 = new ol.format.GeoJSON();
var features_jacarkaiukyri_23 = format_jacarkaiukyri_23.readFeatures(json_jacarkaiukyri_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jacarkaiukyri_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jacarkaiukyri_23.addFeatures(features_jacarkaiukyri_23);
var lyr_jacarkaiukyri_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jacarkaiukyri_23, 
                style: style_jacarkaiukyri_23,
                interactive: true,
                title: '<img src="styles/legend/jacarkaiukyri_23.png" /> jacaré (kaiukyri)'
            });
var format_guaparaparapara_24 = new ol.format.GeoJSON();
var features_guaparaparapara_24 = format_guaparaparapara_24.readFeatures(json_guaparaparapara_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaparaparapara_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaparaparapara_24.addFeatures(features_guaparaparapara_24);
var lyr_guaparaparapara_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guaparaparapara_24, 
                style: style_guaparaparapara_24,
                interactive: true,
                title: '<img src="styles/legend/guaparaparapara_24.png" /> água (ĩparãa/ũparãa/ĩparãa)'
            });
var format_guaparapara_25 = new ol.format.GeoJSON();
var features_guaparapara_25 = format_guaparapara_25.readFeatures(json_guaparapara_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaparapara_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaparapara_25.addFeatures(features_guaparapara_25);
var lyr_guaparapara_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guaparapara_25, 
                style: style_guaparapara_25,
                interactive: true,
                title: '<img src="styles/legend/guaparapara_25.png" /> água (ĩparãa/ũparãa)'
            });
var format_guapara_26 = new ol.format.GeoJSON();
var features_guapara_26 = format_guapara_26.readFeatures(json_guapara_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guapara_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guapara_26.addFeatures(features_guapara_26);
var lyr_guapara_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guapara_26, 
                style: style_guapara_26,
                interactive: true,
                title: '<img src="styles/legend/guapara_26.png" /> água (ãparãa)'
            });
var format_guapara_27 = new ol.format.GeoJSON();
var features_guapara_27 = format_guapara_27.readFeatures(json_guapara_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guapara_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guapara_27.addFeatures(features_guapara_27);
var lyr_guapara_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guapara_27, 
                style: style_guapara_27,
                interactive: true,
                title: '<img src="styles/legend/guapara_27.png" /> água (ĩparãa)'
            });
var format_guapura_28 = new ol.format.GeoJSON();
var features_guapura_28 = format_guapura_28.readFeatures(json_guapura_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guapura_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guapura_28.addFeatures(features_guapura_28);
var lyr_guapura_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guapura_28, 
                style: style_guapura_28,
                interactive: true,
                title: '<img src="styles/legend/guapura_28.png" /> água (ĩpurãa)'
            });
var format_guapara_29 = new ol.format.GeoJSON();
var features_guapara_29 = format_guapara_29.readFeatures(json_guapara_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guapara_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guapara_29.addFeatures(features_guapara_29);
var lyr_guapara_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guapara_29, 
                style: style_guapara_29,
                interactive: true,
                title: '<img src="styles/legend/guapara_29.png" /> água (ũparãa)'
            });
var format_urubumajulimajuri_30 = new ol.format.GeoJSON();
var features_urubumajulimajuri_30 = format_urubumajulimajuri_30.readFeatures(json_urubumajulimajuri_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urubumajulimajuri_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urubumajulimajuri_30.addFeatures(features_urubumajulimajuri_30);
var lyr_urubumajulimajuri_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urubumajulimajuri_30, 
                style: style_urubumajulimajuri_30,
                interactive: true,
                title: '<img src="styles/legend/urubumajulimajuri_30.png" /> urubu (majuli/majuri)'
            });
var format_urubumajuli_31 = new ol.format.GeoJSON();
var features_urubumajuli_31 = format_urubumajuli_31.readFeatures(json_urubumajuli_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urubumajuli_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urubumajuli_31.addFeatures(features_urubumajuli_31);
var lyr_urubumajuli_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urubumajuli_31, 
                style: style_urubumajuli_31,
                interactive: true,
                title: '<img src="styles/legend/urubumajuli_31.png" /> urubu (majuli)'
            });
var format_urubumajuri_32 = new ol.format.GeoJSON();
var features_urubumajuri_32 = format_urubumajuri_32.readFeatures(json_urubumajuri_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urubumajuri_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urubumajuri_32.addFeatures(features_urubumajuri_32);
var lyr_urubumajuri_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urubumajuri_32, 
                style: style_urubumajuri_32,
                interactive: true,
                title: '<img src="styles/legend/urubumajuri_32.png" /> urubu (majuri)'
            });
var format_surucucukasululkasuui_33 = new ol.format.GeoJSON();
var features_surucucukasululkasuui_33 = format_surucucukasululkasuui_33.readFeatures(json_surucucukasululkasuui_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surucucukasululkasuui_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surucucukasululkasuui_33.addFeatures(features_surucucukasululkasuui_33);
var lyr_surucucukasululkasuui_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_surucucukasululkasuui_33, 
                style: style_surucucukasululkasuui_33,
                interactive: true,
                title: '<img src="styles/legend/surucucukasululkasuui_33.png" /> surucucu (kasululɨ/kasuɾuɾi)'
            });
var format_surucucukasulul_34 = new ol.format.GeoJSON();
var features_surucucukasulul_34 = format_surucucukasulul_34.readFeatures(json_surucucukasulul_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surucucukasulul_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surucucukasulul_34.addFeatures(features_surucucukasulul_34);
var lyr_surucucukasulul_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_surucucukasulul_34, 
                style: style_surucucukasulul_34,
                interactive: true,
                title: '<img src="styles/legend/surucucukasulul_34.png" /> surucucu (kasululɨ)'
            });
var format_surucucukasuui_35 = new ol.format.GeoJSON();
var features_surucucukasuui_35 = format_surucucukasuui_35.readFeatures(json_surucucukasuui_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surucucukasuui_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surucucukasuui_35.addFeatures(features_surucucukasuui_35);
var lyr_surucucukasuui_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_surucucukasuui_35, 
                style: style_surucucukasuui_35,
                interactive: true,
                title: '<img src="styles/legend/surucucukasuui_35.png" /> surucucu (kasuɾuɾi)'
            });
var format_serbomalekal_36 = new ol.format.GeoJSON();
var features_serbomalekal_36 = format_serbomalekal_36.readFeatures(json_serbomalekal_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_serbomalekal_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_serbomalekal_36.addFeatures(features_serbomalekal_36);
var lyr_serbomalekal_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_serbomalekal_36, 
                style: style_serbomalekal_36,
                interactive: true,
                title: '<img src="styles/legend/serbomalekal_36.png" /> ser bom (alekalɨ)'
            });
var format_serbomaeka_37 = new ol.format.GeoJSON();
var features_serbomaeka_37 = format_serbomaeka_37.readFeatures(json_serbomaeka_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_serbomaeka_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_serbomaeka_37.addFeatures(features_serbomaeka_37);
var lyr_serbomaeka_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_serbomaeka_37, 
                style: style_serbomaeka_37,
                interactive: true,
                title: '<img src="styles/legend/serbomaeka_37.png" /> ser bom (a:ɾekaɾɨ)'
            });
var format_queixadairalirar_38 = new ol.format.GeoJSON();
var features_queixadairalirar_38 = format_queixadairalirar_38.readFeatures(json_queixadairalirar_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_queixadairalirar_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_queixadairalirar_38.addFeatures(features_queixadairalirar_38);
var lyr_queixadairalirar_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_queixadairalirar_38, 
                style: style_queixadairalirar_38,
                interactive: true,
                title: '<img src="styles/legend/queixadairalirar_38.png" /> queixada (iralɨ/irarɨ)'
            });
var format_queixadairal_39 = new ol.format.GeoJSON();
var features_queixadairal_39 = format_queixadairal_39.readFeatures(json_queixadairal_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_queixadairal_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_queixadairal_39.addFeatures(features_queixadairal_39);
var lyr_queixadairal_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_queixadairal_39, 
                style: style_queixadairal_39,
                interactive: true,
                title: '<img src="styles/legend/queixadairal_39.png" /> queixada (iralɨ)'
            });
var format_queixadairar_40 = new ol.format.GeoJSON();
var features_queixadairar_40 = format_queixadairar_40.readFeatures(json_queixadairar_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_queixadairar_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_queixadairar_40.addFeatures(features_queixadairar_40);
var lyr_queixadairar_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_queixadairar_40, 
                style: style_queixadairar_40,
                interactive: true,
                title: '<img src="styles/legend/queixadairar_40.png" /> queixada (irarɨ)'
            });
var format_pretopumamalipumamari_41 = new ol.format.GeoJSON();
var features_pretopumamalipumamari_41 = format_pretopumamalipumamari_41.readFeatures(json_pretopumamalipumamari_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pretopumamalipumamari_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pretopumamalipumamari_41.addFeatures(features_pretopumamalipumamari_41);
var lyr_pretopumamalipumamari_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pretopumamalipumamari_41, 
                style: style_pretopumamalipumamari_41,
                interactive: true,
                title: '<img src="styles/legend/pretopumamalipumamari_41.png" /> preto (pumamali/pumamari)'
            });
var format_pretopumamali_42 = new ol.format.GeoJSON();
var features_pretopumamali_42 = format_pretopumamali_42.readFeatures(json_pretopumamali_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pretopumamali_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pretopumamali_42.addFeatures(features_pretopumamali_42);
var lyr_pretopumamali_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pretopumamali_42, 
                style: style_pretopumamali_42,
                interactive: true,
                title: '<img src="styles/legend/pretopumamali_42.png" /> preto (pumamali)'
            });
var format_pretopumamari_43 = new ol.format.GeoJSON();
var features_pretopumamari_43 = format_pretopumamari_43.readFeatures(json_pretopumamari_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pretopumamari_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pretopumamari_43.addFeatures(features_pretopumamari_43);
var lyr_pretopumamari_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pretopumamari_43, 
                style: style_pretopumamari_43,
                interactive: true,
                title: '<img src="styles/legend/pretopumamari_43.png" /> preto (pumamari)'
            });
var format_jenipapoymamal_44 = new ol.format.GeoJSON();
var features_jenipapoymamal_44 = format_jenipapoymamal_44.readFeatures(json_jenipapoymamal_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jenipapoymamal_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jenipapoymamal_44.addFeatures(features_jenipapoymamal_44);
var lyr_jenipapoymamal_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jenipapoymamal_44, 
                style: style_jenipapoymamal_44,
                interactive: true,
                title: '<img src="styles/legend/jenipapoymamal_44.png" /> jenipapo (ymamalɨ)'
            });
var format_jenipapoymama_45 = new ol.format.GeoJSON();
var features_jenipapoymama_45 = format_jenipapoymama_45.readFeatures(json_jenipapoymama_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jenipapoymama_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jenipapoymama_45.addFeatures(features_jenipapoymama_45);
var lyr_jenipapoymama_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jenipapoymama_45, 
                style: style_jenipapoymama_45,
                interactive: true,
                title: '<img src="styles/legend/jenipapoymama_45.png" /> jenipapo (ymamaɾɨ)'
            });
var format_igarapkawal_46 = new ol.format.GeoJSON();
var features_igarapkawal_46 = format_igarapkawal_46.readFeatures(json_igarapkawal_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_igarapkawal_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_igarapkawal_46.addFeatures(features_igarapkawal_46);
var lyr_igarapkawal_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_igarapkawal_46, 
                style: style_igarapkawal_46,
                interactive: true,
                title: '<img src="styles/legend/igarapkawal_46.png" /> igarapé (kawãalɨ)'
            });
var format_igarapkawa_47 = new ol.format.GeoJSON();
var features_igarapkawa_47 = format_igarapkawa_47.readFeatures(json_igarapkawa_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_igarapkawa_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_igarapkawa_47.addFeatures(features_igarapkawa_47);
var lyr_igarapkawa_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_igarapkawa_47, 
                style: style_igarapkawa_47,
                interactive: true,
                title: '<img src="styles/legend/igarapkawa_47.png" /> igarapé (kawãaɾɨ)'
            });
var format_flechaprontaparaserusadakatstal_48 = new ol.format.GeoJSON();
var features_flechaprontaparaserusadakatstal_48 = format_flechaprontaparaserusadakatstal_48.readFeatures(json_flechaprontaparaserusadakatstal_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flechaprontaparaserusadakatstal_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flechaprontaparaserusadakatstal_48.addFeatures(features_flechaprontaparaserusadakatstal_48);
var lyr_flechaprontaparaserusadakatstal_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flechaprontaparaserusadakatstal_48, 
                style: style_flechaprontaparaserusadakatstal_48,
                interactive: true,
                title: '<img src="styles/legend/flechaprontaparaserusadakatstal_48.png" /> flecha pronta para ser usada (katsũtalɨ)'
            });
var format_flechaprontaparaserusadakatsta_49 = new ol.format.GeoJSON();
var features_flechaprontaparaserusadakatsta_49 = format_flechaprontaparaserusadakatsta_49.readFeatures(json_flechaprontaparaserusadakatsta_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flechaprontaparaserusadakatsta_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flechaprontaparaserusadakatsta_49.addFeatures(features_flechaprontaparaserusadakatsta_49);
var lyr_flechaprontaparaserusadakatsta_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flechaprontaparaserusadakatsta_49, 
                style: style_flechaprontaparaserusadakatsta_49,
                interactive: true,
                title: '<img src="styles/legend/flechaprontaparaserusadakatsta_49.png" /> flecha pronta para ser usada (katsĩta:ɾɨ)'
            });
var format_cigarraktuiktuli_50 = new ol.format.GeoJSON();
var features_cigarraktuiktuli_50 = format_cigarraktuiktuli_50.readFeatures(json_cigarraktuiktuli_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cigarraktuiktuli_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cigarraktuiktuli_50.addFeatures(features_cigarraktuiktuli_50);
var lyr_cigarraktuiktuli_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cigarraktuiktuli_50, 
                style: style_cigarraktuiktuli_50,
                interactive: true,
                title: '<img src="styles/legend/cigarraktuiktuli_50.png" /> cigarra (kĩtuɾi/kĩtuli)'
            });
var format_cigarraktuli_51 = new ol.format.GeoJSON();
var features_cigarraktuli_51 = format_cigarraktuli_51.readFeatures(json_cigarraktuli_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cigarraktuli_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cigarraktuli_51.addFeatures(features_cigarraktuli_51);
var lyr_cigarraktuli_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cigarraktuli_51, 
                style: style_cigarraktuli_51,
                interactive: true,
                title: '<img src="styles/legend/cigarraktuli_51.png" /> cigarra (kĩtuli)'
            });
var format_cigarraktui_52 = new ol.format.GeoJSON();
var features_cigarraktui_52 = format_cigarraktui_52.readFeatures(json_cigarraktui_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cigarraktui_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cigarraktui_52.addFeatures(features_cigarraktui_52);
var lyr_cigarraktui_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cigarraktui_52, 
                style: style_cigarraktui_52,
                interactive: true,
                title: '<img src="styles/legend/cigarraktui_52.png" /> cigarra (kĩtuɾi)'
            });
var format_cachorroanpnali_53 = new ol.format.GeoJSON();
var features_cachorroanpnali_53 = format_cachorroanpnali_53.readFeatures(json_cachorroanpnali_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cachorroanpnali_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cachorroanpnali_53.addFeatures(features_cachorroanpnali_53);
var lyr_cachorroanpnali_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cachorroanpnali_53, 
                style: style_cachorroanpnali_53,
                interactive: true,
                title: '<img src="styles/legend/cachorroanpnali_53.png" /> cachorro (anãpãnali)'
            });
var format_cachorroanpnai_54 = new ol.format.GeoJSON();
var features_cachorroanpnai_54 = format_cachorroanpnai_54.readFeatures(json_cachorroanpnai_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cachorroanpnai_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cachorroanpnai_54.addFeatures(features_cachorroanpnai_54);
var lyr_cachorroanpnai_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cachorroanpnai_54, 
                style: style_cachorroanpnai_54,
                interactive: true,
                title: '<img src="styles/legend/cachorroanpnai_54.png" /> cachorro (anãpãnaɾi)'
            });
var format_2PLhthethe_55 = new ol.format.GeoJSON();
var features_2PLhthethe_55 = format_2PLhthethe_55.readFeatures(json_2PLhthethe_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2PLhthethe_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2PLhthethe_55.addFeatures(features_2PLhthethe_55);
var lyr_2PLhthethe_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2PLhthethe_55, 
                style: style_2PLhthethe_55,
                interactive: true,
                title: '<img src="styles/legend/2PLhthethe_55.png" /> 2PL (hĩthe/ĩthe)'
            });
var format_2PLthe_56 = new ol.format.GeoJSON();
var features_2PLthe_56 = format_2PLthe_56.readFeatures(json_2PLthe_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2PLthe_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2PLthe_56.addFeatures(features_2PLthe_56);
var lyr_2PLthe_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2PLthe_56, 
                style: style_2PLthe_56,
                interactive: true,
                title: '<img src="styles/legend/2PLthe_56.png" /> 2PL (ĩthe)'
            });
var format_2PLhthe_57 = new ol.format.GeoJSON();
var features_2PLhthe_57 = format_2PLhthe_57.readFeatures(json_2PLhthe_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2PLhthe_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2PLhthe_57.addFeatures(features_2PLhthe_57);
var lyr_2PLhthe_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2PLhthe_57, 
                style: style_2PLhthe_57,
                interactive: true,
                title: '<img src="styles/legend/2PLhthe_57.png" /> 2PL (hĩthe)'
            });
var format_umtyhty_58 = new ol.format.GeoJSON();
var features_umtyhty_58 = format_umtyhty_58.readFeatures(json_umtyhty_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umtyhty_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_umtyhty_58.addFeatures(features_umtyhty_58);
var lyr_umtyhty_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_umtyhty_58, 
                style: style_umtyhty_58,
                interactive: true,
                title: '<img src="styles/legend/umtyhty_58.png" /> um (ãty/hãty)'
            });
var format_umty_59 = new ol.format.GeoJSON();
var features_umty_59 = format_umty_59.readFeatures(json_umty_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umty_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_umty_59.addFeatures(features_umty_59);
var lyr_umty_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_umty_59, 
                style: style_umty_59,
                interactive: true,
                title: '<img src="styles/legend/umty_59.png" /> um (ãty)'
            });
var format_umhty_60 = new ol.format.GeoJSON();
var features_umhty_60 = format_umhty_60.readFeatures(json_umhty_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umhty_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_umhty_60.addFeatures(features_umhty_60);
var lyr_umhty_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_umhty_60, 
                style: style_umhty_60,
                interactive: true,
                title: '<img src="styles/legend/umhty_60.png" /> um (hãty)'
            });
var format_sexoimata_61 = new ol.format.GeoJSON();
var features_sexoimata_61 = format_sexoimata_61.readFeatures(json_sexoimata_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sexoimata_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sexoimata_61.addFeatures(features_sexoimata_61);
var lyr_sexoimata_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sexoimata_61, 
                style: style_sexoimata_61,
                interactive: true,
                title: '<img src="styles/legend/sexoimata_61.png" /> sexo (imata)'
            });
var format_sexohimata_62 = new ol.format.GeoJSON();
var features_sexohimata_62 = format_sexohimata_62.readFeatures(json_sexohimata_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sexohimata_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sexohimata_62.addFeatures(features_sexohimata_62);
var lyr_sexohimata_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sexohimata_62, 
                style: style_sexohimata_62,
                interactive: true,
                title: '<img src="styles/legend/sexohimata_62.png" /> sexo (himata)'
            });
var format_sapocaanaruawu_63 = new ol.format.GeoJSON();
var features_sapocaanaruawu_63 = format_sapocaanaruawu_63.readFeatures(json_sapocaanaruawu_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sapocaanaruawu_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sapocaanaruawu_63.addFeatures(features_sapocaanaruawu_63);
var lyr_sapocaanaruawu_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sapocaanaruawu_63, 
                style: style_sapocaanaruawu_63,
                interactive: true,
                title: '<img src="styles/legend/sapocaanaruawu_63.png" /> sapo caanaru (awɨɾu)'
            });
var format_sapocaanaruhawu_64 = new ol.format.GeoJSON();
var features_sapocaanaruhawu_64 = format_sapocaanaruhawu_64.readFeatures(json_sapocaanaruhawu_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sapocaanaruhawu_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sapocaanaruhawu_64.addFeatures(features_sapocaanaruhawu_64);
var lyr_sapocaanaruhawu_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sapocaanaruhawu_64, 
                style: style_sapocaanaruhawu_64,
                interactive: true,
                title: '<img src="styles/legend/sapocaanaruhawu_64.png" /> sapo caanaru (hawɨɾu)'
            });
var format_sangueeka_65 = new ol.format.GeoJSON();
var features_sangueeka_65 = format_sangueeka_65.readFeatures(json_sangueeka_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sangueeka_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sangueeka_65.addFeatures(features_sangueeka_65);
var lyr_sangueeka_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sangueeka_65, 
                style: style_sangueeka_65,
                interactive: true,
                title: '<img src="styles/legend/sangueeka_65.png" /> sangue (eɾẽka)'
            });
var format_sangueheka_66 = new ol.format.GeoJSON();
var features_sangueheka_66 = format_sangueheka_66.readFeatures(json_sangueheka_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sangueheka_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sangueheka_66.addFeatures(features_sangueheka_66);
var lyr_sangueheka_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sangueheka_66, 
                style: style_sangueheka_66,
                interactive: true,
                title: '<img src="styles/legend/sangueheka_66.png" /> sangue (heɾẽka)'
            });
var format_piranhahmama_67 = new ol.format.GeoJSON();
var features_piranhahmama_67 = format_piranhahmama_67.readFeatures(json_piranhahmama_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piranhahmama_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piranhahmama_67.addFeatures(features_piranhahmama_67);
var lyr_piranhahmama_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piranhahmama_67, 
                style: style_piranhahmama_67,
                interactive: true,
                title: '<img src="styles/legend/piranhahmama_67.png" /> piranha (hũma/ũːma)'
            });
var format_piranhama_68 = new ol.format.GeoJSON();
var features_piranhama_68 = format_piranhama_68.readFeatures(json_piranhama_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piranhama_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piranhama_68.addFeatures(features_piranhama_68);
var lyr_piranhama_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piranhama_68, 
                style: style_piranhama_68,
                interactive: true,
                title: '<img src="styles/legend/piranhama_68.png" /> piranha (ũːma)'
            });
var format_piranhahma_69 = new ol.format.GeoJSON();
var features_piranhahma_69 = format_piranhahma_69.readFeatures(json_piranhahma_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piranhahma_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piranhahma_69.addFeatures(features_piranhahma_69);
var lyr_piranhahma_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piranhahma_69, 
                style: style_piranhahma_69,
                interactive: true,
                title: '<img src="styles/legend/piranhahma_69.png" /> piranha (hũma)'
            });
var format_onahkitikiti_70 = new ol.format.GeoJSON();
var features_onahkitikiti_70 = format_onahkitikiti_70.readFeatures(json_onahkitikiti_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onahkitikiti_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onahkitikiti_70.addFeatures(features_onahkitikiti_70);
var lyr_onahkitikiti_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_onahkitikiti_70, 
                style: style_onahkitikiti_70,
                interactive: true,
                title: '<img src="styles/legend/onahkitikiti_70.png" /> onça (hãkiti/ãkiti)'
            });
var format_onakiti_71 = new ol.format.GeoJSON();
var features_onakiti_71 = format_onakiti_71.readFeatures(json_onakiti_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onakiti_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onakiti_71.addFeatures(features_onakiti_71);
var lyr_onakiti_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_onakiti_71, 
                style: style_onakiti_71,
                interactive: true,
                title: '<img src="styles/legend/onakiti_71.png" /> onça (ãkiti)'
            });
var format_onahkiti_72 = new ol.format.GeoJSON();
var features_onahkiti_72 = format_onahkiti_72.readFeatures(json_onahkiti_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onahkiti_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onahkiti_72.addFeatures(features_onahkiti_72);
var lyr_onahkiti_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_onahkiti_72, 
                style: style_onahkiti_72,
                interactive: true,
                title: '<img src="styles/legend/onahkiti_72.png" /> onça (hãkiti)'
            });
var format_meninohtakurutakuru_73 = new ol.format.GeoJSON();
var features_meninohtakurutakuru_73 = format_meninohtakurutakuru_73.readFeatures(json_meninohtakurutakuru_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meninohtakurutakuru_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meninohtakurutakuru_73.addFeatures(features_meninohtakurutakuru_73);
var lyr_meninohtakurutakuru_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_meninohtakurutakuru_73, 
                style: style_meninohtakurutakuru_73,
                interactive: true,
                title: '<img src="styles/legend/meninohtakurutakuru_73.png" /> menino (hãtakuru/ãtakuru)'
            });
var format_meninotakuru_74 = new ol.format.GeoJSON();
var features_meninotakuru_74 = format_meninotakuru_74.readFeatures(json_meninotakuru_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meninotakuru_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meninotakuru_74.addFeatures(features_meninotakuru_74);
var lyr_meninotakuru_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_meninotakuru_74, 
                style: style_meninotakuru_74,
                interactive: true,
                title: '<img src="styles/legend/meninotakuru_74.png" /> menino (ãtakuru)'
            });
var format_meninohtakuru_75 = new ol.format.GeoJSON();
var features_meninohtakuru_75 = format_meninohtakuru_75.readFeatures(json_meninohtakuru_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meninohtakuru_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meninohtakuru_75.addFeatures(features_meninohtakuru_75);
var lyr_meninohtakuru_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_meninohtakuru_75, 
                style: style_meninohtakuru_75,
                interactive: true,
                title: '<img src="styles/legend/meninohtakuru_75.png" /> menino (hãtakuru)'
            });
var format_grandechefedosbichoshwithewithe_76 = new ol.format.GeoJSON();
var features_grandechefedosbichoshwithewithe_76 = format_grandechefedosbichoshwithewithe_76.readFeatures(json_grandechefedosbichoshwithewithe_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grandechefedosbichoshwithewithe_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grandechefedosbichoshwithewithe_76.addFeatures(features_grandechefedosbichoshwithewithe_76);
var lyr_grandechefedosbichoshwithewithe_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grandechefedosbichoshwithewithe_76, 
                style: style_grandechefedosbichoshwithewithe_76,
                interactive: true,
                title: '<img src="styles/legend/grandechefedosbichoshwithewithe_76.png" /> grande/chefe dos bichos (hãwithe/ãwithe)'
            });
var format_grandechefedosbichoswithe_77 = new ol.format.GeoJSON();
var features_grandechefedosbichoswithe_77 = format_grandechefedosbichoswithe_77.readFeatures(json_grandechefedosbichoswithe_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grandechefedosbichoswithe_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grandechefedosbichoswithe_77.addFeatures(features_grandechefedosbichoswithe_77);
var lyr_grandechefedosbichoswithe_77 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grandechefedosbichoswithe_77, 
                style: style_grandechefedosbichoswithe_77,
                interactive: true,
                title: '<img src="styles/legend/grandechefedosbichoswithe_77.png" /> grande/chefe dos bichos (ãwithe)'
            });
var format_grandechefedosbichoshwithe_78 = new ol.format.GeoJSON();
var features_grandechefedosbichoshwithe_78 = format_grandechefedosbichoshwithe_78.readFeatures(json_grandechefedosbichoshwithe_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grandechefedosbichoshwithe_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grandechefedosbichoshwithe_78.addFeatures(features_grandechefedosbichoshwithe_78);
var lyr_grandechefedosbichoshwithe_78 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grandechefedosbichoshwithe_78, 
                style: style_grandechefedosbichoshwithe_78,
                interactive: true,
                title: '<img src="styles/legend/grandechefedosbichoshwithe_78.png" /> grande/chefe dos bichos (hãwithe)'
            });
var format_florhww_79 = new ol.format.GeoJSON();
var features_florhww_79 = format_florhww_79.readFeatures(json_florhww_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_florhww_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_florhww_79.addFeatures(features_florhww_79);
var lyr_florhww_79 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_florhww_79, 
                style: style_florhww_79,
                interactive: true,
                title: '<img src="styles/legend/florhww_79.png" /> flor (hɨ̃wɨ/ɨ̃wɨ)'
            });
var format_florw_80 = new ol.format.GeoJSON();
var features_florw_80 = format_florw_80.readFeatures(json_florw_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_florw_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_florw_80.addFeatures(features_florw_80);
var lyr_florw_80 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_florw_80, 
                style: style_florw_80,
                interactive: true,
                title: '<img src="styles/legend/florw_80.png" /> flor (ɨ̃wɨ)'
            });
var format_florhw_81 = new ol.format.GeoJSON();
var features_florhw_81 = format_florhw_81.readFeatures(json_florhw_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_florhw_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_florhw_81.addFeatures(features_florhw_81);
var lyr_florhw_81 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_florhw_81, 
                style: style_florhw_81,
                interactive: true,
                title: '<img src="styles/legend/florhw_81.png" /> flor (hɨ̃wɨ)'
            });
var format_filhotehkerkir_82 = new ol.format.GeoJSON();
var features_filhotehkerkir_82 = format_filhotehkerkir_82.readFeatures(json_filhotehkerkir_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_filhotehkerkir_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filhotehkerkir_82.addFeatures(features_filhotehkerkir_82);
var lyr_filhotehkerkir_82 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_filhotehkerkir_82, 
                style: style_filhotehkerkir_82,
                interactive: true,
                title: '<img src="styles/legend/filhotehkerkir_82.png" /> filhote (hãkerɨ/ãkirɨ)'
            });
var format_filhoteker_83 = new ol.format.GeoJSON();
var features_filhoteker_83 = format_filhoteker_83.readFeatures(json_filhoteker_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_filhoteker_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filhoteker_83.addFeatures(features_filhoteker_83);
var lyr_filhoteker_83 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_filhoteker_83, 
                style: style_filhoteker_83,
                interactive: true,
                title: '<img src="styles/legend/filhoteker_83.png" /> filhote (ãkerɨ)'
            });
var format_filhotehker_84 = new ol.format.GeoJSON();
var features_filhotehker_84 = format_filhotehker_84.readFeatures(json_filhotehker_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_filhotehker_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filhotehker_84.addFeatures(features_filhotehker_84);
var lyr_filhotehker_84 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_filhotehker_84, 
                style: style_filhotehker_84,
                interactive: true,
                title: '<img src="styles/legend/filhotehker_84.png" /> filhote (hãkerɨ)'
            });
var format_flautapukyry_85 = new ol.format.GeoJSON();
var features_flautapukyry_85 = format_flautapukyry_85.readFeatures(json_flautapukyry_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flautapukyry_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flautapukyry_85.addFeatures(features_flautapukyry_85);
var lyr_flautapukyry_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flautapukyry_85, 
                style: style_flautapukyry_85,
                interactive: true,
                title: '<img src="styles/legend/flautapukyry_85.png" /> flauta (ãpukyry)'
            });
var format_flautahpukyry_86 = new ol.format.GeoJSON();
var features_flautahpukyry_86 = format_flautahpukyry_86.readFeatures(json_flautahpukyry_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flautahpukyry_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flautahpukyry_86.addFeatures(features_flautahpukyry_86);
var lyr_flautahpukyry_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flautahpukyry_86, 
                style: style_flautahpukyry_86,
                interactive: true,
                title: '<img src="styles/legend/flautahpukyry_86.png" /> flauta (hãpukyry)'
            });
var format_coraokipahkipa_87 = new ol.format.GeoJSON();
var features_coraokipahkipa_87 = format_coraokipahkipa_87.readFeatures(json_coraokipahkipa_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coraokipahkipa_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coraokipahkipa_87.addFeatures(features_coraokipahkipa_87);
var lyr_coraokipahkipa_87 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coraokipahkipa_87, 
                style: style_coraokipahkipa_87,
                interactive: true,
                title: '<img src="styles/legend/coraokipahkipa_87.png" /> coração (ãkipa/hãkipa)'
            });
var format_coraokipa_88 = new ol.format.GeoJSON();
var features_coraokipa_88 = format_coraokipa_88.readFeatures(json_coraokipa_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coraokipa_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coraokipa_88.addFeatures(features_coraokipa_88);
var lyr_coraokipa_88 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coraokipa_88, 
                style: style_coraokipa_88,
                interactive: true,
                title: '<img src="styles/legend/coraokipa_88.png" /> coração (ãkipa)'
            });
var format_coraohkipa_89 = new ol.format.GeoJSON();
var features_coraohkipa_89 = format_coraohkipa_89.readFeatures(json_coraohkipa_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coraohkipa_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coraohkipa_89.addFeatures(features_coraohkipa_89);
var lyr_coraohkipa_89 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coraohkipa_89, 
                style: style_coraohkipa_89,
                interactive: true,
                title: '<img src="styles/legend/coraohkipa_89.png" /> coração (hãkipa)'
            });
var format_bomereka_90 = new ol.format.GeoJSON();
var features_bomereka_90 = format_bomereka_90.readFeatures(json_bomereka_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bomereka_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bomereka_90.addFeatures(features_bomereka_90);
var lyr_bomereka_90 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bomereka_90, 
                style: style_bomereka_90,
                interactive: true,
                title: '<img src="styles/legend/bomereka_90.png" /> bom (ereka)'
            });
var format_bomhereka_91 = new ol.format.GeoJSON();
var features_bomhereka_91 = format_bomhereka_91.readFeatures(json_bomhereka_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bomhereka_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bomhereka_91.addFeatures(features_bomhereka_91);
var lyr_bomhereka_91 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bomhereka_91, 
                style: style_bomhereka_91,
                interactive: true,
                title: '<img src="styles/legend/bomhereka_91.png" /> bom (hereka)'
            });
var format_abanoputa_92 = new ol.format.GeoJSON();
var features_abanoputa_92 = format_abanoputa_92.readFeatures(json_abanoputa_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abanoputa_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abanoputa_92.addFeatures(features_abanoputa_92);
var lyr_abanoputa_92 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_abanoputa_92, 
                style: style_abanoputa_92,
                interactive: true,
                title: '<img src="styles/legend/abanoputa_92.png" /> abano (ãputa)'
            });
var format_abanohputa_93 = new ol.format.GeoJSON();
var features_abanohputa_93 = format_abanohputa_93.readFeatures(json_abanohputa_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abanohputa_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abanohputa_93.addFeatures(features_abanohputa_93);
var lyr_abanohputa_93 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_abanohputa_93, 
                style: style_abanohputa_93,
                interactive: true,
                title: '<img src="styles/legend/abanohputa_93.png" /> abano (hãputa)'
            });
var format_xinganknrkner_94 = new ol.format.GeoJSON();
var features_xinganknrkner_94 = format_xinganknrkner_94.readFeatures(json_xinganknrkner_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xinganknrkner_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xinganknrkner_94.addFeatures(features_xinganknrkner_94);
var lyr_xinganknrkner_94 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_xinganknrkner_94, 
                style: style_xinganknrkner_94,
                interactive: true,
                title: '<img src="styles/legend/xinganknrkner_94.png" /> xingané (kɨ̃ːnɨrɨ/kẽːnerɨ)'
            });
var format_xingankner_95 = new ol.format.GeoJSON();
var features_xingankner_95 = format_xingankner_95.readFeatures(json_xingankner_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xingankner_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xingankner_95.addFeatures(features_xingankner_95);
var lyr_xingankner_95 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_xingankner_95, 
                style: style_xingankner_95,
                interactive: true,
                title: '<img src="styles/legend/xingankner_95.png" /> xingané (kẽːnerɨ)'
            });
var format_xinganknr_96 = new ol.format.GeoJSON();
var features_xinganknr_96 = format_xinganknr_96.readFeatures(json_xinganknr_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xinganknr_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xinganknr_96.addFeatures(features_xinganknr_96);
var lyr_xinganknr_96 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_xinganknr_96, 
                style: style_xinganknr_96,
                interactive: true,
                title: '<img src="styles/legend/xinganknr_96.png" /> xingané (kɨ̃ːnɨrɨ)'
            });
var format_virpe_97 = new ol.format.GeoJSON();
var features_virpe_97 = format_virpe_97.readFeatures(json_virpe_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_virpe_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_virpe_97.addFeatures(features_virpe_97);
var lyr_virpe_97 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_virpe_97, 
                style: style_virpe_97,
                interactive: true,
                title: '<img src="styles/legend/virpe_97.png" /> vir (ɨ̃pe)'
            });
var format_virp_98 = new ol.format.GeoJSON();
var features_virp_98 = format_virp_98.readFeatures(json_virp_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_virp_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_virp_98.addFeatures(features_virp_98);
var lyr_virp_98 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_virp_98, 
                style: style_virp_98,
                interactive: true,
                title: '<img src="styles/legend/virp_98.png" /> vir (ɨ̃pɨ)'
            });
var format_vinhodeaatsaperik_99 = new ol.format.GeoJSON();
var features_vinhodeaatsaperik_99 = format_vinhodeaatsaperik_99.readFeatures(json_vinhodeaatsaperik_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vinhodeaatsaperik_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vinhodeaatsaperik_99.addFeatures(features_vinhodeaatsaperik_99);
var lyr_vinhodeaatsaperik_99 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vinhodeaatsaperik_99, 
                style: style_vinhodeaatsaperik_99,
                interactive: true,
                title: '<img src="styles/legend/vinhodeaatsaperik_99.png" /> vinho de açaí (tsaperikɨ̃ã)'
            });
var format_vinhodeaatsaprik_100 = new ol.format.GeoJSON();
var features_vinhodeaatsaprik_100 = format_vinhodeaatsaprik_100.readFeatures(json_vinhodeaatsaprik_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vinhodeaatsaprik_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vinhodeaatsaprik_100.addFeatures(features_vinhodeaatsaprik_100);
var lyr_vinhodeaatsaprik_100 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vinhodeaatsaprik_100, 
                style: style_vinhodeaatsaprik_100,
                interactive: true,
                title: '<img src="styles/legend/vinhodeaatsaprik_100.png" /> vinho de açaí (tsapɨrikɨ̃ã)'
            });
var format_tabatingakatsae_101 = new ol.format.GeoJSON();
var features_tabatingakatsae_101 = format_tabatingakatsae_101.readFeatures(json_tabatingakatsae_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tabatingakatsae_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tabatingakatsae_101.addFeatures(features_tabatingakatsae_101);
var lyr_tabatingakatsae_101 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tabatingakatsae_101, 
                style: style_tabatingakatsae_101,
                interactive: true,
                title: '<img src="styles/legend/tabatingakatsae_101.png" /> tabatinga (katsaɾe)'
            });
var format_tabatingakatsa_102 = new ol.format.GeoJSON();
var features_tabatingakatsa_102 = format_tabatingakatsa_102.readFeatures(json_tabatingakatsa_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tabatingakatsa_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tabatingakatsa_102.addFeatures(features_tabatingakatsa_102);
var lyr_tabatingakatsa_102 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tabatingakatsa_102, 
                style: style_tabatingakatsa_102,
                interactive: true,
                title: '<img src="styles/legend/tabatingakatsa_102.png" /> tabatinga (katsaɾɨ)'
            });
var format_seiotne_103 = new ol.format.GeoJSON();
var features_seiotne_103 = format_seiotne_103.readFeatures(json_seiotne_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seiotne_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seiotne_103.addFeatures(features_seiotne_103);
var lyr_seiotne_103 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seiotne_103, 
                style: style_seiotne_103,
                interactive: true,
                title: '<img src="styles/legend/seiotne_103.png" /> seio (tẽne)'
            });
var format_seiotn_104 = new ol.format.GeoJSON();
var features_seiotn_104 = format_seiotn_104.readFeatures(json_seiotn_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seiotn_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seiotn_104.addFeatures(features_seiotn_104);
var lyr_seiotn_104 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seiotn_104, 
                style: style_seiotn_104,
                interactive: true,
                title: '<img src="styles/legend/seiotn_104.png" /> seio (tɨnɨ)'
            });
var format_saracurakutse_105 = new ol.format.GeoJSON();
var features_saracurakutse_105 = format_saracurakutse_105.readFeatures(json_saracurakutse_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saracurakutse_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saracurakutse_105.addFeatures(features_saracurakutse_105);
var lyr_saracurakutse_105 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saracurakutse_105, 
                style: style_saracurakutse_105,
                interactive: true,
                title: '<img src="styles/legend/saracurakutse_105.png" /> saracura (kutseɾɨ)'
            });
var format_saracurakuts_106 = new ol.format.GeoJSON();
var features_saracurakuts_106 = format_saracurakuts_106.readFeatures(json_saracurakuts_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saracurakuts_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saracurakuts_106.addFeatures(features_saracurakuts_106);
var lyr_saracurakuts_106 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saracurakuts_106, 
                style: style_saracurakuts_106,
                interactive: true,
                title: '<img src="styles/legend/saracurakuts_106.png" /> saracura (kutsɨɾɨ)'
            });
var format_pupunhakawe_107 = new ol.format.GeoJSON();
var features_pupunhakawe_107 = format_pupunhakawe_107.readFeatures(json_pupunhakawe_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pupunhakawe_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pupunhakawe_107.addFeatures(features_pupunhakawe_107);
var lyr_pupunhakawe_107 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pupunhakawe_107, 
                style: style_pupunhakawe_107,
                interactive: true,
                title: '<img src="styles/legend/pupunhakawe_107.png" /> pupunha (kaweɾɨ)'
            });
var format_pupunhakaw_108 = new ol.format.GeoJSON();
var features_pupunhakaw_108 = format_pupunhakaw_108.readFeatures(json_pupunhakaw_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pupunhakaw_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pupunhakaw_108.addFeatures(features_pupunhakaw_108);
var lyr_pupunhakaw_108 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pupunhakaw_108, 
                style: style_pupunhakaw_108,
                interactive: true,
                title: '<img src="styles/legend/pupunhakaw_108.png" /> pupunha (kawɨɾɨ)'
            });
var format_poraqupequenoptsute_109 = new ol.format.GeoJSON();
var features_poraqupequenoptsute_109 = format_poraqupequenoptsute_109.readFeatures(json_poraqupequenoptsute_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraqupequenoptsute_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraqupequenoptsute_109.addFeatures(features_poraqupequenoptsute_109);
var lyr_poraqupequenoptsute_109 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraqupequenoptsute_109, 
                style: style_poraqupequenoptsute_109,
                interactive: true,
                title: '<img src="styles/legend/poraqupequenoptsute_109.png" /> poraquê pequeno (pẽtsute)'
            });
var format_poraqupequenoptsut_110 = new ol.format.GeoJSON();
var features_poraqupequenoptsut_110 = format_poraqupequenoptsut_110.readFeatures(json_poraqupequenoptsut_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraqupequenoptsut_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraqupequenoptsut_110.addFeatures(features_poraqupequenoptsut_110);
var lyr_poraqupequenoptsut_110 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraqupequenoptsut_110, 
                style: style_poraqupequenoptsut_110,
                interactive: true,
                title: '<img src="styles/legend/poraqupequenoptsut_110.png" /> poraquê pequeno (pẽtsutɨ)'
            });
var format_poraqugrandettett_111 = new ol.format.GeoJSON();
var features_poraqugrandettett_111 = format_poraqugrandettett_111.readFeatures(json_poraqugrandettett_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraqugrandettett_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraqugrandettett_111.addFeatures(features_poraqugrandettett_111);
var lyr_poraqugrandettett_111 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraqugrandettett_111, 
                style: style_poraqugrandettett_111,
                interactive: true,
                title: '<img src="styles/legend/poraqugrandettett_111.png" /> poraquê grande (tẽteɾɨ/tẽtɨɾɨ)'
            });
var format_poraqugrandette_112 = new ol.format.GeoJSON();
var features_poraqugrandette_112 = format_poraqugrandette_112.readFeatures(json_poraqugrandette_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraqugrandette_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraqugrandette_112.addFeatures(features_poraqugrandette_112);
var lyr_poraqugrandette_112 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraqugrandette_112, 
                style: style_poraqugrandette_112,
                interactive: true,
                title: '<img src="styles/legend/poraqugrandette_112.png" /> poraquê grande (tẽteɾɨ)'
            });
var format_poraqugrandett_113 = new ol.format.GeoJSON();
var features_poraqugrandett_113 = format_poraqugrandett_113.readFeatures(json_poraqugrandett_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraqugrandett_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraqugrandett_113.addFeatures(features_poraqugrandett_113);
var lyr_poraqugrandett_113 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraqugrandett_113, 
                style: style_poraqugrandett_113,
                interactive: true,
                title: '<img src="styles/legend/poraqugrandett_113.png" /> poraquê grande (tẽtɨɾɨ)'
            });
var format_pirapitingakapupe_114 = new ol.format.GeoJSON();
var features_pirapitingakapupe_114 = format_pirapitingakapupe_114.readFeatures(json_pirapitingakapupe_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pirapitingakapupe_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pirapitingakapupe_114.addFeatures(features_pirapitingakapupe_114);
var lyr_pirapitingakapupe_114 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pirapitingakapupe_114, 
                style: style_pirapitingakapupe_114,
                interactive: true,
                title: '<img src="styles/legend/pirapitingakapupe_114.png" /> pirapitinga (kapupeɾɨ)'
            });
var format_pirapitingakapup_115 = new ol.format.GeoJSON();
var features_pirapitingakapup_115 = format_pirapitingakapup_115.readFeatures(json_pirapitingakapup_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pirapitingakapup_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pirapitingakapup_115.addFeatures(features_pirapitingakapup_115);
var lyr_pirapitingakapup_115 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pirapitingakapup_115, 
                style: style_pirapitingakapup_115,
                interactive: true,
                title: '<img src="styles/legend/pirapitingakapup_115.png" /> pirapitinga (kapupɨɾɨ)'
            });
var format_poplanodemandiocakumekata_116 = new ol.format.GeoJSON();
var features_poplanodemandiocakumekata_116 = format_poplanodemandiocakumekata_116.readFeatures(json_poplanodemandiocakumekata_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poplanodemandiocakumekata_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poplanodemandiocakumekata_116.addFeatures(features_poplanodemandiocakumekata_116);
var lyr_poplanodemandiocakumekata_116 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poplanodemandiocakumekata_116, 
                style: style_poplanodemandiocakumekata_116,
                interactive: true,
                title: '<img src="styles/legend/poplanodemandiocakumekata_116.png" /> pão plano de mandioca (kumeɾɨkata)'
            });
var format_poplanodemandiocakumkata_117 = new ol.format.GeoJSON();
var features_poplanodemandiocakumkata_117 = format_poplanodemandiocakumkata_117.readFeatures(json_poplanodemandiocakumkata_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poplanodemandiocakumkata_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poplanodemandiocakumkata_117.addFeatures(features_poplanodemandiocakumkata_117);
var lyr_poplanodemandiocakumkata_117 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poplanodemandiocakumkata_117, 
                style: style_poplanodemandiocakumkata_117,
                interactive: true,
                title: '<img src="styles/legend/poplanodemandiocakumkata_117.png" /> pão plano de mandioca (kumɨɾɨkata)'
            });
var format_pacakajatekajat_118 = new ol.format.GeoJSON();
var features_pacakajatekajat_118 = format_pacakajatekajat_118.readFeatures(json_pacakajatekajat_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pacakajatekajat_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pacakajatekajat_118.addFeatures(features_pacakajatekajat_118);
var lyr_pacakajatekajat_118 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pacakajatekajat_118, 
                style: style_pacakajatekajat_118,
                interactive: true,
                title: '<img src="styles/legend/pacakajatekajat_118.png" /> paca (kajate/kajatɨ)'
            });
var format_pacakajate_119 = new ol.format.GeoJSON();
var features_pacakajate_119 = format_pacakajate_119.readFeatures(json_pacakajate_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pacakajate_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pacakajate_119.addFeatures(features_pacakajate_119);
var lyr_pacakajate_119 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pacakajate_119, 
                style: style_pacakajate_119,
                interactive: true,
                title: '<img src="styles/legend/pacakajate_119.png" /> paca (kajate)'
            });
var format_pacakajat_120 = new ol.format.GeoJSON();
var features_pacakajat_120 = format_pacakajat_120.readFeatures(json_pacakajat_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pacakajat_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pacakajat_120.addFeatures(features_pacakajat_120);
var lyr_pacakajat_120 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pacakajat_120, 
                style: style_pacakajat_120,
                interactive: true,
                title: '<img src="styles/legend/pacakajat_120.png" /> paca (kajatɨ)'
            });
var format_macacopretoitikre_121 = new ol.format.GeoJSON();
var features_macacopretoitikre_121 = format_macacopretoitikre_121.readFeatures(json_macacopretoitikre_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_macacopretoitikre_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macacopretoitikre_121.addFeatures(features_macacopretoitikre_121);
var lyr_macacopretoitikre_121 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_macacopretoitikre_121, 
                style: style_macacopretoitikre_121,
                interactive: true,
                title: '<img src="styles/legend/macacopretoitikre_121.png" /> macaco preto (itʃikɨre)'
            });
var format_macacopretoitikr_122 = new ol.format.GeoJSON();
var features_macacopretoitikr_122 = format_macacopretoitikr_122.readFeatures(json_macacopretoitikr_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_macacopretoitikr_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macacopretoitikr_122.addFeatures(features_macacopretoitikr_122);
var lyr_macacopretoitikr_122 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_macacopretoitikr_122, 
                style: style_macacopretoitikr_122,
                interactive: true,
                title: '<img src="styles/legend/macacopretoitikr_122.png" /> macaco preto (itʃikɨrɨ)'
            });
var format_lontraapasakae_123 = new ol.format.GeoJSON();
var features_lontraapasakae_123 = format_lontraapasakae_123.readFeatures(json_lontraapasakae_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lontraapasakae_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lontraapasakae_123.addFeatures(features_lontraapasakae_123);
var lyr_lontraapasakae_123 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lontraapasakae_123, 
                style: style_lontraapasakae_123,
                interactive: true,
                title: '<img src="styles/legend/lontraapasakae_123.png" /> lontra (apasakaɾe)'
            });
var format_lontraapasaka_124 = new ol.format.GeoJSON();
var features_lontraapasaka_124 = format_lontraapasaka_124.readFeatures(json_lontraapasaka_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lontraapasaka_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lontraapasaka_124.addFeatures(features_lontraapasaka_124);
var lyr_lontraapasaka_124 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lontraapasaka_124, 
                style: style_lontraapasaka_124,
                interactive: true,
                title: '<img src="styles/legend/lontraapasaka_124.png" /> lontra (apasakaɾɨ)'
            });
var format_giapequenaatenu_125 = new ol.format.GeoJSON();
var features_giapequenaatenu_125 = format_giapequenaatenu_125.readFeatures(json_giapequenaatenu_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_giapequenaatenu_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_giapequenaatenu_125.addFeatures(features_giapequenaatenu_125);
var lyr_giapequenaatenu_125 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_giapequenaatenu_125, 
                style: style_giapequenaatenu_125,
                interactive: true,
                title: '<img src="styles/legend/giapequenaatenu_125.png" /> gia pequena (atenɨɾu)'
            });
var format_giapequenaatnu_126 = new ol.format.GeoJSON();
var features_giapequenaatnu_126 = format_giapequenaatnu_126.readFeatures(json_giapequenaatnu_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_giapequenaatnu_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_giapequenaatnu_126.addFeatures(features_giapequenaatnu_126);
var lyr_giapequenaatnu_126 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_giapequenaatnu_126, 
                style: style_giapequenaatnu_126,
                interactive: true,
                title: '<img src="styles/legend/giapequenaatnu_126.png" /> gia pequena (atɨnɨɾu)'
            });
var format_cutiarakptkkpetke_127 = new ol.format.GeoJSON();
var features_cutiarakptkkpetke_127 = format_cutiarakptkkpetke_127.readFeatures(json_cutiarakptkkpetke_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiarakptkkpetke_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiarakptkkpetke_127.addFeatures(features_cutiarakptkkpetke_127);
var lyr_cutiarakptkkpetke_127 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiarakptkkpetke_127, 
                style: style_cutiarakptkkpetke_127,
                interactive: true,
                title: '<img src="styles/legend/cutiarakptkkpetke_127.png" /> cutiara (kɨpɨtɨ(kɨ)/kɨpetɨ(ke))'
            });
var format_cutiarakpetke_128 = new ol.format.GeoJSON();
var features_cutiarakpetke_128 = format_cutiarakpetke_128.readFeatures(json_cutiarakpetke_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiarakpetke_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiarakpetke_128.addFeatures(features_cutiarakpetke_128);
var lyr_cutiarakpetke_128 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiarakpetke_128, 
                style: style_cutiarakpetke_128,
                interactive: true,
                title: '<img src="styles/legend/cutiarakpetke_128.png" /> cutiara (kɨpetɨ(ke))'
            });
var format_cutiarakptk_129 = new ol.format.GeoJSON();
var features_cutiarakptk_129 = format_cutiarakptk_129.readFeatures(json_cutiarakptk_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiarakptk_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiarakptk_129.addFeatures(features_cutiarakptk_129);
var lyr_cutiarakptk_129 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiarakptk_129, 
                style: style_cutiarakptk_129,
                interactive: true,
                title: '<img src="styles/legend/cutiarakptk_129.png" /> cutiara (kɨpɨtɨ(kɨ))'
            });
var format_cutiakpetna_130 = new ol.format.GeoJSON();
var features_cutiakpetna_130 = format_cutiakpetna_130.readFeatures(json_cutiakpetna_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiakpetna_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiakpetna_130.addFeatures(features_cutiakpetna_130);
var lyr_cutiakpetna_130 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiakpetna_130, 
                style: style_cutiakpetna_130,
                interactive: true,
                title: '<img src="styles/legend/cutiakpetna_130.png" /> cutia (kɨpetɨ̃na)'
            });
var format_cutiakptnakpetna_131 = new ol.format.GeoJSON();
var features_cutiakptnakpetna_131 = format_cutiakptnakpetna_131.readFeatures(json_cutiakptnakpetna_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiakptnakpetna_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiakptnakpetna_131.addFeatures(features_cutiakptnakpetna_131);
var lyr_cutiakptnakpetna_131 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiakptnakpetna_131, 
                style: style_cutiakptnakpetna_131,
                interactive: true,
                title: '<img src="styles/legend/cutiakptnakpetna_131.png" /> cutia (kɨpɨtɨ̃na/kɨpetɨ̃na)'
            });
var format_cutiakptna_132 = new ol.format.GeoJSON();
var features_cutiakptna_132 = format_cutiakptna_132.readFeatures(json_cutiakptna_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiakptna_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiakptna_132.addFeatures(features_cutiakptna_132);
var lyr_cutiakptna_132 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiakptna_132, 
                style: style_cutiakptna_132,
                interactive: true,
                title: '<img src="styles/legend/cutiakptna_132.png" /> cutia (kɨpɨtɨ̃na)'
            });
var format_caquinhoptetptt_133 = new ol.format.GeoJSON();
var features_caquinhoptetptt_133 = format_caquinhoptetptt_133.readFeatures(json_caquinhoptetptt_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caquinhoptetptt_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caquinhoptetptt_133.addFeatures(features_caquinhoptetptt_133);
var lyr_caquinhoptetptt_133 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caquinhoptetptt_133, 
                style: style_caquinhoptetptt_133,
                interactive: true,
                title: '<img src="styles/legend/caquinhoptetptt_133.png" /> caquinho (pɨtetɨ/pɨtɨtɨ)'
            });
var format_caquinhoptet_134 = new ol.format.GeoJSON();
var features_caquinhoptet_134 = format_caquinhoptet_134.readFeatures(json_caquinhoptet_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caquinhoptet_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caquinhoptet_134.addFeatures(features_caquinhoptet_134);
var lyr_caquinhoptet_134 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caquinhoptet_134, 
                style: style_caquinhoptet_134,
                interactive: true,
                title: '<img src="styles/legend/caquinhoptet_134.png" /> caquinho (pɨtetɨ)'
            });
var format_caquinhoptt_135 = new ol.format.GeoJSON();
var features_caquinhoptt_135 = format_caquinhoptt_135.readFeatures(json_caquinhoptt_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caquinhoptt_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caquinhoptt_135.addFeatures(features_caquinhoptt_135);
var lyr_caquinhoptt_135 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caquinhoptt_135, 
                style: style_caquinhoptt_135,
                interactive: true,
                title: '<img src="styles/legend/caquinhoptt_135.png" /> caquinho (pɨtɨtɨ)'
            });
var format_caiararakatkaet_136 = new ol.format.GeoJSON();
var features_caiararakatkaet_136 = format_caiararakatkaet_136.readFeatures(json_caiararakatkaet_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caiararakatkaet_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caiararakatkaet_136.addFeatures(features_caiararakatkaet_136);
var lyr_caiararakatkaet_136 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caiararakatkaet_136, 
                style: style_caiararakatkaet_136,
                interactive: true,
                title: '<img src="styles/legend/caiararakatkaet_136.png" /> caiarara (kaɾɨtɨ/kaɾetɨ)'
            });
var format_caiararakaet_137 = new ol.format.GeoJSON();
var features_caiararakaet_137 = format_caiararakaet_137.readFeatures(json_caiararakaet_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caiararakaet_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caiararakaet_137.addFeatures(features_caiararakaet_137);
var lyr_caiararakaet_137 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caiararakaet_137, 
                style: style_caiararakaet_137,
                interactive: true,
                title: '<img src="styles/legend/caiararakaet_137.png" /> caiarara (kaɾetɨ)'
            });
var format_caiararakat_138 = new ol.format.GeoJSON();
var features_caiararakat_138 = format_caiararakat_138.readFeatures(json_caiararakat_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caiararakat_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caiararakat_138.addFeatures(features_caiararakat_138);
var lyr_caiararakat_138 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caiararakat_138, 
                style: style_caiararakat_138,
                interactive: true,
                title: '<img src="styles/legend/caiararakat_138.png" /> caiarara (kaɾɨtɨ)'
            });
var format_cabasnesn_139 = new ol.format.GeoJSON();
var features_cabasnesn_139 = format_cabasnesn_139.readFeatures(json_cabasnesn_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabasnesn_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabasnesn_139.addFeatures(features_cabasnesn_139);
var lyr_cabasnesn_139 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cabasnesn_139, 
                style: style_cabasnesn_139,
                interactive: true,
                title: '<img src="styles/legend/cabasnesn_139.png" /> caba (sãne/sãnɨ)'
            });
var format_cabasne_140 = new ol.format.GeoJSON();
var features_cabasne_140 = format_cabasne_140.readFeatures(json_cabasne_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabasne_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabasne_140.addFeatures(features_cabasne_140);
var lyr_cabasne_140 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cabasne_140, 
                style: style_cabasne_140,
                interactive: true,
                title: '<img src="styles/legend/cabasne_140.png" /> caba (sãne)'
            });
var format_cabasn_141 = new ol.format.GeoJSON();
var features_cabasn_141 = format_cabasn_141.readFeatures(json_cabasn_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabasn_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabasn_141.addFeatures(features_cabasn_141);
var lyr_cabasn_141 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cabasn_141, 
                style: style_cabasn_141,
                interactive: true,
                title: '<img src="styles/legend/cabasn_141.png" /> caba (sãnɨ)'
            });
var format_bicodoseiotenk_142 = new ol.format.GeoJSON();
var features_bicodoseiotenk_142 = format_bicodoseiotenk_142.readFeatures(json_bicodoseiotenk_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bicodoseiotenk_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bicodoseiotenk_142.addFeatures(features_bicodoseiotenk_142);
var lyr_bicodoseiotenk_142 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bicodoseiotenk_142, 
                style: style_bicodoseiotenk_142,
                interactive: true,
                title: '<img src="styles/legend/bicodoseiotenk_142.png" /> bico do seio (tenɨkɨ)'
            });
var format_bicodoseiotnk_143 = new ol.format.GeoJSON();
var features_bicodoseiotnk_143 = format_bicodoseiotnk_143.readFeatures(json_bicodoseiotnk_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bicodoseiotnk_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bicodoseiotnk_143.addFeatures(features_bicodoseiotnk_143);
var lyr_bicodoseiotnk_143 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bicodoseiotnk_143, 
                style: style_bicodoseiotnk_143,
                interactive: true,
                title: '<img src="styles/legend/bicodoseiotnk_143.png" /> bico do seio (tɨnɨkɨ)'
            });
var format_bemtevieptikii_144 = new ol.format.GeoJSON();
var features_bemtevieptikii_144 = format_bemtevieptikii_144.readFeatures(json_bemtevieptikii_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bemtevieptikii_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bemtevieptikii_144.addFeatures(features_bemtevieptikii_144);
var lyr_bemtevieptikii_144 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bemtevieptikii_144, 
                style: style_bemtevieptikii_144,
                interactive: true,
                title: '<img src="styles/legend/bemtevieptikii_144.png" /> bem-te-vi (epɨ̃tikiɾi)'
            });
var format_bemteviptk_145 = new ol.format.GeoJSON();
var features_bemteviptk_145 = format_bemteviptk_145.readFeatures(json_bemteviptk_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bemteviptk_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bemteviptk_145.addFeatures(features_bemteviptk_145);
var lyr_bemteviptk_145 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bemteviptk_145, 
                style: style_bemteviptk_145,
                interactive: true,
                title: '<img src="styles/legend/bemteviptk_145.png" /> bem-te-vi (ɨpɨ̃tɨkɨɾɨ)'
            });
var format_assassinokukner_146 = new ol.format.GeoJSON();
var features_assassinokukner_146 = format_assassinokukner_146.readFeatures(json_assassinokukner_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assassinokukner_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assassinokukner_146.addFeatures(features_assassinokukner_146);
var lyr_assassinokukner_146 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_assassinokukner_146, 
                style: style_assassinokukner_146,
                interactive: true,
                title: '<img src="styles/legend/assassinokukner_146.png" /> assassino (kukãːnerɨ)'
            });
var format_assassinokukanr_147 = new ol.format.GeoJSON();
var features_assassinokukanr_147 = format_assassinokukanr_147.readFeatures(json_assassinokukanr_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assassinokukanr_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assassinokukanr_147.addFeatures(features_assassinokukanr_147);
var lyr_assassinokukanr_147 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_assassinokukanr_147, 
                style: style_assassinokukanr_147,
                interactive: true,
                title: '<img src="styles/legend/assassinokukanr_147.png" /> assassino (kukanɨrɨ)'
            });
var format_ariranhanen_148 = new ol.format.GeoJSON();
var features_ariranhanen_148 = format_ariranhanen_148.readFeatures(json_ariranhanen_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ariranhanen_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ariranhanen_148.addFeatures(features_ariranhanen_148);
var lyr_ariranhanen_148 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ariranhanen_148, 
                style: style_ariranhanen_148,
                interactive: true,
                title: '<img src="styles/legend/ariranhanen_148.png" /> ariranha (ɨnɨ/enɨ)'
            });
var format_ariranhaen_149 = new ol.format.GeoJSON();
var features_ariranhaen_149 = format_ariranhaen_149.readFeatures(json_ariranhaen_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ariranhaen_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ariranhaen_149.addFeatures(features_ariranhaen_149);
var lyr_ariranhaen_149 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ariranhaen_149, 
                style: style_ariranhaen_149,
                interactive: true,
                title: '<img src="styles/legend/ariranhaen_149.png" /> ariranha (enɨ)'
            });
var format_ariranhan_150 = new ol.format.GeoJSON();
var features_ariranhan_150 = format_ariranhan_150.readFeatures(json_ariranhan_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ariranhan_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ariranhan_150.addFeatures(features_ariranhan_150);
var lyr_ariranhan_150 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ariranhan_150, 
                style: style_ariranhan_150,
                interactive: true,
                title: '<img src="styles/legend/ariranhan_150.png" /> ariranha (ɨnɨ)'
            });
var format_aatsapktsapek_151 = new ol.format.GeoJSON();
var features_aatsapktsapek_151 = format_aatsapktsapek_151.readFeatures(json_aatsapktsapek_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aatsapktsapek_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aatsapktsapek_151.addFeatures(features_aatsapktsapek_151);
var lyr_aatsapktsapek_151 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aatsapktsapek_151, 
                style: style_aatsapktsapek_151,
                interactive: true,
                title: '<img src="styles/legend/aatsapktsapek_151.png" /> açaí (tsapɨɾɨkɨ/tsapeɾɨkɨ)'
            });
var format_aatsapek_152 = new ol.format.GeoJSON();
var features_aatsapek_152 = format_aatsapek_152.readFeatures(json_aatsapek_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aatsapek_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aatsapek_152.addFeatures(features_aatsapek_152);
var lyr_aatsapek_152 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aatsapek_152, 
                style: style_aatsapek_152,
                interactive: true,
                title: '<img src="styles/legend/aatsapek_152.png" /> açaí (tsapeɾɨkɨ)'
            });
var format_aatsapk_153 = new ol.format.GeoJSON();
var features_aatsapk_153 = format_aatsapk_153.readFeatures(json_aatsapk_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aatsapk_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aatsapk_153.addFeatures(features_aatsapk_153);
var lyr_aatsapk_153 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aatsapk_153, 
                style: style_aatsapk_153,
                interactive: true,
                title: '<img src="styles/legend/aatsapk_153.png" /> açaí (tsapɨɾɨkɨ)'
            });
var format_TIsApurin_154 = new ol.format.GeoJSON();
var features_TIsApurin_154 = format_TIsApurin_154.readFeatures(json_TIsApurin_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIsApurin_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIsApurin_154.addFeatures(features_TIsApurin_154);
var lyr_TIsApurin_154 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIsApurin_154, 
                style: style_TIsApurin_154,
                interactive: true,
                title: '<img src="styles/legend/TIsApurin_154.png" /> TIs Apurinã'
            });
var format_Presenadeescolas_155 = new ol.format.GeoJSON();
var features_Presenadeescolas_155 = format_Presenadeescolas_155.readFeatures(json_Presenadeescolas_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Presenadeescolas_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Presenadeescolas_155.addFeatures(features_Presenadeescolas_155);
var lyr_Presenadeescolas_155 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Presenadeescolas_155, 
                style: style_Presenadeescolas_155,
                interactive: true,
                title: '<img src="styles/legend/Presenadeescolas_155.png" /> Presença de escolas'
            });
var format_ComunidadesApurin_156 = new ol.format.GeoJSON();
var features_ComunidadesApurin_156 = format_ComunidadesApurin_156.readFeatures(json_ComunidadesApurin_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesApurin_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesApurin_156.addFeatures(features_ComunidadesApurin_156);
var lyr_ComunidadesApurin_156 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ComunidadesApurin_156, 
                style: style_ComunidadesApurin_156,
                interactive: true,
                title: '<img src="styles/legend/ComunidadesApurin_156.png" /> Comunidades Apurinã'
            });
var group_Variaoe = new ol.layer.Group({
                                layers: [lyr_xinganknrkner_94,lyr_xingankner_95,lyr_xinganknr_96,lyr_virpe_97,lyr_virp_98,lyr_vinhodeaatsaperik_99,lyr_vinhodeaatsaprik_100,lyr_tabatingakatsae_101,lyr_tabatingakatsa_102,lyr_seiotne_103,lyr_seiotn_104,lyr_saracurakutse_105,lyr_saracurakuts_106,lyr_pupunhakawe_107,lyr_pupunhakaw_108,lyr_poraqupequenoptsute_109,lyr_poraqupequenoptsut_110,lyr_poraqugrandettett_111,lyr_poraqugrandette_112,lyr_poraqugrandett_113,lyr_pirapitingakapupe_114,lyr_pirapitingakapup_115,lyr_poplanodemandiocakumekata_116,lyr_poplanodemandiocakumkata_117,lyr_pacakajatekajat_118,lyr_pacakajate_119,lyr_pacakajat_120,lyr_macacopretoitikre_121,lyr_macacopretoitikr_122,lyr_lontraapasakae_123,lyr_lontraapasaka_124,lyr_giapequenaatenu_125,lyr_giapequenaatnu_126,lyr_cutiarakptkkpetke_127,lyr_cutiarakpetke_128,lyr_cutiarakptk_129,lyr_cutiakpetna_130,lyr_cutiakptnakpetna_131,lyr_cutiakptna_132,lyr_caquinhoptetptt_133,lyr_caquinhoptet_134,lyr_caquinhoptt_135,lyr_caiararakatkaet_136,lyr_caiararakaet_137,lyr_caiararakat_138,lyr_cabasnesn_139,lyr_cabasne_140,lyr_cabasn_141,lyr_bicodoseiotenk_142,lyr_bicodoseiotnk_143,lyr_bemtevieptikii_144,lyr_bemteviptk_145,lyr_assassinokukner_146,lyr_assassinokukanr_147,lyr_ariranhanen_148,lyr_ariranhaen_149,lyr_ariranhan_150,lyr_aatsapktsapek_151,lyr_aatsapek_152,lyr_aatsapk_153,],
                                title: "Variação e ~ ɨ"});
var group_Variaoentreh0 = new ol.layer.Group({
                                layers: [lyr_2PLhthethe_55,lyr_2PLthe_56,lyr_2PLhthe_57,lyr_umtyhty_58,lyr_umty_59,lyr_umhty_60,lyr_sexoimata_61,lyr_sexohimata_62,lyr_sapocaanaruawu_63,lyr_sapocaanaruhawu_64,lyr_sangueeka_65,lyr_sangueheka_66,lyr_piranhahmama_67,lyr_piranhama_68,lyr_piranhahma_69,lyr_onahkitikiti_70,lyr_onakiti_71,lyr_onahkiti_72,lyr_meninohtakurutakuru_73,lyr_meninotakuru_74,lyr_meninohtakuru_75,lyr_grandechefedosbichoshwithewithe_76,lyr_grandechefedosbichoswithe_77,lyr_grandechefedosbichoshwithe_78,lyr_florhww_79,lyr_florw_80,lyr_florhw_81,lyr_filhotehkerkir_82,lyr_filhoteker_83,lyr_filhotehker_84,lyr_flautapukyry_85,lyr_flautahpukyry_86,lyr_coraokipahkipa_87,lyr_coraokipa_88,lyr_coraohkipa_89,lyr_bomereka_90,lyr_bomhereka_91,lyr_abanoputa_92,lyr_abanohputa_93,],
                                title: "Variação entre h ~ 0"});
var group_Variaoentrerl = new ol.layer.Group({
                                layers: [lyr_urubumajulimajuri_30,lyr_urubumajuli_31,lyr_urubumajuri_32,lyr_surucucukasululkasuui_33,lyr_surucucukasulul_34,lyr_surucucukasuui_35,lyr_serbomalekal_36,lyr_serbomaeka_37,lyr_queixadairalirar_38,lyr_queixadairal_39,lyr_queixadairar_40,lyr_pretopumamalipumamari_41,lyr_pretopumamali_42,lyr_pretopumamari_43,lyr_jenipapoymamal_44,lyr_jenipapoymama_45,lyr_igarapkawal_46,lyr_igarapkawa_47,lyr_flechaprontaparaserusadakatstal_48,lyr_flechaprontaparaserusadakatsta_49,lyr_cigarraktuiktuli_50,lyr_cigarraktuli_51,lyr_cigarraktui_52,lyr_cachorroanpnali_53,lyr_cachorroanpnai_54,],
                                title: "Variação entre r ~ l"});
var group_Variaofonolgicalexicalmentecondicionada = new ol.layer.Group({
                                layers: [lyr_urucumapkr_6,lyr_urucumpkr_7,lyr_teradosaasarasarasara_8,lyr_teradosarasara_9,lyr_teradosaasara_10,lyr_tamandubandeiraexuwaexiwa_11,lyr_tamandubandeiraexiwaixiwa_12,lyr_tamandubandeiraixuwaixiwa_13,lyr_tamandubandeiraexuwa_14,lyr_tamandubandeiraixiwa_15,lyr_tamandubandeiraixuwa_16,lyr_poraqupetsty_17,lyr_poraquptsuty_18,lyr_mutumirkairka_19,lyr_mutumirka_20,lyr_mutumirka_21,lyr_jacarkaikyri_22,lyr_jacarkaiukyri_23,lyr_guaparaparapara_24,lyr_guaparapara_25,lyr_guapara_26,lyr_guapara_27,lyr_guapura_28,lyr_guapara_29,],
                                title: "Variação fonológica lexicalmente condicionada"});
var group_DesmatamentoINPE = new ol.layer.Group({
                                layers: [lyr_2020_1,lyr_2018_2,lyr_2019_3,lyr_2017_4,lyr_2016_5,],
                                title: "Desmatamento (INPE)"});
var group_Mapabase = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mapa base"});

lyr_OpenStreetMap_0.setVisible(true);lyr_2020_1.setVisible(false);lyr_2018_2.setVisible(false);lyr_2019_3.setVisible(false);lyr_2017_4.setVisible(false);lyr_2016_5.setVisible(false);lyr_urucumapkr_6.setVisible(false);lyr_urucumpkr_7.setVisible(false);lyr_teradosaasarasarasara_8.setVisible(false);lyr_teradosarasara_9.setVisible(false);lyr_teradosaasara_10.setVisible(false);lyr_tamandubandeiraexuwaexiwa_11.setVisible(false);lyr_tamandubandeiraexiwaixiwa_12.setVisible(false);lyr_tamandubandeiraixuwaixiwa_13.setVisible(false);lyr_tamandubandeiraexuwa_14.setVisible(false);lyr_tamandubandeiraixiwa_15.setVisible(false);lyr_tamandubandeiraixuwa_16.setVisible(false);lyr_poraqupetsty_17.setVisible(false);lyr_poraquptsuty_18.setVisible(false);lyr_mutumirkairka_19.setVisible(false);lyr_mutumirka_20.setVisible(false);lyr_mutumirka_21.setVisible(false);lyr_jacarkaikyri_22.setVisible(false);lyr_jacarkaiukyri_23.setVisible(false);lyr_guaparaparapara_24.setVisible(false);lyr_guaparapara_25.setVisible(false);lyr_guapara_26.setVisible(false);lyr_guapara_27.setVisible(false);lyr_guapura_28.setVisible(false);lyr_guapara_29.setVisible(false);lyr_urubumajulimajuri_30.setVisible(false);lyr_urubumajuli_31.setVisible(false);lyr_urubumajuri_32.setVisible(false);lyr_surucucukasululkasuui_33.setVisible(false);lyr_surucucukasulul_34.setVisible(false);lyr_surucucukasuui_35.setVisible(false);lyr_serbomalekal_36.setVisible(false);lyr_serbomaeka_37.setVisible(false);lyr_queixadairalirar_38.setVisible(false);lyr_queixadairal_39.setVisible(false);lyr_queixadairar_40.setVisible(false);lyr_pretopumamalipumamari_41.setVisible(false);lyr_pretopumamali_42.setVisible(false);lyr_pretopumamari_43.setVisible(false);lyr_jenipapoymamal_44.setVisible(false);lyr_jenipapoymama_45.setVisible(false);lyr_igarapkawal_46.setVisible(false);lyr_igarapkawa_47.setVisible(false);lyr_flechaprontaparaserusadakatstal_48.setVisible(false);lyr_flechaprontaparaserusadakatsta_49.setVisible(false);lyr_cigarraktuiktuli_50.setVisible(false);lyr_cigarraktuli_51.setVisible(false);lyr_cigarraktui_52.setVisible(false);lyr_cachorroanpnali_53.setVisible(false);lyr_cachorroanpnai_54.setVisible(false);lyr_2PLhthethe_55.setVisible(false);lyr_2PLthe_56.setVisible(false);lyr_2PLhthe_57.setVisible(false);lyr_umtyhty_58.setVisible(false);lyr_umty_59.setVisible(false);lyr_umhty_60.setVisible(false);lyr_sexoimata_61.setVisible(false);lyr_sexohimata_62.setVisible(false);lyr_sapocaanaruawu_63.setVisible(false);lyr_sapocaanaruhawu_64.setVisible(false);lyr_sangueeka_65.setVisible(false);lyr_sangueheka_66.setVisible(false);lyr_piranhahmama_67.setVisible(false);lyr_piranhama_68.setVisible(false);lyr_piranhahma_69.setVisible(false);lyr_onahkitikiti_70.setVisible(false);lyr_onakiti_71.setVisible(false);lyr_onahkiti_72.setVisible(false);lyr_meninohtakurutakuru_73.setVisible(false);lyr_meninotakuru_74.setVisible(false);lyr_meninohtakuru_75.setVisible(false);lyr_grandechefedosbichoshwithewithe_76.setVisible(false);lyr_grandechefedosbichoswithe_77.setVisible(false);lyr_grandechefedosbichoshwithe_78.setVisible(false);lyr_florhww_79.setVisible(false);lyr_florw_80.setVisible(false);lyr_florhw_81.setVisible(false);lyr_filhotehkerkir_82.setVisible(false);lyr_filhoteker_83.setVisible(false);lyr_filhotehker_84.setVisible(false);lyr_flautapukyry_85.setVisible(false);lyr_flautahpukyry_86.setVisible(false);lyr_coraokipahkipa_87.setVisible(false);lyr_coraokipa_88.setVisible(false);lyr_coraohkipa_89.setVisible(false);lyr_bomereka_90.setVisible(false);lyr_bomhereka_91.setVisible(false);lyr_abanoputa_92.setVisible(false);lyr_abanohputa_93.setVisible(false);lyr_xinganknrkner_94.setVisible(false);lyr_xingankner_95.setVisible(false);lyr_xinganknr_96.setVisible(false);lyr_virpe_97.setVisible(false);lyr_virp_98.setVisible(false);lyr_vinhodeaatsaperik_99.setVisible(false);lyr_vinhodeaatsaprik_100.setVisible(false);lyr_tabatingakatsae_101.setVisible(false);lyr_tabatingakatsa_102.setVisible(false);lyr_seiotne_103.setVisible(false);lyr_seiotn_104.setVisible(false);lyr_saracurakutse_105.setVisible(false);lyr_saracurakuts_106.setVisible(false);lyr_pupunhakawe_107.setVisible(false);lyr_pupunhakaw_108.setVisible(false);lyr_poraqupequenoptsute_109.setVisible(false);lyr_poraqupequenoptsut_110.setVisible(false);lyr_poraqugrandettett_111.setVisible(false);lyr_poraqugrandette_112.setVisible(false);lyr_poraqugrandett_113.setVisible(false);lyr_pirapitingakapupe_114.setVisible(false);lyr_pirapitingakapup_115.setVisible(false);lyr_poplanodemandiocakumekata_116.setVisible(false);lyr_poplanodemandiocakumkata_117.setVisible(false);lyr_pacakajatekajat_118.setVisible(false);lyr_pacakajate_119.setVisible(false);lyr_pacakajat_120.setVisible(false);lyr_macacopretoitikre_121.setVisible(false);lyr_macacopretoitikr_122.setVisible(false);lyr_lontraapasakae_123.setVisible(false);lyr_lontraapasaka_124.setVisible(false);lyr_giapequenaatenu_125.setVisible(false);lyr_giapequenaatnu_126.setVisible(false);lyr_cutiarakptkkpetke_127.setVisible(false);lyr_cutiarakpetke_128.setVisible(false);lyr_cutiarakptk_129.setVisible(false);lyr_cutiakpetna_130.setVisible(false);lyr_cutiakptnakpetna_131.setVisible(false);lyr_cutiakptna_132.setVisible(false);lyr_caquinhoptetptt_133.setVisible(false);lyr_caquinhoptet_134.setVisible(false);lyr_caquinhoptt_135.setVisible(false);lyr_caiararakatkaet_136.setVisible(false);lyr_caiararakaet_137.setVisible(false);lyr_caiararakat_138.setVisible(false);lyr_cabasnesn_139.setVisible(false);lyr_cabasne_140.setVisible(false);lyr_cabasn_141.setVisible(false);lyr_bicodoseiotenk_142.setVisible(false);lyr_bicodoseiotnk_143.setVisible(false);lyr_bemtevieptikii_144.setVisible(false);lyr_bemteviptk_145.setVisible(false);lyr_assassinokukner_146.setVisible(false);lyr_assassinokukanr_147.setVisible(false);lyr_ariranhanen_148.setVisible(false);lyr_ariranhaen_149.setVisible(false);lyr_ariranhan_150.setVisible(false);lyr_aatsapktsapek_151.setVisible(false);lyr_aatsapek_152.setVisible(false);lyr_aatsapk_153.setVisible(false);lyr_TIsApurin_154.setVisible(true);lyr_Presenadeescolas_155.setVisible(false);lyr_ComunidadesApurin_156.setVisible(true);
var layersList = [group_Mapabase,group_DesmatamentoINPE,group_Variaofonolgicalexicalmentecondicionada,group_Variaoentrerl,group_Variaoentreh0,group_Variaoe,lyr_TIsApurin_154,lyr_Presenadeescolas_155,lyr_ComunidadesApurin_156];
lyr_2020_1.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2018_2.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2019_3.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2017_4.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2016_5.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_urucumapkr_6.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urucum': 'urucum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_urucumpkr_7.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urucum': 'urucum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_teradosaasarasarasara_8.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'terçado': 'terçado', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_teradosarasara_9.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'terçado': 'terçado', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_teradosaasara_10.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'terçado': 'terçado', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraexuwaexiwa_11.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduá': 'tamanduá', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraexiwaixiwa_12.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduá': 'tamanduá', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraixuwaixiwa_13.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduá': 'tamanduá', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraexuwa_14.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduá': 'tamanduá', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraixiwa_15.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduá': 'tamanduá', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraixuwa_16.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduá': 'tamanduá', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraqupetsty_17.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraquê': 'poraquê', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraquptsuty_18.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraquê': 'poraquê', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mutumirkairka_19.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'mutum': 'mutum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mutumirka_20.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'mutum': 'mutum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mutumirka_21.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'mutum': 'mutum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jacarkaikyri_22.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jacaré': 'jacaré', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jacarkaiukyri_23.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jacaré': 'jacaré', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guaparaparapara_24.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'água': 'água', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guaparapara_25.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'água': 'água', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guapara_26.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'água': 'água', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guapara_27.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'água': 'água', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guapura_28.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'água': 'água', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guapara_29.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'água': 'água', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_urubumajulimajuri_30.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urubu': 'urubu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_urubumajuli_31.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urubu': 'urubu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_urubumajuri_32.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urubu': 'urubu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_surucucukasululkasuui_33.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'surucucu': 'surucucu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_surucucukasulul_34.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'surucucu': 'surucucu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_surucucukasuui_35.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'surucucu': 'surucucu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_serbomalekal_36.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ser_bom': 'ser_bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_serbomaeka_37.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ser_bom': 'ser_bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_queixadairalirar_38.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'queixada': 'queixada', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_queixadairal_39.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'queixada': 'queixada', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_queixadairar_40.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'queixada': 'queixada', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pretopumamalipumamari_41.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'preto': 'preto', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pretopumamali_42.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'preto': 'preto', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pretopumamari_43.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'preto': 'preto', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jenipapoymamal_44.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jenipapo': 'jenipapo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jenipapoymama_45.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jenipapo': 'jenipapo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_igarapkawal_46.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'igarapé': 'igarapé', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_igarapkawa_47.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'igarapé': 'igarapé', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flechaprontaparaserusadakatstal_48.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flexa_pron': 'flexa_pron', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flechaprontaparaserusadakatsta_49.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flexa_pron': 'flexa_pron', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cigarraktuiktuli_50.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cigarra': 'cigarra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cigarraktuli_51.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cigarra': 'cigarra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cigarraktui_52.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cigarra': 'cigarra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cachorroanpnali_53.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cachorro': 'cachorro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cachorroanpnai_54.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cachorro': 'cachorro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_2PLhthethe_55.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vocês': 'vocês', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_2PLthe_56.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vocês': 'vocês', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_2PLhthe_57.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vocês': 'vocês', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_umtyhty_58.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'um': 'um', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_umty_59.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'um': 'um', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_umhty_60.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'um': 'um', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sexoimata_61.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sexo': 'sexo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sexohimata_62.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sexo': 'sexo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sapocaanaruawu_63.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sapo_caana': 'sapo_caana', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sapocaanaruhawu_64.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sapo_caana': 'sapo_caana', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sangueeka_65.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sangue': 'sangue', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sangueheka_66.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sangue': 'sangue', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_piranhahmama_67.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'piranha': 'piranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_piranhama_68.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'piranha': 'piranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_piranhahma_69.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'piranha': 'piranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_onahkitikiti_70.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'onça': 'onça', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_onakiti_71.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'onça': 'onça', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_onahkiti_72.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'onça': 'onça', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_meninohtakurutakuru_73.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'menino': 'menino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_meninotakuru_74.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'menino': 'menino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_meninohtakuru_75.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'menino': 'menino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_grandechefedosbichoshwithewithe_76.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'grande_che': 'grande_che', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_grandechefedosbichoswithe_77.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'grande_che': 'grande_che', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_grandechefedosbichoshwithe_78.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'grande_che': 'grande_che', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_florhww_79.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flor': 'flor', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_florw_80.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flor': 'flor', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_florhw_81.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flor': 'flor', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_filhotehkerkir_82.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'filhote': 'filhote', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_filhoteker_83.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'filhote': 'filhote', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_filhotehker_84.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'filhote': 'filhote', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flautapukyry_85.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flauta': 'flauta', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flautahpukyry_86.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flauta': 'flauta', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_coraokipahkipa_87.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'coração': 'coração', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_coraokipa_88.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'coração': 'coração', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_coraohkipa_89.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'coração': 'coração', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bomereka_90.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bom': 'bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bomhereka_91.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bom': 'bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_abanoputa_92.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'abano': 'abano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_abanohputa_93.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'abano': 'abano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_xinganknrkner_94.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'xingané': 'xingané', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_xingankner_95.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'xingané': 'xingané', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_xinganknr_96.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'xingané': 'xingané', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_virpe_97.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vir': 'vir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_virp_98.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vir': 'vir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_vinhodeaatsaperik_99.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vinho_de_a': 'vinho_de_a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_vinhodeaatsaprik_100.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vinho_de_a': 'vinho_de_a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tabatingakatsae_101.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tabatingakatsa_102.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_seiotne_103.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'seio': 'seio', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_seiotn_104.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'seio': 'seio', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_saracurakutse_105.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'saracura': 'saracura', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_saracurakuts_106.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'saracura': 'saracura', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pupunhakawe_107.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pupunha': 'pupunha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pupunhakaw_108.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pupunha': 'pupunha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraqupequenoptsute_109.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraquê_p': 'poraquê_p', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraqupequenoptsut_110.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraquê_p': 'poraquê_p', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraqugrandettett_111.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraquê_g': 'poraquê_g', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraqugrandette_112.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraquê_g': 'poraquê_g', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraqugrandett_113.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraquê_g': 'poraquê_g', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pirapitingakapupe_114.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pirapiting': 'pirapiting', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pirapitingakapup_115.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pirapiting': 'pirapiting', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poplanodemandiocakumekata_116.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pão_plano': 'pão_plano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poplanodemandiocakumkata_117.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pão_plano': 'pão_plano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pacakajatekajat_118.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'paca': 'paca', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pacakajate_119.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'paca': 'paca', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pacakajat_120.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'paca': 'paca', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_macacopretoitikre_121.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'macaco_pre': 'macaco_pre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_macacopretoitikr_122.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'macaco_pre': 'macaco_pre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_lontraapasakae_123.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'lontra': 'lontra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_lontraapasaka_124.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'lontra': 'lontra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_giapequenaatenu_125.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'gia_pequen': 'gia_pequen', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_giapequenaatnu_126.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'gia_pequen': 'gia_pequen', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiarakptkkpetke_127.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiarakpetke_128.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiarakptk_129.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiakpetna_130.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutia': 'cutia', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiakptnakpetna_131.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutia': 'cutia', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiakptna_132.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutia': 'cutia', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caquinhoptetptt_133.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caquinho': 'caquinho', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caquinhoptet_134.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caquinho': 'caquinho', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caquinhoptt_135.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caquinho': 'caquinho', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caiararakatkaet_136.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caiararakaet_137.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caiararakat_138.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cabasnesn_139.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caba': 'caba', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cabasne_140.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caba': 'caba', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cabasn_141.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caba': 'caba', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bicodoseiotenk_142.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bico_do_se': 'bico_do_se', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bicodoseiotnk_143.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bico_do_se': 'bico_do_se', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bemtevieptikii_144.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bem_te_vi': 'bem_te_vi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bemteviptk_145.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bem_te_vi': 'bem_te_vi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_assassinokukner_146.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'assassino': 'assassino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_assassinokukanr_147.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'assassino': 'assassino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ariranhanen_148.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ariranha': 'ariranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ariranhaen_149.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ariranha': 'ariranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ariranhan_150.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ariranha': 'ariranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_aatsapktsapek_151.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'açaí': 'açaí', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_aatsapek_152.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'açaí': 'açaí', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_aatsapk_153.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'açaí': 'açaí', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TIsApurin_154.set('fieldAliases', {'nombre': 'nombre', });
lyr_Presenadeescolas_155.set('fieldAliases', {'NM_ESCOLA': 'NM_ESCOLA', 'LATDEGDEC': 'LATDEGDEC', 'LONGDEGDEC': 'LONGDEGDEC', });
lyr_ComunidadesApurin_156.set('fieldAliases', {'NOME_': 'NOME_', 'LATDEGDEC': 'LATDEGDEC', 'LONGDEGDEC': 'LONGDEGDEC', });
lyr_2020_1.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2018_2.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2019_3.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2017_4.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2016_5.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_urucumapkr_6.set('fieldImages', {'ID': '', 'TI': '', 'urucum': '', 'Latitude': '', 'Longitude': '', });
lyr_urucumpkr_7.set('fieldImages', {'ID': '', 'TI': '', 'urucum': '', 'Latitude': '', 'Longitude': '', });
lyr_teradosaasarasarasara_8.set('fieldImages', {'ID': '', 'TI': '', 'terçado': '', 'Latitude': '', 'Longitude': '', });
lyr_teradosarasara_9.set('fieldImages', {'ID': '', 'TI': '', 'terçado': '', 'Latitude': '', 'Longitude': '', });
lyr_teradosaasara_10.set('fieldImages', {'ID': '', 'TI': '', 'terçado': '', 'Latitude': '', 'Longitude': '', });
lyr_tamandubandeiraexuwaexiwa_11.set('fieldImages', {'ID': '', 'TI': '', 'tamanduá': '', 'Latitude': '', 'Longitude': '', });
lyr_tamandubandeiraexiwaixiwa_12.set('fieldImages', {'ID': '', 'TI': '', 'tamanduá': '', 'Latitude': '', 'Longitude': '', });
lyr_tamandubandeiraixuwaixiwa_13.set('fieldImages', {'ID': '', 'TI': '', 'tamanduá': '', 'Latitude': '', 'Longitude': '', });
lyr_tamandubandeiraexuwa_14.set('fieldImages', {'ID': '', 'TI': '', 'tamanduá': '', 'Latitude': '', 'Longitude': '', });
lyr_tamandubandeiraixiwa_15.set('fieldImages', {'ID': '', 'TI': '', 'tamanduá': '', 'Latitude': '', 'Longitude': '', });
lyr_tamandubandeiraixuwa_16.set('fieldImages', {'ID': '', 'TI': '', 'tamanduá': '', 'Latitude': '', 'Longitude': '', });
lyr_poraqupetsty_17.set('fieldImages', {'ID': '', 'TI': '', 'poraquê': '', 'Latitude': '', 'Longitude': '', });
lyr_poraquptsuty_18.set('fieldImages', {'ID': '', 'TI': '', 'poraquê': '', 'Latitude': '', 'Longitude': '', });
lyr_mutumirkairka_19.set('fieldImages', {'ID': '', 'TI': '', 'mutum': '', 'Latitude': '', 'Longitude': '', });
lyr_mutumirka_20.set('fieldImages', {'ID': '', 'TI': '', 'mutum': '', 'Latitude': '', 'Longitude': '', });
lyr_mutumirka_21.set('fieldImages', {'ID': '', 'TI': '', 'mutum': '', 'Latitude': '', 'Longitude': '', });
lyr_jacarkaikyri_22.set('fieldImages', {'ID': '', 'TI': '', 'jacaré': '', 'Latitude': '', 'Longitude': '', });
lyr_jacarkaiukyri_23.set('fieldImages', {'ID': '', 'TI': '', 'jacaré': '', 'Latitude': '', 'Longitude': '', });
lyr_guaparaparapara_24.set('fieldImages', {'ID': '', 'TI': '', 'água': '', 'Latitude': '', 'Longitude': '', });
lyr_guaparapara_25.set('fieldImages', {'ID': '', 'TI': '', 'água': '', 'Latitude': '', 'Longitude': '', });
lyr_guapara_26.set('fieldImages', {'ID': '', 'TI': '', 'água': '', 'Latitude': '', 'Longitude': '', });
lyr_guapara_27.set('fieldImages', {'ID': '', 'TI': '', 'água': '', 'Latitude': '', 'Longitude': '', });
lyr_guapura_28.set('fieldImages', {'ID': '', 'TI': '', 'água': '', 'Latitude': '', 'Longitude': '', });
lyr_guapara_29.set('fieldImages', {'ID': '', 'TI': '', 'água': '', 'Latitude': '', 'Longitude': '', });
lyr_urubumajulimajuri_30.set('fieldImages', {'ID': '', 'TI': '', 'urubu': '', 'Latitude': '', 'Longitude': '', });
lyr_urubumajuli_31.set('fieldImages', {'ID': '', 'TI': '', 'urubu': '', 'Latitude': '', 'Longitude': '', });
lyr_urubumajuri_32.set('fieldImages', {'ID': '', 'TI': '', 'urubu': '', 'Latitude': '', 'Longitude': '', });
lyr_surucucukasululkasuui_33.set('fieldImages', {'ID': '', 'TI': '', 'surucucu': '', 'Latitude': '', 'Longitude': '', });
lyr_surucucukasulul_34.set('fieldImages', {'ID': '', 'TI': '', 'surucucu': '', 'Latitude': '', 'Longitude': '', });
lyr_surucucukasuui_35.set('fieldImages', {'ID': '', 'TI': '', 'surucucu': '', 'Latitude': '', 'Longitude': '', });
lyr_serbomalekal_36.set('fieldImages', {'ID': '', 'TI': '', 'ser_bom': '', 'Latitude': '', 'Longitude': '', });
lyr_serbomaeka_37.set('fieldImages', {'ID': '', 'TI': '', 'ser_bom': '', 'Latitude': '', 'Longitude': '', });
lyr_queixadairalirar_38.set('fieldImages', {'ID': '', 'TI': '', 'queixada': '', 'Latitude': '', 'Longitude': '', });
lyr_queixadairal_39.set('fieldImages', {'ID': '', 'TI': '', 'queixada': '', 'Latitude': '', 'Longitude': '', });
lyr_queixadairar_40.set('fieldImages', {'ID': '', 'TI': '', 'queixada': '', 'Latitude': '', 'Longitude': '', });
lyr_pretopumamalipumamari_41.set('fieldImages', {'ID': '', 'TI': '', 'preto': '', 'Latitude': '', 'Longitude': '', });
lyr_pretopumamali_42.set('fieldImages', {'ID': '', 'TI': '', 'preto': '', 'Latitude': '', 'Longitude': '', });
lyr_pretopumamari_43.set('fieldImages', {'ID': '', 'TI': '', 'preto': '', 'Latitude': '', 'Longitude': '', });
lyr_jenipapoymamal_44.set('fieldImages', {'ID': '', 'TI': '', 'jenipapo': '', 'Latitude': '', 'Longitude': '', });
lyr_jenipapoymama_45.set('fieldImages', {'ID': '', 'TI': '', 'jenipapo': '', 'Latitude': '', 'Longitude': '', });
lyr_igarapkawal_46.set('fieldImages', {'ID': '', 'TI': '', 'igarapé': '', 'Latitude': '', 'Longitude': '', });
lyr_igarapkawa_47.set('fieldImages', {'ID': '', 'TI': '', 'igarapé': '', 'Latitude': '', 'Longitude': '', });
lyr_flechaprontaparaserusadakatstal_48.set('fieldImages', {'ID': '', 'TI': '', 'flexa_pron': '', 'Latitude': '', 'Longitude': '', });
lyr_flechaprontaparaserusadakatsta_49.set('fieldImages', {'ID': '', 'TI': '', 'flexa_pron': '', 'Latitude': '', 'Longitude': '', });
lyr_cigarraktuiktuli_50.set('fieldImages', {'ID': '', 'TI': '', 'cigarra': '', 'Latitude': '', 'Longitude': '', });
lyr_cigarraktuli_51.set('fieldImages', {'ID': '', 'TI': '', 'cigarra': '', 'Latitude': '', 'Longitude': '', });
lyr_cigarraktui_52.set('fieldImages', {'ID': '', 'TI': '', 'cigarra': '', 'Latitude': '', 'Longitude': '', });
lyr_cachorroanpnali_53.set('fieldImages', {'ID': '', 'TI': '', 'cachorro': '', 'Latitude': '', 'Longitude': '', });
lyr_cachorroanpnai_54.set('fieldImages', {'ID': '', 'TI': '', 'cachorro': '', 'Latitude': '', 'Longitude': '', });
lyr_2PLhthethe_55.set('fieldImages', {'ID': '', 'TI': '', 'vocês': '', 'Latitude': '', 'Longitude': '', });
lyr_2PLthe_56.set('fieldImages', {'ID': '', 'TI': '', 'vocês': '', 'Latitude': '', 'Longitude': '', });
lyr_2PLhthe_57.set('fieldImages', {'ID': '', 'TI': '', 'vocês': '', 'Latitude': '', 'Longitude': '', });
lyr_umtyhty_58.set('fieldImages', {'ID': '', 'TI': '', 'um': '', 'Latitude': '', 'Longitude': '', });
lyr_umty_59.set('fieldImages', {'ID': '', 'TI': '', 'um': '', 'Latitude': '', 'Longitude': '', });
lyr_umhty_60.set('fieldImages', {'ID': '', 'TI': '', 'um': '', 'Latitude': '', 'Longitude': '', });
lyr_sexoimata_61.set('fieldImages', {'ID': '', 'TI': '', 'sexo': '', 'Latitude': '', 'Longitude': '', });
lyr_sexohimata_62.set('fieldImages', {'ID': '', 'TI': '', 'sexo': '', 'Latitude': '', 'Longitude': '', });
lyr_sapocaanaruawu_63.set('fieldImages', {'ID': '', 'TI': '', 'sapo_caana': '', 'Latitude': '', 'Longitude': '', });
lyr_sapocaanaruhawu_64.set('fieldImages', {'ID': '', 'TI': '', 'sapo_caana': '', 'Latitude': '', 'Longitude': '', });
lyr_sangueeka_65.set('fieldImages', {'ID': '', 'TI': '', 'sangue': '', 'Latitude': '', 'Longitude': '', });
lyr_sangueheka_66.set('fieldImages', {'ID': '', 'TI': '', 'sangue': '', 'Latitude': '', 'Longitude': '', });
lyr_piranhahmama_67.set('fieldImages', {'ID': '', 'TI': '', 'piranha': '', 'Latitude': '', 'Longitude': '', });
lyr_piranhama_68.set('fieldImages', {'ID': '', 'TI': '', 'piranha': '', 'Latitude': '', 'Longitude': '', });
lyr_piranhahma_69.set('fieldImages', {'ID': '', 'TI': '', 'piranha': '', 'Latitude': '', 'Longitude': '', });
lyr_onahkitikiti_70.set('fieldImages', {'ID': '', 'TI': '', 'onça': '', 'Latitude': '', 'Longitude': '', });
lyr_onakiti_71.set('fieldImages', {'ID': '', 'TI': '', 'onça': '', 'Latitude': '', 'Longitude': '', });
lyr_onahkiti_72.set('fieldImages', {'ID': '', 'TI': '', 'onça': '', 'Latitude': '', 'Longitude': '', });
lyr_meninohtakurutakuru_73.set('fieldImages', {'ID': '', 'TI': '', 'menino': '', 'Latitude': '', 'Longitude': '', });
lyr_meninotakuru_74.set('fieldImages', {'ID': '', 'TI': '', 'menino': '', 'Latitude': '', 'Longitude': '', });
lyr_meninohtakuru_75.set('fieldImages', {'ID': '', 'TI': '', 'menino': '', 'Latitude': '', 'Longitude': '', });
lyr_grandechefedosbichoshwithewithe_76.set('fieldImages', {'ID': '', 'TI': '', 'grande_che': '', 'Latitude': '', 'Longitude': '', });
lyr_grandechefedosbichoswithe_77.set('fieldImages', {'ID': '', 'TI': '', 'grande_che': '', 'Latitude': '', 'Longitude': '', });
lyr_grandechefedosbichoshwithe_78.set('fieldImages', {'ID': '', 'TI': '', 'grande_che': '', 'Latitude': '', 'Longitude': '', });
lyr_florhww_79.set('fieldImages', {'ID': '', 'TI': '', 'flor': '', 'Latitude': '', 'Longitude': '', });
lyr_florw_80.set('fieldImages', {'ID': '', 'TI': '', 'flor': '', 'Latitude': '', 'Longitude': '', });
lyr_florhw_81.set('fieldImages', {'ID': '', 'TI': '', 'flor': '', 'Latitude': '', 'Longitude': '', });
lyr_filhotehkerkir_82.set('fieldImages', {'ID': '', 'TI': '', 'filhote': '', 'Latitude': '', 'Longitude': '', });
lyr_filhoteker_83.set('fieldImages', {'ID': '', 'TI': '', 'filhote': '', 'Latitude': '', 'Longitude': '', });
lyr_filhotehker_84.set('fieldImages', {'ID': '', 'TI': '', 'filhote': '', 'Latitude': '', 'Longitude': '', });
lyr_flautapukyry_85.set('fieldImages', {'ID': '', 'TI': '', 'flauta': '', 'Latitude': '', 'Longitude': '', });
lyr_flautahpukyry_86.set('fieldImages', {'ID': '', 'TI': '', 'flauta': '', 'Latitude': '', 'Longitude': '', });
lyr_coraokipahkipa_87.set('fieldImages', {'ID': '', 'TI': '', 'coração': '', 'Latitude': '', 'Longitude': '', });
lyr_coraokipa_88.set('fieldImages', {'ID': '', 'TI': '', 'coração': '', 'Latitude': '', 'Longitude': '', });
lyr_coraohkipa_89.set('fieldImages', {'ID': '', 'TI': '', 'coração': '', 'Latitude': '', 'Longitude': '', });
lyr_bomereka_90.set('fieldImages', {'ID': '', 'TI': '', 'bom': '', 'Latitude': '', 'Longitude': '', });
lyr_bomhereka_91.set('fieldImages', {'ID': '', 'TI': '', 'bom': '', 'Latitude': '', 'Longitude': '', });
lyr_abanoputa_92.set('fieldImages', {'ID': '', 'TI': '', 'abano': '', 'Latitude': '', 'Longitude': '', });
lyr_abanohputa_93.set('fieldImages', {'ID': '', 'TI': '', 'abano': '', 'Latitude': '', 'Longitude': '', });
lyr_xinganknrkner_94.set('fieldImages', {'ID': '', 'TI': '', 'xingané': '', 'Latitude': '', 'Longitude': '', });
lyr_xingankner_95.set('fieldImages', {'ID': '', 'TI': '', 'xingané': '', 'Latitude': '', 'Longitude': '', });
lyr_xinganknr_96.set('fieldImages', {'ID': '', 'TI': '', 'xingané': '', 'Latitude': '', 'Longitude': '', });
lyr_virpe_97.set('fieldImages', {'ID': '', 'TI': '', 'vir': '', 'Latitude': '', 'Longitude': '', });
lyr_virp_98.set('fieldImages', {'ID': '', 'TI': '', 'vir': '', 'Latitude': '', 'Longitude': '', });
lyr_vinhodeaatsaperik_99.set('fieldImages', {'ID': '', 'TI': '', 'vinho_de_a': '', 'Latitude': '', 'Longitude': '', });
lyr_vinhodeaatsaprik_100.set('fieldImages', {'ID': '', 'TI': '', 'vinho_de_a': '', 'Latitude': '', 'Longitude': '', });
lyr_tabatingakatsae_101.set('fieldImages', {'ID': '', 'TI': '', 'tabatinga': '', 'Latitude': '', 'Longitude': '', });
lyr_tabatingakatsa_102.set('fieldImages', {'ID': '', 'TI': '', 'tabatinga': '', 'Latitude': '', 'Longitude': '', });
lyr_seiotne_103.set('fieldImages', {'ID': '', 'TI': '', 'seio': '', 'Latitude': '', 'Longitude': '', });
lyr_seiotn_104.set('fieldImages', {'ID': '', 'TI': '', 'seio': '', 'Latitude': '', 'Longitude': '', });
lyr_saracurakutse_105.set('fieldImages', {'ID': '', 'TI': '', 'saracura': '', 'Latitude': '', 'Longitude': '', });
lyr_saracurakuts_106.set('fieldImages', {'ID': '', 'TI': '', 'saracura': '', 'Latitude': '', 'Longitude': '', });
lyr_pupunhakawe_107.set('fieldImages', {'ID': '', 'TI': '', 'pupunha': '', 'Latitude': '', 'Longitude': '', });
lyr_pupunhakaw_108.set('fieldImages', {'ID': '', 'TI': '', 'pupunha': '', 'Latitude': '', 'Longitude': '', });
lyr_poraqupequenoptsute_109.set('fieldImages', {'ID': '', 'TI': '', 'poraquê_p': '', 'Latitude': '', 'Longitude': '', });
lyr_poraqupequenoptsut_110.set('fieldImages', {'ID': '', 'TI': '', 'poraquê_p': '', 'Latitude': '', 'Longitude': '', });
lyr_poraqugrandettett_111.set('fieldImages', {'ID': '', 'TI': '', 'poraquê_g': '', 'Latitude': '', 'Longitude': '', });
lyr_poraqugrandette_112.set('fieldImages', {'ID': '', 'TI': '', 'poraquê_g': '', 'Latitude': '', 'Longitude': '', });
lyr_poraqugrandett_113.set('fieldImages', {'ID': '', 'TI': '', 'poraquê_g': '', 'Latitude': '', 'Longitude': '', });
lyr_pirapitingakapupe_114.set('fieldImages', {'ID': '', 'TI': '', 'pirapiting': '', 'Latitude': '', 'Longitude': '', });
lyr_pirapitingakapup_115.set('fieldImages', {'ID': '', 'TI': '', 'pirapiting': '', 'Latitude': '', 'Longitude': '', });
lyr_poplanodemandiocakumekata_116.set('fieldImages', {'ID': '', 'TI': '', 'pão_plano': '', 'Latitude': '', 'Longitude': '', });
lyr_poplanodemandiocakumkata_117.set('fieldImages', {'ID': '', 'TI': '', 'pão_plano': '', 'Latitude': '', 'Longitude': '', });
lyr_pacakajatekajat_118.set('fieldImages', {'ID': '', 'TI': '', 'paca': '', 'Latitude': '', 'Longitude': '', });
lyr_pacakajate_119.set('fieldImages', {'ID': '', 'TI': '', 'paca': '', 'Latitude': '', 'Longitude': '', });
lyr_pacakajat_120.set('fieldImages', {'ID': '', 'TI': '', 'paca': '', 'Latitude': '', 'Longitude': '', });
lyr_macacopretoitikre_121.set('fieldImages', {'ID': '', 'TI': '', 'macaco_pre': '', 'Latitude': '', 'Longitude': '', });
lyr_macacopretoitikr_122.set('fieldImages', {'ID': '', 'TI': '', 'macaco_pre': '', 'Latitude': '', 'Longitude': '', });
lyr_lontraapasakae_123.set('fieldImages', {'ID': '', 'TI': '', 'lontra': '', 'Latitude': '', 'Longitude': '', });
lyr_lontraapasaka_124.set('fieldImages', {'ID': '', 'TI': '', 'lontra': '', 'Latitude': '', 'Longitude': '', });
lyr_giapequenaatenu_125.set('fieldImages', {'ID': '', 'TI': '', 'gia_pequen': '', 'Latitude': '', 'Longitude': '', });
lyr_giapequenaatnu_126.set('fieldImages', {'ID': '', 'TI': '', 'gia_pequen': '', 'Latitude': '', 'Longitude': '', });
lyr_cutiarakptkkpetke_127.set('fieldImages', {'ID': '', 'TI': '', 'cutiara': '', 'Latitude': '', 'Longitude': '', });
lyr_cutiarakpetke_128.set('fieldImages', {'ID': '', 'TI': '', 'cutiara': '', 'Latitude': '', 'Longitude': '', });
lyr_cutiarakptk_129.set('fieldImages', {'ID': '', 'TI': '', 'cutiara': '', 'Latitude': '', 'Longitude': '', });
lyr_cutiakpetna_130.set('fieldImages', {'ID': '', 'TI': '', 'cutia': '', 'Latitude': '', 'Longitude': '', });
lyr_cutiakptnakpetna_131.set('fieldImages', {'ID': '', 'TI': '', 'cutia': '', 'Latitude': '', 'Longitude': '', });
lyr_cutiakptna_132.set('fieldImages', {'ID': '', 'TI': '', 'cutia': '', 'Latitude': '', 'Longitude': '', });
lyr_caquinhoptetptt_133.set('fieldImages', {'ID': '', 'TI': '', 'caquinho': '', 'Latitude': '', 'Longitude': '', });
lyr_caquinhoptet_134.set('fieldImages', {'ID': '', 'TI': '', 'caquinho': '', 'Latitude': '', 'Longitude': '', });
lyr_caquinhoptt_135.set('fieldImages', {'ID': '', 'TI': '', 'caquinho': '', 'Latitude': '', 'Longitude': '', });
lyr_caiararakatkaet_136.set('fieldImages', {'ID': '', 'TI': '', 'cai_a_rara': '', 'Latitude': '', 'Longitude': '', });
lyr_caiararakaet_137.set('fieldImages', {'ID': '', 'TI': '', 'cai_a_rara': '', 'Latitude': '', 'Longitude': '', });
lyr_caiararakat_138.set('fieldImages', {'ID': '', 'TI': '', 'cai_a_rara': '', 'Latitude': '', 'Longitude': '', });
lyr_cabasnesn_139.set('fieldImages', {'ID': '', 'TI': '', 'caba': '', 'Latitude': '', 'Longitude': '', });
lyr_cabasne_140.set('fieldImages', {'ID': '', 'TI': '', 'caba': '', 'Latitude': '', 'Longitude': '', });
lyr_cabasn_141.set('fieldImages', {'ID': '', 'TI': '', 'caba': '', 'Latitude': '', 'Longitude': '', });
lyr_bicodoseiotenk_142.set('fieldImages', {'ID': '', 'TI': '', 'bico_do_se': '', 'Latitude': '', 'Longitude': '', });
lyr_bicodoseiotnk_143.set('fieldImages', {'ID': '', 'TI': '', 'bico_do_se': '', 'Latitude': '', 'Longitude': '', });
lyr_bemtevieptikii_144.set('fieldImages', {'ID': '', 'TI': '', 'bem_te_vi': '', 'Latitude': '', 'Longitude': '', });
lyr_bemteviptk_145.set('fieldImages', {'ID': '', 'TI': '', 'bem_te_vi': '', 'Latitude': '', 'Longitude': '', });
lyr_assassinokukner_146.set('fieldImages', {'ID': '', 'TI': '', 'assassino': '', 'Latitude': '', 'Longitude': '', });
lyr_assassinokukanr_147.set('fieldImages', {'ID': '', 'TI': '', 'assassino': '', 'Latitude': '', 'Longitude': '', });
lyr_ariranhanen_148.set('fieldImages', {'ID': '', 'TI': '', 'ariranha': '', 'Latitude': '', 'Longitude': '', });
lyr_ariranhaen_149.set('fieldImages', {'ID': '', 'TI': '', 'ariranha': '', 'Latitude': '', 'Longitude': '', });
lyr_ariranhan_150.set('fieldImages', {'ID': '', 'TI': '', 'ariranha': '', 'Latitude': '', 'Longitude': '', });
lyr_aatsapktsapek_151.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'açaí': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_aatsapek_152.set('fieldImages', {'ID': '', 'TI': '', 'açaí': '', 'Latitude': '', 'Longitude': '', });
lyr_aatsapk_153.set('fieldImages', {'ID': '', 'TI': '', 'açaí': '', 'Latitude': '', 'Longitude': '', });
lyr_TIsApurin_154.set('fieldImages', {'nombre': 'TextEdit', });
lyr_Presenadeescolas_155.set('fieldImages', {'NM_ESCOLA': 'TextEdit', 'LATDEGDEC': 'TextEdit', 'LONGDEGDEC': 'TextEdit', });
lyr_ComunidadesApurin_156.set('fieldImages', {'NOME_': 'TextEdit', 'LATDEGDEC': 'TextEdit', 'LONGDEGDEC': 'TextEdit', });
lyr_2020_1.set('fieldLabels', {});
lyr_2018_2.set('fieldLabels', {});
lyr_2019_3.set('fieldLabels', {});
lyr_2017_4.set('fieldLabels', {});
lyr_2016_5.set('fieldLabels', {});
lyr_urucumapkr_6.set('fieldLabels', {});
lyr_urucumpkr_7.set('fieldLabels', {});
lyr_teradosaasarasarasara_8.set('fieldLabels', {});
lyr_teradosarasara_9.set('fieldLabels', {});
lyr_teradosaasara_10.set('fieldLabels', {});
lyr_tamandubandeiraexuwaexiwa_11.set('fieldLabels', {});
lyr_tamandubandeiraexiwaixiwa_12.set('fieldLabels', {});
lyr_tamandubandeiraixuwaixiwa_13.set('fieldLabels', {});
lyr_tamandubandeiraexuwa_14.set('fieldLabels', {});
lyr_tamandubandeiraixiwa_15.set('fieldLabels', {});
lyr_tamandubandeiraixuwa_16.set('fieldLabels', {});
lyr_poraqupetsty_17.set('fieldLabels', {});
lyr_poraquptsuty_18.set('fieldLabels', {});
lyr_mutumirkairka_19.set('fieldLabels', {});
lyr_mutumirka_20.set('fieldLabels', {});
lyr_mutumirka_21.set('fieldLabels', {});
lyr_jacarkaikyri_22.set('fieldLabels', {});
lyr_jacarkaiukyri_23.set('fieldLabels', {});
lyr_guaparaparapara_24.set('fieldLabels', {});
lyr_guaparapara_25.set('fieldLabels', {});
lyr_guapara_26.set('fieldLabels', {});
lyr_guapara_27.set('fieldLabels', {});
lyr_guapura_28.set('fieldLabels', {});
lyr_guapara_29.set('fieldLabels', {});
lyr_urubumajulimajuri_30.set('fieldLabels', {});
lyr_urubumajuli_31.set('fieldLabels', {});
lyr_urubumajuri_32.set('fieldLabels', {});
lyr_surucucukasululkasuui_33.set('fieldLabels', {});
lyr_surucucukasulul_34.set('fieldLabels', {});
lyr_surucucukasuui_35.set('fieldLabels', {});
lyr_serbomalekal_36.set('fieldLabels', {});
lyr_serbomaeka_37.set('fieldLabels', {});
lyr_queixadairalirar_38.set('fieldLabels', {});
lyr_queixadairal_39.set('fieldLabels', {});
lyr_queixadairar_40.set('fieldLabels', {});
lyr_pretopumamalipumamari_41.set('fieldLabels', {});
lyr_pretopumamali_42.set('fieldLabels', {});
lyr_pretopumamari_43.set('fieldLabels', {});
lyr_jenipapoymamal_44.set('fieldLabels', {});
lyr_jenipapoymama_45.set('fieldLabels', {});
lyr_igarapkawal_46.set('fieldLabels', {});
lyr_igarapkawa_47.set('fieldLabels', {});
lyr_flechaprontaparaserusadakatstal_48.set('fieldLabels', {});
lyr_flechaprontaparaserusadakatsta_49.set('fieldLabels', {});
lyr_cigarraktuiktuli_50.set('fieldLabels', {});
lyr_cigarraktuli_51.set('fieldLabels', {});
lyr_cigarraktui_52.set('fieldLabels', {});
lyr_cachorroanpnali_53.set('fieldLabels', {});
lyr_cachorroanpnai_54.set('fieldLabels', {});
lyr_2PLhthethe_55.set('fieldLabels', {});
lyr_2PLthe_56.set('fieldLabels', {});
lyr_2PLhthe_57.set('fieldLabels', {});
lyr_umtyhty_58.set('fieldLabels', {});
lyr_umty_59.set('fieldLabels', {});
lyr_umhty_60.set('fieldLabels', {});
lyr_sexoimata_61.set('fieldLabels', {});
lyr_sexohimata_62.set('fieldLabels', {});
lyr_sapocaanaruawu_63.set('fieldLabels', {});
lyr_sapocaanaruhawu_64.set('fieldLabels', {});
lyr_sangueeka_65.set('fieldLabels', {});
lyr_sangueheka_66.set('fieldLabels', {});
lyr_piranhahmama_67.set('fieldLabels', {});
lyr_piranhama_68.set('fieldLabels', {});
lyr_piranhahma_69.set('fieldLabels', {});
lyr_onahkitikiti_70.set('fieldLabels', {});
lyr_onakiti_71.set('fieldLabels', {});
lyr_onahkiti_72.set('fieldLabels', {});
lyr_meninohtakurutakuru_73.set('fieldLabels', {});
lyr_meninotakuru_74.set('fieldLabels', {});
lyr_meninohtakuru_75.set('fieldLabels', {});
lyr_grandechefedosbichoshwithewithe_76.set('fieldLabels', {});
lyr_grandechefedosbichoswithe_77.set('fieldLabels', {});
lyr_grandechefedosbichoshwithe_78.set('fieldLabels', {});
lyr_florhww_79.set('fieldLabels', {});
lyr_florw_80.set('fieldLabels', {});
lyr_florhw_81.set('fieldLabels', {});
lyr_filhotehkerkir_82.set('fieldLabels', {});
lyr_filhoteker_83.set('fieldLabels', {});
lyr_filhotehker_84.set('fieldLabels', {});
lyr_flautapukyry_85.set('fieldLabels', {});
lyr_flautahpukyry_86.set('fieldLabels', {});
lyr_coraokipahkipa_87.set('fieldLabels', {});
lyr_coraokipa_88.set('fieldLabels', {});
lyr_coraohkipa_89.set('fieldLabels', {});
lyr_bomereka_90.set('fieldLabels', {});
lyr_bomhereka_91.set('fieldLabels', {});
lyr_abanoputa_92.set('fieldLabels', {});
lyr_abanohputa_93.set('fieldLabels', {});
lyr_xinganknrkner_94.set('fieldLabels', {});
lyr_xingankner_95.set('fieldLabels', {});
lyr_xinganknr_96.set('fieldLabels', {});
lyr_virpe_97.set('fieldLabels', {});
lyr_virp_98.set('fieldLabels', {});
lyr_vinhodeaatsaperik_99.set('fieldLabels', {});
lyr_vinhodeaatsaprik_100.set('fieldLabels', {});
lyr_tabatingakatsae_101.set('fieldLabels', {});
lyr_tabatingakatsa_102.set('fieldLabels', {});
lyr_seiotne_103.set('fieldLabels', {});
lyr_seiotn_104.set('fieldLabels', {});
lyr_saracurakutse_105.set('fieldLabels', {});
lyr_saracurakuts_106.set('fieldLabels', {});
lyr_pupunhakawe_107.set('fieldLabels', {});
lyr_pupunhakaw_108.set('fieldLabels', {});
lyr_poraqupequenoptsute_109.set('fieldLabels', {});
lyr_poraqupequenoptsut_110.set('fieldLabels', {});
lyr_poraqugrandettett_111.set('fieldLabels', {});
lyr_poraqugrandette_112.set('fieldLabels', {});
lyr_poraqugrandett_113.set('fieldLabels', {});
lyr_pirapitingakapupe_114.set('fieldLabels', {});
lyr_pirapitingakapup_115.set('fieldLabels', {});
lyr_poplanodemandiocakumekata_116.set('fieldLabels', {});
lyr_poplanodemandiocakumkata_117.set('fieldLabels', {});
lyr_pacakajatekajat_118.set('fieldLabels', {});
lyr_pacakajate_119.set('fieldLabels', {});
lyr_pacakajat_120.set('fieldLabels', {});
lyr_macacopretoitikre_121.set('fieldLabels', {});
lyr_macacopretoitikr_122.set('fieldLabels', {});
lyr_lontraapasakae_123.set('fieldLabels', {});
lyr_lontraapasaka_124.set('fieldLabels', {});
lyr_giapequenaatenu_125.set('fieldLabels', {});
lyr_giapequenaatnu_126.set('fieldLabels', {});
lyr_cutiarakptkkpetke_127.set('fieldLabels', {});
lyr_cutiarakpetke_128.set('fieldLabels', {});
lyr_cutiarakptk_129.set('fieldLabels', {});
lyr_cutiakpetna_130.set('fieldLabels', {});
lyr_cutiakptnakpetna_131.set('fieldLabels', {});
lyr_cutiakptna_132.set('fieldLabels', {});
lyr_caquinhoptetptt_133.set('fieldLabels', {});
lyr_caquinhoptet_134.set('fieldLabels', {});
lyr_caquinhoptt_135.set('fieldLabels', {});
lyr_caiararakatkaet_136.set('fieldLabels', {});
lyr_caiararakaet_137.set('fieldLabels', {});
lyr_caiararakat_138.set('fieldLabels', {});
lyr_cabasnesn_139.set('fieldLabels', {});
lyr_cabasne_140.set('fieldLabels', {});
lyr_cabasn_141.set('fieldLabels', {});
lyr_bicodoseiotenk_142.set('fieldLabels', {});
lyr_bicodoseiotnk_143.set('fieldLabels', {});
lyr_bemtevieptikii_144.set('fieldLabels', {});
lyr_bemteviptk_145.set('fieldLabels', {});
lyr_assassinokukner_146.set('fieldLabels', {});
lyr_assassinokukanr_147.set('fieldLabels', {});
lyr_ariranhanen_148.set('fieldLabels', {});
lyr_ariranhaen_149.set('fieldLabels', {});
lyr_ariranhan_150.set('fieldLabels', {});
lyr_aatsapktsapek_151.set('fieldLabels', {});
lyr_aatsapek_152.set('fieldLabels', {});
lyr_aatsapk_153.set('fieldLabels', {});
lyr_TIsApurin_154.set('fieldLabels', {'nombre': 'no label', });
lyr_Presenadeescolas_155.set('fieldLabels', {'NM_ESCOLA': 'no label', 'LATDEGDEC': 'no label', 'LONGDEGDEC': 'no label', });
lyr_ComunidadesApurin_156.set('fieldLabels', {'NOME_': 'no label', 'LATDEGDEC': 'no label', 'LONGDEGDEC': 'no label', });
lyr_ComunidadesApurin_156.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});