import {Contactleads} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactleadsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Contactleads {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Contactleads();
}
