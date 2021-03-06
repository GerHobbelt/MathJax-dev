/*
 *  cmssmib10/def.js
 *
 *  This file loads the cmssmib10 font into jsMath. To do this use
 *
 *      <SCRIPT>jsMath.Font.Load("cmssmib10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the cmssmib10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not
 *  customized on a per-browser basis as it probably should be.
 *
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *
 *  Once this file is loaded, you can use \char{cmssmib10}{nn} to access
 *  any character in the font.  In addition, the \cmssmib10 macro will switch to
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

  cmssmib10: [
    // 00 - 0F
    [0.56,0.694,0,{ic: 0.153, krn: {'61': -0.0611, '59': -0.122, '58': -0.122, '127': 0.0917}}],
    [0.917,0.694,0,{krn: {'127': 0.183}}],
    [0.823,0.694,0,{ic: 0.0306, krn: {'127': 0.0917}}],
    [0.672,0.694,0,{krn: {'127': 0.183}}],
    [0.796,0.694,0,{ic: 0.0631, krn: {'127': 0.0917}}],
    [0.868,0.694,0,{ic: 0.0738, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.122}}],
    [0.853,0.694,0,{ic: 0.0585, krn: {'127': 0.0917}}],
    [0.642,0.694,0,{ic: 0.153, krn: {'61': -0.0611, '59': -0.122, '58': -0.122, '127': 0.0611}}],
    [0.733,0.694,0,{krn: {'127': 0.0917}}],
    [0.69,0.694,0,{ic: 0.105, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.0611}}],
    [0.835,0.694,0,{ic: 0.0401, krn: {'127': 0.0917}}],
    [0.781,0.458,0,{krn: {'127': 0.0306}}],
    [0.673,0.694,0.194,{ic: 0.0168, krn: {'127': 0.0917}}],
    [0.561,0.458,0.194,{ic: 0.0611, krn: {'127': 0.0611}}],
    [0.504,0.694,0,{ic: 0.0716, krn: {'59': -0.0611, '58': -0.0611, '127': 0.0611}}],
    [0.51,0.458,0,{krn: {'127': 0.0611}}],
    // 10 - 1F
    [0.49,0.694,0.194,{ic: 0.0434, krn: {'127': 0.0917}}],
    [0.636,0.458,0.194,{ic: 0.0325, krn: {'127': 0.0611}}],
    [0.547,0.694,0,{ic: 0.0306, krn: {'127': 0.0917}}],
    [0.437,0.458,0,{krn: {'127': 0.0611}}],
    [0.681,0.458],
    [0.642,0.694],
    [0.76,0.458,0.194,{krn: {'127': 0.0306}}],
    [0.561,0.458,0,{ic: 0.063, krn: {'59': -0.0611, '58': -0.0611, '127': 0.0306}}],
    [0.49,0.694,0.194,{ic: 0.0128, krn: {'127': 0.122}}],
    [0.713,0.458,0,{ic: 0.0325}],
    [0.597,0.458,0.194,{krn: {'127': 0.0917}}],
    [0.676,0.458,0,{ic: 0.0325, krn: {'59': -0.0611, '58': -0.0611}}],
    [0.55,0.458,0,{ic: 0.135, krn: {'59': -0.0611, '58': -0.0611, '127': 0.0306}}],
    [0.649,0.458,0,{ic: 0.0325, krn: {'127': 0.0611}}],
    [0.695,0.694,0.194,{krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.122}}],
    [0.764,0.458,0.194,{krn: {'127': 0.0611}}],
    // 20 - 2F
    [0.771,0.694,0.194,{ic: 0.0325, krn: {'127': 0.122}}],
    [0.684,0.458,0,{ic: 0.0325, krn: {'127': 0.0306}}],
    [0.499,0.458,0,{krn: {'127': 0.0917}}],
    [0.726,0.694,0,{krn: {'127': 0.0917}}],
    [0.99,0.458,0,{ic: 0.0306, krn: {'127': 0.0611}}],
    [0.597,0.458,0.194,{krn: {'127': 0.0917}}],
    [0.41,0.458,0.0972,{ic: 0.0669, krn: {'127': 0.0917}}],
    [0.711,0.458,0.194,{krn: {'127': 0.0611}}],
    [1.1,0.406,-0.0938],
    [1.1,0.406,-0.0938],
    [1.1,0.406,-0.0938],
    [1.1,0.406,-0.0938],
    [0.306,0.521,0.0208],
    [0.306,0.521,0.0208],
    [0.55,0.479,-0.0208],
    [0.55,0.479,-0.0208],
    // 30 - 3F
    [0.55,0.458],
    [0.55,0.458],
    [0.55,0.458],
    [0.55,0.458,0.194],
    [0.55,0.458,0.194],
    [0.55,0.458,0.194],
    [0.55,0.694],
    [0.55,0.458,0.194],
    [0.55,0.694],
    [0.55,0.458,0.194],
    [0.306,0.131],
    [0.306,0.131,0.106],
    [0.856,0.607,0.107],
    [0.55,0.75,0.25,{krn: {'1': -0.0611, '65': -0.0611, '77': -0.0611, '78': -0.0611, '89': 0.0611, '90': -0.0611}}],
    [0.856,0.607,0.107],
    [0.55,0.479,-0.0208],
    // 40 - 4F
    [0.607,0.694,0,{ic: 0.0611, krn: {'127': 0.0917}}],
    [0.733,0.694,0,{krn: {'127': 0.153}}],
    [0.773,0.694,0,{ic: 0.0401, krn: {'127': 0.0917}}],
    [0.686,0.694,0,{ic: 0.0585, krn: {'61': -0.0306, '59': -0.0611, '58': -0.0611, '127': 0.0917}}],
    [0.837,0.694,0,{ic: 0.0306, krn: {'127': 0.0611}}],
    [0.7,0.694,0,{ic: 0.0585, krn: {'127': 0.0917}}],
    [0.591,0.694,0,{ic: 0.153, krn: {'61': -0.0611, '59': -0.122, '58': -0.122, '127': 0.0917}}],
    [0.717,0.694,0,{ic: 0.0585, krn: {'127': 0.0917}}],
    [0.838,0.694,0,{ic: 0.0432, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.122}}],
    [0.491,0.694,0,{ic: 0.0662, krn: {'127': 0.122}}],
    [0.532,0.694,0,{ic: 0.0738, krn: {'61': -0.0611, '59': -0.122, '58': -0.122, '127': 0.183}}],
    [0.822,0.694,0,{ic: 0.0585, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.0611}}],
    [0.642,0.694,0,{krn: {'127': 0.0306}}],
    [0.99,0.694,0,{ic: 0.0738, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.0917}}],
    [0.807,0.694,0,{ic: 0.0738, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.122}}],
    [0.762,0.694,0,{ic: 0.0306, krn: {'127': 0.0917}}],
    // 50 - 5F
    [0.63,0.694,0,{ic: 0.153, krn: {'61': -0.0611, '59': -0.122, '58': -0.122, '127': 0.0917}}],
    [0.792,0.694,0.106,{krn: {'127': 0.0917}}],
    [0.763,0.694,0,{ic: 0.02, krn: {'127': 0.0917}}],
    [0.654,0.694,0,{ic: 0.0432, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.0917}}],
    [0.602,0.694,0,{ic: 0.153, krn: {'61': -0.0306, '59': -0.0611, '58': -0.0611, '127': 0.0917}}],
    [0.702,0.694,0,{ic: 0.0738, krn: {'59': -0.122, '58': -0.122, '61': -0.0611, '127': 0.0611}}],
    [0.55,0.694,0,{ic: 0.244, krn: {'59': -0.183, '58': -0.183, '61': -0.0611}}],
    [0.947,0.694,0,{ic: 0.153, krn: {'59': -0.183, '58': -0.183, '61': -0.0611}}],
    [0.8,0.694,0,{ic: 0.0662, krn: {'61': -0.0917, '61': -0.0306, '59': -0.0611, '58': -0.0611, '127': 0.0917}}],
    [0.547,0.694,0,{ic: 0.244, krn: {'59': -0.183, '58': -0.183, '61': -0.122}}],
    [0.731,0.694,0,{ic: 0.0585, krn: {'61': -0.0611, '59': -0.0611, '58': -0.0611, '127': 0.0917}}],
    [0.428,0.75],
    [0.428,0.694,0.194],
    [0.428,0.694,0.194],
    [1.1,0.365,-0.135],
    [1.1,0.365,-0.135],
    // 60 - 6F
    [0.468,0.694,0,{krn: {'127': 0.122}}],
    [0.525,0.458,0,{ic: 0.0387, krn: {'127': 0.0917}}],
    [0.561,0.694,0,{ic: 0.0334}],
    [0.489,0.458,0,{ic: 0.0852, krn: {'127': 0.0917}}],
    [0.561,0.694,0,{ic: 0.118, krn: {'89': 0.0611, '90': -0.0611, '106': -0.122, '102': -0.183, '127': 0.183}}],
    [0.511,0.458,0,{ic: 0.0753, krn: {'127': 0.0917}}],
    [0.336,0.694,0,{ic: 0.224, krn: {'59': -0.0611, '58': -0.0611, '127': 0.153}}],
    [0.55,0.458,0.194,{ic: 0.113, krn: {'127': 0.0306}}],
    [0.561,0.694,0,{ic: 0.0461, krn: {'127': -0.0306}}],
    [0.256,0.694,0,{ic: 0.124, krn: {'127': 0.122}}],
    [0.286,0.694,0.194,{ic: 0.118, krn: {'59': -0.0611, '58': -0.0611, '127': 0.122}}],
    [0.531,0.694,0,{ic: 0.0852}],
    [0.256,0.694,0,{ic: 0.118, krn: {'127': 0.122}}],
    [0.867,0.458,0,{ic: 0.0461, krn: {'127': 0.0917}}],
    [0.561,0.458,0,{ic: 0.0461, krn: {'127': 0.0917}}],
    [0.55,0.458,0,{ic: 0.0682, krn: {'127': 0.0611}}],
    // 70 - 7F
    [0.561,0.458,0.194,{ic: 0.0426, krn: {'127': 0.0917}}],
    [0.561,0.458,0.194,{ic: 0.0683, krn: {'127': 0.0611}}],
    [0.372,0.458,0,{ic: 0.113, krn: {'59': -0.0611, '58': -0.0611, '127': 0.0917}}],
    [0.422,0.458,0,{ic: 0.0791, krn: {'127': 0.0917}}],
    [0.404,0.589,0,{ic: 0.073, krn: {'127': 0.0917}}],
    [0.561,0.458,0,{ic: 0.0683, krn: {'127': 0.0917}}],
    [0.5,0.458,0,{ic: 0.113, krn: {'127': 0.0611}}],
    [0.744,0.458,0,{ic: 0.113, krn: {'127': 0.0611}}],
    [0.5,0.458,0,{ic: 0.0944, krn: {'127': 0.0611}}],
    [0.5,0.458,0.194,{ic: 0.113, krn: {'127': 0.0611}}],
    [0.476,0.458,0,{ic: 0.0916, krn: {'127': 0.0611}}],
    [0.324,0.458,0,{krn: {'127': 0.0306}}],
    [0.396,0.458,0.194,{krn: {'127': 0.0917}}],
    [0.747,0.458,0.194,{krn: {'127': 0.0917}}],
    [0.55,0.736,0,{ic: 0.133}],
    [0.256,0.694,0,{ic: 0.463}]
  ]

});
jsMath.Setup.EncodeFont('cmssmib10');

jsMath.Font.Register({
  name: 'cmssmib10',
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
    //      cmssmib10: {
    //         '0': {c: '&#x221B;'},  // use code point U221B for character 0
    //        '10': {c: '&#x210C;'}   // use code point U210C for character 10
    //      }
    //    });
  }
});
