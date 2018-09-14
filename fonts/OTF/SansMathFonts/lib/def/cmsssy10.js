/*
 *  cmsssy10/def.js
 *
 *  This file loads the cmsssy10 font into jsMath. To do this use
 *
 *      <SCRIPT>jsMath.Font.Load("cmsssy10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the cmsssy10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not
 *  customized on a per-browser basis as it probably should be.
 *
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *
 *  Once this file is loaded, you can use \char{cmsssy10}{nn} to access
 *  any character in the font.  In addition, the \cmsssy10 macro will switch to
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

  cmsssy10: [
    // 00 - 0F
    [0.778,0.583,0.0833],
    [0.278,0.444,-0.0556],
    [0.778,0.583,0.0833],
    [0.5,0.472,-0.0278],
    [0.778,0.583,0.0833],
    [0.5,0.444,-0.0556],
    [0.778,0.583,0.0833],
    [0.778,0.583,0.0833],
    [0.778,0.583,0.0833],
    [0.778,0.583,0.0833],
    [0.778,0.583,0.0833],
    [0.778,0.583,0.0833],
    [0.778,0.583,0.0833],
    [1,0.694,0.194],
    [0.5,0.444,-0.0556],
    [0.5,0.444,-0.0556],
    // 10 - 1F
    [0.778,0.47,-0.03],
    [0.778,0.47,-0.03],
    [0.778,0.648,0.148],
    [0.778,0.648,0.148],
    [0.778,0.648,0.148],
    [0.778,0.648,0.148],
    [0.778,0.648,0.148],
    [0.778,0.648,0.148],
    [0.778,0.37,-0.13],
    [0.778,0.49,-0.01],
    [0.778,0.548,0.0478],
    [0.778,0.548,0.0478],
    [1,0.548,0.0478],
    [1,0.548,0.0478],
    [0.778,0.548,0.0478],
    [0.778,0.548,0.0478],
    // 20 - 2F
    [1,0.37,-0.13],
    [1,0.37,-0.13],
    [0.5,0.694,0.194],
    [0.5,0.694,0.194],
    [1,0.37,-0.13],
    [1,0.694,0.194],
    [1,0.694,0.194],
    [0.778,0.47,-0.03],
    [1,0.37,-0.13],
    [1,0.37,-0.13],
    [0.611,0.694,0.194],
    [0.611,0.694,0.194],
    [1,0.37,-0.13],
    [1,0.694,0.194],
    [1,0.694,0.194],
    [0.778,0.444],
    // 30 - 3F
    [0.264,0.556],
    [1,0.444],
    [0.667,0.548,0.0478],
    [0.667,0.548,0.0478],
    [0.889,0.694,0.194],
    [0.889,0.694,0.194],
    [0,0.694,0.194],
    [0,0.37,-0.13],
    [0.556,0.694],
    [0.556,0.694],
    [0.667,0.444],
    [0.5,0.75,0.0556],
    [0.722,0.694],
    [0.722,0.694],
    [0.778,0.694],
    [0.778,0.694],
    // 40 - 4F
    [0.611,0.694],
    [0.801,0.694,0,{krn: {'48': 0.194}}],
    [0.65,0.694,0,{ic: 0.0188, krn: {'48': 0.139}}],
    [0.533,0.694,0,{ic: 0.0398, krn: {'48': 0.139}}],
    [0.776,0.694,0,{ic: 0.0278, krn: {'48': 0.0833}}],
    [0.528,0.694,0,{ic: 0.0709, krn: {'48': 0.111}}],
    [0.707,0.694,0,{ic: 0.0877, krn: {'48': 0.111}}],
    [0.593,0.694,0.0972,{ic: 0.0477, krn: {'48': 0.111}}],
    [0.86,0.694,0,{krn: {'48': 0.111}}],
    [0.56,0.694,0,{ic: 0.0541, krn: {'48': 0.0278}}],
    [0.678,0.694,0.0972,{ic: 0.161, krn: {'48': 0.167}}],
    [0.757,0.694,0,{krn: {'48': 0.0556}}],
    [0.685,0.694,0,{krn: {'48': 0.139}}],
    [1.18,0.694,0,{krn: {'48': 0.139}}],
    [0.815,0.694,0,{ic: 0.131, krn: {'48': 0.0833}}],
    [0.787,0.694,0,{ic: 0.0278, krn: {'48': 0.111}}],
    // 50 - 5F
    [0.705,0.694,0,{ic: 0.0729, krn: {'48': 0.0833}}],
    [0.817,0.694,0.0972,{krn: {'48': 0.111}}],
    [0.861,0.694,0,{krn: {'48': 0.0833}}],
    [0.606,0.694,0,{ic: 0.0611, krn: {'48': 0.139}}],
    [0.561,0.694,0,{ic: 0.231, krn: {'48': 0.0278}}],
    [0.621,0.694,0,{ic: 0.0877, krn: {'48': 0.0833}}],
    [0.627,0.694,0,{ic: 0.0729, krn: {'48': 0.0278}}],
    [1,0.694,0,{ic: 0.0729, krn: {'48': 0.0833}}],
    [0.71,0.694,0,{ic: 0.127, krn: {'48': 0.139}}],
    [0.659,0.694,0.0972,{ic: 0.0729, krn: {'48': 0.0833}}],
    [0.711,0.694,0,{ic: 0.0702, krn: {'48': 0.139}}],
    [0.667,0.556],
    [0.667,0.556],
    [0.667,0.556],
    [0.667,0.556],
    [0.667,0.556],
    // 60 - 6F
    [0.611,0.694],
    [0.611,0.694],
    [0.444,0.75,0.25],
    [0.444,0.75,0.25],
    [0.444,0.75,0.25],
    [0.444,0.75,0.25],
    [0.5,0.75,0.25],
    [0.5,0.75,0.25],
    [0.389,0.75,0.25],
    [0.389,0.75,0.25],
    [0.278,0.75,0.25],
    [0.5,0.75,0.25],
    [0.5,0.75,0.25],
    [0.611,0.75,0.25],
    [0.5,0.75,0.25],
    [0.278,0.694,0.194],
    // 70 - 7F
    [0.833,0.04,0.96],
    [0.708,0.694],
    [0.833,0.694],
    [0.425,0.694,0.194,{ic: 0.111}],
    [0.667,0.556],
    [0.667,0.556],
    [0.778,0.648,0.148],
    [0.778,0.648,0.148],
    [0.444,0.694,0.194],
    [0.444,0.694,0.194],
    [0.444,0.694,0.194],
    [0.611,0.694,0.194],
    [0.778,0.694,0.13],
    [0.778,0.694,0.13],
    [0.778,0.694,0.13],
    [0.778,0.694,0.13]
  ]

});
jsMath.Setup.EncodeFont('cmsssy10');

jsMath.Font.Register({
  name: 'cmsssy10',
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
    //      cmsssy10: {
    //         '0': {c: '&#x221B;'},  // use code point U221B for character 0
    //        '10': {c: '&#x210C;'}   // use code point U210C for character 10
    //      }
    //    });
  }
});
