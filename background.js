// i18n资源
const i18n = {
  zh: {
    // 界面文本
    title: "AI 翻译助手",
    statusReady: "就绪",
    waitingForResponse: "等待响应...",
    saveSuccess: "✅ 设置已保存",

    // 设置界面
    settings: "设置",
    apiKeyWarning: "请设置API密钥以使用翻译功能",
    selectApiProvider: "选择API提供商:",
    selectNativeLanguage: "选择母语:",
    selectTranslationDirection: "选择翻译方向:",
    kimiApiKey: "Kimi API密钥:",
    deepseekApiKey: "DeepSeek API密钥:",
    inputKimiApiKey: "输入Kimi API密钥",
    inputDeepseekApiKey: "输入DeepSeek API密钥",
    save: "保存",

    // 翻译方向
    autoDetect: "自动检测",
    zhToEn: "中文翻译为英文",
    enToZh: "英文翻译为中文",
    zhToDe: "中文翻译为德文",
    deToZh: "德文翻译为中文",
    enToDe: "英文翻译为德文",
    deToEn: "德文翻译为英文",

    // 错误信息
    errorApiKey: "错误：请先在设置中填写有效的API密钥",
    errorGeneric: "错误：",
    errorNoApiKey: "请输入所选API提供商的API密钥",

    // 上下文菜单
    contextMenuTitle: "翻译并解释所选文字",

    // 提示词
    promptAuto: "翻译下文并尽可能保持原意，最后对其进行一定解释：",
    promptZhToEn: "将下面的中文翻译成英文，并尽可能保持原意，最后对翻译结果进行简要解释：",
    promptEnToZh: "将下面的英文翻译成中文，并尽可能保持原意，最后对翻译结果进行简要解释：",
    promptZhToDe: "将下面的中文翻译成德文，并尽可能保持原意，最后对翻译结果进行简要解释：",
    promptDeToZh: "将下面的德文翻译成中文，并尽可能保持原意，最后对翻译结果进行简要解释：",
    promptEnToDe: "将下面的英文翻译成德文，并尽可能保持原意，最后对翻译结果进行简要解释：",
    promptDeToEn: "将下面的德文翻译成英文，并尽可能保持原意，最后对翻译结果进行简要解释：",

    // 欢迎消息
    welcomeMessage: "欢迎使用翻译插件\n请选择文本并右键点击\"翻译并解释所选文字\""
  },

  en: {
    // Interface text
    title: "AI Translation Assistant",
    statusReady: "Ready",
    waitingForResponse: "Waiting for response...",
    saveSuccess: "✅ Settings saved",

    // Settings interface
    settings: "Settings",
    apiKeyWarning: "Please set an API key to use the translation feature",
    selectApiProvider: "Select API Provider:",
    selectNativeLanguage: "Select Native Language:",
    selectTranslationDirection: "Select Translation Direction:",
    kimiApiKey: "Kimi API Key:",
    deepseekApiKey: "DeepSeek API Key:",
    inputKimiApiKey: "Enter Kimi API Key",
    inputDeepseekApiKey: "Enter DeepSeek API Key",
    save: "Save",

    // Translation directions
    autoDetect: "Auto Detect",
    zhToEn: "Chinese to English",
    enToZh: "English to Chinese",
    zhToDe: "Chinese to German",
    deToZh: "German to Chinese",
    enToDe: "English to German",
    deToEn: "German to English",

    // Error messages
    errorApiKey: "Error: Please set a valid API key in settings",
    errorGeneric: "Error: ",
    errorNoApiKey: "Please enter an API key for the selected provider",

    // Context menu
    contextMenuTitle: "Translate and explain selected text",

    // Prompts
    promptAuto: "Translate the following text while preserving the original meaning as much as possible, and provide a brief explanation at the end: ",
    promptZhToEn: "Translate the following Chinese text into English, preserving the original meaning as much as possible, and provide a brief explanation of the translation: ",
    promptEnToZh: "Translate the following English text into Chinese, preserving the original meaning as much as possible, and provide a brief explanation of the translation: ",
    promptZhToDe: "Translate the following Chinese text into German, preserving the original meaning as much as possible, and provide a brief explanation of the translation: ",
    promptDeToZh: "Translate the following German text into Chinese, preserving the original meaning as much as possible, and provide a brief explanation of the translation: ",
    promptEnToDe: "Translate the following English text into German, preserving the original meaning as much as possible, and provide a brief explanation of the translation: ",
    promptDeToEn: "Translate the following German text into English, preserving the original meaning as much as possible, and provide a brief explanation of the translation: ",

    // Welcome message
    welcomeMessage: "Welcome to the translation extension\nPlease select text and right-click \"Translate and explain selected text\""
  },

  de: {
    // Interface text
    title: "KI-Übersetzungsassistent",
    statusReady: "Bereit",
    waitingForResponse: "Warte auf Antwort...",
    saveSuccess: "✅ Einstellungen gespeichert",

    // Settings interface
    settings: "Einstellungen",
    apiKeyWarning: "Bitte setzen Sie einen API-Schlüssel, um die Übersetzungsfunktion zu nutzen",
    selectApiProvider: "API-Anbieter auswählen:",
    selectNativeLanguage: "Muttersprache auswählen:",
    selectTranslationDirection: "Übersetzungsrichtung auswählen:",
    kimiApiKey: "Kimi API-Schlüssel:",
    deepseekApiKey: "DeepSeek API-Schlüssel:",
    inputKimiApiKey: "Kimi API-Schlüssel eingeben",
    inputDeepseekApiKey: "DeepSeek API-Schlüssel eingeben",
    save: "Speichern",

    // Translation directions
    autoDetect: "Automatische Erkennung",
    zhToEn: "Chinesisch nach Englisch",
    enToZh: "Englisch nach Chinesisch",
    zhToDe: "Chinesisch nach Deutsch",
    deToZh: "Deutsch nach Chinesisch",
    enToDe: "Englisch nach Deutsch",
    deToEn: "Deutsch nach Englisch",

    // Error messages
    errorApiKey: "Fehler: Bitte geben Sie einen gültigen API-Schlüssel in den Einstellungen ein",
    errorGeneric: "Fehler: ",
    errorNoApiKey: "Bitte geben Sie einen API-Schlüssel für den ausgewählten Anbieter ein",

    // Context menu
    contextMenuTitle: "Ausgewählten Text übersetzen und erklären",

    // Prompts
    promptAuto: "Übersetzen Sie den folgenden Text unter Beibehaltung der ursprünglichen Bedeutung und geben Sie am Ende eine kurze Erklärung: ",
    promptZhToEn: "Übersetzen Sie den folgenden chinesischen Text ins Englische, bewahren Sie die ursprüngliche Bedeutung und geben Sie eine kurze Erklärung der Übersetzung: ",
    promptEnToZh: "Übersetzen Sie den folgenden englischen Text ins Chinesische, bewahren Sie die ursprüngliche Bedeutung und geben Sie eine kurze Erklärung der Übersetzung: ",
    promptZhToDe: "Übersetzen Sie den folgenden chinesischen Text ins Deutsche, bewahren Sie die ursprüngliche Bedeutung und geben Sie eine kurze Erklärung der Übersetzung: ",
    promptDeToZh: "Übersetzen Sie den folgenden deutschen Text ins Chinesische, bewahren Sie die ursprüngliche Bedeutung und geben Sie eine kurze Erklärung der Übersetzung: ",
    promptEnToDe: "Übersetzen Sie den folgenden englischen Text ins Deutsche, bewahren Sie die ursprüngliche Bedeutung und geben Sie eine kurze Erklärung der Übersetzung: ",
    promptDeToEn: "Übersetzen Sie den folgenden deutschen Text ins Englische, bewahren Sie die ursprüngliche Bedeutung und geben Sie eine kurze Erklärung der Übersetzung: ",

    // Welcome message
    welcomeMessage: "Willkommen bei der Übersetzungserweiterung\nBitte wählen Sie Text aus und klicken Sie mit der rechten Maustaste auf \"Ausgewählten Text übersetzen und erklären\""
  }
};

