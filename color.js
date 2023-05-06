const colormodule = {
  bgblack: "\x1b[40m%s\x1b[0m",
  bgred: "\x1b[41m%s\x1b[0m",
  bggreen: "\x1b[42m%s\x1b[0m",
  bgyellow: "\x1b[43m%s\x1b[0m",
  bgblue: "\x1b[44m%s\x1b[0m",
  bgmagenta: "\x1b[45m%s\x1b[0m",
  bgcyan: "\x1b[46m%s\x1b[0m",
  bgwhite: "\x1b[47m%s\x1b[0m",
  bggray: "\x1b[100m%s\x1b[0m",


  black: "\x1b[30m%s\x1b[0m",
  red: "\x1b[31m%s\x1b[0m",
  green: "\x1b[32m%s\x1b[0m",
  yellow: "\x1b[33m%s\x1b[0m",
  blue: "\x1b[34m%s\x1b[0m",
  magenta: "\x1b[35m%s\x1b[0m",
  cyan: "\x1b[36m%s\x1b[0m",
  white: "\x1b[37m%s\x1b[0m",
  gray: "\x1b[90m%s\x1b[0m",

  bbgblack: "\x1b[1;40m%s\x1b[0m",
  bbgred: "\x1b[1;41m%s\x1b[0m",
  bbggreen: "\x1b[1;42m%s\x1b[0m",
  bbgyellow: "\x1b[1;43m%s\x1b[0m",
  bbgblue: "\x1b[1;44m%s\x1b[0m",
  bbgmagenta: "\x1b[1;45m%s\x1b[0m",
  bbgcyan: "\x1b[1;46m%s\x1b[0m",
  bbgwhite: "\x1b[1;47m%s\x1b[0m",
  bbggray: "\x1b[1;100m%s\x1b[0m",


  bblack: "\x1b[1;30m%s\x1b[0m",
  bred: "\x1b[1;31m%s\x1b[0m",
  bgreen: "\x1b[1;32m%s\x1b[0m",
  byellow: "\x1b[1;33m%s\x1b[0m",
  bblue: "\x1b[1;34m%s\x1b[0m",
  bmagenta: "\x1b[1;35m%s\x1b[0m",
  bcyan: "\x1b[1;36m%s\x1b[0m",
  bwhite: "\x1b[1;37m%s\x1b[0m",
  bgray: "\x1b[1;90m%s\x1b[0m",

  ubgblack: "\x1b[4;40m%s\x1b[0m",
  ubgred: "\x1b[4;41m%s\x1b[0m",
  ubggreen: "\x1b[4;42m%s\x1b[0m",
  ubgyellow: "\x1b[4;43m%s\x1b[0m",
  ubgblue: "\x1b[4;44m%s\x1b[0m",
  ubgmagenta: "\x1b[4;45m%s\x1b[0m",
  ubgcyan: "\x1b[4;46m%s\x1b[0m",
  ubgwhite: "\x1b[4;47m%s\x1b[0m",
  ubggray: "\x1b[4;100m%s\x1b[0m",


  ublack: "\x1b[4;30m%s\x1b[0m",
  ured: "\x1b[4;31m%s\x1b[0m",
  ugreen: "\x1b[4;32m%s\x1b[0m",
  uyellow: "\x1b[4;33m%s\x1b[0m",
  ublue: "\x1b[4;34m%s\x1b[0m",
  umagenta: "\x1b[4;35m%s\x1b[0m",
  ucyan: "\x1b[4;36m%s\x1b[0m",
  uwhite: "\x1b[4;37m%s\x1b[0m",
  ugray: "\x1b[4;90m%s\x1b[0m",

  fbgblack: "\x1b[2;40m%s\x1b[0m",
  fbgred: "\x1b[2;41m%s\x1b[0m",
  fbggreen: "\x1b[2;42m%s\x1b[0m",
  fbgyellow: "\x1b[2;43m%s\x1b[0m",
  fbgblue: "\x1b[2;44m%s\x1b[0m",
  fbgmagenta: "\x1b[2;45m%s\x1b[0m",
  fbgcyan: "\x1b[2;46m%s\x1b[0m",
  fbgwhite: "\x1b2;[47m%s\x1b[0m",
  fbggray: "\x1b[2;100m%s\x1b[0m",


  fblack: "\x1b[2;30m%s\x1b[0m",
  fred: "\x1b[2;31m%s\x1b[0m",
  fgreen: "\x1b[2;32m%s\x1b[0m",
  fyellow: "\x1b[2;33m%s\x1b[0m",
  fblue: "\x1b[2;34m%s\x1b[0m",
  fmagenta: "\x1b[2;35m%s\x1b[0m",
  fcyan: "\x1b[2;36m%s\x1b[0m",
  fwhite: "\x1b[2;37m%s\x1b[0m",
  fgray: "\x1b[2;90m%s\x1b[0m",

  ufbgblack: "\x1b[4;2;40m%s\x1b[0m",
  ufbgred: "\x1b[4;2;41m%s\x1b[0m",
  ufbggreen: "\x1b[4;2;42m%s\x1b[0m",
  ufbgyellow: "\x1b[4;2;43m%s\x1b[0m",
  ufbgblue: "\x1b[4;2;44m%s\x1b[0m",
  ufbgmagenta: "\x1b[4;2;45m%s\x1b[0m",
  ufbgcyan: "\x1b[4;2;46m%s\x1b[0m",
  ufbgwhite: "\x1b[4;2;47m%s\x1b[0m",
  ufbggray: "\x1b[4;2;100m%s\x1b[0m",


  ufblack: "\x1b[4;2;30m%s\x1b[0m",
  ufred: "\x1b[4;2;31m%s\x1b[0m",
  ufgreen: "\x1b[4;2;32m%s\x1b[0m",
  ufyellow: "\x1b[4;2;33m%s\x1b[0m",
  ufblue: "\x1b[4;2;34m%s\x1b[0m",
  ufmagenta: "\x1b[4;2;35m%s\x1b[0m",
  ufcyan: "\x1b[4;2;36m%s\x1b[0m",
  ufwhite: "\x1b[4;2;37m%s\x1b[0m",
  ufgray: "\x1b[4;2;90m%s\x1b[0m",

  bufbgblack: "\x1b[1;4;2;40m%s\x1b[0m",
  bufbgred: "\x1b[1;4;2;41m%s\x1b[0m",
  bufbggreen: "\x1b[1;4;2;42m%s\x1b[0m",
  bufbgyellow: "\x1b[1;4;2;43m%s\x1b[0m",
  bufbgblue: "\x1b[1;4;2;44m%s\x1b[0m",
  bufbgmagenta: "\x1b[1;4;2;45m%s\x1b[0m",
  bufbgcyan: "\x1b[1;4;2;46m%s\x1b[0m",
  bufbgwhite: "\x1b[1;4;2;47m%s\x1b[0m",
  bufbggray: "\x1b[1;4;2;100m%s\x1b[0m",


  bufblack: "\x1b[1;4;2;30m%s\x1b[0m",
  bufred: "\x1b[1;4;2;31m%s\x1b[0m",
  bufgreen: "\x1b[1;4;2;32m%s\x1b[0m",
  bufyellow: "\x1b[1;4;2;33m%s\x1b[0m",
  bufblue: "\x1b[1;4;2;34m%s\x1b[0m",
  bufmagenta: "\x1b[1;4;2;35m%s\x1b[0m",
  bufcyan: "\x1b[1;4;2;36m%s\x1b[0m",
  bufwhite: "\x1b[1;4;2;37m%s\x1b[0m",
  bufgray: "\x1b[1;4;2;90m%s\x1b[0m",

  bfbgblack: "\x1b[1;2;40m%s\x1b[0m",
  bfbgred: "\x1b[1;2;41m%s\x1b[0m",
  bfbggreen: "\x1b[1;2;42m%s\x1b[0m",
  bfbgyellow: "\x1b[1;2;43m%s\x1b[0m",
  bfbgblue: "\x1b[1;2;44m%s\x1b[0m",
  bfbgmagenta: "\x1b[1;2;45m%s\x1b[0m",
  bfbgcyan: "\x1b[1;2;46m%s\x1b[0m",
  bfbgwhite: "\x1b[1;2;47m%s\x1b[0m",
  bfbggray: "\x1b[1;2;100m%s\x1b[0m",


  bfblack: "\x1b[1;2;30m%s\x1b[0m",
  bfred: "\x1b[1;2;31m%s\x1b[0m",
  bfgreen: "\x1b[1;2;32m%s\x1b[0m",
  bfyellow: "\x1b[1;2;33m%s\x1b[0m",
  bfblue: "\x1b[1;2;34m%s\x1b[0m",
  bfmagenta: "\x1b[1;2;35m%s\x1b[0m",
  bfcyan: "\x1b[1;2;36m%s\x1b[0m",
  bfwhite: "\x1b[1;2;37m%s\x1b[0m",
  bfgray: "\x1b[1;2;90m%s\x1b[0m",

  ufbgblack: "\x1b[4;2;40m%s\x1b[0m",
  ufbgred: "\x1b[4;2;41m%s\x1b[0m",
  ufbggreen: "\x1b[4;2;42m%s\x1b[0m",
  ufbgyellow: "\x1b[4;2;43m%s\x1b[0m",
  ufbgblue: "\x1b[4;2;44m%s\x1b[0m",
  ufbgmagenta: "\x1b[4;2;45m%s\x1b[0m",
  ufbgcyan: "\x1b[4;2;46m%s\x1b[0m",
  ufbgwhite: "\x1b[4;2;47m%s\x1b[0m",
  ufbggray: "\x1b[4;2;100m%s\x1b[0m",


  ufblack: "\x1b[4;2;30m%s\x1b[0m",
  ufred: "\x1b[4;2;31m%s\x1b[0m",
  ufgreen: "\x1b[4;2;32m%s\x1b[0m",
  ufyellow: "\x1b[4;2;33m%s\x1b[0m",
  ufblue: "\x1b[4;2;34m%s\x1b[0m",
  ufmagenta: "\x1b[4;2;35m%s\x1b[0m",
  ufcyan: "\x1b[4;2;36m%s\x1b[0m",
  ufwhite: "\x1b[4;2;37m%s\x1b[0m",
  ufgray: "\x1b[4;2;90m%s\x1b[0m",
}
const defaults = "\x1b[0m";
const bright = "\x1b[1m%s\x1b[0m";


module.exports.defaults = defaults;
module.exports.bright = bright;
module.exports = colormodule;
