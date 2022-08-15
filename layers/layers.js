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
var format_urucumpikiri_6 = new ol.format.GeoJSON();
var features_urucumpikiri_6 = format_urucumpikiri_6.readFeatures(json_urucumpikiri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urucumpikiri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urucumpikiri_6.addFeatures(features_urucumpikiri_6);
var lyr_urucumpikiri_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urucumpikiri_6, 
                style: style_urucumpikiri_6,
                interactive: true,
                title: '<img src="styles/legend/urucumpikiri_6.png" /> (urucum) ãpikiri'
            });
var format_urucumapikiri_7 = new ol.format.GeoJSON();
var features_urucumapikiri_7 = format_urucumapikiri_7.readFeatures(json_urucumapikiri_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urucumapikiri_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urucumapikiri_7.addFeatures(features_urucumapikiri_7);
var lyr_urucumapikiri_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urucumapikiri_7, 
                style: style_urucumapikiri_7,
                interactive: true,
                title: '<img src="styles/legend/urucumapikiri_7.png" /> (urucum) apikiri'
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
                title: '<img src="styles/legend/teradosaasarasarasara_8.png" /> (terçado) saasara/sarasara'
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
                title: '<img src="styles/legend/teradosarasara_9.png" /> (terçado) sarasara'
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
                title: '<img src="styles/legend/teradosaasara_10.png" /> (terçado) saasara'
            });
var format_tamandubandeiraixuwaixiwa_11 = new ol.format.GeoJSON();
var features_tamandubandeiraixuwaixiwa_11 = format_tamandubandeiraixuwaixiwa_11.readFeatures(json_tamandubandeiraixuwaixiwa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraixuwaixiwa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraixuwaixiwa_11.addFeatures(features_tamandubandeiraixuwaixiwa_11);
var lyr_tamandubandeiraixuwaixiwa_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraixuwaixiwa_11, 
                style: style_tamandubandeiraixuwaixiwa_11,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraixuwaixiwa_11.png" /> (tamanduá bandeira) ixuwa/ixiwa'
            });
var format_tamandubandeiraexuwaexiwa_12 = new ol.format.GeoJSON();
var features_tamandubandeiraexuwaexiwa_12 = format_tamandubandeiraexuwaexiwa_12.readFeatures(json_tamandubandeiraexuwaexiwa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraexuwaexiwa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraexuwaexiwa_12.addFeatures(features_tamandubandeiraexuwaexiwa_12);
var lyr_tamandubandeiraexuwaexiwa_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraexuwaexiwa_12, 
                style: style_tamandubandeiraexuwaexiwa_12,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraexuwaexiwa_12.png" /> (tamanduá bandeira) exuwa/exiwa'
            });
var format_tamandubandeiraixuwa_13 = new ol.format.GeoJSON();
var features_tamandubandeiraixuwa_13 = format_tamandubandeiraixuwa_13.readFeatures(json_tamandubandeiraixuwa_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraixuwa_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraixuwa_13.addFeatures(features_tamandubandeiraixuwa_13);
var lyr_tamandubandeiraixuwa_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraixuwa_13, 
                style: style_tamandubandeiraixuwa_13,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraixuwa_13.png" /> (tamanduá bandeira) ixuwa'
            });
var format_tamandubandeiraixiwa_14 = new ol.format.GeoJSON();
var features_tamandubandeiraixiwa_14 = format_tamandubandeiraixiwa_14.readFeatures(json_tamandubandeiraixiwa_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraixiwa_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraixiwa_14.addFeatures(features_tamandubandeiraixiwa_14);
var lyr_tamandubandeiraixiwa_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraixiwa_14, 
                style: style_tamandubandeiraixiwa_14,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraixiwa_14.png" /> (tamanduá bandeira) ixiwa'
            });
var format_tamandubandeiraexuwa_15 = new ol.format.GeoJSON();
var features_tamandubandeiraexuwa_15 = format_tamandubandeiraexuwa_15.readFeatures(json_tamandubandeiraexuwa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraexuwa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraexuwa_15.addFeatures(features_tamandubandeiraexuwa_15);
var lyr_tamandubandeiraexuwa_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraexuwa_15, 
                style: style_tamandubandeiraexuwa_15,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraexuwa_15.png" /> (tamanduá bandeira) exuwa'
            });
var format_tamandubandeiraexiwa_16 = new ol.format.GeoJSON();
var features_tamandubandeiraexiwa_16 = format_tamandubandeiraexiwa_16.readFeatures(json_tamandubandeiraexiwa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamandubandeiraexiwa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamandubandeiraexiwa_16.addFeatures(features_tamandubandeiraexiwa_16);
var lyr_tamandubandeiraexiwa_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamandubandeiraexiwa_16, 
                style: style_tamandubandeiraexiwa_16,
                interactive: true,
                title: '<img src="styles/legend/tamandubandeiraexiwa_16.png" /> (tamanduá bandeira) exiwa'
            });
var format_poraquptsuty_17 = new ol.format.GeoJSON();
var features_poraquptsuty_17 = format_poraquptsuty_17.readFeatures(json_poraquptsuty_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraquptsuty_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraquptsuty_17.addFeatures(features_poraquptsuty_17);
var lyr_poraquptsuty_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraquptsuty_17, 
                style: style_poraquptsuty_17,
                interactive: true,
                title: '<img src="styles/legend/poraquptsuty_17.png" /> (poraquê) pêtsuty'
            });
var format_poraqupetsty_18 = new ol.format.GeoJSON();
var features_poraqupetsty_18 = format_poraqupetsty_18.readFeatures(json_poraqupetsty_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraqupetsty_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraqupetsty_18.addFeatures(features_poraqupetsty_18);
var lyr_poraqupetsty_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraqupetsty_18, 
                style: style_poraqupetsty_18,
                interactive: true,
                title: '<img src="styles/legend/poraqupetsty_18.png" /> (poraquê) petsûty'
            });
var format_mutumireka_19 = new ol.format.GeoJSON();
var features_mutumireka_19 = format_mutumireka_19.readFeatures(json_mutumireka_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mutumireka_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mutumireka_19.addFeatures(features_mutumireka_19);
var lyr_mutumireka_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mutumireka_19, 
                style: style_mutumireka_19,
                interactive: true,
                title: '<img src="styles/legend/mutumireka_19.png" /> (mutum) ireka'
            });
var format_mutumiraka_20 = new ol.format.GeoJSON();
var features_mutumiraka_20 = format_mutumiraka_20.readFeatures(json_mutumiraka_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mutumiraka_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mutumiraka_20.addFeatures(features_mutumiraka_20);
var lyr_mutumiraka_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mutumiraka_20, 
                style: style_mutumiraka_20,
                interactive: true,
                title: '<img src="styles/legend/mutumiraka_20.png" /> (mutum) iraka'
            });
var format_jacarkaiukyri_21 = new ol.format.GeoJSON();
var features_jacarkaiukyri_21 = format_jacarkaiukyri_21.readFeatures(json_jacarkaiukyri_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jacarkaiukyri_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jacarkaiukyri_21.addFeatures(features_jacarkaiukyri_21);
var lyr_jacarkaiukyri_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jacarkaiukyri_21, 
                style: style_jacarkaiukyri_21,
                interactive: true,
                title: '<img src="styles/legend/jacarkaiukyri_21.png" /> (jacaré) kaiukyri'
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
                title: '<img src="styles/legend/jacarkaikyri_22.png" /> (jacaré) kaikyri'
            });
var format_guaupara_23 = new ol.format.GeoJSON();
var features_guaupara_23 = format_guaupara_23.readFeatures(json_guaupara_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaupara_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaupara_23.addFeatures(features_guaupara_23);
var lyr_guaupara_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guaupara_23, 
                style: style_guaupara_23,
                interactive: true,
                title: '<img src="styles/legend/guaupara_23.png" /> (água) uparãa'
            });
var format_guaipura_24 = new ol.format.GeoJSON();
var features_guaipura_24 = format_guaipura_24.readFeatures(json_guaipura_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaipura_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaipura_24.addFeatures(features_guaipura_24);
var lyr_guaipura_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guaipura_24, 
                style: style_guaipura_24,
                interactive: true,
                title: '<img src="styles/legend/guaipura_24.png" /> (água) ipurãa'
            });
var format_guaiparaupara_25 = new ol.format.GeoJSON();
var features_guaiparaupara_25 = format_guaiparaupara_25.readFeatures(json_guaiparaupara_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaiparaupara_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaiparaupara_25.addFeatures(features_guaiparaupara_25);
var lyr_guaiparaupara_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guaiparaupara_25, 
                style: style_guaiparaupara_25,
                interactive: true,
                title: '<img src="styles/legend/guaiparaupara_25.png" /> (água) iparãa/uparãa'
            });
var format_guaipara_26 = new ol.format.GeoJSON();
var features_guaipara_26 = format_guaipara_26.readFeatures(json_guaipara_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaipara_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaipara_26.addFeatures(features_guaipara_26);
var lyr_guaipara_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guaipara_26, 
                style: style_guaipara_26,
                interactive: true,
                title: '<img src="styles/legend/guaipara_26.png" /> (água) iparãa'
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
                title: '<img src="styles/legend/guapara_27.png" /> (água) ãparãa'
            });
var format_urubumajuri_28 = new ol.format.GeoJSON();
var features_urubumajuri_28 = format_urubumajuri_28.readFeatures(json_urubumajuri_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urubumajuri_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urubumajuri_28.addFeatures(features_urubumajuri_28);
var lyr_urubumajuri_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urubumajuri_28, 
                style: style_urubumajuri_28,
                interactive: true,
                title: '<img src="styles/legend/urubumajuri_28.png" /> (urubu) majuri'
            });
var format_urubumajuli_29 = new ol.format.GeoJSON();
var features_urubumajuli_29 = format_urubumajuli_29.readFeatures(json_urubumajuli_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_urubumajuli_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urubumajuli_29.addFeatures(features_urubumajuli_29);
var lyr_urubumajuli_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_urubumajuli_29, 
                style: style_urubumajuli_29,
                interactive: true,
                title: '<img src="styles/legend/urubumajuli_29.png" /> (urubu) majuli'
            });
var format_surucucukasururi_30 = new ol.format.GeoJSON();
var features_surucucukasururi_30 = format_surucucukasururi_30.readFeatures(json_surucucukasururi_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surucucukasururi_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surucucukasururi_30.addFeatures(features_surucucukasururi_30);
var lyr_surucucukasururi_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_surucucukasururi_30, 
                style: style_surucucukasururi_30,
                interactive: true,
                title: '<img src="styles/legend/surucucukasururi_30.png" /> (surucucu) kasururi'
            });
var format_surucucukasululi_31 = new ol.format.GeoJSON();
var features_surucucukasululi_31 = format_surucucukasululi_31.readFeatures(json_surucucukasululi_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surucucukasululi_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surucucukasululi_31.addFeatures(features_surucucukasululi_31);
var lyr_surucucukasululi_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_surucucukasululi_31, 
                style: style_surucucukasululi_31,
                interactive: true,
                title: '<img src="styles/legend/surucucukasululi_31.png" /> (surucucu) kasululi'
            });
var format_serbomarekari_32 = new ol.format.GeoJSON();
var features_serbomarekari_32 = format_serbomarekari_32.readFeatures(json_serbomarekari_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_serbomarekari_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_serbomarekari_32.addFeatures(features_serbomarekari_32);
var lyr_serbomarekari_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_serbomarekari_32, 
                style: style_serbomarekari_32,
                interactive: true,
                title: '<img src="styles/legend/serbomarekari_32.png" /> (ser bom) arekari'
            });
var format_serbomalekali_33 = new ol.format.GeoJSON();
var features_serbomalekali_33 = format_serbomalekali_33.readFeatures(json_serbomalekali_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_serbomalekali_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_serbomalekali_33.addFeatures(features_serbomalekali_33);
var lyr_serbomalekali_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_serbomalekali_33, 
                style: style_serbomalekali_33,
                interactive: true,
                title: '<img src="styles/legend/serbomalekali_33.png" /> (ser bom) alekali'
            });
var format_queixadairari_34 = new ol.format.GeoJSON();
var features_queixadairari_34 = format_queixadairari_34.readFeatures(json_queixadairari_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_queixadairari_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_queixadairari_34.addFeatures(features_queixadairari_34);
var lyr_queixadairari_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_queixadairari_34, 
                style: style_queixadairari_34,
                interactive: true,
                title: '<img src="styles/legend/queixadairari_34.png" /> (queixada) irari'
            });
