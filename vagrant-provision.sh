#!/usr/bin/env bash

# "localize" sources.list
sed 's/http:\/\/archive/http:\/\/ua\.archive/' /etc/apt/sources.list | sudo tee /etc/apt/sources.list

apt-get update
apt-get install -y nodejs nodejs-legacy npm


