const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Crear nueva arquitectura DDD',
        entry: {
            folderPath: './tools/ddd/',
        },
        stringReplacers: ['__Esquema__', '__Model__', '__Tabla__'],
        output: {
            path: './src/',
            overwrite: true
        },
        onComplete: (results) => {
            console.log(`Achivos generados`, results.output.files);
            console.log('Arquitectura DDD generada exitosamente :)')
        },
    },
]);