var format_queixadairali_35 = new ol.format.GeoJSON();
var features_queixadairali_35 = format_queixadairali_35.readFeatures(json_queixadairali_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_queixadairali_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_queixadairali_35.addFeatures(features_queixadairali_35);
var lyr_queixadairali_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_queixadairali_35, 
                style: style_queixadairali_35,
                interactive: true,
                title: '<img src="styles/legend/queixadairali_35.png" /> (queixada) irali'
            });
var format_pretopumamari_36 = new ol.format.GeoJSON();
var features_pretopumamari_36 = format_pretopumamari_36.readFeatures(json_pretopumamari_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pretopumamari_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pretopumamari_36.addFeatures(features_pretopumamari_36);
var lyr_pretopumamari_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pretopumamari_36, 
                style: style_pretopumamari_36,
                interactive: true,
                title: '<img src="styles/legend/pretopumamari_36.png" /> (preto) pumamari'
            });
var format_pretopumamali_37 = new ol.format.GeoJSON();
var features_pretopumamali_37 = format_pretopumamali_37.readFeatures(json_pretopumamali_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pretopumamali_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pretopumamali_37.addFeatures(features_pretopumamali_37);
var lyr_pretopumamali_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pretopumamali_37, 
                style: style_pretopumamali_37,
                interactive: true,
                title: '<img src="styles/legend/pretopumamali_37.png" /> (preto) pumamali'
            });
var format_jenipapoymamari_38 = new ol.format.GeoJSON();
var features_jenipapoymamari_38 = format_jenipapoymamari_38.readFeatures(json_jenipapoymamari_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jenipapoymamari_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jenipapoymamari_38.addFeatures(features_jenipapoymamari_38);
var lyr_jenipapoymamari_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jenipapoymamari_38, 
                style: style_jenipapoymamari_38,
                interactive: true,
                title: '<img src="styles/legend/jenipapoymamari_38.png" /> (jenipapo) ymamari'
            });
var format_jenipapoymamali_39 = new ol.format.GeoJSON();
var features_jenipapoymamali_39 = format_jenipapoymamali_39.readFeatures(json_jenipapoymamali_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jenipapoymamali_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jenipapoymamali_39.addFeatures(features_jenipapoymamali_39);
var lyr_jenipapoymamali_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jenipapoymamali_39, 
                style: style_jenipapoymamali_39,
                interactive: true,
                title: '<img src="styles/legend/jenipapoymamali_39.png" /> (jenipapo) ymamali'
            });
var format_iraramapaanari_40 = new ol.format.GeoJSON();
var features_iraramapaanari_40 = format_iraramapaanari_40.readFeatures(json_iraramapaanari_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iraramapaanari_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iraramapaanari_40.addFeatures(features_iraramapaanari_40);
var lyr_iraramapaanari_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iraramapaanari_40, 
                style: style_iraramapaanari_40,
                interactive: true,
                title: '<img src="styles/legend/iraramapaanari_40.png" /> (irara) mapaanari'
            });
var format_iraramapaanali_41 = new ol.format.GeoJSON();
var features_iraramapaanali_41 = format_iraramapaanali_41.readFeatures(json_iraramapaanali_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iraramapaanali_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iraramapaanali_41.addFeatures(features_iraramapaanali_41);
var lyr_iraramapaanali_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iraramapaanali_41, 
                style: style_iraramapaanali_41,
                interactive: true,
                title: '<img src="styles/legend/iraramapaanali_41.png" /> (irara) mapaanali'
            });
var format_igarapkawaari_42 = new ol.format.GeoJSON();
var features_igarapkawaari_42 = format_igarapkawaari_42.readFeatures(json_igarapkawaari_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_igarapkawaari_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_igarapkawaari_42.addFeatures(features_igarapkawaari_42);
var lyr_igarapkawaari_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_igarapkawaari_42, 
                style: style_igarapkawaari_42,
                interactive: true,
                title: '<img src="styles/legend/igarapkawaari_42.png" /> (igarapé) kawaari'
            });
var format_igarapkawaali_43 = new ol.format.GeoJSON();
var features_igarapkawaali_43 = format_igarapkawaali_43.readFeatures(json_igarapkawaali_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_igarapkawaali_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_igarapkawaali_43.addFeatures(features_igarapkawaali_43);
var lyr_igarapkawaali_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_igarapkawaali_43, 
                style: style_igarapkawaali_43,
                interactive: true,
                title: '<img src="styles/legend/igarapkawaali_43.png" /> (igarapé) kawaali'
            });
var format_flechaprontaparaserusadakatsutali_44 = new ol.format.GeoJSON();
var features_flechaprontaparaserusadakatsutali_44 = format_flechaprontaparaserusadakatsutali_44.readFeatures(json_flechaprontaparaserusadakatsutali_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flechaprontaparaserusadakatsutali_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flechaprontaparaserusadakatsutali_44.addFeatures(features_flechaprontaparaserusadakatsutali_44);
var lyr_flechaprontaparaserusadakatsutali_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flechaprontaparaserusadakatsutali_44, 
                style: style_flechaprontaparaserusadakatsutali_44,
                interactive: true,
                title: '<img src="styles/legend/flechaprontaparaserusadakatsutali_44.png" /> (flecha pronta para ser usada) katsutali'
            });
var format_flechaprontaparaserusadakatsitari_45 = new ol.format.GeoJSON();
var features_flechaprontaparaserusadakatsitari_45 = format_flechaprontaparaserusadakatsitari_45.readFeatures(json_flechaprontaparaserusadakatsitari_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flechaprontaparaserusadakatsitari_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flechaprontaparaserusadakatsitari_45.addFeatures(features_flechaprontaparaserusadakatsitari_45);
var lyr_flechaprontaparaserusadakatsitari_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flechaprontaparaserusadakatsitari_45, 
                style: style_flechaprontaparaserusadakatsitari_45,
                interactive: true,
                title: '<img src="styles/legend/flechaprontaparaserusadakatsitari_45.png" /> (flecha pronta para ser usada) katsitari'
            });
var format_cigarrakituri_46 = new ol.format.GeoJSON();
var features_cigarrakituri_46 = format_cigarrakituri_46.readFeatures(json_cigarrakituri_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cigarrakituri_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cigarrakituri_46.addFeatures(features_cigarrakituri_46);
var lyr_cigarrakituri_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cigarrakituri_46, 
                style: style_cigarrakituri_46,
                interactive: true,
                title: '<img src="styles/legend/cigarrakituri_46.png" /> (cigarra) kituri'
            });
var format_cigarrakituli_47 = new ol.format.GeoJSON();
var features_cigarrakituli_47 = format_cigarrakituli_47.readFeatures(json_cigarrakituli_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cigarrakituli_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cigarrakituli_47.addFeatures(features_cigarrakituli_47);
var lyr_cigarrakituli_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cigarrakituli_47, 
                style: style_cigarrakituli_47,
                interactive: true,
                title: '<img src="styles/legend/cigarrakituli_47.png" /> (cigarra) kituli'
            });
var format_cachorroanapanari_48 = new ol.format.GeoJSON();
var features_cachorroanapanari_48 = format_cachorroanapanari_48.readFeatures(json_cachorroanapanari_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cachorroanapanari_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cachorroanapanari_48.addFeatures(features_cachorroanapanari_48);
var lyr_cachorroanapanari_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cachorroanapanari_48, 
                style: style_cachorroanapanari_48,
                interactive: true,
                title: '<img src="styles/legend/cachorroanapanari_48.png" /> (cachorro) anapanari'
            });
var format_cachorroanapanali_49 = new ol.format.GeoJSON();
var features_cachorroanapanali_49 = format_cachorroanapanali_49.readFeatures(json_cachorroanapanali_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cachorroanapanali_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cachorroanapanali_49.addFeatures(features_cachorroanapanali_49);
var lyr_cachorroanapanali_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cachorroanapanali_49, 
                style: style_cachorroanapanali_49,
                interactive: true,
                title: '<img src="styles/legend/cachorroanapanali_49.png" /> (cachorro) anapanali'
            });
var format_umhtyty_50 = new ol.format.GeoJSON();
var features_umhtyty_50 = format_umhtyty_50.readFeatures(json_umhtyty_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umhtyty_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_umhtyty_50.addFeatures(features_umhtyty_50);
var lyr_umhtyty_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_umhtyty_50, 
                style: style_umhtyty_50,
                interactive: true,
                title: '<img src="styles/legend/umhtyty_50.png" /> (um) hãty/ãty'
            });
var format_umhty_51 = new ol.format.GeoJSON();
var features_umhty_51 = format_umhty_51.readFeatures(json_umhty_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umhty_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_umhty_51.addFeatures(features_umhty_51);
var lyr_umhty_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_umhty_51, 
                style: style_umhty_51,
                interactive: true,
                title: '<img src="styles/legend/umhty_51.png" /> (um) hãty'
            });
var format_umty_52 = new ol.format.GeoJSON();
var features_umty_52 = format_umty_52.readFeatures(json_umty_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umty_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_umty_52.addFeatures(features_umty_52);
var lyr_umty_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_umty_52, 
                style: style_umty_52,
                interactive: true,
                title: '<img src="styles/legend/umty_52.png" /> (um) ãty'
            });
var format_sexoimata_53 = new ol.format.GeoJSON();
var features_sexoimata_53 = format_sexoimata_53.readFeatures(json_sexoimata_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sexoimata_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sexoimata_53.addFeatures(features_sexoimata_53);
var lyr_sexoimata_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sexoimata_53, 
                style: style_sexoimata_53,
                interactive: true,
                title: '<img src="styles/legend/sexoimata_53.png" /> (sexo) imata'
            });
var format_sexohimata_54 = new ol.format.GeoJSON();
var features_sexohimata_54 = format_sexohimata_54.readFeatures(json_sexohimata_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sexohimata_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sexohimata_54.addFeatures(features_sexohimata_54);
var lyr_sexohimata_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sexohimata_54, 
                style: style_sexohimata_54,
                interactive: true,
                title: '<img src="styles/legend/sexohimata_54.png" /> (sexo) himata'
            });
var format_sapocaanaruhawiru_55 = new ol.format.GeoJSON();
var features_sapocaanaruhawiru_55 = format_sapocaanaruhawiru_55.readFeatures(json_sapocaanaruhawiru_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sapocaanaruhawiru_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sapocaanaruhawiru_55.addFeatures(features_sapocaanaruhawiru_55);
var lyr_sapocaanaruhawiru_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sapocaanaruhawiru_55, 
                style: style_sapocaanaruhawiru_55,
                interactive: true,
                title: '<img src="styles/legend/sapocaanaruhawiru_55.png" /> (sapo caanaru) hawiru'
            });
var format_sapocaanaruawiru_56 = new ol.format.GeoJSON();
var features_sapocaanaruawiru_56 = format_sapocaanaruawiru_56.readFeatures(json_sapocaanaruawiru_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sapocaanaruawiru_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sapocaanaruawiru_56.addFeatures(features_sapocaanaruawiru_56);
var lyr_sapocaanaruawiru_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sapocaanaruawiru_56, 
                style: style_sapocaanaruawiru_56,
                interactive: true,
                title: '<img src="styles/legend/sapocaanaruawiru_56.png" /> (sapo caanaru) awiru'
            });
var format_sanguehereka_57 = new ol.format.GeoJSON();
var features_sanguehereka_57 = format_sanguehereka_57.readFeatures(json_sanguehereka_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sanguehereka_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sanguehereka_57.addFeatures(features_sanguehereka_57);
var lyr_sanguehereka_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sanguehereka_57, 
                style: style_sanguehereka_57,
                interactive: true,
                title: '<img src="styles/legend/sanguehereka_57.png" /> (sangue) hereka'
            });
var format_sangueereka_58 = new ol.format.GeoJSON();
var features_sangueereka_58 = format_sangueereka_58.readFeatures(json_sangueereka_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sangueereka_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sangueereka_58.addFeatures(features_sangueereka_58);
var lyr_sangueereka_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sangueereka_58, 
                style: style_sangueereka_58,
                interactive: true,
                title: '<img src="styles/legend/sangueereka_58.png" /> (sangue) ereka'
            });
var format_piranhauma_59 = new ol.format.GeoJSON();
var features_piranhauma_59 = format_piranhauma_59.readFeatures(json_piranhauma_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piranhauma_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piranhauma_59.addFeatures(features_piranhauma_59);
var lyr_piranhauma_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piranhauma_59, 
                style: style_piranhauma_59,
                interactive: true,
                title: '<img src="styles/legend/piranhauma_59.png" /> (piranha) uma'
            });
