module.exports = {
  params: {
    designator: "RP2040Zero",
    side: 'F',
    GP0: { type: 'net', value: "GP0"},
    GP1: { type: 'net', value: "GP1"},
    GP2: { type: 'net', value: "GP2"},
    GP3: { type: 'net', value: "GP3"},
    GP4: { type: 'net', value: "GP4"},
    GP5: { type: 'net', value: "GP5"},
    GP6: { type: 'net', value: "GP6"},
    GP7: { type: 'net', value: "GP7"},
    GP8: { type: 'net', value: "GP8"},
    GP9: { type: 'net', value:"GP9" },
    GP10: { type: 'net', value:"GP10" },
    GP11: { type: 'net', value:"GP11" },
    GP12: { type: 'net', value:"GP12" },
    GP13: { type: 'net', value:"GP13" },
    GP14: { type: 'net', value:"GP14" },
    GP15: { type: 'net', value:"GP15" },
    GP26: { type: 'net', value:"GP26" },
    GP27: { type: 'net', value:"GP27" },
    GP28: { type: 'net', value:"GP28" },
    GP29: { type: 'net', value:"GP29" },
    P3V3: { type: 'net', value:"P3V3" },
    GND: { type: 'net', value:"GND" },
    P5V: { type: 'net', value:"P5V" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "RP2040-Zero"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole roundrect (at 7.65 ${flipN(flip, -10.16)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP0})`);
fp.push(`(pad "2" thru_hole roundrect (at 7.65 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP1})`);
fp.push(`(pad "3" thru_hole roundrect (at 7.65 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP2})`);
fp.push(`(pad "4" thru_hole roundrect (at 7.65 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP3})`);
fp.push(`(pad "5" thru_hole roundrect (at 7.65 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP4})`);
fp.push(`(pad "6" thru_hole roundrect (at 7.65 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP5})`);
fp.push(`(pad "7" thru_hole roundrect (at 7.65 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP6})`);
fp.push(`(pad "8" thru_hole roundrect (at 7.65 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP7})`);
fp.push(`(pad "9" thru_hole roundrect (at 7.65 ${flipN(flip, 10.16)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP8})`);
fp.push(`(pad "10" thru_hole roundrect (at 5.11 ${flipN(flip, 10.37)} ${flipR(flip, p.r + 0)}) (size 1.6 2.6) (drill 1.0922 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP9})`);
fp.push(`(pad "11" thru_hole roundrect (at 2.57 ${flipN(flip, 10.37)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP10})`);
fp.push(`(pad "12" thru_hole roundrect (at 0.03 ${flipN(flip, 10.37)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP11})`);
fp.push(`(pad "13" thru_hole roundrect (at -2.51 ${flipN(flip, 10.37)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP12})`);
fp.push(`(pad "14" thru_hole roundrect (at -5.05 ${flipN(flip, 10.37)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP13})`);
fp.push(`(pad "15" thru_hole roundrect (at -7.59 ${flipN(flip, 10.16)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP14})`);
fp.push(`(pad "16" thru_hole roundrect (at -7.59 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP15})`);
fp.push(`(pad "17" thru_hole roundrect (at -7.59 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP26})`);
fp.push(`(pad "18" thru_hole roundrect (at -7.59 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP27})`);
fp.push(`(pad "19" thru_hole roundrect (at -7.59 ${flipN(flip, -10.16)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P5V})`);
fp.push(`(pad "20" thru_hole roundrect (at -7.59 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GND})`);
fp.push(`(pad "21" thru_hole roundrect (at -7.59 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P3V3})`);
fp.push(`(pad "22" thru_hole roundrect (at -7.59 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP28})`);
fp.push(`(pad "23" thru_hole roundrect (at -7.59 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP29})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -8.97 ${flipN(flip, -11.75)}) (end 9.03 ${flipN(flip, -11.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -8.97 ${flipN(flip, 11.75)}) (end -8.97 ${flipN(flip, -11.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 9.03 ${flipN(flip, -11.75)}) (end 9.03 ${flipN(flip, 11.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 9.03 ${flipN(flip, 11.75)}) (end -8.97 ${flipN(flip, 11.75)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on Edge.Cuts
fp.push(`(fp_rect (start -6.6 ${flipN(flip, -10.7)}) (end 6.6 ${flipN(flip, 9.2)}) (stroke (width 0.1) (type default)) (fill no) (layer "Edge.Cuts") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start -4.3 ${flipN(flip, -12.75)}) (end -4.3 ${flipN(flip, -11.75)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.3 ${flipN(flip, -12.75)}) (end 4.33 ${flipN(flip, -12.75)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 4.33 ${flipN(flip, -12.75)}) (end 4.33 ${flipN(flip, -11.75)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -8.97 ${flipN(flip, -11.75)}) (end -8.97 ${flipN(flip, 11.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -8.97 ${flipN(flip, 11.75)}) (end 9.03 ${flipN(flip, 11.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 9.03 ${flipN(flip, -11.75)}) (end -8.97 ${flipN(flip, -11.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 9.03 ${flipN(flip, 11.75)}) (end 9.03 ${flipN(flip, -11.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${KIPRJMOD}/3dmodels/RP2040_Zero.stp" (offset (xyz -9 -12 1)) (scale (xyz 1 1 1)) (rotate (xyz -0 -0 -0)))`);

// Properties
// fp.push(`(property "Reference" "RP2040-Zero1" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

