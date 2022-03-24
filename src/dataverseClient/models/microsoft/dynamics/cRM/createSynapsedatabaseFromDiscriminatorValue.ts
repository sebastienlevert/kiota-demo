import {Synapsedatabase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynapsedatabaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Synapsedatabase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Synapsedatabase();
}