var format_piranhahumauma_60 = new ol.format.GeoJSON();
var features_piranhahumauma_60 = format_piranhahumauma_60.readFeatures(json_piranhahumauma_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piranhahumauma_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piranhahumauma_60.addFeatures(features_piranhahumauma_60);
var lyr_piranhahumauma_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piranhahumauma_60, 
                style: style_piranhahumauma_60,
                interactive: true,
                title: '<img src="styles/legend/piranhahumauma_60.png" /> (piranha) huma/uma'
            });
var format_piranhahuma_61 = new ol.format.GeoJSON();
var features_piranhahuma_61 = format_piranhahuma_61.readFeatures(json_piranhahuma_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piranhahuma_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piranhahuma_61.addFeatures(features_piranhahuma_61);
var lyr_piranhahuma_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piranhahuma_61, 
                style: style_piranhahuma_61,
                interactive: true,
                title: '<img src="styles/legend/piranhahuma_61.png" /> (piranha) huma'
            });
var format_onahkitikiti_62 = new ol.format.GeoJSON();
var features_onahkitikiti_62 = format_onahkitikiti_62.readFeatures(json_onahkitikiti_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onahkitikiti_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onahkitikiti_62.addFeatures(features_onahkitikiti_62);
var lyr_onahkitikiti_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_onahkitikiti_62, 
                style: style_onahkitikiti_62,
                interactive: true,
                title: '<img src="styles/legend/onahkitikiti_62.png" /> (onça) hãkiti/ãkiti'
            });
var format_onahkiti_63 = new ol.format.GeoJSON();
var features_onahkiti_63 = format_onahkiti_63.readFeatures(json_onahkiti_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onahkiti_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onahkiti_63.addFeatures(features_onahkiti_63);
var lyr_onahkiti_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_onahkiti_63, 
                style: style_onahkiti_63,
                interactive: true,
                title: '<img src="styles/legend/onahkiti_63.png" /> (onça) hãkiti'
            });
var format_onakiti_64 = new ol.format.GeoJSON();
var features_onakiti_64 = format_onakiti_64.readFeatures(json_onakiti_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onakiti_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onakiti_64.addFeatures(features_onakiti_64);
var lyr_onakiti_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_onakiti_64, 
                style: style_onakiti_64,
                interactive: true,
                title: '<img src="styles/legend/onakiti_64.png" /> (onça) ãkiti'
            });
var format_meninohatakuruatakuru_65 = new ol.format.GeoJSON();
var features_meninohatakuruatakuru_65 = format_meninohatakuruatakuru_65.readFeatures(json_meninohatakuruatakuru_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meninohatakuruatakuru_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meninohatakuruatakuru_65.addFeatures(features_meninohatakuruatakuru_65);
var lyr_meninohatakuruatakuru_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_meninohatakuruatakuru_65, 
                style: style_meninohatakuruatakuru_65,
                interactive: true,
                title: '<img src="styles/legend/meninohatakuruatakuru_65.png" /> (menino) hatakuru/atakuru'
            });
var format_meninohatakuru_66 = new ol.format.GeoJSON();
var features_meninohatakuru_66 = format_meninohatakuru_66.readFeatures(json_meninohatakuru_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meninohatakuru_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meninohatakuru_66.addFeatures(features_meninohatakuru_66);
var lyr_meninohatakuru_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_meninohatakuru_66, 
                style: style_meninohatakuru_66,
                interactive: true,
                title: '<img src="styles/legend/meninohatakuru_66.png" /> (menino) hatakuru'
            });
var format_meninoatakuru_67 = new ol.format.GeoJSON();
var features_meninoatakuru_67 = format_meninoatakuru_67.readFeatures(json_meninoatakuru_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meninoatakuru_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meninoatakuru_67.addFeatures(features_meninoatakuru_67);
var lyr_meninoatakuru_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_meninoatakuru_67, 
                style: style_meninoatakuru_67,
                interactive: true,
                title: '<img src="styles/legend/meninoatakuru_67.png" /> (menino) atakuru'
            });
var format_grandechefedosbichoshawitheawithe_68 = new ol.format.GeoJSON();
var features_grandechefedosbichoshawitheawithe_68 = format_grandechefedosbichoshawitheawithe_68.readFeatures(json_grandechefedosbichoshawitheawithe_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grandechefedosbichoshawitheawithe_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grandechefedosbichoshawitheawithe_68.addFeatures(features_grandechefedosbichoshawitheawithe_68);
var lyr_grandechefedosbichoshawitheawithe_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grandechefedosbichoshawitheawithe_68, 
                style: style_grandechefedosbichoshawitheawithe_68,
                interactive: true,
                title: '<img src="styles/legend/grandechefedosbichoshawitheawithe_68.png" /> (grande/chefe dos bichos) hawithe/awithe'
            });
var format_grandechefedosbichoshawithe_69 = new ol.format.GeoJSON();
var features_grandechefedosbichoshawithe_69 = format_grandechefedosbichoshawithe_69.readFeatures(json_grandechefedosbichoshawithe_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grandechefedosbichoshawithe_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grandechefedosbichoshawithe_69.addFeatures(features_grandechefedosbichoshawithe_69);
var lyr_grandechefedosbichoshawithe_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grandechefedosbichoshawithe_69, 
                style: style_grandechefedosbichoshawithe_69,
                interactive: true,
                title: '<img src="styles/legend/grandechefedosbichoshawithe_69.png" /> (grande/chefe dos bichos) hawithe'
            });
var format_grandechefedosbichosawithe_70 = new ol.format.GeoJSON();
var features_grandechefedosbichosawithe_70 = format_grandechefedosbichosawithe_70.readFeatures(json_grandechefedosbichosawithe_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grandechefedosbichosawithe_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grandechefedosbichosawithe_70.addFeatures(features_grandechefedosbichosawithe_70);
var lyr_grandechefedosbichosawithe_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grandechefedosbichosawithe_70, 
                style: style_grandechefedosbichosawithe_70,
                interactive: true,
                title: '<img src="styles/legend/grandechefedosbichosawithe_70.png" /> (grande/chefe dos bichos) awithe'
            });
var format_floriwi_71 = new ol.format.GeoJSON();
var features_floriwi_71 = format_floriwi_71.readFeatures(json_floriwi_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floriwi_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_floriwi_71.addFeatures(features_floriwi_71);
var lyr_floriwi_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_floriwi_71, 
                style: style_floriwi_71,
                interactive: true,
                title: '<img src="styles/legend/floriwi_71.png" /> (flor) iwi'
            });
var format_florhiwi_72 = new ol.format.GeoJSON();
var features_florhiwi_72 = format_florhiwi_72.readFeatures(json_florhiwi_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_florhiwi_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_florhiwi_72.addFeatures(features_florhiwi_72);
var lyr_florhiwi_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_florhiwi_72, 
                style: style_florhiwi_72,
                interactive: true,
                title: '<img src="styles/legend/florhiwi_72.png" /> (flor) hiwi'
            });
var format_flautahpukyry_73 = new ol.format.GeoJSON();
var features_flautahpukyry_73 = format_flautahpukyry_73.readFeatures(json_flautahpukyry_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flautahpukyry_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flautahpukyry_73.addFeatures(features_flautahpukyry_73);
var lyr_flautahpukyry_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flautahpukyry_73, 
                style: style_flautahpukyry_73,
                interactive: true,
                title: '<img src="styles/legend/flautahpukyry_73.png" /> (flauta) hãpukyry'
            });
var format_flautapukyry_74 = new ol.format.GeoJSON();
var features_flautapukyry_74 = format_flautapukyry_74.readFeatures(json_flautapukyry_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flautapukyry_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flautapukyry_74.addFeatures(features_flautapukyry_74);
var lyr_flautapukyry_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flautapukyry_74, 
                style: style_flautapukyry_74,
                interactive: true,
                title: '<img src="styles/legend/flautapukyry_74.png" /> (flauta) ãpukyry'
            });
var format_coraohkipa_75 = new ol.format.GeoJSON();
var features_coraohkipa_75 = format_coraohkipa_75.readFeatures(json_coraohkipa_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coraohkipa_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coraohkipa_75.addFeatures(features_coraohkipa_75);
var lyr_coraohkipa_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coraohkipa_75, 
                style: style_coraohkipa_75,
                interactive: true,
                title: '<img src="styles/legend/coraohkipa_75.png" /> (coração) hãkipa'
            });
var format_coraokipa_76 = new ol.format.GeoJSON();
var features_coraokipa_76 = format_coraokipa_76.readFeatures(json_coraokipa_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coraokipa_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coraokipa_76.addFeatures(features_coraokipa_76);
var lyr_coraokipa_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coraokipa_76, 
                style: style_coraokipa_76,
                interactive: true,
                title: '<img src="styles/legend/coraokipa_76.png" /> (coração) ãkipa'
            });
var format_bomhereka_77 = new ol.format.GeoJSON();
var features_bomhereka_77 = format_bomhereka_77.readFeatures(json_bomhereka_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bomhereka_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bomhereka_77.addFeatures(features_bomhereka_77);
var lyr_bomhereka_77 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bomhereka_77, 
                style: style_bomhereka_77,
                interactive: true,
                title: '<img src="styles/legend/bomhereka_77.png" /> (bom) hereka'
            });
var format_bomereka_78 = new ol.format.GeoJSON();
var features_bomereka_78 = format_bomereka_78.readFeatures(json_bomereka_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bomereka_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bomereka_78.addFeatures(features_bomereka_78);
var lyr_bomereka_78 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bomereka_78, 
                style: style_bomereka_78,
                interactive: true,
                title: '<img src="styles/legend/bomereka_78.png" /> (bom) ereka'
            });
var format_abanohputa_79 = new ol.format.GeoJSON();
var features_abanohputa_79 = format_abanohputa_79.readFeatures(json_abanohputa_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abanohputa_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abanohputa_79.addFeatures(features_abanohputa_79);
var lyr_abanohputa_79 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_abanohputa_79, 
                style: style_abanohputa_79,
                interactive: true,
                title: '<img src="styles/legend/abanohputa_79.png" /> (abano) hãputa'
            });
var format_abanoputa_80 = new ol.format.GeoJSON();
var features_abanoputa_80 = format_abanoputa_80.readFeatures(json_abanoputa_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abanoputa_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abanoputa_80.addFeatures(features_abanoputa_80);
var lyr_abanoputa_80 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_abanoputa_80, 
                style: style_abanoputa_80,
                interactive: true,
                title: '<img src="styles/legend/abanoputa_80.png" /> (abano) ãputa'
            });
var format_2PLithe_81 = new ol.format.GeoJSON();
var features_2PLithe_81 = format_2PLithe_81.readFeatures(json_2PLithe_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2PLithe_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2PLithe_81.addFeatures(features_2PLithe_81);
var lyr_2PLithe_81 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2PLithe_81, 
                style: style_2PLithe_81,
                interactive: true,
                title: '<img src="styles/legend/2PLithe_81.png" /> (2PL) ithe'
            });
var format_2PLhitheithe_82 = new ol.format.GeoJSON();
var features_2PLhitheithe_82 = format_2PLhitheithe_82.readFeatures(json_2PLhitheithe_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2PLhitheithe_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2PLhitheithe_82.addFeatures(features_2PLhitheithe_82);
var lyr_2PLhitheithe_82 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2PLhitheithe_82, 
                style: style_2PLhitheithe_82,
                interactive: true,
                title: '<img src="styles/legend/2PLhitheithe_82.png" /> (2PL) hithe/ithe'
            });
var format_2PLhithe_83 = new ol.format.GeoJSON();
var features_2PLhithe_83 = format_2PLhithe_83.readFeatures(json_2PLhithe_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2PLhithe_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2PLhithe_83.addFeatures(features_2PLhithe_83);
var lyr_2PLhithe_83 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2PLhithe_83, 
                style: style_2PLhithe_83,
                interactive: true,
                title: '<img src="styles/legend/2PLhithe_83.png" /> (2PL) hithe'
            });
var format_xinganknr_84 = new ol.format.GeoJSON();
var features_xinganknr_84 = format_xinganknr_84.readFeatures(json_xinganknr_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xinganknr_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xinganknr_84.addFeatures(features_xinganknr_84);
var lyr_xinganknr_84 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_xinganknr_84, 
                style: style_xinganknr_84,
                interactive: true,
                title: '<img src="styles/legend/xinganknr_84.png" /> (xingané) kɨ̃ːnɨrɨ'
            });
