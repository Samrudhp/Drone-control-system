var speed = 0;

function increaseSpeed() {
    if (speed < 100) {
        speed += 10;
        updateSpeedometer();
    }
}

function decreaseSpeed() {
    if (speed > 0) {
        speed -= 10;
        updateSpeedometer();
    }
}

function updateSpeedometer() {
    let arc = document.getElementById('speedArc');
    arc.style.setProperty('--speed', speed);
    let km = document.getElementsByClassName('km')[0];
    km.innerText = speed;
}

document.getElementById('rthButton').addEventListener('click', function() {
    alert('Return to Home command sent!');
});

document.getElementById('upButton').addEventListener('click', function() {
    alert('Drone moving up!');
});

document.getElementById('downButton').addEventListener('click', function() {
    alert('Drone moving down!');
});

document.getElementById('leftButton').addEventListener('click', function() {
    alert('Drone moving left!');
});

document.getElementById('rightButton').addEventListener('click', function() {
    alert('Drone moving right!');
});

document.getElementById('emergencyButton').addEventListener('click', function() {
    alert('Emergency alert triggered!');
});

navigator.getBattery().then(function(battery) {
    updateBatteryStatus(battery);
    battery.addEventListener('levelchange', function() {
        updateBatteryStatus(battery);
    });
    battery.addEventListener('chargingchange', function() {
        updateBatteryStatus(battery);
    });
});

function updateBatteryStatus(battery) {
    var batteryFill = document.querySelector(".battery-fill");
    var batteryPercentage = document.querySelector(".battery-percentage");
    var batteryValue = Math.round(Math.random() * 100);
    var fillWidth = batteryValue + "%";
    batteryFill.style.width = fillWidth;
    batteryPercentage.innerHTML = fillWidth;
    updateSignalStrength(batteryValue);
}

function updateSignalStrength(batteryLevel) {
    let strength = batteryLevel > 20 ? 5 : 2;
    let bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
        if (index < strength) {
            bar.classList.add("active");
        } else {
            bar.classList.remove("active");
        }
    });
    document.getElementById('connectionStrength').innerText = batteryLevel > 20 ? 'Strong' : 'Weak';
}

setInterval(() => {
    const altitude = Math.floor(Math.random() * 1000);
    const droneCoordinates = `Lat: ${parseFloat((Math.random() * 180 - 90).toFixed(6))}, Lon: ${parseFloat((Math.random() * 360 - 180).toFixed(6))}`;
    const homeCoordinates = `Lat: ${parseFloat((Math.random() * 180 - 90).toFixed(6))}, Lon: ${parseFloat((Math.random() * 360 - 180).toFixed(6))}`;
    document.getElementById('altitudeDisplay').innerText = `${altitude} m`;
    document.getElementById('droneCoordinates').innerText = droneCoordinates;
    document.getElementById('homeCoordinates').innerText = homeCoordinates;
}, 1000);

// Initialize speedometer
updateSpeedometer();