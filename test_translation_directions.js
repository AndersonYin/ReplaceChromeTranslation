// Test script to verify translation direction options
console.log('Testing translation direction options...');

// Function to test a specific translation direction
async function testTranslationDirection(direction) {
  console.log(`Setting translation direction to: ${direction}`);
  
  // Set the translation direction
  await chrome.storage.local.set({ translationDirection: direction });
  
  // Wait a moment for the change to take effect
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Get the current settings
  const { translationDirection } = await chrome.storage.local.get(['translationDirection']);
  console.log(`Current translation direction is: ${translationDirection}`);
  
  // Simulate a translation request with a test text
  const testText = "This is a test text for translation direction testing.";
  console.log(`Testing translation with text: "${testText}"`);
  
  // Get the prompt that would be used
  const { direction: currentDirection } = await chrome.extension.getBackgroundPage().getApiSettings();
  console.log(`Current direction from API settings: ${currentDirection}`);
  
  // Log the prompt key that would be used
  let promptKey;
  if (currentDirection === 'zh2en') {
    promptKey = 'promptZhToEn';
  } else if (currentDirection === 'en2zh') {
    promptKey = 'promptEnToZh';
  } else if (currentDirection === 'zh2de') {
    promptKey = 'promptZhToDe';
  } else if (currentDirection === 'de2zh') {
    promptKey = 'promptDeToZh';
  } else if (currentDirection === 'en2de') {
    promptKey = 'promptEnToDe';
  } else if (currentDirection === 'de2en') {
    promptKey = 'promptDeToEn';
  } else { // auto
    promptKey = 'promptAuto';
  }
  
  console.log(`Prompt key that would be used: ${promptKey}`);
}

// Test each translation direction
async function runTests() {
  await testTranslationDirection('auto');
  await testTranslationDirection('zh2en');
  await testTranslationDirection('en2zh');
  await testTranslationDirection('zh2de');
  await testTranslationDirection('de2zh');
  await testTranslationDirection('en2de');
  await testTranslationDirection('de2en');
  console.log('Tests completed!');
}

runTests().catch(console.error);
