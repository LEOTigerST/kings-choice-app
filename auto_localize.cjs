const fs = require('fs');
const path = require('path');

const mappings = {
  "Acquire Assets &amp; Power-ups": { k: "store.acquire_assets", z: "获取资产和能力" },
  "Avatar Gallery": { k: "settings.avatar_gallery", z: "头像库" },
  "BUY NOW": { k: "store.buy_now", z: "立即购买" },
  "Best Value": { k: "store.best_value", z: "最佳价值" },
  "Booster Bundle": { k: "store.booster_bundle", z: "助推包" },
  "CLAIM ASSETS": { k: "console.claim_assets", z: "领取资产" },
  "CONFIG_ACCESS": { k: "settings.config_access", z: "配置访问" },
  "Combat Hours": { k: "settings.combat_hours", z: "战斗时长" },
  "Crypto Payments": { k: "store.crypto_payments", z: "加密支付" },
  "Cryptocurrency Transfer": { k: "store.crypto_transfer", z: "加密货币转账" },
  "Current Balance": { k: "store.current_balance", z: "当前余额" },
  "Current Points for PR Boost": { k: "console.current_points_pr", z: "当前公关提升积分" },
  "Customize in-game pings, community updates, and system news.": { k: "settings.customize_pings", z: "自定义游戏内ping、社区更新和系统新闻。" },
  "DEACTIVATE OPERATIVE": { k: "settings.deactivate", z: "停用操作员" },
  "DIAMOND IV": { k: "settings.diamond_iv", z: "钻石 IV" },
  "DRAW HISTORY": { k: "prize.draw_history", z: "抽奖历史" },
  "Daily Login": { k: "prize.daily_login", z: "每日登录" },
  "Destination Wallet Address": { k: "store.destination_wallet", z: "目标钱包地址" },
  "ENTER LOBBY": { k: "console.enter_lobby", z: "进入大厅" },
  "Elite Rank": { k: "settings.elite_rank", z: "精英段位" },
  "Encrypted": { k: "settings.encrypted", z: "已加密" },
  "Enter active matches and compete for the highest tier of rewards in the Aetheris circuit.": { k: "console.enter_active", z: "进入活跃比赛并竞争Aetheris巡回赛的最高奖励。" },
  "Environment": { k: "settings.environment", z: "环境" },
  "Fiat Purchases": { k: "store.fiat_purchases", z: "法定货币购买" },
  "Filter Name": { k: "prize.filter_name", z: "筛选名称" },
  "Filter by Date...": { k: "prize.filter_date", z: "按日期筛选..." },
  "GLORIOUS KING": { k: "status.glorious_king", z: "辉煌之王" },
  "GRAND PRIZE": { k: "prize.grand_prize", z: "大奖" },
  "Ghost Mode Off": { k: "settings.ghost_mode", z: "隐身模式关闭" },
  "Glorious Tier": { k: "status.glorious_tier", z: "辉煌层级" },
  "HOST ARENA": { k: "console.host_arena", z: "举办竞技场" },
  "Host your own room, set custom stakes, and invite your squad to a private arena.": { k: "console.host_desc", z: "举办您自己的房间，设置自定义赌注，并邀请您的小队进入私人竞技场。" },
  "Imperial Exchange": { k: "store.imperial_exchange", z: "帝国交易所" },
  "Instant Delivery": { k: "store.instant_delivery", z: "即时交付" },
  "Instantly apply your calculated equilibrium points to gain exclusive circuit priority.": { k: "console.instantly_apply", z: "立即应用您计算的均衡点以获得专属巡回赛优先级。" },
  "KINETIC STORE": { k: "store.kinetic_store", z: "KINETIC 商店" },
  "LIVE NOW": { k: "prize.live_now", z: "现在直播" },
  "Last Login": { k: "settings.last_login", z: "最后登录" },
  "Limited time offer": { k: "store.limited_time", z: "限时优惠" },
  "List of Winners": { k: "prize.list_winners", z: "获奖者名单" },
  "Load More": { k: "prize.load_more", z: "加载更多" },
  "Load your Kinetic wallet instantly using Ethereum (ETH) or Bitcoin (BTC). Funds will be automatically converted to": { k: "store.load_wallet", z: "使用以太坊(ETH)或比特币(BTC)立即充值您的Kinetic钱包。资金将自动转换为" },
  "Lobby Ante Fee": { k: "console.lobby_ante", z: "大厅盲注" },
  "Localization": { k: "settings.localization", z: "本地化" },
  "Luck Draw Tickets Used": { k: "prize.luck_draw", z: "已使用抽奖券" },
  "MANAGE_PULSE": { k: "settings.manage_pulse", z: "管理脉冲" },
  "Manage your digital identity and operative preferences.": { k: "settings.manage_identity", z: "管理您的数字身份和操作偏好。" },
  "Market Trade": { k: "store.market_trade", z: "市场交易" },
  "My Estimated Share": { k: "prize.my_estimated", z: "我的预估份额" },
  "Network Active": { k: "store.network_active", z: "网络活跃" },
  "Neural Alerts": { k: "settings.neural_alerts", z: "神经警报" },
  "Nickname": { k: "settings.nickname", z: "昵称" },
  "No processing fees on transfers above $50": { k: "store.no_fees", z: "$50以上的转账无手续费" },
  "Notifications": { k: "settings.notifications", z: "通知" },
  "OPERATIVE IDENTITY": { k: "settings.operative_id", z: "操作员身份" },
  "Operative Nickname": { k: "settings.operative_nickname", z: "操作员昵称" },
  "PR Boost": { k: "console.pr_boost", z: "公关提升" },
  "PR Boost ATM": { k: "console.pr_boost_atm", z: "公关提升 ATM" },
  "PR Boost Application": { k: "console.pr_boost_app", z: "公关提升申请" },
  "PR Boost Applied": { k: "console.pr_boost_applied", z: "公关提升已应用" },
  "PRIZE HIERARCHY": { k: "prize.prize_hierarchy", z: "奖项层级" },
  "PRO RANK": { k: "console.pro_rank", z: "职业排名" },
  "Pilot Identity": { k: "settings.pilot_identity", z: "飞行员身份" },
  "Popular": { k: "store.popular", z: "热门" },
  "Privacy": { k: "settings.privacy", z: "隐私" },
  "Prize Tier": { k: "prize.prize_tier", z: "奖项层级" },
  "Purchase": { k: "store.purchase", z: "购买" },
  "Push Only": { k: "settings.push_only", z: "仅推送" },
  "Quest Success": { k: "prize.quest_success", z: "任务成功" },
  "RS REWARDS": { k: "prize.rs_rewards", z: "RS 奖励" },
  "RUNESTONES": { k: "console.runestones_header", z: "符文" },
  "Recent Sessions": { k: "console.recent_sessions", z: "最近会话" },
  "Reward Equilibrium": { k: "console.reward_eq", z: "奖励均衡" },
  "Runestones": { k: "console.runestones", z: "符文" },
  "SCAN QR": { k: "store.scan_qr", z: "扫描二维码" },
  "SETTLED": { k: "store.settled", z: "已结算" },
  "SUPREME KING": { k: "status.supreme_king", z: "至尊之王" },
  "SWAP": { k: "console.swap", z: "交换" },
  "SYSTEM CONFIGURATION": { k: "settings.sys_config", z: "系统配置" },
  "Scan to Deposit": { k: "store.scan_deposit", z: "扫码存款" },
  "Search by Name...": { k: "prize.search_name", z: "按名称搜索..." },
  "Secure Checkout": { k: "store.secure_checkout", z: "安全结算" },
  "Secure cold-storage integration": { k: "store.secure_cold", z: "安全的冷存储集成" },
  "Security": { k: "settings.security", z: "安全" },
  "Security &amp; Access": { k: "settings.security_access", z: "安全和访问" },
  "Server Path": { k: "settings.server_path", z: "服务器路径" },
  "Starter Pack": { k: "store.starter_pack", z: "新手包" },
  "Starter Core Pack": { k: "store.starter_core_pack", z: "新手核心包" },
  "Status": { k: "settings.status", z: "状态" },
  "Supreme Tier": { k: "status.supreme_tier", z: "至尊层级" },
  "Swap": { k: "console.swap_btn", z: "交换" },
  "Swap Amount": { k: "console.swap_amt", z: "交换数量" },
  "System Preferences": { k: "settings.sys_prefs", z: "系统偏好" },
  "Terminate Session": { k: "settings.terminate", z: "终止会话" },
  "Ticket Swap": { k: "prize.ticket_swap", z: "抽奖券交换" },
  "Tickets Swapped": { k: "prize.tickets_swapped", z: "已交换抽奖券" },
  "Tier": { k: "prize.tier", z: "层级" },
  "Tier 2 Multiplier Active": { k: "console.tier_multi", z: "层级 2 乘数激活" },
  "Timezone": { k: "settings.timezone", z: "时区" },
  "USD Purchases": { k: "store.usd_purchases", z: "美元购买" },
  "Unlock unlimited monthly system access": { k: "store.unlock_unlimited", z: "解锁无限月度系统访问权限" },
  "Update credentials, manage 2FA, and review authorized devices.": { k: "settings.update_creds", z: "更新凭据、管理2FA和查看授权设备。" },
  "Web3 Exclusive Bonus": { k: "store.web3_bonus", z: "Web3 独家奖励" },
  "Weekly King Dividend": { k: "prize.weekly_dividend", z: "每周王者分红" },
  "Win Ratio": { k: "settings.win_ratio", z: "胜率" },
  "Winners": { k: "prize.winners", z: "获奖者" },
  "ZENITH KING": { k: "status.zenith_king", z: "巅峰之王" },
  "Zenith Core": { k: "status.zenith_core", z: "巅峰核心" },
  "Zenith Grade": { k: "status.zenith_grade", z: "巅峰等级" },
  "Zenith Plate Gear": { k: "status.zenith_plate", z: "巅峰板甲装备" },
  "Zenith Tier": { k: "status.zenith_tier", z: "巅峰层级" },
  "at the current market rate upon 3 network confirmations.": { k: "store.at_current", z: "在 3 个网络确认后以当前市场汇率进行。" },
  "automatically applied to all cryptocurrency deposits.": { k: "store.auto_applied", z: "自动应用于所有加密货币存款。" }
};