var format_xingankner_85 = new ol.format.GeoJSON();
var features_xingankner_85 = format_xingankner_85.readFeatures(json_xingankner_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xingankner_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xingankner_85.addFeatures(features_xingankner_85);
var lyr_xingankner_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_xingankner_85, 
                style: style_xingankner_85,
                interactive: true,
                title: '<img src="styles/legend/xingankner_85.png" /> (xingané) kẽːnerɨ'
            });
var format_virp_86 = new ol.format.GeoJSON();
var features_virp_86 = format_virp_86.readFeatures(json_virp_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_virp_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_virp_86.addFeatures(features_virp_86);
var lyr_virp_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_virp_86, 
                style: style_virp_86,
                interactive: true,
                title: '<img src="styles/legend/virp_86.png" /> (vir) ɨ̃pɨ'
            });
var format_virpe_87 = new ol.format.GeoJSON();
var features_virpe_87 = format_virpe_87.readFeatures(json_virpe_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_virpe_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_virpe_87.addFeatures(features_virpe_87);
var lyr_virpe_87 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_virpe_87, 
                style: style_virpe_87,
                interactive: true,
                title: '<img src="styles/legend/virpe_87.png" /> (vir) ɨ̃pe'
            });
var format_vinhodeaatsaprik_88 = new ol.format.GeoJSON();
var features_vinhodeaatsaprik_88 = format_vinhodeaatsaprik_88.readFeatures(json_vinhodeaatsaprik_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vinhodeaatsaprik_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vinhodeaatsaprik_88.addFeatures(features_vinhodeaatsaprik_88);
var lyr_vinhodeaatsaprik_88 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vinhodeaatsaprik_88, 
                style: style_vinhodeaatsaprik_88,
                interactive: true,
                title: '<img src="styles/legend/vinhodeaatsaprik_88.png" /> (vinho de açaí) tsapɨrikɨ̃ã'
            });
var format_vinhodeaatsaperik_89 = new ol.format.GeoJSON();
var features_vinhodeaatsaperik_89 = format_vinhodeaatsaperik_89.readFeatures(json_vinhodeaatsaperik_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vinhodeaatsaperik_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vinhodeaatsaperik_89.addFeatures(features_vinhodeaatsaperik_89);
var lyr_vinhodeaatsaperik_89 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vinhodeaatsaperik_89, 
                style: style_vinhodeaatsaperik_89,
                interactive: true,
                title: '<img src="styles/legend/vinhodeaatsaperik_89.png" /> (vinho de açaí) tsaperikɨ̃ã'
            });
var format_tabatingakatsari_90 = new ol.format.GeoJSON();
var features_tabatingakatsari_90 = format_tabatingakatsari_90.readFeatures(json_tabatingakatsari_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tabatingakatsari_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tabatingakatsari_90.addFeatures(features_tabatingakatsari_90);
var lyr_tabatingakatsari_90 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tabatingakatsari_90, 
                style: style_tabatingakatsari_90,
                interactive: true,
                title: '<img src="styles/legend/tabatingakatsari_90.png" /> (tabatinga)katsari'
            });
var format_tabatingakatsare_91 = new ol.format.GeoJSON();
var features_tabatingakatsare_91 = format_tabatingakatsare_91.readFeatures(json_tabatingakatsare_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tabatingakatsare_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tabatingakatsare_91.addFeatures(features_tabatingakatsare_91);
var lyr_tabatingakatsare_91 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tabatingakatsare_91, 
                style: style_tabatingakatsare_91,
                interactive: true,
                title: '<img src="styles/legend/tabatingakatsare_91.png" /> (tabatinga) katsare'
            });
var format_seiotn_92 = new ol.format.GeoJSON();
var features_seiotn_92 = format_seiotn_92.readFeatures(json_seiotn_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seiotn_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seiotn_92.addFeatures(features_seiotn_92);
var lyr_seiotn_92 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seiotn_92, 
                style: style_seiotn_92,
                interactive: true,
                title: '<img src="styles/legend/seiotn_92.png" /> (seio) tɨnɨ'
            });
var format_seiotne_93 = new ol.format.GeoJSON();
var features_seiotne_93 = format_seiotne_93.readFeatures(json_seiotne_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seiotne_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seiotne_93.addFeatures(features_seiotne_93);
var lyr_seiotne_93 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seiotne_93, 
                style: style_seiotne_93,
                interactive: true,
                title: '<img src="styles/legend/seiotne_93.png" /> (seio) tẽne'
            });
var format_saracurakuts_94 = new ol.format.GeoJSON();
var features_saracurakuts_94 = format_saracurakuts_94.readFeatures(json_saracurakuts_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saracurakuts_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saracurakuts_94.addFeatures(features_saracurakuts_94);
var lyr_saracurakuts_94 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saracurakuts_94, 
                style: style_saracurakuts_94,
                interactive: true,
                title: '<img src="styles/legend/saracurakuts_94.png" /> (saracura) kutsɨɾɨ'
            });
var format_saracurakutse_95 = new ol.format.GeoJSON();
var features_saracurakutse_95 = format_saracurakutse_95.readFeatures(json_saracurakutse_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saracurakutse_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saracurakutse_95.addFeatures(features_saracurakutse_95);
var lyr_saracurakutse_95 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saracurakutse_95, 
                style: style_saracurakutse_95,
                interactive: true,
                title: '<img src="styles/legend/saracurakutse_95.png" /> (saracura) kutseɾɨ'
            });
var format_pupunhakaw_96 = new ol.format.GeoJSON();
var features_pupunhakaw_96 = format_pupunhakaw_96.readFeatures(json_pupunhakaw_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pupunhakaw_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pupunhakaw_96.addFeatures(features_pupunhakaw_96);
var lyr_pupunhakaw_96 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pupunhakaw_96, 
                style: style_pupunhakaw_96,
                interactive: true,
                title: '<img src="styles/legend/pupunhakaw_96.png" /> (pupunha) kawɨɾɨ'
            });
var format_pupunhakawe_97 = new ol.format.GeoJSON();
var features_pupunhakawe_97 = format_pupunhakawe_97.readFeatures(json_pupunhakawe_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pupunhakawe_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pupunhakawe_97.addFeatures(features_pupunhakawe_97);
var lyr_pupunhakawe_97 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pupunhakawe_97, 
                style: style_pupunhakawe_97,
                interactive: true,
                title: '<img src="styles/legend/pupunhakawe_97.png" /> (pupunha) kaweɾɨ'
            });
var format_poraquepequenoptsut_98 = new ol.format.GeoJSON();
var features_poraquepequenoptsut_98 = format_poraquepequenoptsut_98.readFeatures(json_poraquepequenoptsut_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraquepequenoptsut_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraquepequenoptsut_98.addFeatures(features_poraquepequenoptsut_98);
var lyr_poraquepequenoptsut_98 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraquepequenoptsut_98, 
                style: style_poraquepequenoptsut_98,
                interactive: true,
                title: '<img src="styles/legend/poraquepequenoptsut_98.png" /> (poraque pequeno) pẽtsutɨ'
            });
var format_poraquepequenoptsute_99 = new ol.format.GeoJSON();
var features_poraquepequenoptsute_99 = format_poraquepequenoptsute_99.readFeatures(json_poraquepequenoptsute_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraquepequenoptsute_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraquepequenoptsute_99.addFeatures(features_poraquepequenoptsute_99);
var lyr_poraquepequenoptsute_99 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraquepequenoptsute_99, 
                style: style_poraquepequenoptsute_99,
                interactive: true,
                title: '<img src="styles/legend/poraquepequenoptsute_99.png" /> (poraque pequeno) pẽtsute'
            });
var format_poraquegrandett_100 = new ol.format.GeoJSON();
var features_poraquegrandett_100 = format_poraquegrandett_100.readFeatures(json_poraquegrandett_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraquegrandett_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraquegrandett_100.addFeatures(features_poraquegrandett_100);
var lyr_poraquegrandett_100 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraquegrandett_100, 
                style: style_poraquegrandett_100,
                interactive: true,
                title: '<img src="styles/legend/poraquegrandett_100.png" /> (poraque grande) tẽtɨɾɨ'
            });
var format_poraquegrandette_101 = new ol.format.GeoJSON();
var features_poraquegrandette_101 = format_poraquegrandette_101.readFeatures(json_poraquegrandette_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraquegrandette_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraquegrandette_101.addFeatures(features_poraquegrandette_101);
var lyr_poraquegrandette_101 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraquegrandette_101, 
                style: style_poraquegrandette_101,
                interactive: true,
                title: '<img src="styles/legend/poraquegrandette_101.png" /> (poraque grande) tẽteɾɨ'
            });
var format_poraquegrandettett_102 = new ol.format.GeoJSON();
var features_poraquegrandettett_102 = format_poraquegrandettett_102.readFeatures(json_poraquegrandettett_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poraquegrandettett_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poraquegrandettett_102.addFeatures(features_poraquegrandettett_102);
var lyr_poraquegrandettett_102 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poraquegrandettett_102, 
                style: style_poraquegrandettett_102,
                interactive: true,
                title: '<img src="styles/legend/poraquegrandettett_102.png" /> (poraque grande) tẽteɾɨ/tẽtɨɾɨ'
            });
var format_pirapitingakapup_103 = new ol.format.GeoJSON();
var features_pirapitingakapup_103 = format_pirapitingakapup_103.readFeatures(json_pirapitingakapup_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pirapitingakapup_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pirapitingakapup_103.addFeatures(features_pirapitingakapup_103);
var lyr_pirapitingakapup_103 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pirapitingakapup_103, 
                style: style_pirapitingakapup_103,
                interactive: true,
                title: '<img src="styles/legend/pirapitingakapup_103.png" /> (pirapitinga) kapupɨɾɨ'
            });
var format_pirapitingakapupe_104 = new ol.format.GeoJSON();
var features_pirapitingakapupe_104 = format_pirapitingakapupe_104.readFeatures(json_pirapitingakapupe_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pirapitingakapupe_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pirapitingakapupe_104.addFeatures(features_pirapitingakapupe_104);
var lyr_pirapitingakapupe_104 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pirapitingakapupe_104, 
                style: style_pirapitingakapupe_104,
                interactive: true,
                title: '<img src="styles/legend/pirapitingakapupe_104.png" /> (pirapitinga) kapupeɾɨ'
            });
var format_poplanodemandiocakumkata_105 = new ol.format.GeoJSON();
var features_poplanodemandiocakumkata_105 = format_poplanodemandiocakumkata_105.readFeatures(json_poplanodemandiocakumkata_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poplanodemandiocakumkata_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poplanodemandiocakumkata_105.addFeatures(features_poplanodemandiocakumkata_105);
var lyr_poplanodemandiocakumkata_105 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poplanodemandiocakumkata_105, 
                style: style_poplanodemandiocakumkata_105,
                interactive: true,
                title: '<img src="styles/legend/poplanodemandiocakumkata_105.png" /> (pão plano de mandioca) kumɨɾɨkata'
            });
var format_poplanodemandiocakumekata_106 = new ol.format.GeoJSON();
var features_poplanodemandiocakumekata_106 = format_poplanodemandiocakumekata_106.readFeatures(json_poplanodemandiocakumekata_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poplanodemandiocakumekata_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poplanodemandiocakumekata_106.addFeatures(features_poplanodemandiocakumekata_106);
var lyr_poplanodemandiocakumekata_106 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poplanodemandiocakumekata_106, 
                style: style_poplanodemandiocakumekata_106,
                interactive: true,
                title: '<img src="styles/legend/poplanodemandiocakumekata_106.png" /> (pão plano de mandioca) kumeɾɨkata'
            });
var format_pacakajat_107 = new ol.format.GeoJSON();
var features_pacakajat_107 = format_pacakajat_107.readFeatures(json_pacakajat_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pacakajat_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pacakajat_107.addFeatures(features_pacakajat_107);
var lyr_pacakajat_107 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pacakajat_107, 
                style: style_pacakajat_107,
                interactive: true,
                title: '<img src="styles/legend/pacakajat_107.png" /> (paca) kajatɨ'
            });
var format_pacakajate_108 = new ol.format.GeoJSON();
var features_pacakajate_108 = format_pacakajate_108.readFeatures(json_pacakajate_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pacakajate_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pacakajate_108.addFeatures(features_pacakajate_108);
var lyr_pacakajate_108 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pacakajate_108, 
                style: style_pacakajate_108,
                interactive: true,
                title: '<img src="styles/legend/pacakajate_108.png" /> (paca) kajate'
            });
