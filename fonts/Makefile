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

all: otf afm svg img ams tables

otf:
	$(MAKE) -C OTF/TeX all
	$(MAKE) -C OTF/CMBright all

afm:
	$(MAKE) -C AFM/TeX all
	$(MAKE) -C AFM/STIX-1.1 all
	$(MAKE) -C AFM/CMBright all

svg:
	$(MAKE) -C SVG/TeX all
	$(MAKE) -C SVG/CMBright all

img:
	$(MAKE) -C IMG/TeX all
	$(MAKE) -C IMG/CMBright all

ams:
	$(MAKE) -C AMS all

tables:
	$(MAKE) -C Tables/STIX-1.1 all
	$(MAKE) -C Tables/TeX all
	$(MAKE) -C Tables/CMBright all

clean:
	$(MAKE) -C OTF/TeX clean
	$(MAKE) -C OTF/CMBright clean
	$(MAKE) -C AFM/TeX clean
	$(MAKE) -C AFM/STIX-1.1 clean
	$(MAKE) -C AFM/CMBright clean
	$(MAKE) -C SVG/TeX clean
	$(MAKE) -C SVG/CMBright clean
	$(MAKE) -C IMG/TeX clean
	$(MAKE) -C IMG/CMBright clean
	$(MAKE) -C AMS clean
	$(MAKE) -C Tables/STIX-1.1 clean
	$(MAKE) -C Tables/TeX clean
	$(MAKE) -C Tables/CMBright clean
