
//By creating tooltips after DOM load we make sure that referenced elements are available.
jQuery(document).ready(function($) {
  /*
   * Demonstrations: Skins
   */
  Tipped.create("#demo_skins_dark");
  Tipped.create("#demo_skins_black", { skin: 'black' });
  Tipped.create("#demo_skins_light", { skin: 'light' });

  Tipped.create("#demo_skins_white", { skin: 'white' });
  Tipped.create("#demo_skins_yellow", { skin: 'yellow' });
  Tipped.create(".demo_skins_yellowB", "This is a new TIP",{ skin: 'yellow' });
  Tipped.create("#demo_skins_gray", { skin: 'gray' });
  Tipped.create("#demo_skins_yellowA", { skin: 'yellow' });
  Tipped.create("#demo_skins_blue", "Skins are optimized to look good on any background", { skin: 'blue' });
  Tipped.create("[name*=demo_skins_redA]", "This is a new TIP", { skin: 'red' });
  Tipped.create("#demo_skins_red", "This is a new TIP", { skin: 'red' });
  Tipped.create("#demo_skins_green", "A nice green skin", { skin: 'green' });
  
  Tipped.create("#demo_skins_tiny", "Small black tooltips are always useful", { skin: 'tiny' });
 
  
});
