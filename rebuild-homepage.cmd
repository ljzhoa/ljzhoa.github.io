@echo off
cd /d "%~dp0"
echo Rebuilding the standalone homepage...
call npm run build
if errorlevel 1 (
  echo.
  echo Build failed. Please review the error above.
  pause
  exit /b 1
)
echo.
echo Done. Open index.html or homepage.html.
start "" "%~dp0homepage.html"
pause
