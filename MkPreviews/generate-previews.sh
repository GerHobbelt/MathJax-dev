#! /bin/bash
#
# Generate static HTML preview pages for every demo page.
#
# NOTE/WARNING: this script should be executed from the Makefile, which in turn
# is invoked through `npm run previews` or eqv. command, so that the NODE SEARCH PATH
# includes the local node_modules/ directory and `usus` will be found there!
# 



if test -d "$1" ; then cd "$1" ; else 
	echo <<EOT
generate-previews.sh MATHJAXBASEPATH

Error: missing BASEPATH argument.
EOT
	exit 1
fi



if test -d ./test/ ; then cd ./test/ ; else 
	echo <<EOT
generate-previews.sh MATHJAXBASEPATH

Error: BASEPATH argument must point at the MathJax repository BASE PATH, 
which is expected to contain a /test/ directory, among others...
EOT
	exit 1
fi



mkdir -p StaticPreviewPages

for f in *.html ; do 
	# detect platform and call cygpath only where applicable:
	if $( cygpath -w -a . &> /dev/null ) ; then
		# Windows OS/cygwin/MingW/Wingit dev platform:
		usus render --url file://$( cygpath -w -a ./$f ) > StaticPreviewPages/$f
	else
		# Linux et al:
		usus render --url file://$( realpath ./$f ) > StaticPreviewPages/$f
	fi
done

