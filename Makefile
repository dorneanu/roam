export:
	python build.py
dev:
	# hugo server -b http://127.0.0.1:1315/ --disableFastRender --port 1315 --noHTTPCache --cleanDestinationDir --logLevel debug --gc
	npx pagefind 
	hugo server -b http://127.0.0.1:1315/ --disableFastRender --port 1315 --noHTTPCache --logLevel debug --gc
