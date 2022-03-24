import {Pluginassembly} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPluginassemblyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pluginassembly {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pluginassembly();
}
