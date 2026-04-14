const fs = require('fs');
const path = require('path');

const STRINGS = [
  // Nav
  { en: "Console", key: "nav.console", zh: "控制台" },
  { en: "Store", key: "nav.store", zh: "商店" },
  { en: "Game Entry", key: "nav.game_entry", zh: "游戏入口" },
  { en: "Prize Inquiry", key: "nav.prize_inquiry", zh: "奖品查询" },
  { en: "User Settings", key: "nav.user_settings", zh: "用户设置" },
  { en: "Play", key: "nav.play", zh: "游玩" },
  { en: "Prizes", key: "nav.prizes", zh: "奖品" },
  { en: "Settings", key: "nav.settings", zh: "设置" },
  { en: "LAUNCH GAME", key: "nav.launch_game", zh: "启动游戏" },

  // Console specific
  { en: "Games", key: "console.games.title", zh: "游戏" },
  { en: "/ 游戏", key: "console.games.subtitle", zh: "/ Games" },
  { en: "Create Game", key: "console.games.create", zh: "创建游戏" },
  { en: "创建游戏", key: "console.games.create_sub", zh: "Create Game" },
  { en: "Join Game", key: "console.games.join", zh: "加入游戏" },
  { en: "加入游戏", key: "console.games.join_sub", zh: "Join Game" },

  { en: "Points", key: "console.points.title", zh: "积分" },
  { en: "/ 积分", key: "console.points.subtitle", zh: "/ Points" },
  { en: "Fate Points", key: "console.points.fate", zh: "命运积分" },
  { en: "命运积分", key: "console.points.fate_sub", zh: "Fate Points" },
  { en: "Supreme King", key: "console.points.supreme", zh: "至尊之王" },
  { en: "至尊之王", key: "console.points.supreme_sub", zh: "Supreme King" },
  { en: "Glorious King", key: "console.points.glorious", zh: "辉煌之王" },
  { en: "辉煌之王", key: "console.points.glorious_sub", zh: "Glorious King" },
  { en: "Zenith King", key: "console.points.zenith", zh: "巅峰之王" },
  { en: "巅峰之王", key: "console.points.zenith_sub", zh: "Zenith King" },
  { en: "Chosen Points", key: "console.points.chosen", zh: "天选积分" },
  { en: "天选积分", key: "console.points.chosen_sub", zh: "Chosen Points" },
  { en: "Chosen Status", key: "console.points.chosen_status", zh: "天选状态" },

  { en: "ATM", key: "console.atm.title", zh: "自动柜员机" },
  { en: "/ 自动柜员机", key: "console.atm.subtitle", zh: "/ ATM" },
  { en: "Apply for PR Boost", key: "console.atm.apply", zh: "申请公关提升" },
  { en: "Select Source Tier", key: "console.atm.select_tier", zh: "选择来源等级" },
  { en: "Supreme", key: "console.atm.supreme", zh: "至尊" },
  { en: "Glorious", key: "console.atm.glorious", zh: "辉煌" },
  { en: "Zenith", key: "console.atm.zenith", zh: "巅峰" },
  { en: "Conversion Ratio", key: "console.atm.conversion_ratio", zh: "转换率" },

  { en: "King Runestones", key: "console.runestones.title", zh: "王之符文" },
  { en: "/ 王之符文", key: "console.runestones.subtitle", zh: "/ King Runestones" },
  { en: "Total Runestones", key: "console.runestones.total", zh: "符文总数" },
  { en: "Date", key: "console.runestones.date", zh: "日期" },
  { en: "Time", key: "console.runestones.time", zh: "时间" },
  { en: "Name", key: "console.runestones.name", zh: "名称" },
  { en: "Quantity", key: "console.runestones.quantity", zh: "数量" },
  { en: "Balance", key: "console.runestones.balance", zh: "余额" },
];

const enDict = {};
const zhDict = {};

function setDeep(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

STRINGS.forEach(item => {
  setDeep(enDict, item.key, item.en);
  setDeep(zhDict, item.key, item.zh);
});

fs.writeFileSync('src/locales/en.json', JSON.stringify(enDict, null, 2));
fs.writeFileSync('src/locales/zh.json', JSON.stringify(zhDict, null, 2));

console.log('Language files written.');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('node_modules')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      STRINGS.forEach(item => {
        const escapedEn = item.en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        // 1. Placeholder replacement
        const regexPlaceholder = new RegExp(`placeholder="${escapedEn}"`, 'g');
        if (regexPlaceholder.test(content)) {
           content = content.replace(regexPlaceholder, `placeholder={t('${item.key}')}`);
           modified = true;
        }

        // 2. Text node replacement
        // Match > then optional whitespace then the text then optional whitespace then <
        const regexText = new RegExp(`>(\\s*)(${escapedEn})(\\s*)<`, 'g');
        if (regexText.test(content)) {
            content = content.replace(regexText, `>$1{t('${item.key}')}$3<`);
            modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDirectory('src');
console.log('Extraction complete.');
