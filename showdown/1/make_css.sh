#!/bin/bash


lessc --compress luxCountdown.css > full.min.css
cat full.min.css | base64 > full.base64.css


