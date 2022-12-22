export:
	python build.py
dev:
	hugo server -b http://127.0.0.1:1315/ --disableFastRender -v --port 1315 --noHTTPCache --cleanDestinationDir --debug --gc
