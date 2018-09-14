/*
 *  cmbsy10/def.js
 *
 *  This file loads the cmbsy10 font into jsMath. To do this use
 *
 *      <SCRIPT>jsMath.Font.Load("cmbsy10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the cmbsy10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not
 *  customized on a per-browser basis as it probably should be.
 *
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *
 *  Once this file is loaded, you can use \char{cmbsy10}{nn} to access
 *  any character in the font.  In addition, the \cmbsy10 macro will switch to
 *  the eufm font
 *
 *  ---------------------------------------------------------------------
 *
 *  jsMath is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  jsMath is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with jsMath; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

jsMath.Add(jsMath.TeX,{

  cmbsy10: [
    // 00 - 0F
    [0.894,0.633,0.133],
    [0.319,0.474,-0.0264],
    [0.894,0.633,0.133],
    [0.575,0.472,-0.0278],
    [0.894,0.633,0.133],
    [0.575,0.474,-0.0264],
    [0.894,0.633,0.133],
    [0.894,0.633,0.133],
    [0.894,0.633,0.133],
    [0.894,0.633,0.133],
    [0.894,0.633,0.133],
    [0.894,0.633,0.133],
    [0.894,0.633,0.133],
    [1.15,0.694,0.194],
    [0.575,0.474,-0.0264],
    [0.575,0.474,-0.0264],
    // 10 - 1F
    [0.894,0.502,0.00222],
    [0.894,0.502,0.00222],
    [0.894,0.697,0.197],
    [0.894,0.697,0.197],
    [0.894,0.697,0.197],
    [0.894,0.697,0.197],
    [0.894,0.697,0.197],
    [0.894,0.697,0.197],
    [0.894,0.391,-0.109],
    [0.894,0.524,0.0244],
    [0.894,0.586,0.0856],
    [0.894,0.586,0.0856],
    [1.15,0.586,0.0856],
    [1.15,0.586,0.0856],
    [0.894,0.586,0.0856],
    [0.894,0.586,0.0856],
    // 20 - 2F
    [1.15,0.391,-0.109],
    [1.15,0.391,-0.109],
    [0.575,0.694,0.194],
    [0.575,0.694,0.194],
    [1.15,0.391,-0.109],
    [1.15,0.694,0.194],
    [1.15,0.694,0.194],
    [0.894,0.502,0.00222],
    [1.15,0.391,-0.109],
    [1.15,0.391,-0.109],
    [0.703,0.694,0.194],
    [0.703,0.694,0.194],
    [1.15,0.391,-0.109],
    [1.15,0.694,0.194],
    [1.15,0.694,0.194],
    [0.894,0.444],
    // 30 - 3F
    [0.344,0.556],
    [1.15,0.444],
    [0.767,0.586,0.0856],
    [0.767,0.586,0.0856],
    [1.02,0.694,0.194],
    [1.02,0.694,0.194],
    [0,0.694,0.194],
    [0,0.391,-0.109],
    [0.639,0.694],
    [0.639,0.694],
    [0.767,0.444],
    [0.575,0.75,0.0556],
    [0.831,0.694],
    [0.831,0.694],
    [0.894,0.694],
    [0.894,0.694],
    // 40 - 4F
    [0.703,0.694],
    [0.921,0.686,0,{krn: {'48': 0.224}}],
    [0.748,0.686,0,{ic: 0.0225, krn: {'48': 0.16}}],
    [0.613,0.686,0,{ic: 0.0471, krn: {'48': 0.16}}],
    [0.892,0.686,0,{ic: 0.0319, krn: {'48': 0.0958}}],
    [0.607,0.686,0,{ic: 0.0829, krn: {'48': 0.128}}],
    [0.814,0.686,0,{ic: 0.102, krn: {'48': 0.128}}],
    [0.682,0.686,0.0972,{ic: 0.0557, krn: {'48': 0.128}}],
    [0.987,0.686,0,{krn: {'48': 0.128}}],
    [0.642,0.686,0,{ic: 0.0814, krn: {'48': 0.0319}}],
    [0.779,0.686,0.0972,{ic: 0.188, krn: {'48': 0.192}}],
    [0.871,0.686,0,{krn: {'48': 0.0639}}],
    [0.788,0.686,0,{krn: {'48': 0.16}}],
    [1.38,0.686,0,{krn: {'48': 0.16}}],
    [0.937,0.686,0,{ic: 0.152, krn: {'48': 0.0958}}],
    [0.906,0.686,0,{ic: 0.0319, krn: {'48': 0.128}}],
    // 50 - 5F
    [0.81,0.686,0,{ic: 0.0846, krn: {'48': 0.0958}}],
    [0.939,0.686,0.0972,{krn: {'48': 0.128}}],
    [0.99,0.686,0,{krn: {'48': 0.0958}}],
    [0.696,0.686,0,{ic: 0.0713, krn: {'48': 0.16}}],
    [0.644,0.686,0,{ic: 0.267, krn: {'48': 0.0319}}],
    [0.715,0.686,0,{ic: 0.102, krn: {'48': 0.0958}}],
    [0.737,0.686,0,{ic: 0.0846, krn: {'48': 0.0319}}],
    [1.17,0.686,0,{ic: 0.0846, krn: {'48': 0.0958}}],
    [0.817,0.686,0,{ic: 0.147, krn: {'48': 0.16}}],
    [0.759,0.686,0.0972,{ic: 0.0846, krn: {'48': 0.0958}}],
    [0.818,0.686,0,{ic: 0.0814, krn: {'48': 0.16}}],
    [0.767,0.556],
    [0.767,0.556],
    [0.767,0.556],
    [0.767,0.556],
    [0.767,0.556],
    // 60 - 6F
    [0.703,0.694],
    [0.703,0.694],
    [0.511,0.75,0.25],
    [0.511,0.75,0.25],
    [0.511,0.75,0.25],
    [0.511,0.75,0.25],
    [0.575,0.75,0.25],
    [0.575,0.75,0.25],
    [0.447,0.75,0.25],
    [0.447,0.75,0.25],
    [0.319,0.75,0.25],
    [0.575,0.75,0.25],
    [0.575,0.75,0.25],
    [0.703,0.75,0.25],
    [0.575,0.75,0.25],
    [0.319,0.694,0.194],
    // 70 - 7F
    [0.958,0.06,0.94],
    [0.9,0.686],
    [0.958,0.686],
    [0.569,0.694,0.194,{ic: 0.128}],
    [0.767,0.556],
    [0.767,0.556],
    [0.894,0.697,0.197],
    [0.894,0.697,0.197],
    [0.526,0.694,0.194],
    [0.511,0.694,0.194],
    [0.511,0.694,0.194],
    [0.703,0.694,0.194],
    [0.894,0.694,0.13],
    [0.894,0.694,0.13],
    [0.894,0.694,0.13],
    [0.894,0.694,0.13]
  ]

});
jsMath.Setup.EncodeFont('cmbsy10');

jsMath.Font.Register({
  name: 'cmbsy10',
  prefix: 'jsMath-',
  // The test used to see if font is available
  test: jsMath.Font.Test1, testChar: 0x27, testFactor: 2,
  // Can add style, styles, macros here
  tex: function (font,fam) {
    // do browser-specific adjustments here
  },
  fallback: function (font,fam) {
    // set up unicode font here, e.g.
    //    jsMath.Update.TeXfonts({
    //      cmbsy10: {
    //         '0': {c: '&#x221B;'},  // use code point U221B for character 0
    //        '10': {c: '&#x210C;'}   // use code point U210C for character 10
    //      }
    //    });
  }
});
