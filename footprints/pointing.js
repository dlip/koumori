module.exports = {
  params: {
    designator: 'Pointing',
    side: 'F',
    SCK: { type: 'net', value: "SCK" },
    MISO: { type: 'net', value: "MISO" },
    SS: { type: 'net', value: "SS" },
    MOSI: { type: 'net', value: "MOSI" },
    GND: { type: 'net', value: "GND" },
    P3V3: { type: 'net', value: "P3V3" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "Pointing-connector"`);
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
fp.push(`(pad "1" thru_hole circle (at -5.612 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SCK})`);
fp.push(`(pad "2" thru_hole circle (at -3.362 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.MISO})`);
fp.push(`(pad "3" thru_hole circle (at -1.112 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SS})`);
fp.push(`(pad "4" thru_hole circle (at 1.138 ${flipN(flip, 0.012)} ${flipR(flip, p.r + 180)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.MOSI})`);
fp.push(`(pad "5" thru_hole rect (at 3.388 ${flipN(flip, 0.012)} ${flipR(flip, p.r + 180)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})`);
fp.push(`(pad "6" thru_hole circle (at 5.638 ${flipN(flip, 0.012)} ${flipR(flip, p.r + 180)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3V3})`);

// Drawings on B.SilkS
fp.push(`(fp_text user "SS" (at -0.55 ${flipN(flip, -0.9)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "3V3" (at 6.35 ${flipN(flip, -0.9)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "SCK" (at -4.85 ${flipN(flip, -0.9)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "GND" (at 4.2 ${flipN(flip, -0.9)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "MOSI" (at 2.15 ${flipN(flip, -0.9)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "MISO" (at -2.45 ${flipN(flip, -0.9)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);

// Drawings on F.SilkS
fp.push(`(fp_text user "MISO" (at -4.25 ${flipN(flip, 1.524)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "SCK" (at -6.45 ${flipN(flip, 1.524)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "GND" (at 2.6 ${flipN(flip, 1.524)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "SS" (at -1.65 ${flipN(flip, 1.524)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "MOSI" (at 0.2 ${flipN(flip, 1.524)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "3V3" (at 4.95 ${flipN(flip, 1.524)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);

// Properties
// fp.push(`(property "Reference" "J3" (at -5.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 270) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "Conn_01x06_Pin" (at 1.126 ${flipN(flip, -3.326)} ${flipR(flip, p.r + 180) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at -2.238 ${flipN(flip, -1.012)} ${flipR(flip, p.r + 270) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "Generic connector, single row, 01x06, script generated" (at -2.238 ${flipN(flip, -1.012)} ${flipR(flip, p.r + 270) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