var format_macacopretoitikr_109 = new ol.format.GeoJSON();
var features_macacopretoitikr_109 = format_macacopretoitikr_109.readFeatures(json_macacopretoitikr_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_macacopretoitikr_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macacopretoitikr_109.addFeatures(features_macacopretoitikr_109);
var lyr_macacopretoitikr_109 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_macacopretoitikr_109, 
                style: style_macacopretoitikr_109,
                interactive: true,
                title: '<img src="styles/legend/macacopretoitikr_109.png" /> (macaco preto) itʃikɨrɨ'
            });
var format_macacopretoitikre_110 = new ol.format.GeoJSON();
var features_macacopretoitikre_110 = format_macacopretoitikre_110.readFeatures(json_macacopretoitikre_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_macacopretoitikre_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macacopretoitikre_110.addFeatures(features_macacopretoitikre_110);
var lyr_macacopretoitikre_110 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_macacopretoitikre_110, 
                style: style_macacopretoitikre_110,
                interactive: true,
                title: '<img src="styles/legend/macacopretoitikre_110.png" /> (macaco preto) itʃikɨre'
            });
var format_lontraapasakae_111 = new ol.format.GeoJSON();
var features_lontraapasakae_111 = format_lontraapasakae_111.readFeatures(json_lontraapasakae_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lontraapasakae_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lontraapasakae_111.addFeatures(features_lontraapasakae_111);
var lyr_lontraapasakae_111 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lontraapasakae_111, 
                style: style_lontraapasakae_111,
                interactive: true,
                title: '<img src="styles/legend/lontraapasakae_111.png" /> (lontra) apasakaɾe'
            });
var format_lontraapasaka_112 = new ol.format.GeoJSON();
var features_lontraapasaka_112 = format_lontraapasaka_112.readFeatures(json_lontraapasaka_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lontraapasaka_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lontraapasaka_112.addFeatures(features_lontraapasaka_112);
var lyr_lontraapasaka_112 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lontraapasaka_112, 
                style: style_lontraapasaka_112,
                interactive: true,
                title: '<img src="styles/legend/lontraapasaka_112.png" /> (lontra) apasakaɾɨ'
            });
var format_cutiarakptk_113 = new ol.format.GeoJSON();
var features_cutiarakptk_113 = format_cutiarakptk_113.readFeatures(json_cutiarakptk_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiarakptk_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiarakptk_113.addFeatures(features_cutiarakptk_113);
var lyr_cutiarakptk_113 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiarakptk_113, 
                style: style_cutiarakptk_113,
                interactive: true,
                title: '<img src="styles/legend/cutiarakptk_113.png" /> (cutiara) kɨpɨtɨ(kɨ)'
            });
var format_cutiarakpetke_114 = new ol.format.GeoJSON();
var features_cutiarakpetke_114 = format_cutiarakpetke_114.readFeatures(json_cutiarakpetke_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiarakpetke_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiarakpetke_114.addFeatures(features_cutiarakpetke_114);
var lyr_cutiarakpetke_114 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiarakpetke_114, 
                style: style_cutiarakpetke_114,
                interactive: true,
                title: '<img src="styles/legend/cutiarakpetke_114.png" /> (cutiara) kɨpetɨ(ke)'
            });
var format_cutiarakptkkpetke_115 = new ol.format.GeoJSON();
var features_cutiarakptkkpetke_115 = format_cutiarakptkkpetke_115.readFeatures(json_cutiarakptkkpetke_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cutiarakptkkpetke_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cutiarakptkkpetke_115.addFeatures(features_cutiarakptkkpetke_115);
var lyr_cutiarakptkkpetke_115 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cutiarakptkkpetke_115, 
                style: style_cutiarakptkkpetke_115,
                interactive: true,
                title: '<img src="styles/legend/cutiarakptkkpetke_115.png" /> (cutiara) kɨpɨtɨ(kɨ)/kɨpetɨ(ke)'
            });
var format_caiararakaet_116 = new ol.format.GeoJSON();
var features_caiararakaet_116 = format_caiararakaet_116.readFeatures(json_caiararakaet_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caiararakaet_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caiararakaet_116.addFeatures(features_caiararakaet_116);
var lyr_caiararakaet_116 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caiararakaet_116, 
                style: style_caiararakaet_116,
                interactive: true,
                title: '<img src="styles/legend/caiararakaet_116.png" /> (cai(a)rara) kaɾetɨ'
            });
var format_caiararakat_117 = new ol.format.GeoJSON();
var features_caiararakat_117 = format_caiararakat_117.readFeatures(json_caiararakat_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caiararakat_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caiararakat_117.addFeatures(features_caiararakat_117);
var lyr_caiararakat_117 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caiararakat_117, 
                style: style_caiararakat_117,
                interactive: true,
                title: '<img src="styles/legend/caiararakat_117.png" /> (cai(a)rara) kaɾɨtɨ'
            });
var format_caiararakatkaet_118 = new ol.format.GeoJSON();
var features_caiararakatkaet_118 = format_caiararakatkaet_118.readFeatures(json_caiararakatkaet_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caiararakatkaet_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caiararakatkaet_118.addFeatures(features_caiararakatkaet_118);
var lyr_caiararakatkaet_118 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caiararakatkaet_118, 
                style: style_caiararakatkaet_118,
                interactive: true,
                title: '<img src="styles/legend/caiararakatkaet_118.png" /> (cai(a)rara) kaɾɨtɨ/kaɾetɨ'
            });
var format_cabasne_119 = new ol.format.GeoJSON();
var features_cabasne_119 = format_cabasne_119.readFeatures(json_cabasne_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabasne_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabasne_119.addFeatures(features_cabasne_119);
var lyr_cabasne_119 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cabasne_119, 
                style: style_cabasne_119,
                interactive: true,
                title: '<img src="styles/legend/cabasne_119.png" /> (caba) sãne'
            });
var format_cabasn_120 = new ol.format.GeoJSON();
var features_cabasn_120 = format_cabasn_120.readFeatures(json_cabasn_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabasn_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabasn_120.addFeatures(features_cabasn_120);
var lyr_cabasn_120 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cabasn_120, 
                style: style_cabasn_120,
                interactive: true,
                title: '<img src="styles/legend/cabasn_120.png" /> (caba) sãnɨ'
            });
var format_bicodoseiotenk_121 = new ol.format.GeoJSON();
var features_bicodoseiotenk_121 = format_bicodoseiotenk_121.readFeatures(json_bicodoseiotenk_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bicodoseiotenk_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bicodoseiotenk_121.addFeatures(features_bicodoseiotenk_121);
var lyr_bicodoseiotenk_121 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bicodoseiotenk_121, 
                style: style_bicodoseiotenk_121,
                interactive: true,
                title: '<img src="styles/legend/bicodoseiotenk_121.png" /> (bico do seio) tenɨkɨ'
            });
var format_bicodoseiotnk_122 = new ol.format.GeoJSON();
var features_bicodoseiotnk_122 = format_bicodoseiotnk_122.readFeatures(json_bicodoseiotnk_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bicodoseiotnk_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bicodoseiotnk_122.addFeatures(features_bicodoseiotnk_122);
var lyr_bicodoseiotnk_122 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bicodoseiotnk_122, 
                style: style_bicodoseiotnk_122,
                interactive: true,
                title: '<img src="styles/legend/bicodoseiotnk_122.png" /> (bico do seio) tɨnɨkɨ'
            });
var format_bemteviepitikiri_123 = new ol.format.GeoJSON();
var features_bemteviepitikiri_123 = format_bemteviepitikiri_123.readFeatures(json_bemteviepitikiri_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bemteviepitikiri_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bemteviepitikiri_123.addFeatures(features_bemteviepitikiri_123);
var lyr_bemteviepitikiri_123 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bemteviepitikiri_123, 
                style: style_bemteviepitikiri_123,
                interactive: true,
                title: '<img src="styles/legend/bemteviepitikiri_123.png" /> (bem-te-vi) epitikiri'
            });
var format_bemteviipitikiri_124 = new ol.format.GeoJSON();
var features_bemteviipitikiri_124 = format_bemteviipitikiri_124.readFeatures(json_bemteviipitikiri_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bemteviipitikiri_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bemteviipitikiri_124.addFeatures(features_bemteviipitikiri_124);
var lyr_bemteviipitikiri_124 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bemteviipitikiri_124, 
                style: style_bemteviipitikiri_124,
                interactive: true,
                title: '<img src="styles/legend/bemteviipitikiri_124.png" /> (bem-te-vi) ipitikiri'
            });
var format_assassinokukaneri_125 = new ol.format.GeoJSON();
var features_assassinokukaneri_125 = format_assassinokukaneri_125.readFeatures(json_assassinokukaneri_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assassinokukaneri_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assassinokukaneri_125.addFeatures(features_assassinokukaneri_125);
var lyr_assassinokukaneri_125 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_assassinokukaneri_125, 
                style: style_assassinokukaneri_125,
                interactive: true,
                title: '<img src="styles/legend/assassinokukaneri_125.png" /> (assassino) kukaneri'
            });
var format_assassinokukaniri_126 = new ol.format.GeoJSON();
var features_assassinokukaniri_126 = format_assassinokukaniri_126.readFeatures(json_assassinokukaniri_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assassinokukaniri_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assassinokukaniri_126.addFeatures(features_assassinokukaniri_126);
var lyr_assassinokukaniri_126 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_assassinokukaniri_126, 
                style: style_assassinokukaniri_126,
                interactive: true,
                title: '<img src="styles/legend/assassinokukaniri_126.png" /> (assassino) kukaniri'
            });
var format_ariranhaeni_127 = new ol.format.GeoJSON();
var features_ariranhaeni_127 = format_ariranhaeni_127.readFeatures(json_ariranhaeni_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ariranhaeni_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ariranhaeni_127.addFeatures(features_ariranhaeni_127);
var lyr_ariranhaeni_127 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ariranhaeni_127, 
                style: style_ariranhaeni_127,
                interactive: true,
                title: '<img src="styles/legend/ariranhaeni_127.png" /> (ariranha) eni'
            });
var format_ariranhaini_128 = new ol.format.GeoJSON();
var features_ariranhaini_128 = format_ariranhaini_128.readFeatures(json_ariranhaini_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ariranhaini_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ariranhaini_128.addFeatures(features_ariranhaini_128);
var lyr_ariranhaini_128 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ariranhaini_128, 
                style: style_ariranhaini_128,
                interactive: true,
                title: '<img src="styles/legend/ariranhaini_128.png" /> (ariranha) ini'
            });
var format_aatsaperiki_129 = new ol.format.GeoJSON();
var features_aatsaperiki_129 = format_aatsaperiki_129.readFeatures(json_aatsaperiki_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aatsaperiki_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aatsaperiki_129.addFeatures(features_aatsaperiki_129);
var lyr_aatsaperiki_129 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aatsaperiki_129, 
                style: style_aatsaperiki_129,
                interactive: true,
                title: '<img src="styles/legend/aatsaperiki_129.png" /> (açaí) tsaperiki'
            });
var format_aatsaperikitsapiriki_130 = new ol.format.GeoJSON();
var features_aatsaperikitsapiriki_130 = format_aatsaperikitsapiriki_130.readFeatures(json_aatsaperikitsapiriki_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aatsaperikitsapiriki_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aatsaperikitsapiriki_130.addFeatures(features_aatsaperikitsapiriki_130);
var lyr_aatsaperikitsapiriki_130 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aatsaperikitsapiriki_130, 
                style: style_aatsaperikitsapiriki_130,
                interactive: true,
                title: '<img src="styles/legend/aatsaperikitsapiriki_130.png" /> (açaí) tsaperiki/tsapiriki'
            });
var format_aatsapiriki_131 = new ol.format.GeoJSON();
var features_aatsapiriki_131 = format_aatsapiriki_131.readFeatures(json_aatsapiriki_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aatsapiriki_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aatsapiriki_131.addFeatures(features_aatsapiriki_131);
var lyr_aatsapiriki_131 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aatsapiriki_131, 
                style: style_aatsapiriki_131,
                interactive: true,
                title: '<img src="styles/legend/aatsapiriki_131.png" /> (açaí) tsapiriki'
            });
