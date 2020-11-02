var svg = document.getElementById("circle");
svg.innerHTML = 
`    <svg width="90%" height="400" style="overflow: visible; padding-top: 10px">
<g id="circle-group">
    <circle cx="50%" cy="50%" r="20%" stroke="#1977cc" stroke-width="1" fill="#1977cc" />
    <text x="50%" y="52%" fill='white' text-anchor="middle" font-weight='600' font-size='30'>HPV</text>
    <g class="tooltip css" style="transform: translate(50%,50%);">
        <rect x="-7em" y="-45" width="14em" height="1.25em" />
        <text y="-45" dy="1em" text-anchor="middle" fill="#1977cc">Spread to common symptoms</text>
    </g>
    <circle cx="50%" cy="10%" r="10%" stroke="#1977cc" stroke-width="1" fill="dark" />
    <text x="50%" y="11%" fill='white' text-anchor="middle" font-weight='600' font-size='14'>Cervical</text>
    <g class="tooltip css" style="transform: translate(50%,10%);">
        <rect x="-3em" y="-45" width="6em" height="1.25em" />
        <text y="-45" dy="1em" text-anchor="middle" fill="dark">Cervical</text>
    </g>
    <circle cx="50%" cy="90%" r="10%" stroke="#1977cc" stroke-width="1" fill="orange" />
    <text x="50%" y="91%" fill='white' text-anchor="middle" font-weight='600' font-size='14'>Oral</text>
    <g class="tooltip css" style="transform: translate(50%,90%);">
        <rect x="-3em" y="-45" width="6em" height="1.25em" />
        <text y="-45" dy="1em" text-anchor="middle" fill="orange">Oral</text>
    </g>
    <circle cx="15.36%" cy="70%" r="10%" stroke="#1977cc" stroke-width="1" fill="red" />
    <text x="15.36%" y="71%" fill='white' text-anchor="middle" font-weight='600' font-size='14'>Penile</text>
    <g class="tooltip css" style="transform: translate(15.36%,70%);">
        <rect x="-3em" y="-45" width="6em" height="1.25em" />
        <text y="-45" dy="1em" text-anchor="middle" fill="red">Penile</text>
    </g>
    <circle cx="15.36%" cy="30%" r="10%" stroke="#1977cc" stroke-width="1" fill="green" />
    <text x="15.36%" y="31%" fill='white' text-anchor="middle" font-weight='600' font-size='14'>Anal</text>
    <g class="tooltip css" style="transform: translate(15.36%,30%);">
        <rect x="-3em" y="-45" width="6em" height="1.25em" />
        <text y="-45" dy="1em" text-anchor="middle" fill="green">Anal</text>
    </g>
    <circle cx="84.64%" cy="70%" r="10%" stroke="#1977cc" stroke-width="1" fill="blue" />
    <text x="84.64%" y="71%" fill='white' text-anchor="middle" font-weight='600' font-size='14'>Vaginal</text>
    <g class="tooltip css" style="transform: translate(84.64%,70%);">
        <rect x="-3em" y="-45" width="6em" height="1.25em" />
        <text y="-45" dy="1em" text-anchor="middle" fill="blue">Vaginal</text>
    </g>
    <circle cx="84.64%" cy="30%" r="10%" stroke="#1977cc" stroke-width="1" fill="purple" />
    <text x="84.64%" y="31%" fill='white' text-anchor="middle" font-weight='600' font-size='14'>Vulvar</text>
    <g class="tooltip css" style="transform: translate(84.64%,30%);">
        <rect x="-3em" y="-45" width="6em" height="1.25em" />
        <text y="-45" dy="1em" text-anchor="middle" fill="purple">Vulvar</text>
    </g>
</g>   
</svg>`
