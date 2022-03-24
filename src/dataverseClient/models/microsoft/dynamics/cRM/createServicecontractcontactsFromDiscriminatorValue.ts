import {Servicecontractcontacts} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicecontractcontactsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Servicecontractcontacts {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Servicecontractcontacts();
}
