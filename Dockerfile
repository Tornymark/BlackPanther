FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Tornymark/BlackPanther /root/WhatsAsenaDuplicated
WORKDIR /root/BlackPanther/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audi

CMD ["node", "bot.js"]
