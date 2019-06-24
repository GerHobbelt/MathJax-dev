#!gmake
#
# Version: Apache License 2.0
#
# Copyright (c) 2013 The MathJax Consortium
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

CUSTOM=custom.cfg

-include $(CUSTOM)

help:
	@echo "Usage:"
	@echo ""
	@echo "make config"
	@echo "  Generate the Perl configuration"
	@echo ""
	@echo "make fonts"
	@echo "  Generate and install MathJax fonts and related data."
	@echo ""
	@echo "make pack"
	@echo "  Run MathJax packer"
	@echo ""
	@echo "make combine"
	@echo "  Run MathJax combiner, which combines the packed library source files"
	@echo ""
	@echo "make lint"
	@echo "make fix"
	@echo "  Run ESLint on all sources. Execute 'make fix' task have ESLint auto-fix issues in the code."
	@echo ""
	@echo "make prettier"
	@echo "  Run MathJax prettifier, which pretty-prints the combined library files"
	@echo ""
	@echo "make prettier-dev"
	@echo "  Run MathJax prettifier, which pretty-prints the library source files"
	@echo ""
	@echo "make previews"
	@echo "  Render all MathJax demo pages in test/ to static HTML using usus+Chrome"
	@echo ""
	@echo "make all"
	@echo "  Regenerate the MathJax library files (pack, combine & prettify)"
	@echo ""
	@echo "make clean"
	@echo "  Remove temporary directories and files."
	@echo ""

all: config pack combine prettier

$(CUSTOM): default.cfg
	@echo "Copy default.cfg to $(CUSTOM)"
	@echo "Configuration file '$(CUSTOM)' created.";
	@echo "Edit this file and run 'make config'.";
	touch $(CUSTOM)
	@exit 1

$(CUSTOM).pl: $(CUSTOM)
	@echo "Creating Perl config file..."
	@cp $(CUSTOM) $(CUSTOM).pl
	@echo >> $(CUSTOM).pl # ensure that the config file ends by a new line
	#@echo "MFTRACE_PATH=`$(WHICH) $(MFTRACE)`" >> $(CUSTOM).pl
	@$(SED) -i "s|^\([A-Z_0-9]*\)=\(.*\)|$$\1='\2';|" $(CUSTOM).pl
	@echo "1;" >> $(CUSTOM).pl

config: $(CUSTOM).pl

fonts: config
	$(MAKE) -C fonts all

pack: config
	$(MAKE) -C packer all

combine: config
	$(MAKE) -C combiner all

lint:
	cd $(MATHJAXDIR)/mathjax/ ; eslint unpacked/

fix:
	cd $(MATHJAXDIR)/mathjax/ ; eslint --fix unpacked/

prettier:
	cd $(MATHJAXDIR)/mathjax/ ; prettier --write --loglevel log *.js
	node globber/glob4prettier.js --fullpath $(MATHJAXDIR)/mathjax/ | xargs prettier --write --loglevel log
	#node globber/glob4prettier.js $(MATHJAXDIR)/mathjax/ | xargs -t -P 1 -n 1 -r prettier/mk_prettier.sh $(MATHJAXDIR)/mathjax/ 
	#node globber/glob4prettier.js --fullpath $(MATHJAXDIR)/mathjax/ | xargs eslint --fix
	#node globber/glob4prettier.js --fullpath $(MATHJAXDIR)/mathjax/ | xargs prettier --write --loglevel log

prettier-dev:
	#node globber/glob4prettier.js --devtree --fullpath $(MATHJAXDIR)/mathjax/unpacked/ 
	#pwd
	#node globber/glob4prettier.js --devtree --fullpath $(MATHJAXDIR)/mathjax/unpacked/ | xargs prettier --write --loglevel log
	#node globber/glob4prettier.js --devtree $(MATHJAXDIR)/mathjax/unpacked/ | xargs -t -P 1 -n 1 -r prettier/mk_prettier.sh $(MATHJAXDIR)/mathjax/unpacked/ 
	node globber/glob4prettier.js --devtree --fullpath $(MATHJAXDIR)/mathjax/unpacked/ | xargs eslint --fix
	node globber/glob4prettier.js --devtree --fullpath $(MATHJAXDIR)/mathjax/unpacked/ | xargs prettier --write --loglevel log

previews:
	cd MkPreviews; bash ./generate-previews.sh ../$(MATHJAXDIR)/mathjax
	
misc: operator-dictionary MML-entities

MML-entities: config
	cd MML-entities; bash ./makeAll ../$(MATHJAXDIR)/mathjax

operator-dictionary: config
	cd operator-dictionary; bash ./makeAll ../$(MATHJAXDIR)/mathjax

clean: config
	rm -f $(CUSTOM).pl
	$(MAKE) -C fonts clean

clean-destination: config
	# this assumes MATHJAXDIR is a *relative path* for the perl tools in combiner and packer:
	-rm -rf $(MATHJAXDIR)/mathjax/config/ $(MATHJAXDIR)/mathjax/localization/ $(MATHJAXDIR)/mathjax/extensions/ $(MATHJAXDIR)/mathjax/jax/

.PHONY: help lint fix fonts pack combine clean clean-destination prettier prettier-dev previews misc operator-dictionary MML-entities all