var format_Presenadeescolas_132 = new ol.format.GeoJSON();
var features_Presenadeescolas_132 = format_Presenadeescolas_132.readFeatures(json_Presenadeescolas_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Presenadeescolas_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Presenadeescolas_132.addFeatures(features_Presenadeescolas_132);
var lyr_Presenadeescolas_132 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Presenadeescolas_132, 
                style: style_Presenadeescolas_132,
                interactive: true,
                title: '<img src="styles/legend/Presenadeescolas_132.png" /> Presença de escolas'
            });
var format_ComunidadesApurin_133 = new ol.format.GeoJSON();
var features_ComunidadesApurin_133 = format_ComunidadesApurin_133.readFeatures(json_ComunidadesApurin_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesApurin_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesApurin_133.addFeatures(features_ComunidadesApurin_133);
var lyr_ComunidadesApurin_133 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ComunidadesApurin_133, 
                style: style_ComunidadesApurin_133,
                interactive: true,
                title: '<img src="styles/legend/ComunidadesApurin_133.png" /> Comunidades Apurinã'
            });
var format_TIsApurin_134 = new ol.format.GeoJSON();
var features_TIsApurin_134 = format_TIsApurin_134.readFeatures(json_TIsApurin_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIsApurin_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIsApurin_134.addFeatures(features_TIsApurin_134);
var lyr_TIsApurin_134 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIsApurin_134, 
                style: style_TIsApurin_134,
                interactive: true,
                title: '<img src="styles/legend/TIsApurin_134.png" /> TIs Apurinã'
            });
var group_Variaoe = new ol.layer.Group({
                                layers: [lyr_xinganknr_84,lyr_xingankner_85,lyr_virp_86,lyr_virpe_87,lyr_vinhodeaatsaprik_88,lyr_vinhodeaatsaperik_89,lyr_tabatingakatsari_90,lyr_tabatingakatsare_91,lyr_seiotn_92,lyr_seiotne_93,lyr_saracurakuts_94,lyr_saracurakutse_95,lyr_pupunhakaw_96,lyr_pupunhakawe_97,lyr_poraquepequenoptsut_98,lyr_poraquepequenoptsute_99,lyr_poraquegrandett_100,lyr_poraquegrandette_101,lyr_poraquegrandettett_102,lyr_pirapitingakapup_103,lyr_pirapitingakapupe_104,lyr_poplanodemandiocakumkata_105,lyr_poplanodemandiocakumekata_106,lyr_pacakajat_107,lyr_pacakajate_108,lyr_macacopretoitikr_109,lyr_macacopretoitikre_110,lyr_lontraapasakae_111,lyr_lontraapasaka_112,lyr_cutiarakptk_113,lyr_cutiarakpetke_114,lyr_cutiarakptkkpetke_115,lyr_caiararakaet_116,lyr_caiararakat_117,lyr_caiararakatkaet_118,lyr_cabasne_119,lyr_cabasn_120,lyr_bicodoseiotenk_121,lyr_bicodoseiotnk_122,lyr_bemteviepitikiri_123,lyr_bemteviipitikiri_124,lyr_assassinokukaneri_125,lyr_assassinokukaniri_126,lyr_ariranhaeni_127,lyr_ariranhaini_128,lyr_aatsaperiki_129,lyr_aatsaperikitsapiriki_130,lyr_aatsapiriki_131,],
                                title: "Variação e ~ ɨ"});
var group_Variaoentreh0 = new ol.layer.Group({
                                layers: [lyr_umhtyty_50,lyr_umhty_51,lyr_umty_52,lyr_sexoimata_53,lyr_sexohimata_54,lyr_sapocaanaruhawiru_55,lyr_sapocaanaruawiru_56,lyr_sanguehereka_57,lyr_sangueereka_58,lyr_piranhauma_59,lyr_piranhahumauma_60,lyr_piranhahuma_61,lyr_onahkitikiti_62,lyr_onahkiti_63,lyr_onakiti_64,lyr_meninohatakuruatakuru_65,lyr_meninohatakuru_66,lyr_meninoatakuru_67,lyr_grandechefedosbichoshawitheawithe_68,lyr_grandechefedosbichoshawithe_69,lyr_grandechefedosbichosawithe_70,lyr_floriwi_71,lyr_florhiwi_72,lyr_flautahpukyry_73,lyr_flautapukyry_74,lyr_coraohkipa_75,lyr_coraokipa_76,lyr_bomhereka_77,lyr_bomereka_78,lyr_abanohputa_79,lyr_abanoputa_80,lyr_2PLithe_81,lyr_2PLhitheithe_82,lyr_2PLhithe_83,],
                                title: "Variação entre h ~ 0"});
var group_Variaoentrerl = new ol.layer.Group({
                                layers: [lyr_urubumajuri_28,lyr_urubumajuli_29,lyr_surucucukasururi_30,lyr_surucucukasululi_31,lyr_serbomarekari_32,lyr_serbomalekali_33,lyr_queixadairari_34,lyr_queixadairali_35,lyr_pretopumamari_36,lyr_pretopumamali_37,lyr_jenipapoymamari_38,lyr_jenipapoymamali_39,lyr_iraramapaanari_40,lyr_iraramapaanali_41,lyr_igarapkawaari_42,lyr_igarapkawaali_43,lyr_flechaprontaparaserusadakatsutali_44,lyr_flechaprontaparaserusadakatsitari_45,lyr_cigarrakituri_46,lyr_cigarrakituli_47,lyr_cachorroanapanari_48,lyr_cachorroanapanali_49,],
                                title: "Variação entre r ~ l"});
var group_Variaofonolgicalexicalmentecondicionada = new ol.layer.Group({
                                layers: [lyr_urucumpikiri_6,lyr_urucumapikiri_7,lyr_teradosaasarasarasara_8,lyr_teradosarasara_9,lyr_teradosaasara_10,lyr_tamandubandeiraixuwaixiwa_11,lyr_tamandubandeiraexuwaexiwa_12,lyr_tamandubandeiraixuwa_13,lyr_tamandubandeiraixiwa_14,lyr_tamandubandeiraexuwa_15,lyr_tamandubandeiraexiwa_16,lyr_poraquptsuty_17,lyr_poraqupetsty_18,lyr_mutumireka_19,lyr_mutumiraka_20,lyr_jacarkaiukyri_21,lyr_jacarkaikyri_22,lyr_guaupara_23,lyr_guaipura_24,lyr_guaiparaupara_25,lyr_guaipara_26,lyr_guapara_27,],
                                title: "Variação fonológica lexicalmente condicionada"});
var group_DesmatamentoINPE = new ol.layer.Group({
                                layers: [lyr_2020_1,lyr_2018_2,lyr_2019_3,lyr_2017_4,lyr_2016_5,],
                                title: "Desmatamento (INPE)"});
var group_Mapabase = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mapa base"});

