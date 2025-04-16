// 获取文本
async function getText(key) {
  try {
    // 尝试从 background 获取文本
    const response = await chrome.runtime.sendMessage({ action: 'getText', key });
    return response.text;
  } catch (error) {
    console.error('Error getting text:', error);
    // 如果出错，返回空字符串
    return '';
  }
}

// 更新界面文本
async function updateUIText() {
  const elements = {
    'h3': await getText('title'),
    '#status': await getText('statusReady'),
    '#response-text': await getText('waitingForResponse'),
    '.api-key-warning': await getText('apiKeyWarning'),
    'label[for="apiProvider"]': await getText('selectApiProvider'),
    'label[for="nativeLanguage"]': await getText('selectNativeLanguage'),
    'label[for="translationDirection"]': await getText('selectTranslationDirection'),
    'label[for="kimiApiKey"]': await getText('kimiApiKey'),
    'label[for="deepseekApiKey"]': await getText('deepseekApiKey'),
    '#kimiApiKey': { placeholder: await getText('inputKimiApiKey') },
    '#deepseekApiKey': { placeholder: await getText('inputDeepseekApiKey') },
    '#saveKey': await getText('save'),
    '#translationDirection option[value="auto"]': await getText('autoDetect'),
    '#translationDirection option[value="zh2en"]': await getText('zhToEn'),
    '#translationDirection option[value="en2zh"]': await getText('enToZh'),
    '#translationDirection option[value="zh2de"]': await getText('zhToDe'),
    '#translationDirection option[value="de2zh"]': await getText('deToZh'),
    '#translationDirection option[value="en2de"]': await getText('enToDe'),
    '#translationDirection option[value="de2en"]': await getText('deToEn')
  };

  for (const [selector, value] of Object.entries(elements)) {
    const element = document.querySelector(selector);
    if (element) {
      if (typeof value === 'object') {
        for (const [attr, attrValue] of Object.entries(value)) {
          element.setAttribute(attr, attrValue);
        }
      } else {
        element.textContent = value;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {


  const responseText = document.getElementById('response-text');
  const kimiApiKeyInput = document.getElementById('kimiApiKey');
  const deepseekApiKeyInput = document.getElementById('deepseekApiKey');
  const apiProviderSelect = document.getElementById('apiProvider');
  const nativeLanguageSelect = document.getElementById('nativeLanguage');
  const translationDirectionSelect = document.getElementById('translationDirection');
  const saveButton = document.getElementById('saveKey');
  const toggleSettingsBtn = document.getElementById('toggleSettings');
  const kimiSettings = document.getElementById('kimiSettings');
  const deepseekSettings = document.getElementById('deepseekSettings');
  console.log('Sidebar loaded:', responseText);

  // 更新界面文本
  await updateUIText();

  // 切换设置面板
  toggleSettingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('settings-visible');
    if (document.body.classList.contains('settings-visible')) {
      // 获取当前选择的API提供商，并聚焦到相应的输入框
      chrome.storage.local.get(['apiProvider'], result => {
        const provider = result.apiProvider || 'kimi';
        if (provider === 'kimi') {
          kimiApiKeyInput.focus();
        } else {
          deepseekApiKeyInput.focus();
        }
      });
    }
  });

  // 防止设置面板内的点击事件冒泡
  document.getElementById('settings').addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // 点击页面其他区域关闭设置
  document.addEventListener('click', (e) => {
    // 如果点击的是设置面板内的元素，不关闭设置面板
    if (e.target.closest('#settings') || e.target === toggleSettingsBtn) {
      return;
    }
    document.body.classList.remove('settings-visible');
  });

  // 切换API提供商显示
  apiProviderSelect.addEventListener('change', () => {
    if (apiProviderSelect.value === 'kimi') {
      kimiSettings.style.display = 'block';
      deepseekSettings.style.display = 'none';
    } else {
      kimiSettings.style.display = 'none';
      deepseekSettings.style.display = 'block';
    }
  });

  // 加载已保存的设置
  chrome.storage.local.get(['apiProvider', 'kimiApiKey', 'deepseekApiKey', 'translationDirection', 'nativeLanguage'], result => {
    // 设置API提供商
    if (result.apiProvider) {
      apiProviderSelect.value = result.apiProvider;
      // 触发change事件以显示正确的设置面板
      const event = new Event('change');
      apiProviderSelect.dispatchEvent(event);
    }

    // 设置母语和更新语言按钮状态
    const lang = result.nativeLanguage || 'zh';
    nativeLanguageSelect.value = lang;

    // 更新语言按钮状态
    document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-de').classList.toggle('active', lang === 'de');

    // 设置翻译方向
    if (result.translationDirection) {
      translationDirectionSelect.value = result.translationDirection;
    }

    // 设置API密钥
    kimiApiKeyInput.value = result.kimiApiKey || '';
    deepseekApiKeyInput.value = result.deepseekApiKey || '';
  });

  // 语言按钮点击事件
  const langZhBtn = document.getElementById('lang-zh');
  const langEnBtn = document.getElementById('lang-en');
  const langDeBtn = document.getElementById('lang-de');

  // 语言按钮点击处理
  function handleLanguageButtonClick(lang) {
    // 更新按钮样式
    langZhBtn.classList.toggle('active', lang === 'zh');
    langEnBtn.classList.toggle('active', lang === 'en');
    langDeBtn.classList.toggle('active', lang === 'de');

    // 更新隐藏输入框的值
    nativeLanguageSelect.value = lang;

    // 保存设置并更新界面
    chrome.storage.local.set({ nativeLanguage: lang }, async () => {
      await updateUIText();
    });
  }

  // 添加点击事件
  langZhBtn.addEventListener('click', () => handleLanguageButtonClick('zh'));
  langEnBtn.addEventListener('click', () => handleLanguageButtonClick('en'));
  langDeBtn.addEventListener('click', () => handleLanguageButtonClick('de'));

  // 保存按钮事件处理
  saveButton.addEventListener('click', async () => {
    const provider = apiProviderSelect.value;
    const language = nativeLanguageSelect.value;
    const direction = translationDirectionSelect.value;
    const kimiKey = kimiApiKeyInput.value.trim();
    const deepseekKey = deepseekApiKeyInput.value.trim();

    // 检查当前选择的提供商是否有API密钥
    if ((provider === 'kimi' && !kimiKey) || (provider === 'deepseek' && !deepseekKey)) {
      alert(await getText('errorNoApiKey'));
      return;
    }

    // 保存设置
    chrome.storage.local.set({
      apiProvider: provider,
      nativeLanguage: language,
      translationDirection: direction,
      kimiApiKey: kimiKey,
      deepseekApiKey: deepseekKey,
      // 为了向后兼容，保留原来的apiKey字段
      apiKey: provider === 'kimi' ? kimiKey : deepseekKey
    }, () => {
      // 关闭设置面板
      document.body.classList.remove('settings-visible');

      // 显示保存成功消息
      const msgEl = document.getElementById('save-message');
      getText('saveSuccess').then(text => {
        msgEl.textContent = text;
        msgEl.style.display = 'block';
        setTimeout(() => {
          msgEl.style.opacity = '1';
        }, 10);
      });

      setTimeout(() => {
        msgEl.style.opacity = '0';
        setTimeout(() => {
          msgEl.style.display = 'none';
        }, 300);
      }, 2000);
    });
  });

  // 检查API密钥是否已设置，如果没有则显示设置面板
  async function checkApiKey() {
    const { apiProvider, kimiApiKey, deepseekApiKey } = await chrome.storage.local.get(['apiProvider', 'kimiApiKey', 'deepseekApiKey']);
    const provider = apiProvider || 'kimi';
    const hasValidKey = (provider === 'kimi' && kimiApiKey) || (provider === 'deepseek' && deepseekApiKey);

    if (!hasValidKey) {
      document.body.classList.add('settings-visible');
      responseText.textContent = await getText('apiKeyWarning');
      if (provider === 'kimi') {
        kimiApiKeyInput.focus();
      } else {
        deepseekApiKeyInput.focus();
      }
    }
  }

  // 页面加载时检查API密钥
  checkApiKey();

  // 注册消息监听器
  chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
    if (message.action === 'updateSidebar') {
      responseText.textContent = message.response;
      sendResponse({ status: 'success' });
    } else if (message.action === 'showSettings') {
      // 使用国际化文本
      getText('apiKeyWarning').then(text => {
        responseText.textContent = text;
        document.body.classList.add('settings-visible');

        // 获取当前选择的API提供商，并聚焦到相应的输入框
        chrome.storage.local.get(['apiProvider'], result => {
          const provider = result.apiProvider || 'kimi';
          if (provider === 'kimi') {
            kimiApiKeyInput.focus();
          } else {
            deepseekApiKeyInput.focus();
          }
        });

        sendResponse({ status: 'success' });
      });
      return true; // 异步响应
    }
  });
});