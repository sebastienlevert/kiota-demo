import {Syncerror} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncerrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : Syncerror {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Syncerror();
}
