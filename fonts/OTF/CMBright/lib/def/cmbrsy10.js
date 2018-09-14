/*
 *  cmbrsy10/def.js
 *
 *  This file loads the cmbrsy10 font into jsMath. To do this use
 *
 *      <SCRIPT>jsMath.Font.Load("cmbrsy10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the cmbrsy10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not
 *  customized on a per-browser basis as it probably should be.
 *
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *
 *  Once this file is loaded, you can use \char{cmbrsy10}{nn} to access
 *  any character in the font.  In addition, the \cmbrsy10 macro will switch to
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

  cmbrsy10: [
    // 00 - 0F
    [0.778,0.597,0.0694],
    [0.278,0.458,-0.0694],
    [0.778,0.597,0.0694],
    [0.5,0.479,-0.0486],
    [0.778,0.597,0.0694],
    [0.5,0.458,-0.0694],
    [0.778,0.597,0.0694],
    [0.778,0.597,0.0694],
    [0.778,0.597,0.0694],
    [0.778,0.597,0.0694],
    [0.778,0.597,0.0694],
    [0.778,0.597,0.0694],
    [0.778,0.597,0.0694],
    [1,0.694,0.194],
    [0.5,0.458,-0.0694],
    [0.5,0.458,-0.0694],
    // 10 - 1F
    [0.778,0.478,-0.0501],
    [0.778,0.478,-0.0501],
    [0.778,0.65,0.122],
    [0.778,0.65,0.122],
    [0.778,0.65,0.122],
    [0.778,0.65,0.122],
    [0.778,0.65,0.122],
    [0.778,0.65,0.122],
    [0.778,0.381,-0.147],
    [0.778,0.497,-0.0308],
    [0.778,0.553,0.0252],
    [0.778,0.553,0.0252],
    [1,0.553,0.0252],
    [1,0.553,0.0252],
    [0.778,0.553,0.0252],
    [0.778,0.553,0.0252],
    // 20 - 2F
    [1,0.381,-0.147],
    [1,0.381,-0.147],
    [0.5,0.694,0.167],
    [0.5,0.694,0.167],
    [1,0.381,-0.147],
    [1,0.694,0.167],
    [1,0.694,0.167],
    [0.778,0.478,-0.0501],
    [1,0.381,-0.147],
    [1,0.381,-0.147],
    [0.611,0.694,0.167],
    [0.611,0.694,0.167],
    [1,0.381,-0.147],
    [1,0.694,0.167],
    [1,0.694,0.167],
    [0.778,0.431],
    // 30 - 3F
    [0.275,0.556],
    [1,0.431],
    [0.667,0.553,0.0252],
    [0.667,0.553,0.0252],
    [0.889,0.694,0.194],
    [0.889,0.694,0.194],
    [0,0.694,0.167],
    [0,0.381,-0.147],
    [0.556,0.694],
    [0.556,0.694],
    [0.667,0.431],
    [0.5,0.75,0.0556],
    [0.722,0.694],
    [0.722,0.694],
    [0.778,0.694],
    [0.778,0.694],
    // 40 - 4F
    [0.611,0.694],
    [0.798,0.683,0,{krn: {'48': 0.194}}],
    [0.657,0.683,0,{ic: 0.0304, krn: {'48': 0.139}}],
    [0.527,0.683,0,{ic: 0.0583, krn: {'48': 0.139}}],
    [0.771,0.683,0,{ic: 0.0278, krn: {'48': 0.0833}}],
    [0.528,0.683,0,{ic: 0.0894, krn: {'48': 0.111}}],
    [0.719,0.683,0,{ic: 0.0993, krn: {'48': 0.111}}],
    [0.595,0.683,0.0972,{ic: 0.0593, krn: {'48': 0.111}}],
    [0.845,0.683,0,{ic: 0.00965, krn: {'48': 0.111}}],
    [0.545,0.683,0,{ic: 0.0738, krn: {'48': 0.0278}}],
    [0.678,0.683,0.0972,{ic: 0.185, krn: {'48': 0.167}}],
    [0.762,0.683,0,{ic: 0.0144, krn: {'48': 0.0556}}],
    [0.69,0.683,0,{krn: {'48': 0.139}}],
    [1.2,0.683,0,{krn: {'48': 0.139}}],
    [0.82,0.683,0,{ic: 0.147, krn: {'48': 0.0833}}],
    [0.796,0.683,0,{ic: 0.0278, krn: {'48': 0.111}}],
    // 50 - 5F
    [0.696,0.683,0,{ic: 0.0822, krn: {'48': 0.0833}}],
    [0.817,0.683,0.0972,{krn: {'48': 0.111}}],
    [0.848,0.683,0,{krn: {'48': 0.0833}}],
    [0.606,0.683,0,{ic: 0.075, krn: {'48': 0.139}}],
    [0.545,0.683,0,{ic: 0.254, krn: {'48': 0.0278}}],
    [0.626,0.683,0,{ic: 0.0993, krn: {'48': 0.0833}}],
    [0.613,0.683,0,{ic: 0.0822, krn: {'48': 0.0278}}],
    [0.988,0.683,0,{ic: 0.0822, krn: {'48': 0.0833}}],
    [0.713,0.683,0,{ic: 0.146, krn: {'48': 0.139}}],
    [0.668,0.683,0.0972,{ic: 0.0822, krn: {'48': 0.0833}}],
    [0.725,0.683,0,{ic: 0.0794, krn: {'48': 0.139}}],
    [0.667,0.556],
    [0.667,0.556],
    [0.667,0.556],
    [0.667,0.556],
    [0.667,0.556],
    // 60 - 6F
    [0.611,0.694],
    [0.611,0.694],
    [0.444,0.75,0.222],
    [0.444,0.75,0.222],
    [0.444,0.75,0.222],
    [0.444,0.75,0.222],
    [0.5,0.75,0.222],
    [0.5,0.75,0.222],
    [0.389,0.75,0.222],
    [0.389,0.75,0.222],
    [0.278,0.75,0.222],
    [0.5,0.75,0.222],
    [0.5,0.75,0.222],
    [0.611,0.75,0.222],
    [0.5,0.75,0.222],
    [0.278,0.694,0.167],
    // 70 - 7F
    [0.833,0.04,0.932],
    [0.75,0.683],
    [0.833,0.683],
    [0.417,0.694,0.194,{ic: 0.111}],
    [0.667,0.556],
    [0.667,0.556],
    [0.778,0.65,0.122],
    [0.778,0.65,0.122],
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
jsMath.Setup.EncodeFont('cmbrsy10');

jsMath.Font.Register({
  name: 'cmbrsy10',
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
    //      cmbrsy10: {
    //         '0': {c: '&#x221B;'},  // use code point U221B for character 0
    //        '10': {c: '&#x210C;'}   // use code point U210C for character 10
    //      }
    //    });
  }
});
