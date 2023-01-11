const path = require('path');
const fs = require('fs');

let category = '';

function loadJSONSettings(definition, json, parentKey = null) {
    for (const key of Object.keys(json)) {
        const setting = json[key];

        if (setting.type === 'mainCategory') {
            // pass
        } else if (setting.type === 'category') {
            category = key;
        } else {
            definition.settings[key] = {
                label: setting.label,
                category: category,
                childKey: [],
            };

            if (parentKey) {
                definition.settings[parentKey].childKey.push(key);
            }
        }

        if (setting.children && setting.visible !== 'false') {
            loadJSONSettings(
                definition,
                setting.children,
                ['mainCategory', 'category'].includes(setting.type) ? null : key,
            );
        }
    }
}

function loadJSON(definition, json) {
    if (json.definitionId) {
        definition.definitionId = json.definitionId;
    }

    if (json.metadata) {
        definition.metadata = json.metadata;
    }

    if (json.settings) {
        definition.settings = {};
        loadJSONSettings(definition, json.settings);
    }
}

function main() {
    const printSettingsDir = path.resolve(__dirname, '../../packages/luban-print-settings');

    const configPath = path.join(printSettingsDir, 'resources', 'printing', 'snapmaker_modify_0.def.json');

    const data = fs.readFileSync(configPath, 'utf8');
    const json = JSON.parse(data);

    const definition = {};
    loadJSON(definition, json);

    console.log('definition =', definition);
}


main();