// 获取当前语言的文本
async function getText(key) {
  const { nativeLanguage } = await chrome.storage.local.get(['nativeLanguage']);
  const lang = nativeLanguage || 'zh'; // 默认为中文

  return i18n[lang][key] || i18n['zh'][key]; // 如果找不到对应的文本，回退到中文
}

// 更新上下文菜单标题
async function updateContextMenuTitle() {
  // 获取当前语言的上下文菜单标题
  const menuTitle = await getText('contextMenuTitle');

  // 更新上下文菜单标题
  chrome.contextMenus.update('replace_chrome_translation', {
    title: menuTitle
  });
}



chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// 处理插件图标点击事件
chrome.action.onClicked.addListener(async () => {
  console.log("clicked");
  try {
    // 获取欢迎消息
    const welcomeMessage = await getText('welcomeMessage');

    // 发送默认消息到侧边栏
    await chrome.runtime.sendMessage({
      action: 'updateSidebar',
      response: welcomeMessage || '欢迎使用翻译插件\n请选择文本并右键点击"翻译并解释所选文字"'
    });

  } catch (error) {
    console.error('Failed to open side panel:', error);
  }
});

// 获取当前选择的API提供商、翻译方向、母语和对应的API密钥
async function getApiSettings() {

  const { apiProvider, kimiApiKey, deepseekApiKey, translationDirection, nativeLanguage } =
    await chrome.storage.local.get(['apiProvider', 'kimiApiKey', 'deepseekApiKey', 'translationDirection', 'nativeLanguage']);

  const provider = apiProvider || 'kimi';
  const direction = translationDirection || 'auto';
  const language = nativeLanguage || 'zh';
  const apiKey = provider === 'kimi' ? kimiApiKey : deepseekApiKey;

  if (!apiKey) {
    const errorMessage = await getText('errorApiKey');
    throw new Error(errorMessage || `请先在设置中填写${provider === 'kimi' ? 'Kimi' : 'DeepSeek'} API密钥`);
  }

  console.log("provider: ", provider, "direction: ", direction, "language: ", language);

  return { provider, apiKey, direction, language };
}

