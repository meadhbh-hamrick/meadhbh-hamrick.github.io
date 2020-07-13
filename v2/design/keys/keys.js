function Log( element_id ) {
  this.el = document.getElementById( element_id );
  this.clear();
}

Log.prototype.clear = function () {
  this.content = "Hit some keys, see characters appear here:\n";
  this.state = 0;
}

Log.prototype.add = function( char ) {
  this.state = 1;
  this.content += char;
  this.update();
};

Log.prototype.backspace = function () {
  this.state = 1;
  this.content =
    this.content.substring(0, this.content.length - 1);
  this.update();
};

Log.prototype.log = function( message ) {
  if( 1 == this.state ) {
    this.content += "\n";
    this.state = 0;
  }
  this.content += ( message + "\n" );
  this.update();
};

Log.prototype.update = function () {
  this.el && ( this.el.value = this.content );
}

var _console;
var _timer;
var _timeout = 100;
var _state = 0;
var _ts;
var _char;

var _set = 0;
var _keys = [
  [
    "", " ", "", "E", "\n", "O", "T", "N",
    "", "", "I", "H", "A", "R", "S", "D",
    "L", "W", "M", "G", "F", "Y", "P", "J",
    "U", "B", "K", "Q", "C", "X", "V", "Z"
  ],
  [
    "", " ", "", "e", "\n", "o", "t", "n",
    "", "", "i", "h", "a", "r", "s", "d",
    "l", "w", "m", "g", "f", "y", "p", "j",
    "u", "b", "k", "q", "c", "x", "v", "z"
  ],
  [
    "", " ", "", "0", "\n", "3", "1", "5",
    "", "", "4", "7", "2", "8", "6", "9",
    ":", "@", ".", "&", "?", "#", "<", "-",
    "/", ">", "\"", "(", "=", ",", "+", ")"
  ],
  [
    "", " ", "", "0", "\n", "3", "1", "5",
    "", "", "4", "7", "2", "8", "6", "9",
    "{", "[", "]", "\\", ";", "|", "_", "$",
    "}", "*", "^", "~", "'", "`", "%", "!"
  ]
];

function _set_set( index ) {
  _set = index;
  if( _set > 3 ) {
    _set = 3;
  }
//  console.log( "Shift " + _set );
  for( const i of Array(4).keys() ) {
    let el = document.getElementById( "_set_" + i );
    if( _set === i ) {
      el.classList.add( "active" );
      el.classList.remove( "inactive" );
    } else {
      el.classList.remove( "active" );
      el.classList.add( "inactive" );
    }

    el = document.getElementById( "_keys_" + i );
    if( _set === i ) {
      el.classList.remove( "invisible" );
    } else {
      el.classList.add( "invisible" );
    }
  }
}

var acceptable_keys = [ 27, 74, 75, 76, 186 ];

window.addEventListener( "DOMContentLoaded", (e) => {
  _console = new Log( "_console" );
  _console.update();
//  console.log( "Content Loaded" );

  document.addEventListener( "keydown", (e) => {
    var ts = Math.floor( e.timeStamp );
//    console.log( `Keydown: ${ts} ${e.keyCode}` );
    if(  0 == _state ) {
      _state = 1;
      _char = 0;
      _ts = Math.floor( e.timeStamp );
      _timer = window.setTimeout( () => {
//        console.log( `Char: ${_ts} ${_char}` );
        switch( _char ) {
        case 2:
          _console.backspace();
          break;
        case 4:
          _console.add( "\n" );
          break;
        case 9:
          _set_set( 0 );
          break;
        case 8:
          _set_set( _set + 1 );
          break;
        default:
          var gink = _keys[ _set ][ _char ];
//          console.log( `Emit: ${_char} [${gink}]` );
          if( ( _char > 0 ) && ( _char < 32 ) ) {
            _console.add( _keys[ _set ][ _char ] );
          }
          break;
        }
        
        _char = 0;
        _state = 0;
      }, _timeout );
    }

    switch( e.keyCode ) {
    case 27:
      _console.clear();
      _console.update();
      break;
    case 32:
      e.preventDefault();
      _char |= 0x01;
      break;      
    case 74:
      _char |= 0x02;
      break;
    case 75:
      _char |= 0x04;
      break;
    case 76:
      _char |= 0x08;
      break;
    case 59:
    case 186:
      _char |= 0x10;
      break;
    }
  } );
} );

function send_a_keystroke() {
}
