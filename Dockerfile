FROM go

RUN apt-get update -y
WORKDIR /app
COPY . /app
EXPOSE 5000

CMD ["go", "run", "main.go"]
