import {Plugintracelog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlugintracelogFromDiscriminatorValue(parseNode: ParseNode | undefined) : Plugintracelog {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Plugintracelog();
}
