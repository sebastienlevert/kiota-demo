import {Pluginpackage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPluginpackageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pluginpackage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pluginpackage();
}
