
window.addEventListener( "DOMContentLoaded", (e) => {
  var _url = document.URL;
  var _redirect = false;  
  
  var _valid = [
    "https://meadhbh-hamrick.github.io/",
    "https://meadhbh.hamrick.rocks/"
  ];

  var _site = _valid.find( e => e == _url.substr(0,e.length) );

  if( "string" == typeof _site ) {
    var _path = _url.substr( _site.length );
    var _target = page_map[ _path ];
    redirect = ("string" == typeof _target);
  }

  if( redirect ) {
    window.location = _site + _target;
  } else {
    var _c = document.getElementById( "content" );
    var _b = document.getElementsByTagName( "body" );
    _b[0].innerHTML = _c.innerHTML;
  }
} );

let page_map = {
  "home/contact": "about.html",
  "home/writing": "v2/fiction/index.html",
  "home/writing/a-few-words": "v2/fiction/a_few_words.html",
  "home/writing/cleburne-texas": "v2/fiction/cleburn_texas.html",
  "home/writing/growing-corn": "v2/fiction/growing_corn.html",
  "home/writing/is-it-true-mike": "v2/fiction/is_it_true_mike.html",
  "home/writing/joe-and-the-king": "v2/fiction/joe_and_the_king.html",
  "home/writing/is-email-dead": "v2/fiction/is_email_dead.html",
  "home/writing/web-war-ii": "v2/fiction/web_war_ii.html",
  "home/writing/so-there-i-was-in-abbottabad": "v2/fiction/so_there_i_was_in_abbottabad.html",
  "home/writing/a-random-memory-about-being-a-marine-in-the-1980s": "v2/fiction/a_random_memory_about_being_a_marine_in_the_1980s.html",
  "home/writing/a-song-of-ice-and-eap": "v2/fiction/a_song_of_ice_and_eap.html",
  "home/non-fiction": "v2/non_fiction/index.html",
  "home/non-fiction/incense-and-peppermints": "v2/non_fiction/incense_and_peppermints.html",
  "home/non-fiction/a-random-memory-about-being-a-marine-in-the-1980s": "v2/non_fiction/a_random_memory_about_being_a_marine_in_the_1980s.html",
  "home/retro-computing": "v2/retro_computing/index.html",
  "home/retro-computing/explaining-modern-computing-to-someone-from-1982": "v2/retro_computing/explaining_modern_computing_to_someone_from_1982",
  "home/retro-computing/talking-with-michael": "v2/retro_computing/talking_with_michael.html",
  "home/retro-computing/discovery-web-desktop": "v2/retro_computing/the_discovery_web_desktop.html",
  "home/retro-computing/some-old-software-from-the-dos-days": "v2/retro_computing/some_old_software_from_the_dos_days.html",
  "home/retro-computing/sundog": "v2/retro_computing/sundog_bas.html",
  "home/retro-computing/in-the-days-of-old-software-giants-walked-the-earth": "v2/retro_computing/in_the_days_of_old_software_giants_walked_the_earth.html",
  "home/retro-computing/software-how-much-is-too-much": "v2/retro_computing/software_how_much_is_too_much.html",
  "home/retro-computing/in-defense-of-basic": "v2/retro_computing/in_defense_of_basic.html",
  "home/retro-computing/the-joy-of-single-tasking": "v2/retro_computing/the_joy_of_single_tasking.html",
  "home/technical-sh-t": "v2/technical/index.html",
  "home/technical-sh-t/goldilocks-and-the-11-parsers": "v2/technical/goldilocks_and_the_11_parsers.html",
  "home/technical-sh-t/strange-programmer-habits": "v2/technical/strange_programmer_habits/index.html",
  "home/technical-sh-t/strange-programmer-habits/literal-comes-first-in-a-comparison": "v2/technical/strange_programmer_habits/literal_comes_first.html",
  "home/technical-sh-t/strange-programmer-habits/commas-at-the-beginning-of-lines": "v2/technical/strange_programmer_habits/commas_at_the_beginnings_of_lines.html",
  "home/technical-sh-t/strange-programmer-habits/avoiding-gotos-by-using-do-whiles": "v2/technical/strange_programmer_habits/avoiding_gotos_by_using_do_while_loops.html",
  "home/technical-sh-t/strange-programmer-habits/number-and-string-mutation": "v2/technical/strange_programmer_habits/number_and_string_mutation.html",
  "home/techincal-sh-t/using-sap-software-does-not-make-your-enterprise-better": "v2/technical/using_sap_software_does_not_make_your_enterprise_better.html",
  "home/technical-sh-t/on-the-usefulness-of-vr-ar-headsets": "v2/technical/on_the_usefulness_of_vr_ar_headsets.html",
  "home/technical-sh-t/what-is-vwrap": "v2/technical/vwrap/index.html",
  "home/technical-sh-t/what-is-vwrap/what-is-the-virtual-worlds-region-agent-protocol": "v2/technical/vwrap/what_is_the_virtual_worlds_region_agent_protocol.html",
  "home/technical-sh-t/what-is-vwrap/an-abstract-type-system-hunh": "v2/technical/vwrap/an_abstract_type_system.html",
  "home/technical-sh-t/what-is-vwrap/nots-on-the-history-of-the-vwrap-working-group": "v2/technical/vwrap/notes_on_the_history_of_the_vwrap_working_group.html",
  "home/technical-sh-t/what-is-vwrap/what-does-it-mean-for-a-virtual-world-to-be-second-life-like": "v2/technical/vwrap/what_does_it_mean_for_a_virtual_world_to_be_second_life_like.html",
  "home/technical-sh-t/what-is-vwrap/what-s-in-the-protocol": "v2/technical/vwrap/whats_in_the_protocol.html",
  "home/technical-sh-t/what-is-vwrap/capabilities": "v2/technical/vwrap/capabilities.html",
  "home/technical-sh-t/is-node_env-an-anti-pattern": "v2/technical/is_node_env_an_anti_pattern.html",
  "home/technical-sh-t/considerations-for-passwords-in-secure-systems": "v2/technical/considerations_for_passwords_in_secure_systems.html"
};
