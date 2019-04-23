FROM node:10

ENV HOME /Puppeteer-Play

WORKDIR ${HOME}
ADD . $HOME

RUN \
  apt-get update && apt-get install -y wget --no-install-recommends && \
  wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install -y google-chrome-unstable --no-install-recommends && \
  apt-get purge --auto-remove -y curl

RUN \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf /src/*.deb

RUN yarn install
