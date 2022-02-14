## Running on Host Machine
```
git clone https://github.com/matdombrock/send-me-something.git
cd send-me-something/app
npm install
node app
```

## Running with Docker

[https://hub.docker.com/repository/docker/matdombrock/send-me-something](https://hub.docker.com/repository/docker/matdombrock/send-me-something)

Replace `<local-path>` with the location you want to store your files and config. This path must exist.  

```bash
docker run --mount type=bind,source=C:/<local-path>,target=/var/sendme -p 1337:8080 -it --name sendme matdombrock/send-me-something
```

For example:
```bash
docker run --mount type=bind,source=C:/C:/Users/dombr/sendmeVol,target=/var/sendme -p 1337:8080 -it --name sendme matdombrock/send-me-something
```