const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923357955918";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_20_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY0LFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRE1CV255SDdHNkFUNFllUXF0TzBrN3BSUVRiellCeWw3QkNOVnBuTUJRRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODQ1OTI2MzM0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEZFMjcxRUZCNzdENTlGNzUyOTFDMEUxNTFBOUM0MkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MDMzNjQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpYbzRzdy1XUU55Q05pUEZCWnBSWlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjE2ZGZjMGMtYzg2YS00NmNlLWIyZGYtZDJlNjYxNjVlYzdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDY0LFxuICAgICAgMjUzLFxuICAgICAgNDIsXG4gICAgICA1OCxcbiAgICAgIDI0MyxcbiAgICAgIDE1OSxcbiAgICAgIDIyMixcbiAgICAgIDE4OCxcbiAgICAgIDIyNixcbiAgICAgIDExOCxcbiAgICAgIDIzMSxcbiAgICAgIDI1MixcbiAgICAgIDI2LFxuICAgICAgODgsXG4gICAgICAxNTUsXG4gICAgICAxNDAsXG4gICAgICAxMDgsXG4gICAgICAxMjQsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA3OCxcbiAgICAgIDcsXG4gICAgICAzMSxcbiAgICAgIDExNixcbiAgICAgIDUyLFxuICAgICAgODAsXG4gICAgICA1OSxcbiAgICAgIDEzNixcbiAgICAgIDI1MCxcbiAgICAgIDEwNixcbiAgICAgIDE1OCxcbiAgICAgIDExNCxcbiAgICAgIDUxLFxuICAgICAgMTM5LFxuICAgICAgMTc2LFxuICAgICAgNixcbiAgICAgIDIxLFxuICAgICAgMTQyLFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUExN0pHVFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ4NDU5MjYzMzQ2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1NjE0NzM1NTI4MTM0OjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QkvCdkIfwnZCA8J2QmfCdkIDwnZCD8J2QiCDwnZCA8J2QkvCdkIzwnZCAXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZHeU1ZRkVPZm0vcmNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSaFpMZjJ1bG4ydTdjWnVIcndCb1g4M3FVNDhjTnJtQXF1a1ZSeDgxdVcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9kditiYzhFYndDaFJ3U1Y0VitVU3FYbVlQcGF6cTBEV3dUcWo5TXJMUXRiQVNkMVE0aitpV2FjdHlyNWEwWmR4dG94Slo3SmVjNXV4bUg0OGVMUEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndYeExvaWhuaE5MU3BoRWtQK0hvSlFvMU5Bb2xSU1ZBc05ySXJrL3Y1NFFPTTdJL0xtMGtpK3dqTnlnMi8xRDhPckhwdXpIVXNsYmxtQnMza0Q1U0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ4NDU5MjYzMzQ2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODAzMzY0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtHRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0dELmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3ljSU9ZdDdmZmUxRndqZ09oVGFoaTZ2QUMyU0llTktEeStsdzZ6eEZtUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDkwMTU4MzgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgwMzM2NDUyNjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
