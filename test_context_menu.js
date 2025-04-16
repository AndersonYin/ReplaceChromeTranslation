// Test script to verify context menu language changes
console.log('Testing context menu language changes...');

// Function to change the language and check the context menu title
async function testLanguageChange(language) {
  console.log(`Setting language to: ${language}`);
  
  // Set the language
  await chrome.storage.local.set({ nativeLanguage: language });
  
  // Wait a moment for the change to take effect
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Get the context menu item
  const contextMenus = await chrome.contextMenus.getAll();
  const translationMenu = contextMenus.find(menu => menu.id === 'replace_chrome_translation');
  
  if (translationMenu) {
    console.log(`Context menu title is now: "${translationMenu.title}"`);
  } else {
    console.error('Context menu not found!');
  }
}

// Test each language
async function runTests() {
  await testLanguageChange('zh');
  await testLanguageChange('en');
  await testLanguageChange('de');
  console.log('Tests completed!');
}

runTests().catch(console.error);
