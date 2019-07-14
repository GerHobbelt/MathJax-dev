#! /bin/bash
#
# args: file [basedir]
# 

if test -d "$1" ; then
  cd "$1"
  shift
fi
#echo "PWD: $(pwd)"

if ! test -f "$1" ; then
  cat <<EOF

    The {file} argument is not a legal, existing file: "$1"

    mk_prettier.sh [basedir] {file}
EOF
  exit 2
fi

eslint --fix "$1"
if test $? != 0 ; then
    exit 1
fi

prettier --write --loglevel log "$1"
if test $? != 0 ; then
    exit 1
fi

eslint --fix "$1"
if test $? != 0 ; then
    exit 1
fi

