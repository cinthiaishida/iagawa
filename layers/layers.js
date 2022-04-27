var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_2020_0 = new ol.format.GeoJSON();
var features_2020_0 = format_2020_0.readFeatures(json_2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2020_0.addFeatures(features_2020_0);var lyr_2020_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_0, 
                style: style_2020_0,
                title: '<img src="styles/legend/2020_0.png" /> 2020'
            });var format_2018_1 = new ol.format.GeoJSON();
var features_2018_1 = format_2018_1.readFeatures(json_2018_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2018_1.addFeatures(features_2018_1);var lyr_2018_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018_1, 
                style: style_2018_1,
                title: '<img src="styles/legend/2018_1.png" /> 2018'
            });var format_2019_2 = new ol.format.GeoJSON();
var features_2019_2 = format_2019_2.readFeatures(json_2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2019_2.addFeatures(features_2019_2);var lyr_2019_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_2, 
                style: style_2019_2,
                title: '<img src="styles/legend/2019_2.png" /> 2019'
            });var format_2017_3 = new ol.format.GeoJSON();
var features_2017_3 = format_2017_3.readFeatures(json_2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2017_3.addFeatures(features_2017_3);var lyr_2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017_3, 
                style: style_2017_3,
                title: '<img src="styles/legend/2017_3.png" /> 2017'
            });var format_2016_4 = new ol.format.GeoJSON();
var features_2016_4 = format_2016_4.readFeatures(json_2016_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2016_4.addFeatures(features_2016_4);var lyr_2016_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_4, 
                style: style_2016_4,
                title: '<img src="styles/legend/2016_4.png" /> 2016'
            });var format_TerrasindgenasApurin_5 = new ol.format.GeoJSON();
var features_TerrasindgenasApurin_5 = format_TerrasindgenasApurin_5.readFeatures(json_TerrasindgenasApurin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrasindgenasApurin_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TerrasindgenasApurin_5.addFeatures(features_TerrasindgenasApurin_5);var lyr_TerrasindgenasApurin_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TerrasindgenasApurin_5, 
                style: style_TerrasindgenasApurin_5,
                title: '<img src="styles/legend/TerrasindgenasApurin_5.png" /> Terras indígenas Apurinã'
            });var format_knr_6 = new ol.format.GeoJSON();
var features_knr_6 = format_knr_6.readFeatures(json_knr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_knr_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_knr_6.addFeatures(features_knr_6);var lyr_knr_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_knr_6, 
                style: style_knr_6,
                title: '<img src="styles/legend/knr_6.png" /> kɨ̃ːnɨrɨ'
            });var format_kner_7 = new ol.format.GeoJSON();
var features_kner_7 = format_kner_7.readFeatures(json_kner_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kner_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kner_7.addFeatures(features_kner_7);var lyr_kner_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kner_7, 
                style: style_kner_7,
                title: '<img src="styles/legend/kner_7.png" /> kẽːnerɨ'
            });var format_p_8 = new ol.format.GeoJSON();
var features_p_8 = format_p_8.readFeatures(json_p_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_p_8.addFeatures(features_p_8);var lyr_p_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_p_8, 
                style: style_p_8,
                title: '<img src="styles/legend/p_8.png" /> ɨ̃pɨ'
            });var format_pe_9 = new ol.format.GeoJSON();
var features_pe_9 = format_pe_9.readFeatures(json_pe_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pe_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pe_9.addFeatures(features_pe_9);var lyr_pe_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pe_9, 
                style: style_pe_9,
                title: '<img src="styles/legend/pe_9.png" /> ɨ̃pe'
            });var format_tsaprik_10 = new ol.format.GeoJSON();
var features_tsaprik_10 = format_tsaprik_10.readFeatures(json_tsaprik_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsaprik_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tsaprik_10.addFeatures(features_tsaprik_10);var lyr_tsaprik_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tsaprik_10, 
                style: style_tsaprik_10,
                title: '<img src="styles/legend/tsaprik_10.png" /> tsapɨrikɨ̃ã'
            });var format_tsaperik_11 = new ol.format.GeoJSON();
var features_tsaperik_11 = format_tsaperik_11.readFeatures(json_tsaperik_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsaperik_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tsaperik_11.addFeatures(features_tsaperik_11);var lyr_tsaperik_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tsaperik_11, 
                style: style_tsaperik_11,
                title: '<img src="styles/legend/tsaperik_11.png" /> tsaperikɨ̃ã'
            });var format_katsari_12 = new ol.format.GeoJSON();