async function callKimiAPI(prompt) {
  // Enhanced input validation
  if (typeof prompt !== 'string') {
    throw new Error('Input must be a string');
  }

  const trimmed = prompt.trim();
  if (trimmed.length === 0) {
    throw new Error('Input cannot be empty');
  }

  if (trimmed.length > 8000) {
    throw new Error(`Input too long (${trimmed.length} chars). Max 8000 chars allowed`);
  }

  // 从存储获取API密钥
  const { apiKey } = await getApiSettings();

  try {
    const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "moonshot-v1-8k",
        messages: [{
          role: "user",
          content: prompt
        }],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid API response format');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('API call failed:', error);
    throw new Error(`Failed to get response: ${error.message}`);
  }
}


// curl https://api.deepseek.com/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer <DeepSeek API Key>" \
//   -d '{
//         "model": "deepseek-chat",
//         "messages": [
//           {"role": "system", "content": "You are a helpful assistant."},
//           {"role": "user", "content": "Hello!"}
//         ],
//         "stream": false
//       }'
async function callDeepSeekAPI(prompt) {
  // Enhanced input validation
  if (typeof prompt !== 'string') {
    throw new Error('Input must be a string');
  }

  const trimmed = prompt.trim();
  if (trimmed.length === 0) {
    throw new Error('Input cannot be empty');
  }

  if (trimmed.length > 8000) {
    throw new Error(`Input too long (${trimmed.length} chars). Max 8000 chars allowed`);
  }

  // 从存储获取API密钥
  const { apiKey } = await getApiSettings();

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {"role": "system", "content": "You are a professional translator. Your task is to translate text accurately while preserving the original meaning and nuance. After translation, provide a brief explanation of any cultural context, idioms, or specialized terms to help the user fully understand the content."},
          {"role": "user", "content": prompt}
        ],
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid API response format');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('API call failed:', error);
    throw new Error(`Failed to get response: ${error.message}`);
  }
}

