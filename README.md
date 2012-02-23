# Media queries + Compass + HTML5 Boilerplate == awesome.

An update of what the compass-h5bp gem puts out. Updates to use HTML5 Boilerplate v 3.0.2. Also uses my own base colors and media query-happy grids (set at 48em and 60em) using SASS's bubbling-out feature to keep media queries more managable (instead of combining them all in _media.scss).

## Features
- Lots of Compass/SASS love.
- Media query love using modernizr with respond.js
- Customized typographic scale using rem with px-based fallback (http://modularscale.com/scale/?px1=16&px2=12&ra1=1.5&ra2=0).
- Customized color scheme based on enguindesign.com, use these at your own peril.
- Basic 6-column grid layouts for 48em and 60em screen widths.
- Extreme minimalist form designs (use these at your peril).
- jQuery and jQuery UI called from Google apps API

## How to use
Install the gems for compass-h5bp and html5-boilerplate.
	compass watch [your folder]
Tasty!

(The haml file hasn't been tested. Sorry, I find haml annoying.)