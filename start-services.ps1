# Script para iniciar PostgreSQL, Backend y Frontend
# Autor: Ignacio Avila Reyes
# Fecha: $(03/07/2025)

Write-Host "=== Iniciando servicios del Portfolio ===" -ForegroundColor Green

# 1. Iniciar PostgreSQL
Write-Host "`n1. Iniciando PostgreSQL..." -ForegroundColor Yellow
try {
    & pg_ctl start -D 'C:\Program Files\PostgreSQL\17\data'
    Write-Host "PostgreSQL iniciado correctamente" -ForegroundColor Green
    Start-Sleep -Seconds 3
} catch {
    Write-Host "Error al iniciar PostgreSQL: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Verifica que PostgreSQL este instalado y el path sea correcto" -ForegroundColor Yellow
}

# 2. Iniciar Backend (con entorno virtual)
Write-Host "`n2. Iniciando Backend..." -ForegroundColor Yellow
try {
    # Activar entorno virtual
    Write-Host "Activando entorno virtual..." -ForegroundColor Cyan
    & .\backend\venv\Scripts\Activate.ps1
    
    # Cambiar al directorio backend e iniciar Django
    Set-Location .\backend
    Write-Host "Iniciando servidor Django..." -ForegroundColor Cyan
    Start-Process -FilePath "python" -ArgumentList "manage.py", "runserver" -NoNewWindow
    
    Write-Host "Backend iniciado correctamente" -ForegroundColor Green
    Set-Location ..
    Start-Process "http://localhost:8000"
} catch {
    Write-Host "Error al iniciar Backend: $($_.Exception.Message)" -ForegroundColor Red
    Set-Location ..
}

# 3. Iniciar Frontend
Write-Host "`n3. Iniciando Frontend..." -ForegroundColor Yellow
try {
    Set-Location .\frontend
    Write-Host "Iniciando aplicacion React..." -ForegroundColor Cyan
    Start-Process -FilePath "npm.cmd" -ArgumentList "start" -NoNewWindow
    
    Write-Host "Frontend iniciado correctamente" -ForegroundColor Green
    Set-Location ..
} catch {
    Write-Host "Error al iniciar Frontend: $($_.Exception.Message)" -ForegroundColor Red
    Set-Location ..
}

Write-Host "`n=== Todos los servicios iniciados ===" -ForegroundColor Green
Write-Host "PostgreSQL: Corriendo" -ForegroundColor Cyan
Write-Host "Backend (Django): http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend (React): http://localhost:3000" -ForegroundColor Cyan

Write-Host "`nPresiona cualquier tecla para salir..." -ForegroundColor Yellow

$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host "`n=== Cerrando servicios del Portfolio ===" -ForegroundColor Green

# 1. Detener Frontend (React)
Write-Host "`n1. Cerrando Frontend..." -ForegroundColor Yellow
try {
    $frontendProc = Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" | Where-Object { $_.CommandLine -match 'react-scripts' }
    if ($frontendProc) {
        $frontendProc | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
        Write-Host "Frontend detenido correctamente" -ForegroundColor Green
    } else {
        Write-Host "No se encontró proceso de Frontend (node)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "Error al detener Frontend: $($_.Exception.Message)" -ForegroundColor Red
}

# 2. Detener Backend (Django)
Write-Host "`n2. Cerrando Backend..." -ForegroundColor Yellow
try {
    $backendProc = Get-Process -Name "python" -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*backend*" }
    if ($backendProc) {
        $backendProc | Stop-Process -Force
        Write-Host "Backend detenido correctamente" -ForegroundColor Green
    } else {
        Write-Host "No se encontró proceso de Backend (python)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "Error al detener Backend: $($_.Exception.Message)" -ForegroundColor Red
}

# 3. Detener PostgreSQL
Write-Host "`n3. Cerrando PostgreSQL..." -ForegroundColor Yellow
try {
    & pg_ctl stop -D 'C:\Program Files\PostgreSQL\17\data' -m fast
    Write-Host "PostgreSQL detenido correctamente" -ForegroundColor Green
} catch {
    Write-Host "Error al detener PostgreSQL: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n=== Todos los servicios han sido cerrados ===" -ForegroundColor Green