var features_katsari_12 = format_katsari_12.readFeatures(json_katsari_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_katsari_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_katsari_12.addFeatures(features_katsari_12);var lyr_katsari_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_katsari_12, 
                style: style_katsari_12,
                title: '<img src="styles/legend/katsari_12.png" /> katsari'
            });var format_katsare_13 = new ol.format.GeoJSON();
var features_katsare_13 = format_katsare_13.readFeatures(json_katsare_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_katsare_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_katsare_13.addFeatures(features_katsare_13);var lyr_katsare_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_katsare_13, 
                style: style_katsare_13,
                title: '<img src="styles/legend/katsare_13.png" /> katsare'
            });var format_tn_14 = new ol.format.GeoJSON();
var features_tn_14 = format_tn_14.readFeatures(json_tn_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tn_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tn_14.addFeatures(features_tn_14);var lyr_tn_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tn_14, 
                style: style_tn_14,
                title: '<img src="styles/legend/tn_14.png" /> tɨnɨ'
            });var format_tne_15 = new ol.format.GeoJSON();
var features_tne_15 = format_tne_15.readFeatures(json_tne_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tne_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tne_15.addFeatures(features_tne_15);var lyr_tne_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tne_15, 
                style: style_tne_15,
                title: '<img src="styles/legend/tne_15.png" /> tẽne'
            });var format_kuts_16 = new ol.format.GeoJSON();
var features_kuts_16 = format_kuts_16.readFeatures(json_kuts_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuts_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kuts_16.addFeatures(features_kuts_16);var lyr_kuts_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kuts_16, 
                style: style_kuts_16,
                title: '<img src="styles/legend/kuts_16.png" /> kutsɨɾɨ'
            });var format_kutse_17 = new ol.format.GeoJSON();
var features_kutse_17 = format_kutse_17.readFeatures(json_kutse_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kutse_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kutse_17.addFeatures(features_kutse_17);var lyr_kutse_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kutse_17, 
                style: style_kutse_17,
                title: '<img src="styles/legend/kutse_17.png" /> kutseɾɨ'
            });var format_kaw_18 = new ol.format.GeoJSON();
var features_kaw_18 = format_kaw_18.readFeatures(json_kaw_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kaw_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kaw_18.addFeatures(features_kaw_18);var lyr_kaw_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kaw_18, 
                style: style_kaw_18,
                title: '<img src="styles/legend/kaw_18.png" /> kawɨɾɨ'
            });var format_kawe_19 = new ol.format.GeoJSON();
var features_kawe_19 = format_kawe_19.readFeatures(json_kawe_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kawe_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kawe_19.addFeatures(features_kawe_19);var lyr_kawe_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kawe_19, 
                style: style_kawe_19,
                title: '<img src="styles/legend/kawe_19.png" /> kaweɾɨ'
            });var format_ptsut_20 = new ol.format.GeoJSON();
var features_ptsut_20 = format_ptsut_20.readFeatures(json_ptsut_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptsut_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ptsut_20.addFeatures(features_ptsut_20);var lyr_ptsut_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ptsut_20, 
                style: style_ptsut_20,
                title: '<img src="styles/legend/ptsut_20.png" /> pẽtsutɨ'
            });var format_ptsute_21 = new ol.format.GeoJSON();
var features_ptsute_21 = format_ptsute_21.readFeatures(json_ptsute_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptsute_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ptsute_21.addFeatures(features_ptsute_21);var lyr_ptsute_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ptsute_21, 
                style: style_ptsute_21,
                title: '<img src="styles/legend/ptsute_21.png" /> pẽtsute'
            });var format_tt_22 = new ol.format.GeoJSON();
var features_tt_22 = format_tt_22.readFeatures(json_tt_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tt_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tt_22.addFeatures(features_tt_22);var lyr_tt_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tt_22, 
                style: style_tt_22,
                title: '<img src="styles/legend/tt_22.png" /> tẽtɨɾɨ'
            });var format_tte_23 = new ol.format.GeoJSON();
var features_tte_23 = format_tte_23.readFeatures(json_tte_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tte_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tte_23.addFeatures(features_tte_23);var lyr_tte_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tte_23, 
                style: style_tte_23,
                title: '<img src="styles/legend/tte_23.png" /> tẽteɾɨ'
            });var format_ttett_24 = new ol.format.GeoJSON();
var features_ttett_24 = format_ttett_24.readFeatures(json_ttett_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ttett_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ttett_24.addFeatures(features_ttett_24);var lyr_ttett_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ttett_24, 
                style: style_ttett_24,
                title: '<img src="styles/legend/ttett_24.png" /> tẽteɾɨ/tẽtɨɾɨ'
            });var format_kapup_25 = new ol.format.GeoJSON();
