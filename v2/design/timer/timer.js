var timer = -1;
var seconds;
var state = "idle";
var beep_state = "beep";
var warning_time = 5;
var beep_for_this_long = 3;
var audio_context;
var audio_oscillator;

var behaviour = {
  button_silence: function () {
    stop_beeping();
    beep_state = "silent";
    redraw_beep_buttons();
  },
  button_60: function () {
    start_timer( "countdown", 60 );
  },
  button_30: function () {
    start_timer( "countdown", 30 );
  },
  button_20: function () {
    start_timer( "countdown", 20 );
  },
  button_beep: function () {
    beep_state = "beep";
    redraw_beep_buttons();
  },
  button_silent: function () {
    beep_state = "silent";
    redraw_beep_buttons();
  },
  button_custom: function () {
    beep_state = "custom";
    redraw_beep_buttons();
  },
};

function redraw_beep_buttons() {
  [ "beep", "custom", "silent" ].forEach( (e) => {
    var _e = document.getElementById( `button_${e}` );
    if( beep_state == e ) {
      _e.classList.remove( "unselected" );
      _e.classList.add( "selected" );
    } else {
      _e.classList.add( "unselected" );
      _e.classList.remove( "selected" );
    }
  } );
}

function start_timer( _s, _d ) {
  seconds = _d;
  state = _s;

  if( -1 != timer ) {
    clearInterval( timer );
  }

  if( "expired" == state ) {
    exit_expired_state();
  }
  
  redraw_display( "countdown" );
  
  timer = setInterval( interval, 1000 );
}

function redraw_display( _cl ) {
  var _e = document.getElementById( "display" );
  _e.className = _cl;
  
  var display_this;
  if( "countdown" == state ) {
    display_this =
      ( "0" + String( seconds ) ).substr( -2 );
  } else {
    display_this = "00";
  }
  
  _e.innerHTML = display_this;
}

function interval () {
  seconds -= 1;

  var _bg;

  if( "countdown" == state ) {
    if( seconds < 1 ) {
      _bg = "expired";
      expire_timer();
    } else if( seconds <= warning_time ) {
      _bg = "warn";
    } else {
      _bg = "countdown";
    }
  } else if( "expired" == state ) {
    _bg = "expired";
    if( seconds < 1 ) {
      _bg = "idle";
      exit_expired_state();
    }
  } else {
    _bg = "idle";
  }

  redraw_display( _bg );
  
  if( seconds < 1 ) {
    clearInterval( timer );
    timer = -1;
  }
}

function expire_timer() {
  state = "expired";
  seconds = beep_for_this_long;
  start_beeping();
}

function exit_expired_state() {
  stop_beeping();
  clearInterval( timer );
}

function start_beeping() {
  if( "beep" != beep_state ) {
    return;
  }
  
  audio_context = new AudioContext();
  var audio_oscillator = audio_context.createOscillator();
  var gain = audio_context.createGain();
  audio_oscillator.connect( gain );

  audio_oscillator.frequency.value = 440;
  audio_oscillator.type = "square";
  gain.connect( audio_context.destination );

  gain.gain.value = 1.0;

  audio_oscillator.start( audio_context.currentTime );
  audio_oscillator.stop( audio_context.currentTime + beep_for_this_long );

  audio_oscillator.onended = () => { console.log( "should stop making noise now" ); };
}

function stop_beeping() {
  if( undefined !== audio_context ) {
    audio_context.suspend();
  }
}

window.addEventListener( "DOMContentLoaded", () => {
  setTimeout( () => {
    var _t = document.getElementById( "timer" );
    _t.classList.remove( "inviz" );

    document
      .querySelectorAll( '[id^="button_"]' )
      .forEach( (i) => {
        if( undefined != behaviour[ i.id ] ) {
          i.addEventListener( "click", behaviour[ i.id ] );
        }
      } )
    ;

    redraw_beep_buttons();

  }, 350 );
  
} );
