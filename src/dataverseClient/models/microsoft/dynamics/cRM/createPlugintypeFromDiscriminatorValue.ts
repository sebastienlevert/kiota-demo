import {Plugintype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlugintypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Plugintype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Plugintype();
}