var features_kapup_25 = format_kapup_25.readFeatures(json_kapup_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kapup_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kapup_25.addFeatures(features_kapup_25);var lyr_kapup_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kapup_25, 
                style: style_kapup_25,
                title: '<img src="styles/legend/kapup_25.png" /> kapupɨɾɨ'
            });var format_kapupe_26 = new ol.format.GeoJSON();
var features_kapupe_26 = format_kapupe_26.readFeatures(json_kapupe_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kapupe_26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kapupe_26.addFeatures(features_kapupe_26);var lyr_kapupe_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kapupe_26, 
                style: style_kapupe_26,
                title: '<img src="styles/legend/kapupe_26.png" /> kapupeɾɨ'
            });var format_kumkata_27 = new ol.format.GeoJSON();
var features_kumkata_27 = format_kumkata_27.readFeatures(json_kumkata_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kumkata_27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kumkata_27.addFeatures(features_kumkata_27);var lyr_kumkata_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kumkata_27, 
                style: style_kumkata_27,
                title: '<img src="styles/legend/kumkata_27.png" /> kumɨɾɨkata'
            });var format_kumekata_28 = new ol.format.GeoJSON();
var features_kumekata_28 = format_kumekata_28.readFeatures(json_kumekata_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kumekata_28 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kumekata_28.addFeatures(features_kumekata_28);var lyr_kumekata_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kumekata_28, 
                style: style_kumekata_28,
                title: '<img src="styles/legend/kumekata_28.png" /> kumeɾɨkata'
            });var format_kajat_29 = new ol.format.GeoJSON();
var features_kajat_29 = format_kajat_29.readFeatures(json_kajat_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kajat_29 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kajat_29.addFeatures(features_kajat_29);var lyr_kajat_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kajat_29, 
                style: style_kajat_29,
                title: '<img src="styles/legend/kajat_29.png" /> kajatɨ'
            });var format_kajate_30 = new ol.format.GeoJSON();
var features_kajate_30 = format_kajate_30.readFeatures(json_kajate_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kajate_30 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kajate_30.addFeatures(features_kajate_30);var lyr_kajate_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kajate_30, 
                style: style_kajate_30,
                title: '<img src="styles/legend/kajate_30.png" /> kajate'
            });var format_itikr_31 = new ol.format.GeoJSON();
var features_itikr_31 = format_itikr_31.readFeatures(json_itikr_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_itikr_31 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_itikr_31.addFeatures(features_itikr_31);var lyr_itikr_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_itikr_31, 
                style: style_itikr_31,
                title: '<img src="styles/legend/itikr_31.png" /> itʃikɨrɨ'
            });var format_itikre_32 = new ol.format.GeoJSON();
var features_itikre_32 = format_itikre_32.readFeatures(json_itikre_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_itikre_32 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_itikre_32.addFeatures(features_itikre_32);var lyr_itikre_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_itikre_32, 
                style: style_itikre_32,
                title: '<img src="styles/legend/itikre_32.png" /> itʃikɨre'
            });var format_apasakae_33 = new ol.format.GeoJSON();
var features_apasakae_33 = format_apasakae_33.readFeatures(json_apasakae_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apasakae_33 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_apasakae_33.addFeatures(features_apasakae_33);var lyr_apasakae_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_apasakae_33, 
                style: style_apasakae_33,
                title: '<img src="styles/legend/apasakae_33.png" /> apasakaɾe'
            });var format_apasaka_34 = new ol.format.GeoJSON();
var features_apasaka_34 = format_apasaka_34.readFeatures(json_apasaka_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apasaka_34 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_apasaka_34.addFeatures(features_apasaka_34);var lyr_apasaka_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_apasaka_34, 
                style: style_apasaka_34,
                title: '<img src="styles/legend/apasaka_34.png" /> apasakaɾɨ'
            });var format_kptk_35 = new ol.format.GeoJSON();
var features_kptk_35 = format_kptk_35.readFeatures(json_kptk_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kptk_35 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kptk_35.addFeatures(features_kptk_35);var lyr_kptk_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kptk_35, 
                style: style_kptk_35,
                title: '<img src="styles/legend/kptk_35.png" /> kɨpɨtɨ(kɨ)'
            });var format_kpetke_36 = new ol.format.GeoJSON();
var features_kpetke_36 = format_kpetke_36.readFeatures(json_kpetke_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kpetke_36 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kpetke_36.addFeatures(features_kpetke_36);var lyr_kpetke_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kpetke_36, 
                style: style_kpetke_36,
                title: '<img src="styles/legend/kpetke_36.png" /> kɨpetɨ(ke)'
            });var format_kptkkpetke_37 = new ol.format.GeoJSON();
