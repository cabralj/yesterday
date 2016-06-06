import * as fs from 'fs';
import * as path from 'path';

function fileList(dir, excludeDirs?) {
    return fs.readdirSync(dir).reduce(function (list, file) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            if (excludeDirs && excludeDirs.length) {
                excludeDirs = excludeDirs.map(d => path.normalize(d));
                const idx = name.indexOf(path.sep);
                const directory = name.slice(0, idx === -1 ? name.length : idx);
                if (excludeDirs.indexOf(directory) !== -1)
                    return list;
            }
            return list.concat(fileList(name, excludeDirs));
        }
        return list.concat([name]);
    }, []);
}


console.log(fileList('../', ['node_modules', 'typings', 'bower_components']));
