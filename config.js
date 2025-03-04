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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233257767765";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_47_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkE4bzhvejl2azJjRUVYSElnZ09QSkpSQTVaWEhPcm04QjRzNnRvYVZnK3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlidmFOaXdDUno2MjBiWmJ1Q0FNN0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDBhMDViNDYtMDIxYS00YTEwLThlYzgtMWUzNGRhOWVmZDUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgOTMsXG4gICAgICAyMjgsXG4gICAgICAyMzYsXG4gICAgICA5OCxcbiAgICAgIDIwMyxcbiAgICAgIDEwOCxcbiAgICAgIDkyLFxuICAgICAgODcsXG4gICAgICA2LFxuICAgICAgNzAsXG4gICAgICAyNDAsXG4gICAgICAxODIsXG4gICAgICAxODUsXG4gICAgICAxNzcsXG4gICAgICAxMzQsXG4gICAgICAxNTAsXG4gICAgICA5NSxcbiAgICAgIDUxLFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxNjQsXG4gICAgICA1OSxcbiAgICAgIDg4LFxuICAgICAgMTQ4LFxuICAgICAgMzksXG4gICAgICAxMyxcbiAgICAgIDE4OSxcbiAgICAgIDE2NyxcbiAgICAgIDM2LFxuICAgICAgMjQzLFxuICAgICAgMTgsXG4gICAgICAyMTYsXG4gICAgICAxNTYsXG4gICAgICAxMzEsXG4gICAgICAyMzIsXG4gICAgICAxMzQsXG4gICAgICA3NixcbiAgICAgIDgyLFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkYxOVlTTExTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNTc3Njc3NjU6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIZWN0b3IgTWFudWVsXCIsXG4gICAgXCJsaWRcIjogXCIyMTY4NTMyNjc4OTAzNjQ6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzdmM21FUTNjTHV1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5MGphaHpnM0dhY05HcklXYU1DTWNMYTJ4L211ZFBFS05udTRIbVlVUEJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRaZDYyekdLRUxSN3ZUL2FTcHVRMmpCaC81R3dUVGhZLzRmY1BJeXdOT25RMHFLZHg3SFdqZ3k0UTRSMmpLcEE4UWZjc09tb1JoLzBjUzV5QTRnK0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInY1NDVCSjdWZEt3L3VpYVhqYXJ0akZWdmdxaWRBMEI0NElZTEJoOEIrOGxwVjl4OHhObkRha0N2OU1tTC9XMDZvOFJPZ25OeTlvQ2N6dml0V3ZqR0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI1Nzc2Nzc2NTo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5ODY0MDQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlA2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGUDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZNkVpVTE1b24wbURJUWYzbjl4SkFtUFJaNUx5bzV1SmxsWTJ1ay8wbVhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDk3NjA0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTg2NDA0MDY3NlwifSIKfQ=="  // PUT your SESSION_ID 


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