var features_kptkkpetke_37 = format_kptkkpetke_37.readFeatures(json_kptkkpetke_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kptkkpetke_37 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kptkkpetke_37.addFeatures(features_kptkkpetke_37);var lyr_kptkkpetke_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kptkkpetke_37, 
                style: style_kptkkpetke_37,
                title: '<img src="styles/legend/kptkkpetke_37.png" /> kɨpɨtɨ(kɨ)/kɨpetɨ(ke)'
            });var format_kaet_38 = new ol.format.GeoJSON();
var features_kaet_38 = format_kaet_38.readFeatures(json_kaet_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kaet_38 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kaet_38.addFeatures(features_kaet_38);var lyr_kaet_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kaet_38, 
                style: style_kaet_38,
                title: '<img src="styles/legend/kaet_38.png" /> kaɾetɨ'
            });var format_kat_39 = new ol.format.GeoJSON();
var features_kat_39 = format_kat_39.readFeatures(json_kat_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kat_39 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kat_39.addFeatures(features_kat_39);var lyr_kat_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kat_39, 
                style: style_kat_39,
                title: '<img src="styles/legend/kat_39.png" /> kaɾɨtɨ'
            });var format_katkaet_40 = new ol.format.GeoJSON();
var features_katkaet_40 = format_katkaet_40.readFeatures(json_katkaet_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_katkaet_40 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_katkaet_40.addFeatures(features_katkaet_40);var lyr_katkaet_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_katkaet_40, 
                style: style_katkaet_40,
                title: '<img src="styles/legend/katkaet_40.png" /> kaɾɨtɨ/kaɾetɨ'
            });var format_sne_41 = new ol.format.GeoJSON();
var features_sne_41 = format_sne_41.readFeatures(json_sne_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sne_41 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sne_41.addFeatures(features_sne_41);var lyr_sne_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sne_41, 
                style: style_sne_41,
                title: '<img src="styles/legend/sne_41.png" /> sãne'
            });var format_sn_42 = new ol.format.GeoJSON();
var features_sn_42 = format_sn_42.readFeatures(json_sn_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sn_42 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sn_42.addFeatures(features_sn_42);var lyr_sn_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sn_42, 
                style: style_sn_42,
                title: '<img src="styles/legend/sn_42.png" /> sãnɨ'
            });var format_tenk_43 = new ol.format.GeoJSON();
var features_tenk_43 = format_tenk_43.readFeatures(json_tenk_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tenk_43 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tenk_43.addFeatures(features_tenk_43);var lyr_tenk_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tenk_43, 
                style: style_tenk_43,
                title: '<img src="styles/legend/tenk_43.png" /> tenɨkɨ'
            });var format_tnk_44 = new ol.format.GeoJSON();
var features_tnk_44 = format_tnk_44.readFeatures(json_tnk_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tnk_44 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tnk_44.addFeatures(features_tnk_44);var lyr_tnk_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tnk_44, 
                style: style_tnk_44,
                title: '<img src="styles/legend/tnk_44.png" /> tɨnɨkɨ'
            });var format_epitikiri_45 = new ol.format.GeoJSON();
var features_epitikiri_45 = format_epitikiri_45.readFeatures(json_epitikiri_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_epitikiri_45 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_epitikiri_45.addFeatures(features_epitikiri_45);var lyr_epitikiri_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_epitikiri_45, 
                style: style_epitikiri_45,
                title: '<img src="styles/legend/epitikiri_45.png" /> epitikiri'
            });var format_ipitikiri_46 = new ol.format.GeoJSON();
var features_ipitikiri_46 = format_ipitikiri_46.readFeatures(json_ipitikiri_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ipitikiri_46 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ipitikiri_46.addFeatures(features_ipitikiri_46);var lyr_ipitikiri_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ipitikiri_46, 
                style: style_ipitikiri_46,
                title: '<img src="styles/legend/ipitikiri_46.png" /> ipitikiri'
            });var format_kukaneri_47 = new ol.format.GeoJSON();
var features_kukaneri_47 = format_kukaneri_47.readFeatures(json_kukaneri_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kukaneri_47 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kukaneri_47.addFeatures(features_kukaneri_47);var lyr_kukaneri_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kukaneri_47, 
                style: style_kukaneri_47,
                title: '<img src="styles/legend/kukaneri_47.png" /> kukaneri'
            });var format_kukaniri_48 = new ol.format.GeoJSON();
