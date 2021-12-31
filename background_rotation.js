// Load the root css variables
style_root = document.querySelector(':root')

// Set the images to be used
images = [
    'u_26Point2_06.jpg', 'u_26Point2_07.jpg', 'u_26Point2_10.jpg', 'u_26Point2_102.jpg', 'u_26Point2_106.jpg', 'u_26Point2_111.jpg', 'u_26Point2_113.jpg', 'u_26Point2_12.jpg', 'u_26Point2_15.jpg', 'u_26Point2_17.jpg', 'u_26Point2_19.jpg', 'u_26Point2_28.jpg', 'u_26Point2_29.jpg', 'u_26Point2_30.jpg', 'u_26Point2_32.jpg', 'u_26Point2_39.jpg', 'u_26Point2_44.jpg', 'u_26Point2_51.jpg', 'u_26Point2_53.jpg', 'u_26Point2_54.jpg', 'u_26Point2_65.jpg', 'u_26Point2_67.jpg', 'u_26Point2_68.jpg', 'u_26Point2_69.jpg', 'u_26Point2_70.jpg', 'u_26Point2_74.jpg', 'u_26Point2_81.jpg', 'u_26Point2_83.jpg', 'u_26Point2_84.jpg', 'u_26Point2_89.jpg', 'u_26Point2_92.jpg', 'u_26Point2_98.jpg', 
    'u_Accomplished-Ad-8515_01.jpg', 'u_Accomplished-Ad-8515_02.jpg', 'u_Accomplished-Ad-8515_03.jpg', 'u_Accomplished-Ad-8515_04.jpg', 'u_Accomplished-Ad-8515_05.jpg', 'u_Accomplished-Ad-8515_06.jpg', 'u_Accomplished-Ad-8515_07.jpg', 
    'u_Alexkittoephotos_02.jpg', 'u_Alexkittoephotos_14.jpg', 'u_Alexkittoephotos_16.jpg', 'u_Alexkittoephotos_38.jpg', 'u_Alexkittoephotos_46.jpg', 'u_Alexkittoephotos_68.jpg', 'u_Alexkittoephotos_73.jpg', 'u_Alexkittoephotos_75.jpg', 'u_Alexkittoephotos_76.jpg', 
    'u_Bazooka_Mouth_08.jpg', 
    'u_ChillonDang_02.jpg', 'u_ChillonDang_03.jpg', 'u_ChillonDang_04.jpg', 'u_ChillonDang_09.jpg', 'u_ChillonDang_10.jpg', 'u_ChillonDang_11.jpg', 'u_ChillonDang_12.jpg', 'u_ChillonDang_14.jpg', 'u_ChillonDang_15.jpg', 'u_ChillonDang_17.jpg', 'u_ChillonDang_18.jpg', 'u_ChillonDang_19.jpg', 'u_ChillonDang_21.jpg', 'u_ChillonDang_23.jpg', 'u_ChillonDang_31.jpg', 'u_ChillonDang_33.jpg', 'u_ChillonDang_34.jpg', 'u_ChillonDang_35.jpg', 'u_ChillonDang_36.jpg', 
    'u_Enraged_Beaver_02.jpg', 
    'u_Inspection_Realistic_02.jpg', 'u_Inspection_Realistic_03.jpg', 'u_Inspection_Realistic_04.jpg', 'u_Inspection_Realistic_06.jpg', 'u_Inspection_Realistic_07.jpg', 'u_Inspection_Realistic_08.jpg', 'u_Inspection_Realistic_09.jpg', 
    'u_Jaekohead_01.jpg', 'u_Jaekohead_02.jpg', 'u_Jaekohead_03.jpg', 'u_Jaekohead_04.jpg', 'u_Jaekohead_05.jpg', 'u_Jaekohead_06.jpg', 'u_Jaekohead_07.jpg', 'u_Jaekohead_08.jpg', 
    'u_JamesShortland_03.jpg', 
    'u_Jeffislive_06.jpg', 'u_Jeffislive_08.jpg', 'u_Jeffislive_10.jpg', 'u_Jeffislive_16.jpg', 'u_Jeffislive_18.jpg', 'u_Jeffislive_19.jpg', 'u_Jeffislive_22.jpg', 'u_Jeffislive_28.jpg', 
    'u_Just_InGrain_01.jpg', 'u_Just_InGrain_03.jpg', 'u_Just_InGrain_06.jpg', 
    'u_LeStyx_01.jpg', 'u_LeStyx_02.jpg', 'u_LeStyx_03.jpg', 'u_LeStyx_04.jpg', 'u_LeStyx_05.jpg', 'u_LeStyx_06.jpg', 'u_LeStyx_07.jpg', 
    'u_LemonSourBoy_13.jpg', 
    'u_O_Watt_A_Feeling_03.jpg', 
    'u_OverusedLotionBottle_03.jpg', 'u_OverusedLotionBottle_05.jpg', 'u_OverusedLotionBottle_08.jpg', 
    'u_TjLeClair_01.jpg', 'u_TjLeClair_02.jpg', 'u_TjLeClair_03.jpg', 'u_TjLeClair_04.jpg', 'u_TjLeClair_05.jpg', 'u_TjLeClair_06.jpg', 'u_TjLeClair_07.jpg', 'u_TjLeClair_08.jpg', 'u_TjLeClair_09.jpg', 'u_TjLeClair_11.jpg', 'u_TjLeClair_12.jpg', 'u_TjLeClair_13.jpg', 'u_TjLeClair_14.jpg', 'u_TjLeClair_15.jpg', 'u_TjLeClair_16.jpg', 'u_TjLeClair_17.jpg', 'u_TjLeClair_18.jpg', 'u_TjLeClair_19.jpg', 'u_TjLeClair_20.jpg', 'u_TjLeClair_21.jpg', 'u_TjLeClair_22.jpg', 'u_TjLeClair_23.jpg', 'u_TjLeClair_24.jpg', 'u_TjLeClair_25.jpg', 'u_TjLeClair_26.jpg', 'u_TjLeClair_27.jpg', 'u_TjLeClair_28.jpg', 'u_TjLeClair_29.jpg', 'u_TjLeClair_30.jpg', 'u_TjLeClair_31.jpg', 
    'u_Toby_Forrester_01.jpg', 'u_Toby_Forrester_04.jpg', 'u_Toby_Forrester_05.jpg', 
    'u_TypicalRhubarb_r_01.jpg', 'u_TypicalRhubarb_r_02.jpg', 'u_TypicalRhubarb_r_05.jpg', 'u_TypicalRhubarb_r_06.jpg', 'u_TypicalRhubarb_r_07.jpg', 'u_TypicalRhubarb_r_08.jpg', 
    'u_Wish_i_was_a_turner_13.jpg', 'u_Wish_i_was_a_turner_23.jpg', 
    'u_analogue_oceans_05.jpg', 'u_analogue_oceans_06.jpg', 
    'u_andbreak_04.jpg', 'u_andbreak_05.jpg', 
    'u_creamsf_02.jpg', 
    'u_digital_drop_out_01.jpg', 'u_digital_drop_out_04.jpg', 'u_digital_drop_out_07.jpg', 
    'u_domdude_02.jpg', 'u_domdude_03.jpg', 'u_domdude_04.jpg', 'u_domdude_06.jpg', 'u_domdude_07.jpg', 'u_domdude_08.jpg', 'u_domdude_09.jpg', 'u_domdude_10.jpg', 'u_domdude_12.jpg', 'u_domdude_13.jpg', 'u_domdude_14.jpg', 'u_domdude_16.jpg', 'u_domdude_17.jpg', 'u_domdude_18.jpg', 'u_domdude_19.jpg', 'u_domdude_20.jpg', 'u_domdude_21.jpg', 'u_domdude_22.jpg', 'u_domdude_23.jpg', 'u_domdude_24.jpg', 'u_domdude_25.jpg', 'u_domdude_27.jpg', 
    'u_fawxs_01.jpg', 'u_fawxs_03.jpg', 'u_fawxs_05.jpg', 'u_fawxs_06.jpg', 'u_fawxs_07.jpg', 
    'u_fotorell_05.jpg', 'u_fotorell_11.jpg', 'u_fotorell_16.jpg', 'u_fotorell_18.jpg', 
    'u_fujipuji_01.jpg', 'u_fujipuji_03.jpg', 'u_fujipuji_04.jpg', 'u_fujipuji_05.jpg', 
    'u_guitard00d123_13.jpg', 'u_guitard00d123_18.jpg', 
    'u_ian_filipovich_01.jpg', 
    'u_imChopBustin_01.jpg', 'u_imChopBustin_03.jpg', 
    'u_jmanalog_01.jpg', 'u_jmanalog_02.jpg', 'u_jmanalog_03.jpg', 
    'u_joeforthenguyen_01.jpg', 
    'u_joko2105_03.jpg', 
    'u_mtoast333_02.jpg', 'u_mtoast333_19.jpg', 
    'u_mummymimeum_04.jpg', 'u_mummymimeum_05.jpg', 'u_mummymimeum_12.jpg', 
    'u_owen250599_01.jpg', 'u_owen250599_02.jpg', 'u_owen250599_03.jpg', 'u_owen250599_04.jpg', 'u_owen250599_05.jpg', 'u_owen250599_06.jpg', 'u_owen250599_07.jpg', 'u_owen250599_08.jpg', 'u_owen250599_09.jpg', 'u_owen250599_10.jpg', 'u_owen250599_13.jpg', 'u_owen250599_14.jpg', 'u_owen250599_15.jpg', 'u_owen250599_16.jpg', 
    'u_peterncsu_02.jpg', 'u_peterncsu_03.jpg', 'u_peterncsu_06.jpg', 'u_peterncsu_09.jpg', 
    'u_pukeblood213_02.jpg', 'u_pukeblood213_04.jpg', 
    'u_rickandmorty8000_03.jpg', 
    'u_sillo38_22.jpg', 'u_sillo38_30.jpg', 'u_sillo38_32.jpg', 'u_sillo38_39.jpg', 'u_sillo38_48.jpg', 'u_sillo38_67.jpg', 'u_sillo38_73.jpg', 
    'u_tall_as_hell_r_03.jpg', 'u_tall_as_hell_r_05.jpg', 
    'u_taotaoteetao_01.jpg', 
    'u_terplox_01.jpg', 'u_terplox_09.jpg', 'u_terplox_16.jpg', 
    'u_thropeanrea_04.jpg', 'u_thropeanrea_06.jpg', 
    'u_tmc135_01.jpg', 'u_tmc135_02.jpg', 'u_tmc135_03.jpg', 
    'u_trophyguarder_01.jpg', 'u_trophyguarder_02.jpg', 'u_trophyguarder_03.jpg', 
    'u_yellowspace_01.jpg', 'u_yellowspace_03.jpg', 'u_yellowspace_04.jpg', 'u_yellowspace_05.jpg', 'u_yellowspace_06.jpg', 'u_yellowspace_10.jpg', 'u_yellowspace_11.jpg', 'u_yellowspace_12.jpg'
]

function random_image(){
    // Get a random index postion of the images array
    array_index = Math.floor(Math.random() * images.length)

    // Change the --img variable based on the random index
    style_root.style.setProperty('--img', `url(images/background/${images[array_index]})`)
}

random_image()