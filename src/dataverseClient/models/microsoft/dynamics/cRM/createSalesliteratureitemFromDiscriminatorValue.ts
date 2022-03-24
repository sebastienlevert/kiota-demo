import {Salesliteratureitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSalesliteratureitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Salesliteratureitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Salesliteratureitem();
}
