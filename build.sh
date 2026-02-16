#!/usr/bin/env bash
set -euo pipefail

npm exec ergogen -- .
# cp output/pcbs/koumori.kicad_pcb kicad/
npm exec @jscad/openjscad -- output/cases/case.jscad -of stla -o 3d/case.stl
npm exec @jscad/openjscad -- output/cases/lid.jscad -of stla -o 3d/lid.stl
