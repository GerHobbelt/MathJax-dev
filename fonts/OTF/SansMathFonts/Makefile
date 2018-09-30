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

MFTRACE_MODIFIED=lib/mftrace-modified
#MFTRACE_BIN=$(PYTHON) $(MFTRACE_MODIFIED)
MFTRACE_BIN=$(MFTRACE)
FONTNAME=SansMathFonts

all: fonts install

blacker: $(MFTRACE_MODIFIED)
$(MFTRACE_MODIFIED):
	$(PERL) makeBlacker 1 # values between 10 and 30 seem best

pfa: $(MFTRACE_MODIFIED)
	@echo "cmss10" # Roman
	$(MFTRACE_BIN) --magnification 1000 --simplify cmss10

	@echo "cmsmfIPiXi10" # Roman I-Pi-Xi
	$(MFTRACE_BIN) --magnification 1000 --simplify cmsmfIPiXi10

	@echo "cmssi10" # Text-Italic
	$(MFTRACE_BIN) --magnification 1000 --simplify cmssi10

	@echo "cmsmfIPiXii10" # Text-Italic I-Pi-Xi
	$(MFTRACE_BIN) --magnification 1000 --simplify cmsmfIPiXii10

	@echo "cmssbx10" # Sans Serif Bold Extended
	$(MFTRACE_BIN) --magnification 1000 --simplify cmssbx10

	@echo "cmsmfIPiXibx10" # Text-BoldExtended I-Pi-Xi
	$(MFTRACE_BIN) --magnification 1000 --simplify cmsmfIPiXibx10

	@echo "cmssbxo10" # Sans Serif Bold Slanted
	$(MFTRACE_BIN) --magnification 1000 --simplify cmssbxo10

	@echo "cmsmfIPiXixi10" # Text-Bold-Slanted I-Pi-Xi
	$(MFTRACE_BIN) --magnification 1000 --simplify cmsmfIPiXixi10

	@echo "cmssmi10" # Math-Italic
	$(MFTRACE_BIN) --magnification 1000 --encoding $(TETEXENCODING)/aae443f0.enc --simplify cmssmi10

	@echo "cmssmib10" # Math-Bold-Italic
	$(MFTRACE_BIN) --magnification 1000 --encoding $(TETEXENCODING)/aae443f0.enc --simplify cmssmib10

	@echo "cmsssy10" # Symbol
	$(MFTRACE_BIN) --magnification 1000 --encoding $(TETEXENCODING)/10037936.enc --simplify cmsssy10

	@echo "cmssbsy10" # Bold Math Symbol
	$(MFTRACE_BIN) --magnification 1000 --encoding $(TETEXENCODING)/10037936.enc --simplify cmssbsy10

	@echo "cmssex10" # Math Extended
	$(MFTRACE_BIN) --magnification 1000 --keep cmssex10
	$(FONTFORGE) -lang=ff -c 'Open("mftrace.dir/cmssex10.pfa.raw");SelectAll();AddExtrema();Simplify();AutoHint();Generate("cmssex10.pfa");'
	rm -rf mftrace.dir
	rm cmssex10.afm

	@echo "ssmsam10" # AMS Math Symbol A
	$(MFTRACE_BIN) --magnification 1000 --simplify --encoding $(TETEXENCODING)/10037936.enc ssmsam10

	@echo "ssmsbm10" # AMS Math Symbol B
	$(MFTRACE_BIN) --magnification 450 --simplify --encoding $(TETEXENCODING)/10037936.enc ssmsbm10

	@echo "cmtt10" # Typewriter
	$(MFTRACE_BIN) --magnification 1000 --simplify cmtt10

	@echo "eufm10"
	$(MFTRACE_BIN) --magnification 1000 --simplify eufm10
	@echo "eufb10"
	$(MFTRACE_BIN) --magnification 1000 --simplify eufb10

	# echo "eusm10"
	# $(MFTRACE_BIN) --magnification 1000 --simplify eusm10
	# echo "eusb10"
	# $(MFTRACE_BIN) --magnification 1000 --simplify eusb10

	@echo "rsfs10"
	$(MFTRACE_BIN) --magnification 1000 --simplify --encoding $(BASEENCODING)/tex256.enc rsfs10

	mkdir -p pfa
	rm -f pfa/*
	mv *.pfa pfa

ff: pfa
	mkdir -p ff otf
	rm -f otf/*
	$(PERL)	makeFF

ttf: ff
	mkdir -p ttf
	rm -f ttf/*

	# Handle the MathJax_Size4 font first as it is used by other fonts.
	@echo "$(FONTNAME)_Size4.ff"
	$(FONTFORGE) -lang=ff -script ff/$(FONTNAME)_Size4.ff

	@for file in `cd ff; ls *.ff | $(GREP) -v $(FONTNAME)_Size4`; do \
		echo ""; \
		echo $$file; \
		$(FONTFORGE) -lang=ff -script ff/$$file; \
	done

eot: ttf
	mkdir -p eot
	rm -f eot/*

	@for file in `ls ttf/*.ttf | $(SED) 's|ttf/\(.*\)\.ttf|\1|'`; do \
		echo "Generating $$file.eot..."; \
		$(TTF2EOT) < ttf/$$file.ttf > eot/$$file.eot; \
	done

	rm -f eot/*WinChrome* eot/*Greek*

svg: ttf
	mkdir -p svg
	rm -f svg/*

	@for file in `ls ttf/*.ttf | $(SED) 's|ttf/\(.*\)\.ttf|\1|'`; do \
		echo "Generating $$file.svg..."; \
		$(JAVA) -jar $(TTF2SVG) ttf/$$file.ttf \
		-id $$file -o svg/$$file.svg -l 0 -h 65535; \
	done

	rm -f svg/*WinIE6* svg/*Greek*

woff: otf ttf
	@for file in `ls otf/*.otf | $(SED) 's|otf/\(.*\)\.otf|\1|'`; do \
		echo "Generating $$file.woff..."; \
		$(SFNT2WOFF) otf/$$file.otf; \
	done

	mkdir -p woff
	rm -f woff/*
	mv otf/*.woff woff
	rm -f woff/*WinChrom* woff/*WinIE6* woff/*Greek*

css: woff
	mkdir -p css
	rm -f css/*

	@for file in `ls woff/*.woff | $(SED) 's|woff/\(.*\)\.woff|\1|'`; do \
		echo "Generating $$file.css..."; \
		$(PERL) woff2css $$file > css/$$file.css; \
	end

	$(PERL) css2all css/*.css > $(FONTNAME)-All.css
	mv $(FONTNAME)-All.css css

OTFandTTF: ttf

fonts: OTFandTTF eot svg woff css

install:
	#Copy the font files into the system font directory
	#rm -f $FONTDIR/MathJax_*
	cp `ls otf/*.otf | $(GREP) -v 'Greek'` $(FONTDIR)
	# echo `ls ttf/*.ttf | $(GREP) -Ev 'WinChro|WinIE6'`
	cp ttf/*Greek*.ttf $(FONTDIR)

	#  Put the fonts into the MathJax fonts folder
	rm -rf $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/otf
	rm -rf $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/eot
	rm -rf $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/svg
	rm -rf $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/woff
	#rm -rf $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/css/
	mkdir -p $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/otf
	mkdir -p $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/eot
	mkdir -p $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/svg
	mkdir -p $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/woff

	cp `ls otf/*.otf | $(GREP) -v 'Greek'` $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/otf
	cp eot/*.eot $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/eot
	cp svg/*.svg $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/svg
	cp woff/*.woff $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/woff
	#cp css/*.css $(MATHJAXDIR)/fonts/HTML-CSS/$(FONTNAME)/css

clean:
	rm -f $(MFTRACE_MODIFIED) lib/blacker.mf
	rm -f skew.js
	rm -rf pfa otf ttf eot svg woff css
	rm -rf mftrace.dir
	rm -f ff/MathJax*.ff

.PHONY: all fonts install blacker clean css woff eot ttf otf ff pfa OTFandTTF svg

