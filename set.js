const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Uy47iRhT9l9qCxg/8Aqml+IkxGGzAgImyKOwyGPzCZQxmxG6y7UWkSBNpFGUbzSJZziI/E35gfiEy3Z0eaSaTjhSvrsvlW+ecOue+BkkaYtRHFei8BlkelrBAdVlUGQIdIB2CAOWgCXxYQNABnhmK/Xm72M/d9p4UhwNLzwwrXu69E2z5hbNf8t7CJOLxbn0HLk2QHVZR6H2l4XlvkFlykkdlNJIiLVtpRN+UN9h0W1U47kHZMXY8IY6PunoHLnVHGOZhslazDYpRDqM+qiwY5i+DP9cJ1WLs/ZBBDFEMT/32gpUL3lBFh+ZOlStOqWqizLy5/kL4jTkMRXN4Jph4Nj2w561jN2Jqs3ADNBuSU6cxjnNMSwFO8AN8HK4T5Pd8lBRhUb1Y976aM7vSmbo6O1CzNt5BcjYYlEfJMObzJa165d4Ry0PbmIkvA+5wPWMfNVqeSkSqQU0ydns6L1vzDRUMqsWJgvHWOsX4yM7VT4Fb+ZNXdv9F97C365kTktY9I0SGmi+7MqnDYcWF+eycEEu9LwblJFuVtPMy+EcNFbkT0cvVuNRlWz6sbScPXXHLBW15E/vjsZukXVpuU84zfFgc8q+htHczNo53LetcKrLirBY2jcUQZall6YLV0NRkR7iwNaDxYVmdB9y2MVH8RBZHmlKyIxszmTE13P0smTuHzNwrZiCeZPvuxmiHqp4POtSlCXK0DnGRwyJMk3qtRTYB9MsJ8nJU3NQF9qAcB1piRjxKs4wd5+rMGGwJ3yZzV7TVXiAfUHeYVNvAvANNkOWphzBGvh7iIs0rE2EM1wiDzre3i6o55yhOC2SEPugAmmV4VmCYFkVR3+BXxw0sMMyyVwkqQBMEeRqbCHSK/ICa4PaDRvMKxykc1dJIiZZIqq1RrKTKtCQJtMLTNcP44dBpGCNcwDgDHYpnBE4geZq+NP8fHJzSZpRWW6BbKiVxGkPJJMNwHCUqSltoC9K/4OAu3zVBgk7Fg41v4lNNEIQ5LpzkkEUp9J88/vQRel56SIpJlXhyXaAcdD5ZRkURJmtcMzskMPc2YYnkmgfoBDDC6O/7Rjnyn7g8zjA59WsbLkeWrOr8GNTY60afadNhyc/liW7bqJocKdA8xwo0S9Y76w9NkMC6Gbi++/njh/vr2+//vP/t+vaPun7zw3Px7tfrm9+v795f3/x4/en99e0vHz/cf/xwX+v4yLAG5KMChhEGHSCbg7GQ7lTVIggOq92uvFuL8loEz4o8Be3BycKYl9b906ocDflusp3MFmNviNWWfJa1iNqsY58VRt3deRx5d19oAjogItjxSDGPTmLiLUePYmVuazLtDvzSIJYDf6XO1OXAWhqa4x+pUaztTvx0c9q0vLPnVed0OBWirT6VuF6jtVtzVul6klinsgl8VIYe+vQwjdjaNtldGlZqJF6kcrrgy9lkrTvUCVmN2REfjrNkX7rcJHf7c985I0O0BYY4C4vhqju3jj1IDo/2uc+ttpFwxNppoqwfRsBtBEWPoz98TGd4ew1CdJukj5f2r3f/ALy2KHlpftLjcTb/w3yTAhUdXRnP+fMWnTKGjGbkQllJwyM+bpa+6xoJCpRNZpLLBbjUWckiWARpHoMOgImfpzdn5emh9nwvCdKvHCaLTk99ZB5BXIjPOfpCNCnqYZeVp5kO8aYWYcbze6cORSVm2aSAxVMsgVg/A4EHl78A9f5c/cAIAAA=',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'D༙U༙L༙L༙A༙H༙-X༙M༙D༙ V༙²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'typing',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
                  ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
