@echo off
cd /d "%~dp0"
echo Starting live preview...
echo Keep this window open while editing src\data.js.
echo Press Ctrl+C to stop the preview server.
call npm run dev -- --host 127.0.0.1 --open
