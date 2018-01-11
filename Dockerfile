FROM centos:centos6
MAINTAINER The CentOS Project <cloud-ops@centos.org>

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install wget; yum clean all

# Install NodeJS 6.x repository
RUN curl -sL https://rpm.nodesource.com/setup_6.x | bash -

RUN yum -y install nodejs; yum clean all

COPY ./src /src
COPY ./package.json /package.json
RUN npm install

EXPOSE 80

CMD ["npm", "start"]