import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import { LanIPAddressIndicator } from './LanIPAddressIndicator.js';


export default class LanIpAddressExtension extends Extension {
    _indicator;

    enable() {
        this._indicator = new LanIPAddressIndicator();
        Main.panel.addToStatusArea('lan-ip-address-indicator', this._indicator);
    }

    disable() {
        this._indicator.stop();
        this._indicator.destroy();
        this._indicator = undefined;
    }
}