var features_kukaniri_48 = format_kukaniri_48.readFeatures(json_kukaniri_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kukaniri_48 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kukaniri_48.addFeatures(features_kukaniri_48);var lyr_kukaniri_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kukaniri_48, 
                style: style_kukaniri_48,
                title: '<img src="styles/legend/kukaniri_48.png" /> kukaniri'
            });var format_eni_49 = new ol.format.GeoJSON();
var features_eni_49 = format_eni_49.readFeatures(json_eni_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eni_49 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_eni_49.addFeatures(features_eni_49);var lyr_eni_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eni_49, 
                style: style_eni_49,
                title: '<img src="styles/legend/eni_49.png" /> eni'
            });var format_ini_50 = new ol.format.GeoJSON();
var features_ini_50 = format_ini_50.readFeatures(json_ini_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ini_50 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ini_50.addFeatures(features_ini_50);var lyr_ini_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ini_50, 
                style: style_ini_50,
                title: '<img src="styles/legend/ini_50.png" /> ini'
            });var format_tsaperiki_51 = new ol.format.GeoJSON();
var features_tsaperiki_51 = format_tsaperiki_51.readFeatures(json_tsaperiki_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsaperiki_51 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tsaperiki_51.addFeatures(features_tsaperiki_51);var lyr_tsaperiki_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tsaperiki_51, 
                style: style_tsaperiki_51,
                title: '<img src="styles/legend/tsaperiki_51.png" /> tsaperiki'
            });var format_tsaperikitsapiriki_52 = new ol.format.GeoJSON();
var features_tsaperikitsapiriki_52 = format_tsaperikitsapiriki_52.readFeatures(json_tsaperikitsapiriki_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsaperikitsapiriki_52 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tsaperikitsapiriki_52.addFeatures(features_tsaperikitsapiriki_52);var lyr_tsaperikitsapiriki_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tsaperikitsapiriki_52, 
                style: style_tsaperikitsapiriki_52,
                title: '<img src="styles/legend/tsaperikitsapiriki_52.png" /> tsaperiki/tsapiriki'
            });var format_tsapiriki_53 = new ol.format.GeoJSON();
var features_tsapiriki_53 = format_tsapiriki_53.readFeatures(json_tsapiriki_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsapiriki_53 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tsapiriki_53.addFeatures(features_tsapiriki_53);var lyr_tsapiriki_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tsapiriki_53, 
                style: style_tsapiriki_53,
                title: '<img src="styles/legend/tsapiriki_53.png" /> tsapiriki'
            });
var group_poplanodemandioca = new ol.layer.Group({
                                layers: [lyr_kumkata_27,lyr_kumekata_28,],
                                title: "pão plano de mandioca"});
var group_caba = new ol.layer.Group({
                                layers: [lyr_sne_41,lyr_sn_42,],
                                title: "caba"});
var group_vir = new ol.layer.Group({
                                layers: [lyr_p_8,lyr_pe_9,],
                                title: "vir"});
var group_pupunha = new ol.layer.Group({
                                layers: [lyr_kaw_18,lyr_kawe_19,],
                                title: "pupunha"});
var group_Desmatamento = new ol.layer.Group({
                                layers: [lyr_2020_0,lyr_2018_1,lyr_2019_2,lyr_2017_3,lyr_2016_4,],
                                title: "Desmatamento"});
var group_xingan = new ol.layer.Group({
                                layers: [lyr_knr_6,lyr_kner_7,],
                                title: "xingané"});
var group_bemtevi = new ol.layer.Group({
                                layers: [lyr_epitikiri_45,lyr_ipitikiri_46,],
                                title: "bem-te-vi"});
var group_ariranha = new ol.layer.Group({
                                layers: [lyr_eni_49,lyr_ini_50,],
                                title: "ariranha"});
var group_saracura = new ol.layer.Group({
                                layers: [lyr_kuts_16,lyr_kutse_17,],
                                title: "saracura"});
var group_vinhodeaa = new ol.layer.Group({
                                layers: [lyr_tsaprik_10,lyr_tsaperik_11,],
                                title: "vinho de açaí"});
var group_pirapitinga = new ol.layer.Group({
                                layers: [lyr_kapup_25,lyr_kapupe_26,],
                                title: "pirapitinga"});
var group_poraquepequeno = new ol.layer.Group({
                                layers: [lyr_ptsut_20,lyr_ptsute_21,],
                                title: "poraque pequeno"});
var group_macacopreto = new ol.layer.Group({
                                layers: [lyr_itikr_31,lyr_itikre_32,],
                                title: "macaco preto"});
