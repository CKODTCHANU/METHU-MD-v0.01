FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/CKODTCHANU/METHU-MD-v0.01 /root/METHU-MD
# RUN rm -rf /root/METHU-MD/.git
WORKDIR /root/METHU-MD
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
