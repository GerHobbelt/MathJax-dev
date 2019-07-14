#! /bin/bash
#
# Collect all unpacked sources for every extension and pack each
# 
# WARNING:
# 
# This script is assumed to be invoked from the makefile target and expects
# a path to the PERL binary.
# 

if test -z "$1" ; then
	echo "Perl bin path arg missing"
	exit 1
fi
PERL=$1

# search the mathjax-third-party-extensions base path from this mathjax-dev npm package's directory:
for src in $( find ../../../../legacy -path '*/unpacked/*' -a -name '*.js' -a ! -path '*/siunitx/*' -print ) ; do
	dst=$( echo "$src" | sed -e 's/\/unpacked\//\//')
	echo "cp $src $dst"
	$PERL packMJFile $src $dst
done
echo ""

# process the siunitx extension special:
echo "Building SIUNITX extension:"
pushd ../../../../legacy/siunitx/
# this extension's `npm install` task has the `npm run build` task included via `npm preprare`:
npm install
cp siunitx.js __bundled__.js
popd
$PERL packMJFile ../../../../legacy/siunitx/__bundled__.js ../../../../legacy/siunitx/siunitx.js
rm -f ../../../../legacy/siunitx/__bundled__.js
