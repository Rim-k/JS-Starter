@echo off
node  "%~dp0\node_modules\jasmine-node\bin\jasmine-node" %* --watch src --color spec\
if [%1]==[] pause