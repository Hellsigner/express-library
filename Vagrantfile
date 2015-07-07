# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "trusty64"
  config.vm.provision :shell, path: "vagrant-provision.sh"
  config.vm.network "private_network", ip: "10.0.0.3"
  config.vm.network :forwarded_port, host: 8080, guest: 80
  config.vm.network :forwarded_port, host: 8081, guest: 8080
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"
  config.vm.synced_folder './', '/vagrant', owner: 'vagrant', group: 'www-data', mount_options: ['dmode=775','fmode=775']
end
