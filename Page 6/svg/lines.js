document.getElementById("svgLine").innerHTML = 
`<svg width="100%" height="100%" style="overflow: visible;">
<line x1="5%" y1='10%' x2="95%" y2='10%' style="stroke:rgb(80, 141, 30);stroke-width:4" />
<line x1="40%" y1="15%" x2="30%" y2="30%" style="stroke:grey;stroke-width:4" />
<line x1="70%" y1="15%" x2="80%" y2="40%" style="stroke:rgb(92, 32, 189);stroke-width:4" />
<line x1="28%" y1="45%" x2="20%" y2="60%" style="stroke:red;stroke-width:4" />
<line x1="32%" y1="45%" x2="50%" y2="60%" style="stroke:orange;stroke-width:4" />
<line x1="80%" y1="55%" x2="80%" y2="80%" style="stroke:rgba(87, 30, 141, 0.329);stroke-width:4" />
<text x="50%" y='5%' fill='black' text-anchor="middle" font-weight='1000'>More than 150 HPV types</text>
<g class="tooltip css" style="transform: translate(50%,5%);">
<rect x="-3em" y="-45" width="6em" height="1.25em" />
<text y="-45" dy="1em" text-anchor="middle" fill="dark">Split two</text>
</g>
<text x="30%" y="40%" fill='black' text-anchor="middle" font-weight='600'>Mucosal</text>
<g class="tooltip css" style="transform: translate(30%,40%);">
<rect x="-4.5em" y="-45" width="9em" height="1.25em" />
<text y="-45" dy="1em" text-anchor="middle" fill="dark">Split Low and High</text>
</g>
<text x="80%" y="50%" fill='black' text-anchor="middle" font-weight='600'>Cutaneous</text>
<g class="tooltip css" style="transform: translate(80%,50%);">
<rect x="-4.5em" y="-45" width="9em" height="1.25em" />
<text y="-45" dy="1em" text-anchor="middle" fill="dark">To common warts</text>
</g>
<text x="50%" y="68%" fill='black' text-anchor="middle" font-weight='600'>Low Risk Types</text>
<g class="tooltip css" style="transform: translate(50%,68%);">
<rect x="-3.5em" y="-45" width="7em" height="1.25em" />
<text y="-45" dy="1em" text-anchor="middle" fill="dark">Type 6 & 11</text>
</g>
<text x="25%" y="77%" fill='black' text-anchor="middle" font-weight='600'>High Risk Types</text>
<g class="tooltip css" style="transform: translate(25%,77%);">
<rect x="-3.5em" y="-45" width="7em" height="1.25em" />
<text y="-45" dy="1em" text-anchor="middle" fill="dark">Type 16 & 18</text>
</g>
<text x="80%" y="88%" fill='black' text-anchor="middle" font-weight='600'>Common Warts</text>
<g class="tooltip css" style="transform: translate(80%,88%);">
<rect x="-4em" y="-45" width="8em" height="1.25em" />
<text y="-45" dy="1em" text-anchor="middle" fill="dark">Type 1, 2, & 7</text>
</g>
`