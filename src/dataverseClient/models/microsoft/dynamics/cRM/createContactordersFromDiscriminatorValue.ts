import {Contactorders} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactordersFromDiscriminatorValue(parseNode: ParseNode | undefined) : Contactorders {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Contactorders();
}
