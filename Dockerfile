FROM docker.io/library/node:20.13.0-alpine

ENV PYTHONUNBUFFERED=1
RUN set -ex && \
    apk add --no-cache gcc g++ musl-dev python3 openjdk17 ruby iptables ip6tables

RUN set -ex && \
    apk add --no-cache chromium lsof

RUN set -ex && \
    rm -f /usr/libexec/gcc/x86_64-alpine-linux-musl/6.4.0/cc1obj && \
    rm -f /usr/libexec/gcc/x86_64-alpine-linux-musl/6.4.0/lto1 && \
    rm -f /usr/libexec/gcc/x86_64-alpine-linux-musl/6.4.0/lto-wrapper && \
    rm -f /usr/bin/x86_64-alpine-linux-musl-gcj

RUN ln -sf python3 /usr/bin/python

ADD . /usr/bin/
ADD start.sh /usr/bin/

RUN npm --prefix /usr/bin/ install
EXPOSE 8080

# Install necessary packages
RUN apk add --no-cache \
    build-base \
    go \

# Set environment variables for Go
ENV GOPATH /go
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH

# Create a directory for the Go application
WORKDIR $GOPATH/src/app

# Copy the local package files to the container's workspace
COPY . .

# Build and install the Go application
RUN go build -o app .

# Run the compiled executable by default
CMD ["./app"]

# add a dummy user that will run the server, hence sandboxing the rest of the container
RUN addgroup -S -g 2000 runner && adduser -S -D -u 2000 -s /sbin/nologin -h /tmp -G runner runner
#   USER runner
CMD sh /usr/bin/start.sh