const enDict = JSON.parse(fs.readFileSync('src/locales/en.json', 'utf8'));
const zhDict = JSON.parse(fs.readFileSync('src/locales/zh.json', 'utf8'));

function setDeep(obj, pathStr, value) {
  const parts = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

// Ensure the keys are in dict
for (const [en, props] of Object.entries(mappings)) {
    // Un-escape HTML entities for json values
    const unescapedEn = en.replace(/&amp;/g, '&');
    setDeep(enDict, props.k, unescapedEn);
    setDeep(zhDict, props.k, props.z);
}

fs.writeFileSync('src/locales/en.json', JSON.stringify(enDict, null, 2));
fs.writeFileSync('src/locales/zh.json', JSON.stringify(zhDict, null, 2));

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('node_modules')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      
      // Sort keys by length descending to replace longer phrases first
      const keys = Object.keys(mappings).sort((a,b) => b.length - a.length);

      keys.forEach(enKey => {
        const props = mappings[enKey];
        const escapedEn = enKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape regex characters

        // Placeholder matching
        const regexPlaceholder = new RegExp(`placeholder="${escapedEn}"`, 'g');
        if (regexPlaceholder.test(content)) {
           content = content.replace(regexPlaceholder, `placeholder={t('${props.k}')}`);
           modified = true;
        }

        // Text matching using strict > < boundaries
        const regexText = new RegExp(`>(\\s*)(${escapedEn})(\\s*)<`, 'g');
        if (regexText.test(content)) {
            content = content.replace(regexText, `>$1{t('${props.k}')}$3<`);
            modified = true;
        }
      });

      // Special handling for standalone items that aren't wrapped in > < immediately, 
      // but might be in strings (if they exist). No string lit replacements to be safe.
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDirectory('src');
console.log('auto_localize done');
