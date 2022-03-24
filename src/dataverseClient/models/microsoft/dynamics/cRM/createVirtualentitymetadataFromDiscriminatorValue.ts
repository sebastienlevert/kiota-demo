import {Virtualentitymetadata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVirtualentitymetadataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Virtualentitymetadata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Virtualentitymetadata();
}
