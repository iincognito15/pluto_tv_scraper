#!/usr/bin/env node

(async function() {
    const config = require('./lib/config');
    const plutotv = require('./lib/plutotv');

    console.log("Cargando configuracion...");
    config.loadConfig();

    console.log("Iniciando la descarga de canales de Pluto TV...");
    try {
        await plutotv.process(config);
        console.log("¡Proceso completado con exito!");
    } catch (error) {
        console.error("Error durante el procesamiento:", error);
        process.exit(1);
    }
})();
