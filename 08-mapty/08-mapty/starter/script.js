'use strict';

// =======================================================
// SECTION 1: DOM ELEMENT REFERENCES
// =======================================================

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// =======================================================
// SECTION 2: WORKOUT DATA STRUCTURE (CLASSES)
// =======================================================

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// =======================================================
// SECTION 3: MAIN APPLICATION ARCHITECTURE (APP CLASS)
// =======================================================

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    
    // Add keyboard support for closing the form
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !form.classList.contains('hidden')) {
        this._hideForm();
      }
    });
  }

  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);
    let message = 'Could not get your position. ';
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message += 'Location access was denied. Please enable location services.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
      default:
        message += 'An unknown error occurred.';
        break;
    }
    alert(`📍 ${message} Loading default map location.`);
    this._loadDefaultMap();
  }
  
  _loadDefaultMap() {
      console.log('📍 Loading default map location (London)');
      this._loadMap({ coords: { latitude: 51.5074, longitude: -0.1278 } });
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`🗺️ Loading map at: ${latitude}, ${longitude}`);
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });

    this.#map.on('click', this._showForm.bind(this));
     console.log('🗺️ Map loaded successfully with', this.#workouts.length, 'saved workouts');
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
    const { lat, lng } = mapE.latlng;
    console.log(`📝 Form opened for location: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
  }

  _hideForm() {
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    const showValidationError = (message) => {
        alert(`❌ Validation Error: ${message}`);
        inputDistance.focus();
    };

    if (!distance || !duration) return showValidationError('Distance and duration are required!');

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (!cadence) return showValidationError('Cadence is required for running!');
      if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence))
        return showValidationError('All running inputs must be positive numbers!');
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (!validInputs(distance, duration, elevation))
        return showValidationError('Distance, duration, and elevation must be valid numbers!');
      if (!allPositive(distance, duration))
        return showValidationError('Distance and duration must be positive numbers!');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout);
    console.log(`✅ Created ${type} workout:`, workout);
    
    this._renderWorkoutMarker(workout);
    this._renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details"><span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span><span class="workout__value">${workout.distance}</span><span class="workout__unit">km</span></div>
      <div class="workout__details"><span class="workout__icon">⏱</span><span class="workout__value">${workout.duration}</span><span class="workout__unit">min</span></div>`;

    if (workout.type === 'running')
      html += `<div class="workout__details"><span class="workout__icon">⚡️</span><span class="workout__value">${workout.pace.toFixed(1)}</span><span class="workout__unit">min/km</span></div>
        <div class="workout__details"><span class="workout__icon">🦶🏼</span><span class="workout__value">${workout.cadence}</span><span class="workout__unit">spm</span></div></li>`;

    if (workout.type === 'cycling')
      html += `<div class="workout__details"><span class="workout__icon">⚡️</span><span class="workout__value">${workout.speed.toFixed(1)}</span><span class="workout__unit">km/h</span></div>
        <div class="workout__details"><span class="workout__icon">⛰</span><span class="workout__value">${workout.elevationGain}</span><span class="workout__unit">m</span></div></li>`;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
  }

  _setLocalStorage() {
    try {
      localStorage.setItem('workouts', JSON.stringify(this.#workouts));
      console.log(`💾 Saved ${this.#workouts.length} workouts to localStorage`);
    } catch (error) {
      console.error('Error saving workouts to localStorage:', error);
      alert('Could not save workout data. Storage might be full.');
    }
  }

  _getLocalStorage() {
    try {
      const data = localStorage.getItem('workouts');
      if (!data) {
        console.log('No saved workouts found.');
        return;
      }
      const parsedData = JSON.parse(data);
      // Restore object prototypes to get class methods back
      this.#workouts = parsedData.map(work => {
          if (work.type === 'running') {
              return new Running(work.coords, work.distance, work.duration, work.cadence);
          }
          if (work.type === 'cycling') {
              return new Cycling(work.coords, work.distance, work.duration, work.elevationGain);
          }
      });
      console.log(`💿 Loaded ${this.#workouts.length} workouts from storage.`);
      this.#workouts.forEach(work => {
        this._renderWorkout(work);
      });
    } catch (error) {
      console.error('Error loading workouts from localStorage:', error);
      localStorage.removeItem('workouts');
      this.#workouts = [];
    }
  }
  
  // Development helpers
  reset() {
    if (confirm('⚠️ This will delete all your workout data. Are you sure?')) {
      localStorage.removeItem('workouts');
      location.reload();
    }
  }

  _showAllWorkouts() {
    console.log('All workouts:', this.#workouts);
    return this.#workouts;
  }
  
  _exportWorkouts() {
      const dataStr = JSON.stringify(this.#workouts, null, 2);
      console.log('Workout data (copy this to backup):');
      console.log(dataStr);
      return dataStr;
  }
  
  _importWorkouts(workoutData) {
      try {
          JSON.parse(workoutData); // Just to validate it's JSON
          localStorage.setItem('workouts', workoutData);
          location.reload();
          console.log('✅ Workouts imported successfully.');
      } catch (error) {
          console.error('❌ Error importing workouts:', error);
          alert('Invalid workout data format.');
      }
  }
}

// =======================================================
// SECTION 4: INITIALIZE THE APPLICATION
// =======================================================
const app = new App();