#!gmake
#
# Version: Apache License 2.0
#
# Copyright (c) 2013 MathJax Project
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

include ../../../custom.cfg

FONTNAME=CMBright

all: png range data

$(FONTNAME):
        # Makes the .png files for ALL the fonts
	rm -rf $(FONTNAME)
	$(PERL) makePNG otf/$(FONTNAME)_AMS-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Caligraphic-Bold.otf
	$(PERL) makePNG otf/$(FONTNAME)_Caligraphic-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Main-Bold.otf
	$(PERL) makePNG otf/$(FONTNAME)_Main-Italic.otf
	$(PERL) makePNG otf/$(FONTNAME)_Main-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Math-BoldItalic.otf
	$(PERL) makePNG otf/$(FONTNAME)_Math-Italic.otf
	$(PERL) makePNG otf/$(FONTNAME)_Size1-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Size2-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Size3-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Size4-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Fraktur-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Fraktur-Bold.otf
	$(PERL) makePNG otf/$(FONTNAME)_SansSerif-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_SansSerif-Bold.otf
	$(PERL) makePNG otf/$(FONTNAME)_SansSerif-Italic.otf
	$(PERL) makePNG otf/$(FONTNAME)_Script-Regular.otf
	$(PERL) makePNG otf/$(FONTNAME)_Typewriter-Regular.otf

        # $(PERL) makePNG ttf/$(FONTNAME)_Greek-Bold.ttf
        # $(PERL) makePNG ttf/$(FONTNAME)_Greek-BoldItalic.ttf
        # $(PERL) makePNG ttf/$(FONTNAME)_Greek-Italic.ttf
        # $(PERL) makePNG ttf/$(FONTNAME)_Greek-Regular.ttf

	@echo "Compressing PNG images (this make take a while)..."
	#$(OPTIPNG) -q -o7 TeX/png/*/*/*/*.png
	echo $(FONTNAME)/png/*/*/*/*.png | xargs $(OPTIPNG) -q -o7
	#$(ADVPNG) -q -z4 TeX/png/*/*/*/*.png
	echo $(FONTNAME)/png/*/*/*/*.png | xargs $(ADVPNG) -q -z4

range: $(FONTNAME)
        #  Makes the data files needed by the HTML-CSS output jax
        #  for ALL the MathJax image fonts
	$(PERL) makeRanges $(FONTNAME)_AMS-Regular
	$(PERL) makeRanges $(FONTNAME)_Caligraphic-Bold
	$(PERL) makeRanges $(FONTNAME)_Caligraphic-Regular
	$(PERL) makeRanges $(FONTNAME)_Main-Bold
	$(PERL) makeRanges $(FONTNAME)_Main-Italic
	$(PERL) makeRanges $(FONTNAME)_Main-Regular
	$(PERL) makeRanges $(FONTNAME)_Math-BoldItalic
	$(PERL) makeRanges $(FONTNAME)_Math-Italic
	$(PERL) makeRanges $(FONTNAME)_Size1-Regular
	$(PERL) makeRanges $(FONTNAME)_Size2-Regular
	$(PERL) makeRanges $(FONTNAME)_Size3-Regular
	$(PERL) makeRanges $(FONTNAME)_Size4-Regular
	$(PERL) makeRanges $(FONTNAME)_Fraktur-Regular
	$(PERL) makeRanges $(FONTNAME)_Fraktur-Bold
	$(PERL) makeRanges $(FONTNAME)_SansSerif-Regular
	$(PERL) makeRanges $(FONTNAME)_SansSerif-Bold
	$(PERL) makeRanges $(FONTNAME)_SansSerif-Italic
	$(PERL) makeRanges $(FONTNAME)_Script-Regular
	$(PERL) makeRanges $(FONTNAME)_Typewriter-Regular

        # $(PERL) makeRanges $(FONTNAME)_Greek-Bold
        # $(PERL) makeRanges $(FONTNAME)_Greek-BoldItalic
        # $(PERL) makeRanges $(FONTNAME)_Greek-Italic
        # $(PERL) makeRanges $(FONTNAME)_Greek-Regular

png: $(FONTNAME)

$(FONTNAME)/png/unpacked/imagedata.js:
	$(PERL) makeData

data: $(FONTNAME)/png/unpacked/imagedata.js

install:
        #  Moves the image files to the proper location and
        #  removes the depth data files
	@echo "Copying image data..."
	@dir=$(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME); \
	rm -rf $$dir/png; \
	cp -r $(FONTNAME)/png $$dir; \
	rm -f $$dir/png/*/*/depths.pl

clean:
	rm -rf $(FONTNAME)
