AFRAME.registerComponent('create_axis', {
    schema: {
        axisLength: { type: 'number', default: 1 }
    },
    init: function () {
        const el = this.el;
        const data = this.data;
        const length  = data.axisLength;
        const length2 = data.axisLength/2;
	// X Axis (Red)
        const xCylinder = document.createElement('a-cylinder');
        xCylinder.setAttribute('position', length2+' 0 0');
        xCylinder.setAttribute('radius', '0.1');
        xCylinder.setAttribute('height', length);
        xCylinder.setAttribute('color', 'red');
        xCylinder.setAttribute('rotation', '0 0 90');
        el.appendChild(xCylinder);
	
	const xCone = document.createElement('a-cone');
        xCone.setAttribute('position', length+' 0 0');
        xCone.setAttribute('rotation', '0 0 -90');
        xCone.setAttribute('radius-bottom', '0.3');
        xCone.setAttribute('radius-top', '0');
        xCone.setAttribute('height', '0.5');
        xCone.setAttribute('color', 'red');
        el.appendChild(xCone);
	
        // Y Axis (Green)
        const yCylinder = document.createElement('a-cylinder');
        yCylinder.setAttribute('position', '0 '+length2+' 0');
        yCylinder.setAttribute('radius', '0.1');
        yCylinder.setAttribute('height', length);
        yCylinder.setAttribute('color', 'green');
        yCylinder.setAttribute('rotation', '0 0 0');
        el.appendChild(yCylinder);
	
        const yCone = document.createElement('a-cone');
        yCone.setAttribute('position', '0 '+length+' 0');
        yCone.setAttribute('rotation', '0 0 0');
        yCone.setAttribute('radius-bottom', '0.3');
        yCone.setAttribute('radius-top', '0');
        yCone.setAttribute('height', '0.5');
        yCone.setAttribute('color', 'green');
        el.appendChild(yCone);
	
        // Z Axis (Blue)
        const zCylinder = document.createElement('a-cylinder');
        zCylinder.setAttribute('position', '0 0 -'+length2);
        zCylinder.setAttribute('radius', '0.1');
        zCylinder.setAttribute('height', length);
        zCylinder.setAttribute('color', 'blue');
        zCylinder.setAttribute('rotation', '90 0 0');
        el.appendChild(zCylinder);
	
        const zCone = document.createElement('a-cone');
        zCone.setAttribute('position', '0 0 -'+length);
        zCone.setAttribute('rotation', '-90 0 0');
        zCone.setAttribute('radius-bottom', '0.3');
        zCone.setAttribute('radius-top', '0');
        zCone.setAttribute('height', '0.5');
        zCone.setAttribute('color', 'blue');
        el.appendChild(zCone);
    }
});
