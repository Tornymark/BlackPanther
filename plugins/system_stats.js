/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        if (Config.ALIVEMSG == 'default') {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: '```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n\n*Developer:* TONY MARK\n\n*Git :* https://github.com/TONY-MARK/BLACKPANTHER.git\n\n```💕 Thank You For Using BLACKPANTHER 💞```' })
            
              } else {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: Config.ALIVEMSG + '\n\n*POWERED BY BLACKPANTHER, MADE BY TONY MARK*' })
              }
      }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        if (Config.ALIVEMSG == 'default') {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: '```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n\n*Developer:* TONY MARK\n\n*Git :* https://github.com/TONY-MARK/BlackPanther.git\n\n```💕 Thank You For Using BlackPanther 💞```' })
            
              } else {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: Config.ALIVEMSG + '\n\n*POWERED BY BLACKPANTHER, MADE BY TONY MARK*' })
              }
      }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
    
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