// Create context menu and check for API key on installation
chrome.runtime.onInstalled.addListener(async () => {
  // 获取上下文菜单标题
  const menuTitle = await getText('contextMenuTitle') || '翻译并解释所选文字';

  // Create context menu
  chrome.contextMenus.create({
    id: 'replace_chrome_translation',
    title: menuTitle,
    contexts: ['selection']
  }, () => {
    // 检查是否创建成功
    if (chrome.runtime.lastError) {
      console.error('Error creating context menu:', chrome.runtime.lastError);
    }
  });

  // Check if API keys exist and initialize settings if needed
  const { apiProvider, kimiApiKey, deepseekApiKey, translationDirection, nativeLanguage } =
    await chrome.storage.local.get(['apiProvider', 'kimiApiKey', 'deepseekApiKey', 'translationDirection', 'nativeLanguage']);

  const provider = apiProvider || 'kimi';
  const hasValidKey = (provider === 'kimi' && kimiApiKey) || (provider === 'deepseek' && deepseekApiKey);

  // Initialize settings if they don't exist
  const settingsToUpdate = {};

  if (!translationDirection) {
    settingsToUpdate.translationDirection = 'auto';
  }

  if (!nativeLanguage) {
    settingsToUpdate.nativeLanguage = 'zh';
  }

  // Save default settings if needed
  if (Object.keys(settingsToUpdate).length > 0) {
    await chrome.storage.local.set(settingsToUpdate);
  }

  if (!hasValidKey) {
    // Show notification to set API key
    await chrome.sidePanel.setOptions({
      path: 'sidebar.html',
      enabled: true
    });

    // 获取设置提示消息
    const settingsMessage = await getText('apiKeyWarning');

    // Send message to sidebar to show settings
    await chrome.runtime.sendMessage({
      action: 'showSettings',
      response: settingsMessage || '请先在设置中填写API密钥以使用翻译功能'
    });
  }
});

async function handleTranslationRequest(info) {
  if (!info.selectionText) {
    console.error('No text selected');
    return;
  }

  try {
    // 获取当前选择的API提供商和翻译方向
    const { provider, direction } = await getApiSettings();

    // 根据翻译方向和母语生成不同的prompt
    let promptKey;
    if (direction === 'zh2en') {
      promptKey = 'promptZhToEn';
    } else if (direction === 'en2zh') {
      promptKey = 'promptEnToZh';
    } else if (direction === 'zh2de') {
      promptKey = 'promptZhToDe';
    } else if (direction === 'de2zh') {
      promptKey = 'promptDeToZh';
    } else if (direction === 'en2de') {
      promptKey = 'promptEnToDe';
    } else if (direction === 'de2en') {
      promptKey = 'promptDeToEn';
    } else { // auto
      promptKey = 'promptAuto';
    }

    // 获取对应语言的提示词
    const promptTemplate = await getText(promptKey);
    const prompt = (promptTemplate || "翻译下文并尽可能保持原意，最后对其进行一定解释：") + info.selectionText;

    console.log("prompt: ", prompt);

    // Step 1: Call API based on provider selection
    let response;
    if (provider === 'kimi') {
      response = await callKimiAPI(prompt);
    } else {
      response = await callDeepSeekAPI(prompt);
    }
    console.log(`API response received from ${provider}: ${response}`);

    // Step 2: Open sidebar
    await chrome.sidePanel.setOptions({
      path: 'sidebar.html',
      enabled: true
    });

    // Send message directly to sidebar
    await new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({
        action: 'updateSidebar',
        response: response
      }, (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(response);
        }
      });
    });

    console.log('Message sent successfully');
    return;

  } catch (error) {
    // 获取错误消息
    let errorMessage;
    if (error.message.includes('API') || error.message.includes('api')) {
      errorMessage = await getText('errorApiKey');
    } else {
      const genericError = await getText('errorGeneric');
      errorMessage = `${genericError || '错误：'}${error.message}`;
    }

    await chrome.runtime.sendMessage({
      action: 'updateSidebar',
      response: errorMessage || `错误：${error.message}`
    });
  }
}

// Register context menu handler
chrome.contextMenus.onClicked.addListener((info) => {
  handleTranslationRequest(info).catch(console.error);
});

// 处理消息请求
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.action === 'getText' && message.key) {
    getText(message.key).then(text => {
      sendResponse({ text });
    }).catch(error => {
      console.error('Error in getText:', error);
      sendResponse({ text: '' });
    });
    return true; // 异步响应
  }
});

// 监听存储变化，当母语设置变化时更新上下文菜单
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.nativeLanguage) {
    // 当母语设置变化时，更新上下文菜单标题
    updateContextMenuTitle().catch(error => {
      console.error('Error updating context menu title:', error);
    });
  }
});
