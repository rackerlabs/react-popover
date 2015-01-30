BIN = ./node_modules/.bin

all: clean dist

clean:
	rm -rf dist

dist:
	$(BIN)/webpack --config config/webpack.config.js

examples:
	$(BIN)/webpack-dev-server --config config/webpack.examples.js

.PHONY: clean dist examples
