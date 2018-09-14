// Creates the skew data needed for skew.pl
// (jsMath already has this data, so use that rather than write another
//  program to read the TeX data files.  It's a hack.)

// Use jsMath lab and use debugger to enter
//  and copy and paste the output into the skew.pl file
document.write("<pre>\n");
document.write("$skew{cmssmi10} = {\n");
ff = jsMath.TeX.cmssmi10; for (i=0; i< ff.length; i++) {if (ff[i].krn && ff[i].krn['127']) {document.write("  0x"+pad(i.toString(16).toUpperCase(), 2)+" => "+ff[i].krn['127']+",\n")}}
document.write("};\n");

document.write("$skew{cmssmib10} = {\n");
ff = jsMath.TeX.cmssmib10; for (i=0; i< ff.length; i++) {if (ff[i].krn && ff[i].krn['127']) {document.write("  0x"+pad(i.toString(16).toUpperCase(), 2)+" => "+ff[i].krn['127']+",\n")}}
document.write("};\n");

document.write("$skew{cmsssy10} = {\n");
ff = jsMath.TeX.cmsssy10; for (i=0; i< ff.length; i++) {if (ff[i].krn && ff[i].krn['48']) {document.write("  0x"+pad(i.toString(16).toUpperCase(), 2)+" => "+ff[i].krn['48']+",\n")}}
document.write("};\n");

document.write("$skew{cmssbsy10} = {\n");
ff = jsMath.TeX.cmssbsy10; for (i=0; i< ff.length; i++) {if (ff[i].krn && ff[i].krn['48']) {document.write("  0x"+pad(i.toString(16).toUpperCase(), 2)+" => "+ff[i].krn['48']+",\n")}}
document.write("};\n");

document.write("$skew{rsfs10} = {\n");
ff = jsMath.TeX.rsfs10; for (i=0; i< ff.length; i++) {if (ff[i].krn && ff[i].krn['127']) {document.write("  0x"+pad(i.toString(16).toUpperCase(), 2)+" => "+ff[i].krn['127']+",\n")}}
document.write("};\n");

document.write("</pre>\n");

function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}