var group_bicodoseio = new ol.layer.Group({
                                layers: [lyr_tenk_43,lyr_tnk_44,],
                                title: "bico do seio"});
var group_aai = new ol.layer.Group({
                                layers: [lyr_tsaperiki_51,lyr_tsaperikitsapiriki_52,lyr_tsapiriki_53,],
                                title: "açai"});
var group_lontra = new ol.layer.Group({
                                layers: [lyr_apasakae_33,lyr_apasaka_34,],
                                title: "lontra"});
var group_caiarara = new ol.layer.Group({
                                layers: [lyr_kaet_38,lyr_kat_39,lyr_katkaet_40,],
                                title: "cai(a)rara"});
var group_poraquegrande = new ol.layer.Group({
                                layers: [lyr_tt_22,lyr_tte_23,lyr_ttett_24,],
                                title: "poraque grande"});
var group_cutiara = new ol.layer.Group({
                                layers: [lyr_kptk_35,lyr_kpetke_36,lyr_kptkkpetke_37,],
                                title: "cutiara"});
var group_paca = new ol.layer.Group({
                                layers: [lyr_kajat_29,lyr_kajate_30,],
                                title: "paca"});
var group_Localidades = new ol.layer.Group({
                                layers: [lyr_TerrasindgenasApurin_5,],
                                title: "Localidades"});
var group_seio = new ol.layer.Group({
                                layers: [lyr_tn_14,lyr_tne_15,],
                                title: "seio"});
var group_tabatinga = new ol.layer.Group({
                                layers: [lyr_katsari_12,lyr_katsare_13,],
                                title: "tabatinga"});
var group_assassino = new ol.layer.Group({
                                layers: [lyr_kukaneri_47,lyr_kukaniri_48,],
                                title: "assassino"});

