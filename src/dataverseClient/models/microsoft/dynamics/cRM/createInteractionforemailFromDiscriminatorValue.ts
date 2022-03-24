import {Interactionforemail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInteractionforemailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Interactionforemail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Interactionforemail();
}
