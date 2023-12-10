// Generate random number within a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Create a snowflake
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${getRandom(0, 100)}vw`;
    snowflake.style.animationDuration = `${getRandom(2, 6)}s`;
    document.querySelector('.snow-container').appendChild(snowflake);
  }
  
  // Create multiple snowflakes
  function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
      createSnowflake();
    }
  }
  
  // Initialize the snowfall
  createSnowflakes();
  