module.exports = {
  params: {
    designator: 'AFC01-S12FCC-00',
    side: 'F',
    P1: { type: 'net', value: "P" },
    P10: { type: 'net', value:"P" },
    P11: { type: 'net', value:"P" },
    P12: { type: 'net', value:"P" },
    P13: { type: 'net', value:"P" },
    P14: { type: 'net', value:"P" },
    P2: { type: 'net', value: "P" },
    P3: { type: 'net', value: "P" },
    P4: { type: 'net', value: "P" },
    P5: { type: 'net', value: "P" },
    P6: { type: 'net', value: "P" },
    P7: { type: 'net', value: "P" },
    P8: { type: 'net', value: "P" },
    P9: { type: 'net', value: "P" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "FPC-SMD_AFC01-S12FCC-00"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd rect (at 2.06 ${flipN(flip, -2.62)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P1})`);
fp.push(`(pad "2" smd rect (at 2.06 ${flipN(flip, -2.12)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P2})`);
fp.push(`(pad "3" smd rect (at 2.06 ${flipN(flip, -1.62)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P3})`);
fp.push(`(pad "4" smd rect (at 2.06 ${flipN(flip, -1.12)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P4})`);
fp.push(`(pad "5" smd rect (at 2.06 ${flipN(flip, -0.62)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P5})`);
fp.push(`(pad "6" smd rect (at 2.06 ${flipN(flip, -0.12)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P6})`);
fp.push(`(pad "7" smd rect (at 2.06 ${flipN(flip, 0.38)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P7})`);
fp.push(`(pad "8" smd rect (at 2.06 ${flipN(flip, 0.88)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P8})`);
fp.push(`(pad "9" smd rect (at 2.06 ${flipN(flip, 1.38)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P9})`);
fp.push(`(pad "10" smd rect (at 2.06 ${flipN(flip, 1.88)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P10})`);
fp.push(`(pad "11" smd rect (at 2.06 ${flipN(flip, 2.38)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P11})`);
fp.push(`(pad "12" smd rect (at 2.06 ${flipN(flip, 2.88)} ${flipR(flip, p.r + 270)}) (size 0.3 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P12})`);
fp.push(`(pad "13" smd rect (at -0.62 ${flipN(flip, -4.32)} ${flipR(flip, p.r + 270)}) (size 2 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P13})`);
fp.push(`(pad "14" smd rect (at -0.62 ${flipN(flip, 4.58)} ${flipR(flip, p.r + 90)}) (size 2 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P14})`);

// Drawings on F.Fab
fp.push(`(fp_circle (center 2.4 ${flipN(flip, -5.07)}) (end 2.4 ${flipN(flip, -5.04)}) (stroke (width 0.06) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0.72 ${flipN(flip, 0.13)} ${flipR(flip, p.r + 270) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -3.69 ${flipN(flip, -5.05)}) (end -3.69 ${flipN(flip, 5.33)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3.68 ${flipN(flip, -1.73)}) (end -2.48 ${flipN(flip, -2.22)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.48 ${flipN(flip, -2.22)}) (end -3.69 ${flipN(flip, -2.72)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.65 ${flipN(flip, -5.05)}) (end -3.69 ${flipN(flip, -5.05)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.65 ${flipN(flip, 5.31)}) (end -3.69 ${flipN(flip, 5.31)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.48 ${flipN(flip, -5.05)}) (end 0.41 ${flipN(flip, -5.05)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.48 ${flipN(flip, 5.31)}) (end 0.41 ${flipN(flip, 5.31)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.71 ${flipN(flip, -5.05)}) (end 0.64 ${flipN(flip, -5.05)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.71 ${flipN(flip, -5.05)}) (end 1.71 ${flipN(flip, -3)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.71 ${flipN(flip, 3.26)}) (end 1.71 ${flipN(flip, 5.31)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.71 ${flipN(flip, 5.31)}) (end 0.64 ${flipN(flip, 5.31)}) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Cmts.User
fp.push(`(fp_circle (center 2.57 ${flipN(flip, -2.62)}) (end 2.57 ${flipN(flip, -2.5)}) (stroke (width 0.24) (type solid)) (fill no) (layer "Cmts.User") )`);

// 3D Models
fp.push(`(model "\${KIPRJMOD}/3dmodels/AFC01-S12FCC-00.step" (offset (xyz -0.5 -0.13 -0)) (scale (xyz 1 1 1)) (rotate (xyz -0 -0 90)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 3.52 ${flipN(flip, 0.13)} ${flipR(flip, p.r + 270) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "FPC-SMD_AFC01-S12FCC-00" (at -4.62 ${flipN(flip, 0.13)} ${flipR(flip, p.r + 270) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

