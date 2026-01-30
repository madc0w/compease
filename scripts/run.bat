@echo off
cd /d "%~dp0.."

set MONGODB_URI=
set NODE_ENV=development

:: Disable Node debugger that VS Code attaches
set NODE_OPTIONS=

:: Ensure we use the same Node.js as VS Code (from Program Files)
set PATH=C:\Program Files\nodejs;%PATH%

:: Clear Vite cache only (not .nuxt which has generated types)
if exist "node_modules\.vite" rmdir /s /q "node_modules\.vite"

npm run dev
pause
