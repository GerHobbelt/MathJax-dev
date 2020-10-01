import {ParserTest} from './parser-tests.js';
import './node_modules/mathjax-full/js/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest1_7 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest1_7();


parserTest.runTest(
  'Quantities_Acomm_0', '\\acomm{A}{B}',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "{",
                        "close": "}",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "{"}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "A"}]},
           {"kind": "mo",
            "texClass": 6,
            "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "infix",
                "linebreakstyle": "after",
                "separator": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ","}],
              "isEmbellished": true},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "B"}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": "}"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Acomm_1', '\\anticommutator{A}{B}',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "{",
                        "close": "}",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "{"}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "A"}]},
           {"kind": "mo",
            "texClass": 6,
            "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "infix",
                "linebreakstyle": "after",
                "separator": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ","}],
              "isEmbellished": true},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "B"}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": "}"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Acomm_2', '\\poissonbracket{A}{B}',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "{",
                        "close": "}",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "{"}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "A"}]},
           {"kind": "mo",
            "texClass": 6,
            "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "infix",
                "linebreakstyle": "after",
                "separator": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ","}],
              "isEmbellished": true},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "B"}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": "}"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Acomm_3', '\\pb{A}{B}',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "{",
                        "close": "}",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "{"}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "A"}]},
           {"kind": "mo",
            "texClass": 6,
            "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "infix",
                "linebreakstyle": "after",
                "separator": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ","}],
              "isEmbellished": true},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "B"}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": "}"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Acomm_4', '\\acomm{\\frac{A}{\\frac{A}{\\int x}}}{B}',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "{",
                        "close": "}",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "{"}],
            "isEmbellished": true},
           {"kind": "mfrac",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0,
                             "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "A"}]},
              {"kind": "mfrac",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1,
                                "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "A"}]},
                 {"kind": "mrow",
                  "texClass": 1,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                        "scriptlevel": 1},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "mo",
                          "texClass": 1,
                          "attributes": {},
                          "inherited": {"displaystyle": false,
                            "scriptlevel": 1,
                            "form": "prefix",
                            "largeop": true,
                            "symmetric": true},
                          "properties": {"texClass": 1,
                            "texprimestyle": true},
                          "childNodes": [
                            {"kind": "text",
                              "text": "∫"}],
                          "isEmbellished": true},
                        {"kind": "mi",
                          "texClass": 0,
                          "attributes": {},
                          "inherited": {"displaystyle": false,
                            "scriptlevel": 1,
                            "mathvariant": "italic"},
                          "properties": {"texprimestyle": true},
                          "childNodes": [
                            {"kind": "text",
                              "text": "x"}]}]}]}]},
            {"kind": "mo",
              "texClass": 6,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "infix",
                "linebreakstyle": "after",
                "separator": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ","}],
              "isEmbellished": true},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "B"}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": "}"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Acomm_5', '\\acomm\\Bigg{A}{B}',
  {"kind": "math",
   "texClass": 4,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 4,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 4,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"texClass": 4},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mo",
               "texClass": 4,
               "attributes": {"minsize": "2.470em",
                              "maxsize": "2.470em"},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "form": "infix",
                             "fence": true,
                             "stretchy": true,
                             "symmetric": true},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "{"}],
               "isEmbellished": true}],
            "isInferred": true,
            "isEmbellished": true}],
         "isEmbellished": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "A"}]},
        {"kind": "mo",
         "texClass": 6,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix",
                       "linebreakstyle": "after",
                       "separator": true},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": ","}],
          "isEmbellished": true},
        {"kind": "mi",
          "texClass": 0,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "mathvariant": "italic"},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "B"}]},
        {"kind": "TeXAtom",
          "texClass": 5,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0},
          "properties": {"texClass": 5},
          "childNodes": [
            {"kind": "mrow",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0},
              "properties": {},
              "childNodes": [
                {"kind": "mo",
                  "texClass": 5,
                  "attributes": {"minsize": "2.470em",
                    "maxsize": "2.470em"},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0,
                    "form": "infix",
                    "fence": true,
                    "stretchy": true,
                    "symmetric": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                      "text": "}"}],
                  "isEmbellished": true}],
              "isInferred": true,
              "isEmbellished": true}],
          "isEmbellished": true}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Acomm_6', '\\acomm*{\\frac{A}{\\frac{A}{\\int x}}}{B}',
  {"kind": "math",
   "texClass": 4,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 4,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mo",
         "texClass": 4,
         "attributes": {"fence": false,
                        "stretchy": false},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "prefix",
                       "fence": true,
                       "stretchy": true,
                       "symmetric": true},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "{"}],
         "isEmbellished": true},
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "A"}]},
           {"kind": "mfrac",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 1,
                             "mathvariant": "italic"},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "A"}]},
              {"kind": "mrow",
               "texClass": 1,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 1},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 1,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                        "scriptlevel": 1,
                        "form": "prefix",
                        "largeop": true,
                        "symmetric": true},
                      "properties": {"texClass": 1,
                        "texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "∫"}],
                      "isEmbellished": true},
                    {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "x"}]}]}]}]},
        {"kind": "mo",
          "texClass": 6,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "form": "infix",
            "linebreakstyle": "after",
            "separator": true},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": ","}],
          "isEmbellished": true},
        {"kind": "mi",
          "texClass": 0,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "mathvariant": "italic"},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "B"}]},
        {"kind": "mo",
          "texClass": 5,
          "attributes": {"fence": false,
            "stretchy": false},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "form": "postfix",
            "fence": true,
            "stretchy": true,
            "symmetric": true},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "}"}],
          "isEmbellished": true}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Acomm_7', '\\acomm{A}B',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "{",
                        "close": "}",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "{"}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "A"}]},
           {"kind": "mo",
            "texClass": 6,
            "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "infix",
                "linebreakstyle": "after",
                "separator": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ","}],
              "isEmbellished": true},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "B"}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": "}"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.printTime();
