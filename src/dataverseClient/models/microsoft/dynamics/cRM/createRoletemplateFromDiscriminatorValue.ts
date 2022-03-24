import {Roletemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoletemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Roletemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Roletemplate();
}
