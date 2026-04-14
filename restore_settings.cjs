const fs = require('fs');

function restoreDesktopSettings() {
    let content = fs.readFileSync('src/pages/desktop/Settings.tsx', 'utf8');
    if (!content.includes('i18n.changeLanguage')) {
        content = content.replace('const { t } = useTranslation();', 'const { t, i18n } = useTranslation();');
        content = content.replace(
            '<div className="p-4 bg-surface-container-highest rounded-lg border-l-2 border-primary">',
            `<div 
  onClick={() => i18n.changeLanguage(i18n.language.startsWith('en') ? 'zh' : 'en')}
  className="p-4 bg-surface-container-highest rounded-lg border-l-2 border-primary cursor-pointer hover:opacity-80 transition-opacity"
>`
        );
        content = content.replace(
            `>{t('settings.interface_language')}<`,
            `>{t('settings.interface_language')} / 界面语言<`
        ); // if localized already
        // What if it's `{t('settings.interface_language')}` ?
        // I'll just replace the whole span containing the active language text 
        content = content.replace(
            `<span className="text-sm font-bold">English (US)</span>`,
            `<span className="text-sm font-bold flex items-center gap-2">
  {i18n.language.startsWith('en') ? 'English (US)' : '简体中文'}
  <span className="material-symbols-outlined text-xs">sync_alt</span>
</span>`
        );
        fs.writeFileSync('src/pages/desktop/Settings.tsx', content);
    }
}

function restoreMobileSettings() {
    let content = fs.readFileSync('src/pages/mobile/Settings.tsx', 'utf8');
    if (!content.includes('i18n.changeLanguage')) {
        content = content.replace('const { t } = useTranslation();', 'const { t, i18n } = useTranslation();');
        content = content.replace(
            '<button className="w-full flex items-center justify-between p-4 bg-surface-container-high/50 rounded-xl hover:bg-surface-container-high transition-colors group">',
            `<button 
  onClick={() => i18n.changeLanguage(i18n.language.startsWith('en') ? 'zh' : 'en')}
  className="w-full flex items-center justify-between p-4 bg-surface-container-high/50 rounded-xl hover:bg-surface-container-high transition-colors group"
>`
        );
        content = content.replace(
            `<p className="font-label text-xs text-on-surface-variant">English (US)</p>`,
            `<p className="font-label text-xs text-on-surface-variant">{i18n.language.startsWith('en') ? 'English (US)' : '简体中文'}</p>`
        );
        // Change chevron_right to sync_alt on the language button
        // Mobile layout has multiple buttons, need to find the specific one for language
        content = content.replace(
            /language<\/span>\n<\/div>\n<div className="text-left">\n<p className="font-body font-bold text-on-surface">({t\('settings\.language'\)}|Language)<\/p>\n<p className="font-label text-xs text-on-surface-variant">\{i18n\.language\.startsWith\('en'\) \? 'English \(US\)' : '简体中文'\}<\/p>\n<\/div>\n<\/div>\n<span className="material-symbols-outlined text-outline-variant">chevron_right<\/span>/,
            `language</span>\n</div>\n<div className="text-left">\n<p className="font-body font-bold text-on-surface">$1 / 语言</p>\n<p className="font-label text-xs text-on-surface-variant">{i18n.language.startsWith('en') ? 'English (US)' : '简体中文'}</p>\n</div>\n</div>\n<span className="material-symbols-outlined text-outline-variant">sync_alt</span>`
        );

        fs.writeFileSync('src/pages/mobile/Settings.tsx', content);
    }
}

restoreDesktopSettings();
restoreMobileSettings();