lyr_2020_0.setVisible(true);lyr_2018_1.setVisible(true);lyr_2019_2.setVisible(true);lyr_2017_3.setVisible(true);lyr_2016_4.setVisible(true);lyr_TerrasindgenasApurin_5.setVisible(true);lyr_knr_6.setVisible(false);lyr_kner_7.setVisible(false);lyr_p_8.setVisible(false);lyr_pe_9.setVisible(false);lyr_tsaprik_10.setVisible(false);lyr_tsaperik_11.setVisible(false);lyr_katsari_12.setVisible(false);lyr_katsare_13.setVisible(false);lyr_tn_14.setVisible(false);lyr_tne_15.setVisible(false);lyr_kuts_16.setVisible(false);lyr_kutse_17.setVisible(false);lyr_kaw_18.setVisible(false);lyr_kawe_19.setVisible(false);lyr_ptsut_20.setVisible(false);lyr_ptsute_21.setVisible(false);lyr_tt_22.setVisible(false);lyr_tte_23.setVisible(false);lyr_ttett_24.setVisible(false);lyr_kapup_25.setVisible(false);lyr_kapupe_26.setVisible(false);lyr_kumkata_27.setVisible(false);lyr_kumekata_28.setVisible(false);lyr_kajat_29.setVisible(false);lyr_kajate_30.setVisible(false);lyr_itikr_31.setVisible(false);lyr_itikre_32.setVisible(false);lyr_apasakae_33.setVisible(false);lyr_apasaka_34.setVisible(false);lyr_kptk_35.setVisible(false);lyr_kpetke_36.setVisible(false);lyr_kptkkpetke_37.setVisible(false);lyr_kaet_38.setVisible(false);lyr_kat_39.setVisible(false);lyr_katkaet_40.setVisible(false);lyr_sne_41.setVisible(false);lyr_sn_42.setVisible(false);lyr_tenk_43.setVisible(false);lyr_tnk_44.setVisible(false);lyr_epitikiri_45.setVisible(false);lyr_ipitikiri_46.setVisible(false);lyr_kukaneri_47.setVisible(false);lyr_kukaniri_48.setVisible(false);lyr_eni_49.setVisible(false);lyr_ini_50.setVisible(false);lyr_tsaperiki_51.setVisible(false);lyr_tsaperikitsapiriki_52.setVisible(false);lyr_tsapiriki_53.setVisible(false);
var layersList = [baseLayer,group_Desmatamento,group_Localidades,group_xingan,group_vir,group_vinhodeaa,group_tabatinga,group_seio,group_saracura,group_pupunha,group_poraquepequeno,group_poraquegrande,group_pirapitinga,group_poplanodemandioca,group_paca,group_macacopreto,group_lontra,group_cutiara,group_caiarara,group_caba,group_bicodoseio,group_bemtevi,group_assassino,group_ariranha,group_aai];
lyr_2020_0.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2018_1.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2019_2.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2017_3.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_2016_4.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_TerrasindgenasApurin_5.set('fieldAliases', {'pais': 'pais', 'categoria': 'categoria', 'nombre': 'nombre', 'status': 'status', 'etnias': 'etnias', 'no_habitan': 'no_habitan', 'fuente_dat': 'fuente_dat', 'norma': 'norma', 'fecha_norm': 'fecha_norm', 'fecha_ulti': 'fecha_ulti', 'area_sig_h': 'area_sig_h', 'institucio': 'institucio', 'fuente': 'fuente', 'fecha_atua': 'fecha_atua', 'leyenda': 'leyenda', 'codigo_tis': 'codigo_tis', });
lyr_knr_6.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'xinganÃ©': 'xinganÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kner_7.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'xinganÃ©': 'xinganÃ©', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_p_8.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vir': 'vir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_pe_9.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vir': 'vir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tsaprik_10.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vinho_de_a': 'vinho_de_a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tsaperik_11.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'vinho_de_a': 'vinho_de_a', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_katsari_12.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_katsare_13.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tn_14.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'seio': 'seio', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tne_15.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'seio': 'seio', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kuts_16.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'saracura': 'saracura', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kutse_17.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'saracura': 'saracura', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kaw_18.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pupunha': 'pupunha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kawe_19.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pupunha': 'pupunha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ptsut_20.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_pe': 'poraque_pe', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ptsute_21.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_pe': 'poraque_pe', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tt_22.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_gr': 'poraque_gr', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tte_23.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_gr': 'poraque_gr', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ttett_24.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'poraque_gr': 'poraque_gr', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kapup_25.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pirapiting': 'pirapiting', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kapupe_26.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pirapiting': 'pirapiting', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kumkata_27.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pÃ£o_plano': 'pÃ£o_plano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kumekata_28.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'pÃ£o_plano': 'pÃ£o_plano', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kajat_29.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'paca': 'paca', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kajate_30.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'paca': 'paca', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_itikr_31.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'macaco_pre': 'macaco_pre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_itikre_32.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'macaco_pre': 'macaco_pre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_apasakae_33.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'lontra': 'lontra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_apasaka_34.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'lontra': 'lontra', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kptk_35.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kpetke_36.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kptkkpetke_37.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cutiara': 'cutiara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kaet_38.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kat_39.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_katkaet_40.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'cai_a_rara': 'cai_a_rara', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sne_41.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caba': 'caba', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sn_42.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'caba': 'caba', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tenk_43.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bico_do_se': 'bico_do_se', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tnk_44.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bico_do_se': 'bico_do_se', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_epitikiri_45.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'bem_te_vi': 'bem_te_vi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ipitikiri_46.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'tabatinga': 'tabatinga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kukaneri_47.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'assassino': 'assassino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_kukaniri_48.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'assassino': 'assassino', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_eni_49.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ariranha': 'ariranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ini_50.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'ariranha': 'ariranha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tsaperiki_51.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'aÃ§aÃ­': 'aÃ§aÃ­', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tsaperikitsapiriki_52.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'aÃ§aÃ­': 'aÃ§aÃ­', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_tsapiriki_53.set('fieldAliases', {'ID': 'ID', 'TI': 'TI', 'aÃ§aÃ­': 'aÃ§aÃ­', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_2020_0.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2018_1.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2019_2.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2017_3.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_2016_4.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_TerrasindgenasApurin_5.set('fieldImages', {'pais': 'TextEdit', 'categoria': 'TextEdit', 'nombre': 'TextEdit', 'status': 'TextEdit', 'etnias': 'TextEdit', 'no_habitan': 'TextEdit', 'fuente_dat': 'TextEdit', 'norma': 'TextEdit', 'fecha_norm': 'TextEdit', 'fecha_ulti': 'TextEdit', 'area_sig_h': 'TextEdit', 'institucio': 'TextEdit', 'fuente': 'TextEdit', 'fecha_atua': 'TextEdit', 'leyenda': 'TextEdit', 'codigo_tis': 'TextEdit', });
lyr_knr_6.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'xinganÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kner_7.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'xinganÃ©': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_p_8.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_pe_9.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tsaprik_10.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vinho_de_a': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tsaperik_11.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'vinho_de_a': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_katsari_12.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tabatinga': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_katsare_13.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tabatinga': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tn_14.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'seio': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tne_15.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'seio': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kuts_16.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'saracura': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kutse_17.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'saracura': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kaw_18.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pupunha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kawe_19.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pupunha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ptsut_20.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_pe': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ptsute_21.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_pe': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tt_22.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_gr': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tte_23.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_gr': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ttett_24.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'poraque_gr': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kapup_25.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pirapiting': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kapupe_26.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pirapiting': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kumkata_27.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pÃ£o_plano': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kumekata_28.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'pÃ£o_plano': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kajat_29.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'paca': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kajate_30.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'paca': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_itikr_31.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'macaco_pre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_itikre_32.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'macaco_pre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_apasakae_33.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'lontra': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_apasaka_34.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'lontra': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kptk_35.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cutiara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kpetke_36.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cutiara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kptkkpetke_37.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cutiara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kaet_38.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cai_a_rara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kat_39.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cai_a_rara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_katkaet_40.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'cai_a_rara': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sne_41.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'caba': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_sn_42.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'caba': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tenk_43.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bico_do_se': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tnk_44.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bico_do_se': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_epitikiri_45.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'bem_te_vi': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ipitikiri_46.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'tabatinga': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kukaneri_47.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'assassino': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_kukaniri_48.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'assassino': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_eni_49.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'ariranha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ini_50.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'ariranha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tsaperiki_51.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'aÃ§aÃ­': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tsaperikitsapiriki_52.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'aÃ§aÃ­': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_tsapiriki_53.set('fieldImages', {'ID': 'TextEdit', 'TI': 'TextEdit', 'aÃ§aÃ­': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_2020_0.set('fieldLabels', {});
lyr_2018_1.set('fieldLabels', {});
lyr_2019_2.set('fieldLabels', {});
lyr_2017_3.set('fieldLabels', {});
lyr_2016_4.set('fieldLabels', {});
lyr_TerrasindgenasApurin_5.set('fieldLabels', {});
lyr_knr_6.set('fieldLabels', {});
lyr_kner_7.set('fieldLabels', {});
lyr_p_8.set('fieldLabels', {});
lyr_pe_9.set('fieldLabels', {});
lyr_tsaprik_10.set('fieldLabels', {});
lyr_tsaperik_11.set('fieldLabels', {});
lyr_katsari_12.set('fieldLabels', {});
lyr_katsare_13.set('fieldLabels', {});
lyr_tn_14.set('fieldLabels', {});
lyr_tne_15.set('fieldLabels', {});
lyr_kuts_16.set('fieldLabels', {});
lyr_kutse_17.set('fieldLabels', {});
lyr_kaw_18.set('fieldLabels', {});
lyr_kawe_19.set('fieldLabels', {});
lyr_ptsut_20.set('fieldLabels', {});
lyr_ptsute_21.set('fieldLabels', {});
lyr_tt_22.set('fieldLabels', {});
lyr_tte_23.set('fieldLabels', {});
lyr_ttett_24.set('fieldLabels', {});
lyr_kapup_25.set('fieldLabels', {});
lyr_kapupe_26.set('fieldLabels', {});
lyr_kumkata_27.set('fieldLabels', {});
lyr_kumekata_28.set('fieldLabels', {});
lyr_kajat_29.set('fieldLabels', {});
lyr_kajate_30.set('fieldLabels', {});
lyr_itikr_31.set('fieldLabels', {});
lyr_itikre_32.set('fieldLabels', {});
lyr_apasakae_33.set('fieldLabels', {});
lyr_apasaka_34.set('fieldLabels', {});
lyr_kptk_35.set('fieldLabels', {});
lyr_kpetke_36.set('fieldLabels', {});
lyr_kptkkpetke_37.set('fieldLabels', {});
lyr_kaet_38.set('fieldLabels', {});
lyr_kat_39.set('fieldLabels', {});
lyr_katkaet_40.set('fieldLabels', {});
lyr_sne_41.set('fieldLabels', {});
lyr_sn_42.set('fieldLabels', {});
lyr_tenk_43.set('fieldLabels', {});
lyr_tnk_44.set('fieldLabels', {});
lyr_epitikiri_45.set('fieldLabels', {});
lyr_ipitikiri_46.set('fieldLabels', {});
lyr_kukaneri_47.set('fieldLabels', {});
lyr_kukaniri_48.set('fieldLabels', {});
lyr_eni_49.set('fieldLabels', {});
lyr_ini_50.set('fieldLabels', {});
lyr_tsaperiki_51.set('fieldLabels', {});
lyr_tsaperikitsapiriki_52.set('fieldLabels', {});
lyr_tsapiriki_53.set('fieldLabels', {});
lyr_tsapiriki_53.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});