lyr_OpenStreetMap_0.setVisible(true);lyr_2020_1.setVisible(true);lyr_2018_2.setVisible(true);lyr_2019_3.setVisible(true);lyr_2017_4.setVisible(true);lyr_2016_5.setVisible(true);lyr_urucumpikiri_6.setVisible(false);lyr_urucumapikiri_7.setVisible(false);lyr_teradosaasarasarasara_8.setVisible(false);lyr_teradosarasara_9.setVisible(false);lyr_teradosaasara_10.setVisible(false);lyr_tamandubandeiraixuwaixiwa_11.setVisible(false);lyr_tamandubandeiraexuwaexiwa_12.setVisible(false);lyr_tamandubandeiraixuwa_13.setVisible(false);lyr_tamandubandeiraixiwa_14.setVisible(false);lyr_tamandubandeiraexuwa_15.setVisible(false);lyr_tamandubandeiraexiwa_16.setVisible(false);lyr_poraquptsuty_17.setVisible(false);lyr_poraqupetsty_18.setVisible(false);lyr_mutumireka_19.setVisible(false);lyr_mutumiraka_20.setVisible(false);lyr_jacarkaiukyri_21.setVisible(false);lyr_jacarkaikyri_22.setVisible(false);lyr_guaupara_23.setVisible(false);lyr_guaipura_24.setVisible(false);lyr_guaiparaupara_25.setVisible(false);lyr_guaipara_26.setVisible(false);lyr_guapara_27.setVisible(false);lyr_urubumajuri_28.setVisible(false);lyr_urubumajuli_29.setVisible(false);lyr_surucucukasururi_30.setVisible(false);lyr_surucucukasululi_31.setVisible(false);lyr_serbomarekari_32.setVisible(false);lyr_serbomalekali_33.setVisible(false);lyr_queixadairari_34.setVisible(false);lyr_queixadairali_35.setVisible(false);lyr_pretopumamari_36.setVisible(false);lyr_pretopumamali_37.setVisible(false);lyr_jenipapoymamari_38.setVisible(false);lyr_jenipapoymamali_39.setVisible(false);lyr_iraramapaanari_40.setVisible(false);lyr_iraramapaanali_41.setVisible(false);lyr_igarapkawaari_42.setVisible(false);lyr_igarapkawaali_43.setVisible(false);lyr_flechaprontaparaserusadakatsutali_44.setVisible(false);lyr_flechaprontaparaserusadakatsitari_45.setVisible(false);lyr_cigarrakituri_46.setVisible(false);lyr_cigarrakituli_47.setVisible(false);lyr_cachorroanapanari_48.setVisible(false);lyr_cachorroanapanali_49.setVisible(false);lyr_umhtyty_50.setVisible(false);lyr_umhty_51.setVisible(false);lyr_umty_52.setVisible(false);lyr_sexoimata_53.setVisible(false);lyr_sexohimata_54.setVisible(false);lyr_sapocaanaruhawiru_55.setVisible(false);lyr_sapocaanaruawiru_56.setVisible(false);lyr_sanguehereka_57.setVisible(false);lyr_sangueereka_58.setVisible(false);lyr_piranhauma_59.setVisible(false);lyr_piranhahumauma_60.setVisible(false);lyr_piranhahuma_61.setVisible(false);lyr_onahkitikiti_62.setVisible(false);lyr_onahkiti_63.setVisible(false);lyr_onakiti_64.setVisible(false);lyr_meninohatakuruatakuru_65.setVisible(false);lyr_meninohatakuru_66.setVisible(false);lyr_meninoatakuru_67.setVisible(false);lyr_grandechefedosbichoshawitheawithe_68.setVisible(false);lyr_grandechefedosbichoshawithe_69.setVisible(false);lyr_grandechefedosbichosawithe_70.setVisible(false);lyr_floriwi_71.setVisible(false);lyr_florhiwi_72.setVisible(false);lyr_flautahpukyry_73.setVisible(false);lyr_flautapukyry_74.setVisible(false);lyr_coraohkipa_75.setVisible(false);lyr_coraokipa_76.setVisible(false);lyr_bomhereka_77.setVisible(false);lyr_bomereka_78.setVisible(false);lyr_abanohputa_79.setVisible(false);lyr_abanoputa_80.setVisible(false);lyr_2PLithe_81.setVisible(false);lyr_2PLhitheithe_82.setVisible(false);lyr_2PLhithe_83.setVisible(false);lyr_xinganknr_84.setVisible(false);lyr_xingankner_85.setVisible(false);lyr_virp_86.setVisible(false);lyr_virpe_87.setVisible(false);lyr_vinhodeaatsaprik_88.setVisible(false);lyr_vinhodeaatsaperik_89.setVisible(false);lyr_tabatingakatsari_90.setVisible(false);lyr_tabatingakatsare_91.setVisible(false);lyr_seiotn_92.setVisible(false);lyr_seiotne_93.setVisible(false);lyr_saracurakuts_94.setVisible(false);lyr_saracurakutse_95.setVisible(false);lyr_pupunhakaw_96.setVisible(false);lyr_pupunhakawe_97.setVisible(false);lyr_poraquepequenoptsut_98.setVisible(false);lyr_poraquepequenoptsute_99.setVisible(false);lyr_poraquegrandett_100.setVisible(false);lyr_poraquegrandette_101.setVisible(false);lyr_poraquegrandettett_102.setVisible(false);lyr_pirapitingakapup_103.setVisible(false);lyr_pirapitingakapupe_104.setVisible(false);lyr_poplanodemandiocakumkata_105.setVisible(false);lyr_poplanodemandiocakumekata_106.setVisible(false);lyr_pacakajat_107.setVisible(false);lyr_pacakajate_108.setVisible(false);lyr_macacopretoitikr_109.setVisible(false);lyr_macacopretoitikre_110.setVisible(false);lyr_lontraapasakae_111.setVisible(false);lyr_lontraapasaka_112.setVisible(false);lyr_cutiarakptk_113.setVisible(false);lyr_cutiarakpetke_114.setVisible(false);lyr_cutiarakptkkpetke_115.setVisible(false);lyr_caiararakaet_116.setVisible(false);lyr_caiararakat_117.setVisible(false);lyr_caiararakatkaet_118.setVisible(false);lyr_cabasne_119.setVisible(false);lyr_cabasn_120.setVisible(false);lyr_bicodoseiotenk_121.setVisible(false);lyr_bicodoseiotnk_122.setVisible(false);lyr_bemteviepitikiri_123.setVisible(false);lyr_bemteviipitikiri_124.setVisible(false);lyr_assassinokukaneri_125.setVisible(false);lyr_assassinokukaniri_126.setVisible(false);lyr_ariranhaeni_127.setVisible(false);lyr_ariranhaini_128.setVisible(false);lyr_aatsaperiki_129.setVisible(false);lyr_aatsaperikitsapiriki_130.setVisible(false);lyr_aatsapiriki_131.setVisible(false);lyr_Presenadeescolas_132.setVisible(false);lyr_ComunidadesApurin_133.setVisible(true);lyr_TIsApurin_134.setVisible(true);
var layersList = [group_Mapabase,group_DesmatamentoINPE,group_Variaofonolgicalexicalmentecondicionada,group_Variaoentrerl,group_Variaoentreh0,group_Variaoe,lyr_Presenadeescolas_132,lyr_ComunidadesApurin_133,lyr_TIsApurin_134];
lyr_2020_1.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2018_2.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2019_3.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2017_4.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2016_5.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_urucumpikiri_6.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urucum': 'urucum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_urucumapikiri_7.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urucum': 'urucum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_teradosaasarasarasara_8.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'terÃ§ado': 'terÃ§ado', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_teradosarasara_9.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'terÃ§ado': 'terÃ§ado', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_teradosaasara_10.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'terÃ§ado': 'terÃ§ado', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraixuwaixiwa_11.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduÃ¡': 'tamanduÃ¡', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraexuwaexiwa_12.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduÃ¡': 'tamanduÃ¡', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraixuwa_13.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduÃ¡': 'tamanduÃ¡', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraixiwa_14.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduÃ¡': 'tamanduÃ¡', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraexuwa_15.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduÃ¡': 'tamanduÃ¡', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tamandubandeiraexiwa_16.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tamanduÃ¡': 'tamanduÃ¡', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraquptsuty_17.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque': 'poraque', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraqupetsty_18.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque': 'poraque', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mutumireka_19.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'mutum': 'mutum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mutumiraka_20.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'mutum': 'mutum', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jacarkaiukyri_21.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jacarÃ©': 'jacarÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jacarkaikyri_22.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jacarÃ©': 'jacarÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guaupara_23.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'Ã¡gua': 'Ã¡gua', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guaipura_24.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'Ã¡gua': 'Ã¡gua', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guaiparaupara_25.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'Ã¡gua': 'Ã¡gua', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guaipara_26.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'Ã¡gua': 'Ã¡gua', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_guapara_27.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'Ã¡gua': 'Ã¡gua', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_urubumajuri_28.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urubu': 'urubu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_urubumajuli_29.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'urubu': 'urubu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_surucucukasururi_30.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'surucucu': 'surucucu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_surucucukasululi_31.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'surucucu': 'surucucu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_serbomarekari_32.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ser_bom': 'ser_bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_serbomalekali_33.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ser_bom': 'ser_bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_queixadairari_34.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'queixada': 'queixada', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_queixadairali_35.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'queixada': 'queixada', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pretopumamari_36.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'preto': 'preto', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pretopumamali_37.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'preto': 'preto', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jenipapoymamari_38.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jenipapo': 'jenipapo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_jenipapoymamali_39.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'jenipapo': 'jenipapo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_iraramapaanari_40.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'irara': 'irara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_iraramapaanali_41.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'irara': 'irara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_igarapkawaari_42.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'igarapÃ©': 'igarapÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_igarapkawaali_43.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'igarapÃ©': 'igarapÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flechaprontaparaserusadakatsutali_44.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flexa_pron': 'flexa_pron', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flechaprontaparaserusadakatsitari_45.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flexa_pron': 'flexa_pron', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cigarrakituri_46.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cigarra': 'cigarra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cigarrakituli_47.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cigarra': 'cigarra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cachorroanapanari_48.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cachorro': 'cachorro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cachorroanapanali_49.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cachorro': 'cachorro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_umhtyty_50.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'um': 'um', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_umhty_51.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'um': 'um', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_umty_52.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'um': 'um', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sexoimata_53.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sexo': 'sexo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sexohimata_54.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sexo': 'sexo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sapocaanaruhawiru_55.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sapo_caana': 'sapo_caana', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sapocaanaruawiru_56.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sapo_caana': 'sapo_caana', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sanguehereka_57.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sangue': 'sangue', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sangueereka_58.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'sangue': 'sangue', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_piranhauma_59.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'piranha': 'piranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_piranhahumauma_60.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'piranha': 'piranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_piranhahuma_61.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'piranha': 'piranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_onahkitikiti_62.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'onÃ§a': 'onÃ§a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_onahkiti_63.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'onÃ§a': 'onÃ§a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_onakiti_64.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'onÃ§a': 'onÃ§a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_meninohatakuruatakuru_65.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'menino': 'menino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_meninohatakuru_66.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'menino': 'menino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_meninoatakuru_67.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'menino': 'menino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_grandechefedosbichoshawitheawithe_68.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'grande_che': 'grande_che', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_grandechefedosbichoshawithe_69.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'grande_che': 'grande_che', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_grandechefedosbichosawithe_70.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'grande_che': 'grande_che', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_floriwi_71.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flor': 'flor', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_florhiwi_72.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flor': 'flor', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flautahpukyry_73.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bom': 'bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_flautapukyry_74.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'flauta': 'flauta', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_coraohkipa_75.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'coraÃ§Ã£o': 'coraÃ§Ã£o', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_coraokipa_76.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'coraÃ§Ã£o': 'coraÃ§Ã£o', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bomhereka_77.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bom': 'bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bomereka_78.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bom': 'bom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_abanohputa_79.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'abano': 'abano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_abanoputa_80.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'abano': 'abano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_2PLithe_81.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vocÃªs': 'vocÃªs', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_2PLhitheithe_82.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'voces': 'voces', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_2PLhithe_83.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'voces': 'voces', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_xinganknr_84.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'xinganÃ©': 'xinganÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_xingankner_85.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'xinganÃ©': 'xinganÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_virp_86.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vir': 'vir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_virpe_87.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vir': 'vir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_vinhodeaatsaprik_88.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vinho_de_a': 'vinho_de_a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_vinhodeaatsaperik_89.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vinho_de_a': 'vinho_de_a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tabatingakatsari_90.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tabatingakatsare_91.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_seiotn_92.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'seio': 'seio', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_seiotne_93.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'seio': 'seio', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_saracurakuts_94.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'saracura': 'saracura', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_saracurakutse_95.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'saracura': 'saracura', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pupunhakaw_96.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pupunha': 'pupunha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pupunhakawe_97.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pupunha': 'pupunha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraquepequenoptsut_98.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_pe': 'poraque_pe', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraquepequenoptsute_99.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_pe': 'poraque_pe', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraquegrandett_100.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_gr': 'poraque_gr', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraquegrandette_101.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_gr': 'poraque_gr', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poraquegrandettett_102.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_gr': 'poraque_gr', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pirapitingakapup_103.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pirapiting': 'pirapiting', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pirapitingakapupe_104.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pirapiting': 'pirapiting', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poplanodemandiocakumkata_105.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pÃ£o_plano': 'pÃ£o_plano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_poplanodemandiocakumekata_106.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pÃ£o_plano': 'pÃ£o_plano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pacakajat_107.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'paca': 'paca', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pacakajate_108.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'paca': 'paca', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_macacopretoitikr_109.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'macaco_pre': 'macaco_pre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_macacopretoitikre_110.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'macaco_pre': 'macaco_pre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_lontraapasakae_111.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'lontra': 'lontra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_lontraapasaka_112.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'lontra': 'lontra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiarakptk_113.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiarakpetke_114.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cutiarakptkkpetke_115.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caiararakaet_116.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caiararakat_117.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_caiararakatkaet_118.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cabasne_119.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caba': 'caba', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cabasn_120.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caba': 'caba', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bicodoseiotenk_121.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bico_do_se': 'bico_do_se', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bicodoseiotnk_122.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bico_do_se': 'bico_do_se', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bemteviepitikiri_123.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bem_te_vi': 'bem_te_vi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bemteviipitikiri_124.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_assassinokukaneri_125.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'assassino': 'assassino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_assassinokukaniri_126.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'assassino': 'assassino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ariranhaeni_127.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ariranha': 'ariranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ariranhaini_128.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ariranha': 'ariranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_aatsaperiki_129.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'aÃ§aÃ­': 'aÃ§aÃ­', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_aatsaperikitsapiriki_130.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'aÃ§aÃ­': 'aÃ§aÃ­', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_aatsapiriki_131.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'aÃ§aÃ­': 'aÃ§aÃ­', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Presenadeescolas_132.set('fieldAliases', {'NM_ESCOLA': 'NM_ESCOLA', 'LATDEGDEC': 'LATDEGDEC', 'LONGDEGDEC': 'LONGDEGDEC', });
lyr_ComunidadesApurin_133.set('fieldAliases', {'NOME_': 'NOME_', 'LATDEGDEC': 'LATDEGDEC', 'LONGDEGDEC': 'LONGDEGDEC', });
lyr_TIsApurin_134.set('fieldAliases', {'nombre': 'nombre', });
lyr_2020_1.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2018_2.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2019_3.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2017_4.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2016_5.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_urucumpikiri_6.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'urucum': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_urucumapikiri_7.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'urucum': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_teradosaasarasarasara_8.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'terÃ§ado': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_teradosarasara_9.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'terÃ§ado': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_teradosaasara_10.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'terÃ§ado': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tamandubandeiraixuwaixiwa_11.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tamanduÃ¡': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tamandubandeiraexuwaexiwa_12.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tamanduÃ¡': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tamandubandeiraixuwa_13.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tamanduÃ¡': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tamandubandeiraixiwa_14.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tamanduÃ¡': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tamandubandeiraexuwa_15.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tamanduÃ¡': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tamandubandeiraexiwa_16.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tamanduÃ¡': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poraquptsuty_17.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poraqupetsty_18.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_mutumireka_19.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'mutum': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_mutumiraka_20.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'mutum': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_jacarkaiukyri_21.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'jacarÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_jacarkaikyri_22.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'jacarÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_guaupara_23.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'Ã¡gua': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_guaipura_24.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'Ã¡gua': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_guaiparaupara_25.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'Ã¡gua': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_guaipara_26.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'Ã¡gua': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_guapara_27.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'Ã¡gua': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_urubumajuri_28.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'urubu': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_urubumajuli_29.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'urubu': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_surucucukasururi_30.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'surucucu': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_surucucukasululi_31.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'surucucu': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_serbomarekari_32.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'ser_bom': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_serbomalekali_33.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'ser_bom': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_queixadairari_34.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'queixada': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_queixadairali_35.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'queixada': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pretopumamari_36.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'preto': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pretopumamali_37.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'preto': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_jenipapoymamari_38.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'jenipapo': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_jenipapoymamali_39.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'jenipapo': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_iraramapaanari_40.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'irara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_iraramapaanali_41.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'irara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_igarapkawaari_42.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'igarapÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_igarapkawaali_43.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'igarapÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_flechaprontaparaserusadakatsutali_44.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'flexa_pron': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_flechaprontaparaserusadakatsitari_45.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'flexa_pron': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cigarrakituri_46.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cigarra': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cigarrakituli_47.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cigarra': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cachorroanapanari_48.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cachorro': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cachorroanapanali_49.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cachorro': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_umhtyty_50.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'um': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_umhty_51.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'um': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_umty_52.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'um': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sexoimata_53.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'sexo': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sexohimata_54.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'sexo': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sapocaanaruhawiru_55.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'sapo_caana': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sapocaanaruawiru_56.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'sapo_caana': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sanguehereka_57.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'sangue': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sangueereka_58.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'sangue': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_piranhauma_59.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'piranha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_piranhahumauma_60.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'piranha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_piranhahuma_61.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'piranha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_onahkitikiti_62.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'onÃ§a': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_onahkiti_63.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'onÃ§a': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_onakiti_64.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'onÃ§a': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_meninohatakuruatakuru_65.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'menino': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_meninohatakuru_66.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'menino': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_meninoatakuru_67.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'menino': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_grandechefedosbichoshawitheawithe_68.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'grande_che': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_grandechefedosbichoshawithe_69.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'grande_che': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_grandechefedosbichosawithe_70.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'grande_che': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_floriwi_71.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'flor': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_florhiwi_72.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'flor': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_flautahpukyry_73.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bom': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_flautapukyry_74.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'flauta': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_coraohkipa_75.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'coraÃ§Ã£o': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_coraokipa_76.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'coraÃ§Ã£o': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_bomhereka_77.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bom': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_bomereka_78.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bom': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_abanohputa_79.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'abano': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_abanoputa_80.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'abano': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_2PLithe_81.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vocÃªs': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_2PLhitheithe_82.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'voces': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_2PLhithe_83.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'voces': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_xinganknr_84.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'xinganÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_xingankner_85.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'xinganÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_virp_86.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_virpe_87.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_vinhodeaatsaprik_88.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vinho_de_a': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_vinhodeaatsaperik_89.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vinho_de_a': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tabatingakatsari_90.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tabatinga': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tabatingakatsare_91.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tabatinga': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_seiotn_92.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'seio': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_seiotne_93.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'seio': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_saracurakuts_94.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'saracura': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_saracurakutse_95.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'saracura': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pupunhakaw_96.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pupunha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pupunhakawe_97.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pupunha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poraquepequenoptsut_98.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_pe': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poraquepequenoptsute_99.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_pe': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poraquegrandett_100.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_gr': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poraquegrandette_101.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_gr': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poraquegrandettett_102.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_gr': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pirapitingakapup_103.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pirapiting': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pirapitingakapupe_104.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pirapiting': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poplanodemandiocakumkata_105.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pÃ£o_plano': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_poplanodemandiocakumekata_106.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pÃ£o_plano': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pacakajat_107.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'paca': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pacakajate_108.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'paca': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_macacopretoitikr_109.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'macaco_pre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_macacopretoitikre_110.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'macaco_pre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_lontraapasakae_111.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'lontra': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_lontraapasaka_112.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'lontra': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cutiarakptk_113.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cutiara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cutiarakpetke_114.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cutiara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cutiarakptkkpetke_115.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cutiara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_caiararakaet_116.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cai_a_rara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_caiararakat_117.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cai_a_rara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_caiararakatkaet_118.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cai_a_rara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cabasne_119.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'caba': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_cabasn_120.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'caba': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_bicodoseiotenk_121.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bico_do_se': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_bicodoseiotnk_122.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bico_do_se': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_bemteviepitikiri_123.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bem_te_vi': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_bemteviipitikiri_124.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tabatinga': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_assassinokukaneri_125.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'assassino': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_assassinokukaniri_126.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'assassino': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ariranhaeni_127.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'ariranha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ariranhaini_128.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'ariranha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_aatsaperiki_129.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'aÃ§aÃ­': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_aatsaperikitsapiriki_130.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'aÃ§aÃ­': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_aatsapiriki_131.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'aÃ§aÃ­': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Presenadeescolas_132.set('fieldImages', {'NM_ESCOLA': 'TextEdit', 'LATDEGDEC': 'TextEdit', 'LONGDEGDEC': 'TextEdit', });
lyr_ComunidadesApurin_133.set('fieldImages', {'NOME_': 'TextEdit', 'LATDEGDEC': 'TextEdit', 'LONGDEGDEC': 'TextEdit', });
lyr_TIsApurin_134.set('fieldImages', {'nombre': 'TextEdit', });
lyr_2020_1.set('fieldLabels', {});
lyr_2018_2.set('fieldLabels', {});
lyr_2019_3.set('fieldLabels', {});
lyr_2017_4.set('fieldLabels', {});
lyr_2016_5.set('fieldLabels', {});
lyr_urucumpikiri_6.set('fieldLabels', {});
lyr_urucumapikiri_7.set('fieldLabels', {});
lyr_teradosaasarasarasara_8.set('fieldLabels', {});
lyr_teradosarasara_9.set('fieldLabels', {});
lyr_teradosaasara_10.set('fieldLabels', {});
lyr_tamandubandeiraixuwaixiwa_11.set('fieldLabels', {});
lyr_tamandubandeiraexuwaexiwa_12.set('fieldLabels', {});
lyr_tamandubandeiraixuwa_13.set('fieldLabels', {});
lyr_tamandubandeiraixiwa_14.set('fieldLabels', {});
lyr_tamandubandeiraexuwa_15.set('fieldLabels', {});
lyr_tamandubandeiraexiwa_16.set('fieldLabels', {});
lyr_poraquptsuty_17.set('fieldLabels', {});
lyr_poraqupetsty_18.set('fieldLabels', {});
lyr_mutumireka_19.set('fieldLabels', {});
lyr_mutumiraka_20.set('fieldLabels', {});
lyr_jacarkaiukyri_21.set('fieldLabels', {});
lyr_jacarkaikyri_22.set('fieldLabels', {});
lyr_guaupara_23.set('fieldLabels', {});
lyr_guaipura_24.set('fieldLabels', {});
lyr_guaiparaupara_25.set('fieldLabels', {});
lyr_guaipara_26.set('fieldLabels', {});
lyr_guapara_27.set('fieldLabels', {});
lyr_urubumajuri_28.set('fieldLabels', {});
lyr_urubumajuli_29.set('fieldLabels', {});
lyr_surucucukasururi_30.set('fieldLabels', {});
lyr_surucucukasululi_31.set('fieldLabels', {});
lyr_serbomarekari_32.set('fieldLabels', {});
lyr_serbomalekali_33.set('fieldLabels', {});
lyr_queixadairari_34.set('fieldLabels', {});
lyr_queixadairali_35.set('fieldLabels', {});
lyr_pretopumamari_36.set('fieldLabels', {});
lyr_pretopumamali_37.set('fieldLabels', {});
lyr_jenipapoymamari_38.set('fieldLabels', {});
lyr_jenipapoymamali_39.set('fieldLabels', {});
lyr_iraramapaanari_40.set('fieldLabels', {});
lyr_iraramapaanali_41.set('fieldLabels', {});
lyr_igarapkawaari_42.set('fieldLabels', {});
lyr_igarapkawaali_43.set('fieldLabels', {});
lyr_flechaprontaparaserusadakatsutali_44.set('fieldLabels', {});
lyr_flechaprontaparaserusadakatsitari_45.set('fieldLabels', {});
lyr_cigarrakituri_46.set('fieldLabels', {});
lyr_cigarrakituli_47.set('fieldLabels', {});
lyr_cachorroanapanari_48.set('fieldLabels', {});
lyr_cachorroanapanali_49.set('fieldLabels', {});
lyr_umhtyty_50.set('fieldLabels', {});
lyr_umhty_51.set('fieldLabels', {});
lyr_umty_52.set('fieldLabels', {});
lyr_sexoimata_53.set('fieldLabels', {});
lyr_sexohimata_54.set('fieldLabels', {});
lyr_sapocaanaruhawiru_55.set('fieldLabels', {});
lyr_sapocaanaruawiru_56.set('fieldLabels', {});
lyr_sanguehereka_57.set('fieldLabels', {});
lyr_sangueereka_58.set('fieldLabels', {});
lyr_piranhauma_59.set('fieldLabels', {});
lyr_piranhahumauma_60.set('fieldLabels', {});
lyr_piranhahuma_61.set('fieldLabels', {});
lyr_onahkitikiti_62.set('fieldLabels', {});
lyr_onahkiti_63.set('fieldLabels', {});
lyr_onakiti_64.set('fieldLabels', {});
lyr_meninohatakuruatakuru_65.set('fieldLabels', {});
lyr_meninohatakuru_66.set('fieldLabels', {});
lyr_meninoatakuru_67.set('fieldLabels', {});
lyr_grandechefedosbichoshawitheawithe_68.set('fieldLabels', {});
lyr_grandechefedosbichoshawithe_69.set('fieldLabels', {});
lyr_grandechefedosbichosawithe_70.set('fieldLabels', {});
lyr_floriwi_71.set('fieldLabels', {});
lyr_florhiwi_72.set('fieldLabels', {});
lyr_flautahpukyry_73.set('fieldLabels', {});
lyr_flautapukyry_74.set('fieldLabels', {});
lyr_coraohkipa_75.set('fieldLabels', {});
lyr_coraokipa_76.set('fieldLabels', {});
lyr_bomhereka_77.set('fieldLabels', {});
lyr_bomereka_78.set('fieldLabels', {});
lyr_abanohputa_79.set('fieldLabels', {});
lyr_abanoputa_80.set('fieldLabels', {});
lyr_2PLithe_81.set('fieldLabels', {});
lyr_2PLhitheithe_82.set('fieldLabels', {});
lyr_2PLhithe_83.set('fieldLabels', {});
lyr_xinganknr_84.set('fieldLabels', {});
lyr_xingankner_85.set('fieldLabels', {});
lyr_virp_86.set('fieldLabels', {});
lyr_virpe_87.set('fieldLabels', {});
lyr_vinhodeaatsaprik_88.set('fieldLabels', {});
lyr_vinhodeaatsaperik_89.set('fieldLabels', {});
lyr_tabatingakatsari_90.set('fieldLabels', {});
lyr_tabatingakatsare_91.set('fieldLabels', {});
lyr_seiotn_92.set('fieldLabels', {});
lyr_seiotne_93.set('fieldLabels', {});
lyr_saracurakuts_94.set('fieldLabels', {});
lyr_saracurakutse_95.set('fieldLabels', {});
lyr_pupunhakaw_96.set('fieldLabels', {});
lyr_pupunhakawe_97.set('fieldLabels', {});
lyr_poraquepequenoptsut_98.set('fieldLabels', {});
lyr_poraquepequenoptsute_99.set('fieldLabels', {});
lyr_poraquegrandett_100.set('fieldLabels', {});
lyr_poraquegrandette_101.set('fieldLabels', {});
lyr_poraquegrandettett_102.set('fieldLabels', {});
lyr_pirapitingakapup_103.set('fieldLabels', {});
lyr_pirapitingakapupe_104.set('fieldLabels', {});
lyr_poplanodemandiocakumkata_105.set('fieldLabels', {});
lyr_poplanodemandiocakumekata_106.set('fieldLabels', {});
lyr_pacakajat_107.set('fieldLabels', {});
lyr_pacakajate_108.set('fieldLabels', {});
lyr_macacopretoitikr_109.set('fieldLabels', {});
lyr_macacopretoitikre_110.set('fieldLabels', {});
lyr_lontraapasakae_111.set('fieldLabels', {});
lyr_lontraapasaka_112.set('fieldLabels', {});
lyr_cutiarakptk_113.set('fieldLabels', {});
lyr_cutiarakpetke_114.set('fieldLabels', {});
lyr_cutiarakptkkpetke_115.set('fieldLabels', {});
lyr_caiararakaet_116.set('fieldLabels', {});
lyr_caiararakat_117.set('fieldLabels', {});
lyr_caiararakatkaet_118.set('fieldLabels', {});
lyr_cabasne_119.set('fieldLabels', {});
lyr_cabasn_120.set('fieldLabels', {});
lyr_bicodoseiotenk_121.set('fieldLabels', {});
lyr_bicodoseiotnk_122.set('fieldLabels', {});
lyr_bemteviepitikiri_123.set('fieldLabels', {});
lyr_bemteviipitikiri_124.set('fieldLabels', {});
lyr_assassinokukaneri_125.set('fieldLabels', {});
lyr_assassinokukaniri_126.set('fieldLabels', {});
lyr_ariranhaeni_127.set('fieldLabels', {});
lyr_ariranhaini_128.set('fieldLabels', {});
lyr_aatsaperiki_129.set('fieldLabels', {});
lyr_aatsaperikitsapiriki_130.set('fieldLabels', {});
lyr_aatsapiriki_131.set('fieldLabels', {});
lyr_Presenadeescolas_132.set('fieldLabels', {'NM_ESCOLA': 'no label', 'LATDEGDEC': 'no label', 'LONGDEGDEC': 'no label', });
lyr_ComunidadesApurin_133.set('fieldLabels', {'NOME_': 'no label', 'LATDEGDEC': 'no label', 'LONGDEGDEC': 'no label', });
lyr_TIsApurin_134.set('fieldLabels', {'nombre': 'no label', });
lyr_TIsApurin_134.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});