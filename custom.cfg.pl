# Note: paths should be absolute, unless they point to programs in your $PATH.

##### Standard programs #####
$DVIPNG='dvipng';
$FILE='file';
$GREP='grep';
$JAVA='java';
$LATEX='latex';
$PERL='perl';
$PYTHON='python';
$SED='sed';
$WGET='wget';
$WHICH='which';

##### Installation directories #####
# The MathJax TeX fonts will be created in FONTDIR. It is assumed that the
# STIX fonts (http://stixfonts.org/) are already contained in that directory.
# MATHJAXDIR is the path of the MathJax installation to update.
$FONTDIR='';
$MATHJAXDIR='../../../../';

##### Font tools #####
# Most of the tools below are standard and should be available from your package
# manager. Batik >= 1.7 (http://xmlgraphics.apache.org/batik/) is required and
# TTF2SVG should point to the absolute path of batik-ttf2svg.jar JAR file.
# For TTF2EOT and SFNT2WOFF, see https://code.google.com/p/ttf2eot/ and
# http://people.mozilla.org/~jkew/woff/ respectively.
$FONTFORGE='fontforge';
$MFTRACE='/c/W32TeX/bin/mftrace.exe';
$SFNT2WOFF='/c/W32TeX/bin/sfnt2woff.exe';
$TTF2EOT='/c/W32TeX/bin/ttf2eot';
$TTF2SVG='/c/W32TeX/batik/batik-ttf2svg.jar';
$TTX='ttx';
$FFPYTHON='ffpython';

#### Image compression tools ####
$OPTIPNG='optipng';
$ADVPNG='advpng';

##### TeXLive Encoding
$TETEXENCODING='/c/W32TeX/share/texmf-dist/fonts/enc/dvips/tetex/';
$BASEENCODING='/c/W32TeX/share/texmf-dist/fonts/enc/dvips/base/';

##### packer #####
$YUICOMPRESSOR='/usr/share/yui-compressor/yui-compressor.jar';

$MFTRACE_PATH='/c/W32TeX/bin/mftrace.py';

1;
