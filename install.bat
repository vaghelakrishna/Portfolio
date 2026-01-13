@echo off
echo Installing Krishna Vaghela Portfolio...
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found!
echo.

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies.
    pause
    exit /b 1
)

echo.
echo Installation complete!
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo To build for production, run:
echo npm run build
echo.
pause